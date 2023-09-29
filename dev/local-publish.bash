#! /bin/bash

scp -r ~/personal_website/* aws:/home/ubuntu/personal_website/
ssh aws sudo ./publish.bash
