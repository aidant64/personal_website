#!/usr/bin/python3

print("Content-Type: application/json\n")

import requests
import json
import os

code_map = {
    'sb': 'NTBC1',
    'ch': '46053',
    'co': '46054'
}

loc_map = {
    'sb': 'Santa Barbara',
    'ch': 'Santa Cruz Channel',
    'co': 'Point Conception'
}

query_string = os.environ.get('QUERY_STRING', '')
parameters = {}
if query_string:
    parameters = dict(qp.split('=') for qp in query_string.split('&'))
first_parameter = next(iter(parameters.items()), None)
first_parameter = str(first_parameter[1])


response = requests.get("https://www.ndbc.noaa.gov/data/realtime2/" + str(first_parameter) + ".txt")

lines = response.text.split('\n')

time = -1
wind = -1
gust = -1
windDir = -1
waveHeight = -1 
avePeriod = -1
waveDir = -1

firstLine = [elem for elem in lines[2].split(' ') if elem != '']
day = int(firstLine[2])
hour = int(firstLine[3]) - 8
if(hour < 0):
    hour = hour + 24
    day = day - 1
time = firstLine[1] + "/" + str(day) + "/" + firstLine[0] + " " + str(hour) + ":" + firstLine[4] + " PST"


mRange = 30
if len(lines) < 30:
    mRange = len(lines)
for i in range(2, mRange):
    line = [elem for elem in lines[i].split(' ') if elem != '']

    if(line[5] != 'MM' and windDir == -1):
        windDir = line[5]
    if(line[6] != 'MM' and wind == -1):
        wind = line[6]
    if(line[7] != 'MM' and gust == -1):
        gust = line[7]

    if(line[8] != 'MM' and waveHeight == -1):
        waveHeight = line[8]
    if(line[10] != 'MM' and avePeriod == -1):
        avePeriod = line[10]
    if(line[11] != 'MM' and waveDir == -1):
        waveDir = line[11]    


# -1 value means not found

data = {
    'lastUpdate': time,
    'label': str(first_parameter),
    'windSpeed': wind,
    'windGust': gust,
    'windDir': windDir,
    'waveHeight': waveHeight,
    'waveDir': waveDir,
    'wavePeriod': avePeriod
}

print(json.dumps(data))
