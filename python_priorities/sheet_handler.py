from __future__ import print_function
# https://www.youtube.com/watch?v=4ssigWmExak
import os.path
from googleapiclient.discovery import build
from google.oauth2 import service_account
from datetime import datetime

 
SERVICE_ACCOUNT_FILE = "keys.json"
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
creds  = service_account.Credentials.from_service_account_file(
   SERVICE_ACCOUNT_FILE, scopes=SCOPES
)

SPREADSHEET_ID = "1QE22vPOGjLo966Oovlfx0AysoYtgDJVNOdoJelPnZBY"

service = build("sheets", "v4", credentials=creds)

sheet = service.spreadsheets()
# result = sheet.values().get(spreadsheetId=SPREADSHEET_ID, range="A1:F31" ).execute()

data = []

num_things = int(input("How many things do you have to do today? : ")) 

now = str(datetime.now())

date = now.split("-")
time = now.split(":")


date_2 = date[len(date) -1].split()
date_2.pop(len(date_2 ) - 1)
date.pop(len(date) - 1)
date.append(date_2[0])
print(date, " actual date")


time_2 = time[0].split()
time_2.remove(time_2[0])
time.remove(time[0])
time.insert(0, time_2[0])
print(time, " actual time")
hour = int(time[0])
minute = int(time[1])

def check_mins(minute = minute):
   if (len(str(minute)) == 1):
      return str(minute) + "0"
   else: 
      return str(minute)

def find_time(mins, minute = minute, hour = hour):
   if(minute + mins> 59 ):
      hour += 1
      minute -= 60
      minute = check_mins()
   if(hour > 12):
      hour -= 12
      minute = check_mins()
      return f"{hour}:{minute}pm"
   else:
      minute = check_mins()
      return f"{hour}:{minute}am"       


for i in range(num_things):
   name = input("name of the task : ")
   mins = int(float(input("time needed for the task (minutes) : ")))
   time = find_time(mins)
   priority = int(input("level of priority of the task (of the total number of data you have) : "))
   if(priority > num_things):
      raise Exception("Priority number cannot be more than the number of data you have")
   
   data.append([name, time, priority, "Status: Not Completed"])

req_data = []

for thing in data:
   print(thing, " this is the thing")
   print(num_things)
   if thing[2] == num_things:
      thing.remove(thing[2])
      req_data.append(thing)
      num_things = num_things - 1

# data = []

# for i in range(len(data)):
#    for j in range(num_things):
#       if data[i[3]] == j:
#          data.append(data[i]) 

print(req_data)
request = service.spreadsheets().values().update(spreadsheetId=SPREADSHEET_ID, 
                                                range="A1", valueInputOption="USER_ENTERED", body={"values":req_data}).execute()

# print(request)

