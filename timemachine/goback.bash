#! /bin/bash

#cd /var/www/archive && git checkout -f  eb34fa1
query_string="$QUERY_STRING"
param1=$(echo "$query_string" | awk -F'&' '{split($1, arr, "="); print arr[2]}')

cd /var/www/archive && git checkout -f $param1

printf "Status: 302 Found\n"
printf "Location: http://archive.aidanswesbite.com/\n"
printf "Content-Type: text/html\n\n"

# Optionally, you can include an HTML message for browsers that don't follow the redirect automatically
printf "<html><body>Redirecting to <a href=\"http://archive.aidanswesbite.com/\">http://archive.aidanswesbite.com/</a></body></html>\n"