var request = require('request');
var URL = process.env.SERVER_URL;
var access = process.env.FB_ACCESS_TOKEN;
var corefunctions = require('./corefunctions');
exports.academicsReply = (recipientId) => {
    var responseArray = [
        'He attended University of Minnesota for his B.S in computer science and business',
        'He graduted from Univeristy of Minnesota in 1990',
        'Jeff has a PhD from Univeristy of Washington in Computer Science',
        'He had his PhD in 1996'
    ];
    var response = Math.floor(Math.random() * responseArray.length);
    corefunctions.sendText(recipientId, responseArray[response]);
};

exports.careerReply = (recipientId) => {
    var responseArray = [
        'He works at Google',
        'His post at Google is Senior fellow in the System and nfrastructure group',
        'Jeff has a position as a Senior fellow at Google',
        'He once worked at DEC/Compaq'
    ];
    var response = Math.floor(Math.random() * responseArray.length);
    corefunctions.sendText(recipientId, responseArray[response]);
};

exports.greetingReply = (recipientId) => {
    var responseArray = [
        'Hola! ✋',
        'Hi!',
        'Hello there',
        'Hi there!'
    ];
    var response = Math.floor(Math.random() * responseArray.length);
    corefunctions.sendText(recipientId, responseArray[response]);
};

exports.goodbyeReply = (recipientId) => {
    var responseArray = [
        'Okay, bye',
        'Leaving already? Alright bye! ✋',
        'Goodbye',
        'see you later!',
        'Now you know I am fun. Please come again'
    ];
    var response = Math.floor(Math.random() * responseArray.length);
    corefunctions.sendText(recipientId, responseArray[response]);
};

exports.jeffImage =  function image(recipientId) {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            attachment: {
                type: "image",
                payload: {
                    url: URL+ "/images/dean2.jpg"
                }
            }
        }
    }
    callSendAPI(messageData);
};


function callSendAPI(messageData) {
  request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: access},
    method: 'POST',
    json: messageData

  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var recipientId = body.recipient_id;
      var messageId = body.message_id;

      console.log("Successfully sent generic message with id %s to recipient %s",
        messageId, recipientId);
    } else {
      console.error("Unable to send message.");
      console.error(response);
      console.error(error);
    }
  });
}
