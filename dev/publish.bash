#! /bin/bash

mkdir ~/tmp_salt2309
cp -r ~/personal_website/* ~/tmp_salt2309
rm -rf ~/tmp_salt2309/dev ~/tmp_salt2309/README.md
ssh aws mkdir personal_website
scp -r ~/tmp_salt2309/* aws:/home/ubuntu/personal_website/
rm -rf ~/tmp_salt2309

ssh aws "sudo rm -rf /var/www/html/*i && sudo cp -r personal_website/* /var/www/html/ && sudo rm -rf personal_website/ && sudo chmod 777 /var/www/html/poll/data"
