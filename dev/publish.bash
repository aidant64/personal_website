#! /bin/bash

sudo rm -rf /var/www/html/*
sudo cp -r personal_website/* /var/www/html/
sudo rm -rf personal_website/

sudo chmod 777 /var/www/html/responses
sudo chmod 777 /var/www/html/responses/incrementer
sudo rm -rf /var/www/html/dev /var/www/html/README.md
