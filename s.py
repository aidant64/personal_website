#! /usr/bin/python3

import cgi
import cgitb; cgitb.enable() # Optional; for debugging only

incrementer = 0;
with open('./responses/incrementer', 'r') as file:
    incrementer = int(file.read())

incrementer = incrementer + 1
with open('./responses/incrementer', 'w') as file:
    file.write(str(incrementer))

print("Content-Type: text/html")
print("")


filename = "./responses/response_" + str(incrementer);
with open(filename, 'w') as file:
    arguments = cgi.FieldStorage()
    for i in arguments.keys():
        file.write(str(arguments[i].value))
