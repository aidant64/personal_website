#! /usr/bin/python3

import requests
import sys
import json


code_map = {
    'sb': 'NTBC1',
    'ch': '46053',
    'co': '46054'
}

response = requests.get("https://www.ndbc.noaa.gov/data/realtime2/" + code_map[sys.argv[1]] + ".txt")

lines = response.text.split('\n')

time = -1
wind = -1
gust = -1
windDir = -1 
waveHeigh = -1 
avePeriod = -1
waveDir = -1

firstLine = [elem for elem in lines[2].split(' ') if elem != '']

day = int(firstLine[2])
hour = int(firstLine[3]) - 8
if(hour < 0):
    hour = hour + 24
    day = day - 1


time = firstLine[1] + "/" + str(day) + "/" + firstLine[0] + " " + str(hour) + ":" + firstLine[4] + " PST"

for i in range(2, 10):
    line = [elem for elem in lines[i].split(' ') if elem != '']

    if(line[5] != 'MM' and windDir == -1):
        windDir = line[5]
    if(line[6] != 'MM' and wind == -1):
        wind = line[6]
    if(line[7] != 'MM' and gust == -1):
        gust = line[7]

    if(line[8] != 'MM' and waveHeigh == -1):
        waveHeigh = line[8]
    if(line[10] != 'MM' and avePeriod == -1):
        avePeriod = line[10]
    if(line[11] != 'MM' and waveDir == -1):
        waveDir = line[11]    

if(windDir == -1):
    windDir = "--.-"
if(wind == -1):
    wind = "--.-"
if(gust == -1):
    gust = "--.-"

if(waveHeigh == -1):
    waveHeigh = "--.-"
if(avePeriod == -1):
    avePeriod = "--.-"
if(waveDir == -1):
    waveDir = "--.-"

l1 = "Direction: " + str(windDir) + "\u00B0T"
l2 = "Wind Speed: " + str(float(wind) * 1.94384) + " kn"
l3 = "Gusts: " + str(float(gust) * 1.94384) + " kn"
col1 = l1 + "<br><br>" + l2 + "<br><br>" + l3

w1 = "Wave Height: " + str(waveHeigh) + " m"
w2 = "Ave Period: " + str(avePeriod) + " sec"
w3 = "Direction: " + str(waveDir) + "\u00B0T"
col2 = w1 + "<br><br>" + w2 + "<br><br>" + w3

data = {
    'tit': time,
    'col1': col1,
    'col2': col2
}

json_data = json.dumps(data)
print("Content-Type: application/json")
print()
print()
print(json_data)
