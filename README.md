# About MeetOut project
Final group project within KTH Royal Institute of Technology in Stockholm Software Development Academy. Awarded for the highest technical ambition.

Client-server application for booking services. Main features: 
- CRUD events 
- Booking events
- Updating events statuses (active / fully booked / archived)
- Display list of event participant users
- Map location, markup for text description for events posting
- Email notifications to participants about event updates  
- Sorting (by date) and filtering (by categories) event lists 
- User profile with profile image and list of events published / booked

# Contributors
Yana Kachur, Yingtong Ding, Viji Radhakrishnan, Igor Truchlik, Manju Lata Arya, Mehwish Roohan, Maria Lucia Gubolin

# Technical stack
Based on Java/Spring, PostgreSQL, Hibernate, Javascript/React.js, React router and Axios, Bootstrap. 

## Third-party libraries used
- Moment.js
- Draft.js 
- Leaflet.js

## Setup

- Install `docker` and `docker-compose`.
- Install `Nodejs`.
- Install a proper IDE/Text editor fo Java and Javascript. IntelliJ community edition is recommended for Java development but doesn't work very well with JavaScript. It's therefore recommended to use VS Code or any other JavaScript-friendly IDE when working with frontend code.

### Starting the database

To start the database open the terminal and `cd` your way in to the project root folder. You can just simply run
`docker-compose up` to start the database. Closing the terminal will kill the database. So you need to restart the database every time you need to use it.

### Starting the backend server

Open the root folder in IntelliJ and import all the gradle dependencies (this has to be done only once of course).

Make sure that the database is running (see steps above) otherwise the backend won't have access to it. Then run the main class at `src/main/java/se/kth/sda6/skeleton/SkeletonApplication.java` to start the web server.

### Starting the frontend development server

To install the project dependencies for the frontend, open the terminal and make sure that the current directory is `frontend`. You can then run `npm install` to install all the dependencies needed for the project (This has to be done only once).

To start the frontend server run `npm start` from the `frontend` directory. Make sure that database and backend server are also running so that the frontend can interact with the backend.
When working on the frontend, open the `frontend` folder in your favorite Javascript IDE.  

