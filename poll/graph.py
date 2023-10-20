#! /usr/bin/python3

import cgi
import cgitb; cgitb.enable() 

data = []
with open('/var/www/html/personal/poll/data', 'r') as file:
    data = file.read().split(',')

for i in range(0, 4):
    data[i] = int(data[i])

index = -1
arguments = cgi.FieldStorage()
for i in arguments.keys():
    index = arguments[i].value
index = int(index) - 1

for i in range(0, 4):
    if i == index:
        data[i] = data[i] + 1

with open('/var/www/html/personal/poll/data', 'w') as file:
    for i in range(0, 4):
        file.write(str(data[i]))
        if(i != 3):
            file.write(",")

print("Content-Type: text/html")
print("")
for i in range(0, 4):
    if i == 3:
        print(data[i], end="")
    else:
        print(data[i], end=",")

