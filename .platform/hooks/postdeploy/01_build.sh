#!/bin/bash
sudo su
echo postDeploy
cd /var/app/current/client
npm i
npm run build