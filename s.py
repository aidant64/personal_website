#! /usr/bin/python3

import cgi
import cgitb; cgitb.enable()

incrementer = 0
with open('./responses/incrementer', 'r') as file:
    incrementer = int(file.read())

incrementer = incrementer + 1
with open('./responses/incrementer', 'w') as file:
    file.write(str(incrementer))

filename = "./responses/" + str(incrementer) + ".txt"
with open(filename, 'w') as file:
    arguments = cgi.FieldStorage()
    for i in arguments.keys():
        file.write(str(arguments[i].value))


print("Content-Type: text/html")
print("")
print("Message delivered successfully")