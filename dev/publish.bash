#! /bin/bash

tmp="$HOME/tmp_salt2309"

mkdir "$tmp"
cp -r ~/personal_website/* "$tmp"
cp ~/personal_website/.htaccess "$tmp"
rm -rf "${tmp:?}/dev" "${tmp:?}/README.md" "${tmp:?}/poll/data" "${tmp:?}/images"


ssh aws "rm -rf personal_website && mkdir personal_website"

scp -r "${tmp:?}/"* "${tmp:?}"/.htaccess aws:/home/ubuntu/personal_website/

rm -rf "$tmp"

ssh aws "sudo cp /var/www/html/poll/data personal_website/poll/ && sudo cp -r /var/www/html/images ~/personal_website/ && sudo rm -rf /var/www/html/* && sudo cp -r personal_website/* /var/www/html/ && sudo cp personal_website/.htaccess /var/www/html && sudo rm -rf personal_website/ && sudo chmod 777 /var/www/html/poll/data"