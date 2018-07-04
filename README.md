Dootrix Event Planner

A react-redux based single page app, with a lambda backend running though a single api gateway endpoint

Things that are good:
  - React-Redux state store
  - Self deploying front-end for developer
  - Service worker for deployment
  - AWS lambda backend (all cloud stored state)
  - Restful in terms of api interface and store GET POST PUT
  - DynamoDB cloud database
  - Comedy 'media-query-less' responsive layout
  - Promise based async
  - Simple animaiton with CSSTransitionGroup
  - hash based keys and search field in DB
  - Webpack / bable /pollyfills all taken care of with create-react-app

Things to do:
  - More robust error handling, defensive programing (timeout etc)
  - Security on AWS gateway, Auth Beyond headers
  - Un-complete and delete tasks
  - Testing environment beyond basic 'does render'?
  - More animations and user prompting
  - More fields for data input, more fields optional to user

Timescale:
        Sat 30th afternoon - Learn Redux
        Sun 1st  day       - Basic front end and redux store
        Mon 2nd  evening   - AWS gateway / lambda / db
        Tue 3rd  evening   - Connections between front and back, and features
        Wed 4th  evening   - Css and animation

+++++++++++++++++
DEPLOY ME:

To check stage: 
        nvm use 9 
        npm install
        npm start

Dev server should be on
http://localhost:3000/

For deployment use npm run build

+++++++++++++++++

HAND MADE BY DUNCAN LAWSON