#!/usr/bin/python3

print("Content-Type: text/html\n")

import requests
import json
import os

def compass_heading(degrees):
    directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
    degrees %= 360
    index = round(degrees / (360.0 / len(directions))) % len(directions)
    return directions[index]


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
waveAvePeriod = -1
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
    if(line[10] != 'MM' and waveAvePeriod == -1):
        waveAvePeriod = line[10]
    if(line[11] != 'MM' and waveDir == -1):
        waveDir = line[11]    


# -1 value means not found
        

if(waveHeight == -1):
    waveHeight = '--'
else:
    waveHeight = str(round(float(waveHeight) * 3.28084, 1)) + " ft"
if(waveAvePeriod == -1):
    waveAvePeriod = '--'
else:
    waveAvePeriod = str(waveAvePeriod) + " sec"
if(waveDir == -1):
    waveDir = '--'
else:
    waveDir = compass_heading(float(waveDir)) + ", " + waveDir + "\u00b0T"

if(wind == -1):
    wind = '--'
else:
    wind = str(round(float(wind) * 1.94384, 1)) + " kts"
if(gust == -1):
    gust = '--'
else:
    gust = str(round(float(gust) * 1.94384, 1)) + " kts"
if(windDir == -1):
    windDir = '--'
else:
    windDir = compass_heading(float(windDir)) + ", " + windDir + "\u00b0T"

data = {
    'lastUpdate': time,
    'windSpeed': wind,
    'windGust': gust,
    'windDir': windDir,
    'waveHeight': waveHeight,
    'waveDir': waveDir,
    'wavePeriod': waveAvePeriod
}


table_lines = [
    "<table>",
    "  <tbody>",
    "    <tr>",
    "      <td>Swell</td>",
    f"      <td>{data['waveHeight']}</td>",
    "    </tr>",
    "    <tr>",
    "      <td>Swell period</td>",
    f"      <td>{data['wavePeriod']}</td>",
    "    </tr>",
    "    <tr>",
    "      <td>Swell Direction</td>",
    f"      <td>{data['waveDir']}</td>",
    "    </tr>",
    "    <tr>",
    "      <td></td>",
    f"      <td></td>",
    "    </tr>",
    "    <tr>",
    "      <td>Wind</td>",
    f"      <td>{data['windSpeed']}</td>",
    "    </tr>",
    "    <tr>",
    "      <td>Gust</td>",
    f"      <td>{data['windGust']}</td>",
    "    </tr>",
    "    <tr>",
    "      <td>Wind Direction</td>",
    f"      <td>{data['windDir']}</td>",
    "    </tr>",
    "    <tr>",
    "      <td>Last Update</td>",
    f"      <td colspan='2'>{data['lastUpdate']}</td>",
    "    </tr>",
    "  </tbody>",
    "</table>"
]

for line in table_lines:
    print(line)
