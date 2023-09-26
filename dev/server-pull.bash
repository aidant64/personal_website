#! /bin/bash

cd /Users/aidan && rm -rf ./personal_website
git clone git@github.com:aidant64/personal_website.git
rm -rf ./personal_website/*

scp -r aws:/var/www/html/* /Users/aidan/personal_website/

rm -rf ./personal_website/responses/*
touch ./personal_website/responses/incrementer && echo 0 > ./personal_website/responses/incrementer
