# Burger
A web oriented Restaurant App. The user can visit the burger website to see a list of burgers to eat. They can eat the burger by hitting the "Devour This" button. This will move the burger to the Burgers That We Ate list. The user can also enter a burger they would like to eat. It will be added to the list of burgers available to eat. 

## Instructions
1. Visit the Burger home website. 
2. Select the Manage Cusotmers button on the upper right side of page.
3. Enter your name and add yourself as a customer.
4. Select the Go to Burgers button.
5. Enter a burger that you wish to eat.
6. Enter your name as the customer rrequesting the burger.
7. Hit submit and your new burger will appear at the bottom of the page.
8. Click the Devour This button to eat the burger.

## Technology
* This app uses a MySQL database to persist the burger data.
* The server uses Handlebars templates to present the data to the client. It makes use of Handlebar's partial views. 
* The app follows the Model View Controller design pattern.
* The server uses  Sequelize JS for Object Relational Mapping.
* The server is deployed on Heroku.
* The HTML uses Bootstrap CSS libraries.
* The client uses JQuery libraries to assist with making requests to the server and handling the response.
* The server uses the Express Node package to handle server-side listening and handling requests from the client.
* The server uses the dotenv package to hide the development database connection information.




