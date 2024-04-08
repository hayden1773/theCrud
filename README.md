## theCRUD refresh



## table of contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Credits](#credits)
5. [Questions](#questions)
        
        
        
## Description
This project is to utilize an understanding of how, why, and when each function is utilized to create a database for products

The motivation behind building this project to refresh the memory of how a CRUD application is built. Utilizing Node, MongoDB, Express, and Nodemon to keep the application running while changes are made.

This application provides the user a general idea of how a CRUD application is built. Starting from scratch by installing the main components necessary to develop followed by processing each request through Insomnia. to understand whay controller and router does what.

The knowledge gain from this application is understanding how each controller ties into the main server. This allows the builder to create specific routes in which each action is captured using the MongoDB database via AWS cloud storage. From each request, the user can see what and when each action was taken to provide new products through the API. As well as clean the code from having all sequences from inside the index file to it's own folder and route virtually cleaning the code and making it more understandable.
        
        
## Installation
The tools required to build this project is Node, Nodemon, Express, and MongoDB (which will require a username and password)

Inside the terminal:
Use (NPM init -y)  to install the package.json, then use (npm i express), then use (npm i mongodb) then use (npm i express). In the index.js file, you will need to write (app.use(express.json()); as well as app.use(express.urlencoded({extended: false})); to allow json formatting as well as form initizing while creating products. 
        
        
## Usage


![A run through of the application utilizing CRUD in Insomnia](./assets/Runthru.gif)
![The database in MongoDB](./assets/Screenshot%202024-04-07%20193227.png)
        
## Credits
Just me :)

Exrpess, MongoDB, Node
        
        

## Questions
You can access my github repository from here https://github.com/hayden1773
        
You may also forward an email for more information or questions to hayden060@gmail.com
        
## Features

        
        
## Tests 
Tested each sequence utilizing the program Insomnia to ensure each CRUD method accurately did it's job.