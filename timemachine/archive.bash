#! /bin/bash

query_string="$QUERY_STRING"
param1=$(echo "$query_string" | awk -F'&' '{split($1, arr, "="); print arr[2]}')

cd /var/www/archive/ && git checkout "$param1"

echo "Content-Type: text/html"
echo ""

echo "<!DOCTYPE html>"
echo "<html>"
echo "<head>"
echo "    <title>Your Title</title>"
echo "</head>"
echo "<body>"
echo "    <h1>Click here to be redirected</h1>"
echo "    <a href='http://archive.localhost/'>ARCHIVE</a>"
echo "</body>"
echo "</html>"
