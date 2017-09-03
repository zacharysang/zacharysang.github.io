# zacharysang.com
Repo for my personal website! [(link)](zacharysang.com)

# Purpose
I needed a homepage for my personal website where I could display various information about myself. 
I created the homepage from scratch so that I could have full control over all aspects of this page. This allowed me to make sure the the design of the page was reflective of my character.
I also wanted to have a blog component for this site. I decided to use KeystoneJS for this because it was based on ExpressJS which was familiar with me and because this framework provided me with 
various features such as an authenticated admin console, basic CMS right out of the box.

# Key Components
* package.json : Holds information about project dependencies, scripts, and other info on the project
* keystone.js : Entry point for the application which also includes config for keystoneJS. Run this using `npm start` (defined in package.json)
* templates : This folder holds all the Pug files
* public : Holds JS and styling (*.scss) resources (images stored on Cloudinary)

# Prerequisites
* NPM should be installed
* MongoDB should be installed ([this is one guide you can follow for this](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/))

# Local Setup (Install, Config, Running)
## Install
1. Clone the project using: `git clone https://github.com/zacharysang/zacharysang.com.git`
2. Run: `npm install` to install dependencies declared in package.json

## Config
1. Copy the .env-example file to a new .env file and fill in the fields as specified

## Running
1. Ensure a MongoDB is running locally (KeystoneJS requires a local Mongo instance)
2. Run `npm start` to start the application

# Deployment
Deployed on an AWS EC2 instance. 
This process is currently pretty manual with me ssh'ing into the instance and pulling the latest changes from master. There is a cronjob that restarts the server to include the latest code on an hourly basis.
