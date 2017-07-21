# Deff-Jean
A very basic bot that sends fun facts about Jeff Dean, the fabled Google Senior fellow

You add facebook access token and other personal data as environment variable so it is saved on the server itself.
For Heroku: go to your terminal, navigate to the project folder and then type: ```heroku config:set FB_ACCESS_TOKEN=YOUR ACCESS TOKEN```


 # TO DO
 1. Develop a REST API for getting the data instead of getting directly from the arrays.
 2. Cache the already displayed facts.
 3. Use CRON JOB to get the user to receive daily facts at specific times
 4. Track user session (the bot is stateless for now --it is very basic and quite untidy)
 5. Train the bot by creating more intents based on the users' chat history.
 6. Find a crate of beer, some chicken and toothpick!
