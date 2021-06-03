# hatch-calendar

![Hatch Calendar Logo](client/src/images/sunny.png)

Full-stack calendar web application. Created for CS 35L at UCLA in Spring 2021. For personal use only - do not copy. Written using React.js, Node.js, Express.js, and MongoDB.

## How to Use

You can follow these instructions to run the Hatch calendar web application.

- Clone this repository onto your local machine. This can be done with ```git clone https://github.com/sanjitdp/hatch-calendar.git```.
- Create a folder inside the ```hatch-calendar``` directory named ```config```.
- Copy your ```config.js``` server configuration file into the ```hatch-calendar/config``` directory.
- Run ```npm init``` in the ```hatch-calendar``` directory.
- Run ```npm install``` in the ```hatch-calendar/client``` directory to install server-side dependencies.
- Run ```npm start``` in the ```hatch-calendar/backend_server``` directory.
- Run ```npm install``` in the ```hatch-calendar/client``` directory to install client-side dependencies.
- Run ```npm start``` in the ```client``` directory.

The web application should now be running at ```localhost:3000```, and the Node.js server should be running at ```localhost:5000```!

## Features

Hatch Calendar is a full-fledged calendar application with standard calendar functionality, along with certain additional features.
- Register and login with authentication provided by Express.js
    - Email format checking with regular expressions
    - Password strength checking
- Adding events (one-time and weekly)
    - Title
    - Description
    - Date (with date format checking)
    - Event start/end time (with time picker!)
- Deleting events of a day or week
- Send schedule to email listed in account
- Download personal schedule as a .csv file
- Thank you page containing a list of registered users
- Display events based on day (weekly events) or date (one-time events)
- Jump to date with calendar and date picker

## Contributors

- Sanjit Dandapanthula
- Vinay Shukla
- Anna Anderson
- Katie Stahnke
- Nitya Simhadri
