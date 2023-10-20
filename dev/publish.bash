#! /bin/bash

tmp="$HOME/tmp_salt2309"

mkdir "$tmp"
cp -r ~/personal_website/* "$tmp"
cp ~/personal_website/.htaccess "$tmp"
rm -rf "${tmp:?}/dev" "${tmp:?}/README.md" "${tmp:?}/poll/data" "${tmp:?}/images"


ssh aws "rm -rf personal_website && mkdir personal_website"

scp -r "${tmp:?}/"* "${tmp:?}"/.htaccess aws:/home/ubuntu/personal_website/

rm -rf "$tmp"

ssh aws "sudo cp /var/www/html/personal/poll/data personal_website/poll/ && sudo cp -r /var/www/html/personal/images ~/personal_website/"
ssh aws "sudo rm -rf /var/www/html/personal/* && sudo cp -r personal_website/* /var/www/html/personal/ && sudo cp personal_website/.htaccess /var/www/html/personal && sudo rm -rf personal_website/ && sudo chmod 777 /var/www/html/personal/poll/data"
