#! /bin/bash

tar --exclude='.git' -czf - /home/aidan/personal_website | ssh aws 'cd /home/ubuntu/ && tar -xzf - && mv /home/ubuntu/home/aidan/personal_website /home/ubuntu/ && rm -rf /home/ubuntu/home/'
ssh aws "sudo rm -rf /var/www/website;  sudo mv /home/ubuntu/personal_website /var/www/website && sudo chown -R www-data:www-data /var/www/website"

