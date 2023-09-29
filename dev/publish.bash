#! /bin/bash

git clone https://github.com/aidant64/personal_website.git

sudo rm -rf /var/www/html/*
sudo cp -r personal_website/* /var/www/html/
sudo rm -rf personal_website/

sudo chmod 777 /var/www/html/responses
sudo chmod 777 /var/www/html/responses/incrementer

