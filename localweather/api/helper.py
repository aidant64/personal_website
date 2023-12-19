#! /usr/bin/python3

import requests
import sys
import json

def compass_heading(degrees):
    directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]

    # Normalize degrees to ensure it falls between 0 and 360
    degrees %= 360

    # Calculate the index for the direction based on the degree range
    index = round(degrees / (360.0 / len(directions))) % len(directions)

    return directions[index]



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
time = time + " - " + str(loc_map[sys.argv[1]])

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

if(waveHeigh != -1):
    waveHeigh = round(float(waveHeigh) * 3.28084, 1)
if(waveDir != -1):
    waveDir = str(compass_heading(float(waveDir))) + " (" + str(waveDir) + "\u00B0T)"

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
    waveDir = "--.- \u00B0T"

l1 = "Direction: " + str(compass_heading(float(windDir))) + " ("  + str(windDir) + "\u00B0T)"
l2 = "Wind Speed: " + str(round((float(wind) * 1.94384), 1)) + " kn"
l3 = "Gusts: " + str(round((float(gust) * 1.94384), 1)) + " kn"
col1 = l2 + "<br><br>" + l3 + "<br><br>" + l1

w1 = "Wave Height: " + str(waveHeigh) + " ft"
w2 = "Ave Period: " + str(avePeriod) + " sec"
w3 = "Direction: " + str(waveDir)
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

