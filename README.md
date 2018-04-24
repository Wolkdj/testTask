# testTask

Node.js application - public chat room(only RESTful API).
Unauthenticated users can post messages in chat so others can read them.
Messages need to be saved to the database.

Basic requirements:
- Koa/Express, MongoDB
- The message must contain author(unauthenticated user) email and text, create date and update date.
- Email validation (regex to check if that is real email)
- Message validation (regex to check if message is not empty string, and length < 100)

API methods:
- GET method for getting all messages with pagination by 10 messages per request.
e.g. 
/api/message/list/0 will return first 10 messages
/api/message/list/1 will return second 10 messages
etc
- GET method for getting single message by unique identifier
e.g.
/api/message/single/59f7303c2f60e5d7e6167dd1
- POST method for creating a new message
Body accepts email and text.
- Add request validators
- API documentation(preferably with sandbox for sending requests)
- Deploy to Heroku