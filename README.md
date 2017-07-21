# Deff-Jean
A very basic bot that sends fun facts about Jeff Dean, the fabled Google Senior fellow

You add facebook access token and other personal data as environment variable so it is saved on the server itself.
For Heroku: go to your terminal, navigate to the project folder and then type: ```heroku config:set FB_ACCESS_TOKEN=YOUR ACCESS TOKEN```


 # TO DO
 1. [Find out who Jeff Dean is](https://en.wikipedia.org/wiki/Jeff_Dean_(computer_scientist))
 2. Develop a REST API for getting the data instead of getting directly from the arrays.
 3. Cache the already displayed facts.
 4. Use CRON JOB to get the user to receive daily facts at specific times
 5. Track user session (the bot is stateless for now --it is very basic and quite untidy)
 6. Train the bot by creating more intents based on the users' chat history.
 7. Add speech analysis to the bot for speech understanding.
 8. Find a crate of beer, some chicken and toothpick! 
