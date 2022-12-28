from datetime import datetime

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