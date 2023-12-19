#! /usr/bin/bash

query_string="$QUERY_STRING"
param1=$(echo "$query_string" | awk -F'&' '{split($1, arr, "="); print arr[2]}')

./helper.py "$param1"
