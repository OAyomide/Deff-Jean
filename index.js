 const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const verify = process.env.VERIFY;
const access = process.env.FB_ACCESS_TOKEN;
const app = express();
const recastai = require('recastai');
const corefunctions = require('./models/corefunctions');
const generic = require('./models/genericData');
const jeffData = require('./models/jeffData');
const jeffFacts = require('./models/jeffFacts');


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
    res.send('Welcome. Goodbye');
});
app.get('/webhook/', function(req, res) {
    if (req.query['hub.verify_token']===verify) {
        res.send(req.query['hub.challenge'])
    }
    res.send('No entry')
});



app.post('/webhook', function (req, res) {
  var data = req.body;

  // Make sure this is a page subscription
  if (data.object === 'page') {

    // Iterate over each entry - there may be multiple if batched
    data.entry.forEach(function(entry) {
      var pageID = entry.id;
      var timeOfEvent = entry.time;

      // Iterate over each messaging event
      entry.messaging.forEach(function(event) {
        if (event.message) {
          receivedMessage(event);
        } else if (event.postback) {
          console.log("Webhook received unknown event: ", event);
          receivedPostback(event);
        }
      });
    });

    // Assume all went well.
    //
    // You must send back a 200, within 20 seconds, to let us know
    // you've successfully received the callback. Otherwise, the request
    // will time out and we will keep trying to resend.
    res.sendStatus(200);
  }
});

function receivedMessage(event) {
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfMessage = event.timestamp;
  var message = event.message;
  //cronJOb(senderID);



  console.log("Received message for user %d and page %d at %d with message:",
    senderID, recipientID, timeOfMessage);
  console.log(JSON.stringify(message));

  var messageId = message.mid;

  var messageText = message.text;
  var messageAttachments = message.attachments;
  

  if (messageText) {
    var reque = new recastai.request('5a2d09fe93ba5a0c3aeab5bd80299cbf');
    reque.analyseText(messageText).then(function(res) {
      var intent = res.intent();

      if (intent.slug === 'jeff_wiki') {
        generic.jeffWiki(senderID);
      } else if (intent.slug === 'jeff_academics') {
        jeffData.academicsReply(senderID);
      } else if (intent.slug === 'jeff_career') {
        jeffData.careerReply(senderID);
      } else if (intent.slug === 'jeff_image')  {
        corefunctions.sendText('He looks like this: ', senderID);
        setTimeout((err, res) => {
          if (!err) {
            jeffData.jeffImage(senderID);
          }
        }, 5000);
      }
      else if (intent.slug === 'jeff_personal_info') {
        corefunctions.sendText(senderID, 'He is 49 years old');
      }
      else if (intent.slug === 'jeff_enquiry') {
        generic.jeffWiki(senderID);
      } else if (intent.slug === 'jefftruefact') {
        jeffFacts.jeffTrueFacts(senderID);
      }
       else if (intent.slug === 'ask-joke') {
         jeffFacts.jeffGeneralUntrueFact(senderID);
       } else if (intent.slug === 'jeffalgorithmjoke') {
         jeffFacts.jeffALgorithmFact(senderID);
       } else if (intent.slug === 'jeff_socialmedia') {
         jeffFacts.jeffSocialMedia(senderID);
       } else if (intent.slug === 'jeff_stackoverflow') {
         jeffFacts.jeffStackOverflow(senderID);
       } else if (intent.slug === 'greetings') {
         jeffData.greetingReply(senderID);
       } else if (intent.slug==='goodbye') {
         jeffData.goodbyeReply(senderID);
       } else if (intent.slug === 'ask-bot') {
         corefunctions.sendText(senderID, 'I am for real! and I am just a bot!🤖');
       } else if (intent.slug === 'jeff_stackoverfow') {
         jeffFacts.jeffStackOverflow(senderID);
       } else if (intent.slug === 'quick-action') {
         quickButtons(senderID);
       }
    })

    // If we receive a text message, check to see if it matches a keyword
    // and send back the example. Otherwise, just echo the text we received.
   switch (messageText) {
        case 'Fact':
        jeffFacts.jeffGeneralUntrueFact(senderID);
        break;

        case 'Real fact':
        jeffFacts.jeffTrueFacts(senderID);
        break;

        case 'Wikipedia':
        generic.jeffWiki(senderID);
        break;

        case 'Briefly about':
        corefunctions.sendText(senderID, 'Jeff Dean is a Senior fellow at Google. He is a Computer Scientist and\
        software engineer. He has a PhD in Computer Science from University of Washington.\
        He once worked at Dell. Jeff Dean is 49 years old');
        break;

        case 'Social media':
        jeffFacts.jeffSocialMedia(senderID);
        break;

        case 'Github&StackOverflow':
        jeffFacts.jeffStackOverflow(senderID);
        break;
        default:
          corefunctions.sendText(senderID, '');
    }
  } else if (messageAttachments) {
    corefunctions.sendText(senderID,"I cannot understand images and multimedia yet 😀");
  }
}

function quickButtons(recipientId){
  var messageData = {
    recipient: {
      id: recipientId
    },
    message:{
    text:"Quick Menu",
    quick_replies:[
      {
        content_type:"text",
        title:"Fact",
        payload:"joke"
      },
      {
        content_type:"text",
        title:"Real fact",
        payload:"fact"
      },
      {
        content_type:"text",
        title:"Wikipedia",
        payload:"wiki"
      },
      {
        content_type:"text",
        title:"Briefly about",
        payload:"about"
      },
      {
        content_type:"text",
        title:"Social media",
        payload:"social"
      },
      {
        content_type:"text",
        title:"Github&StackOverflow",
        payload:"stack"
      },
    
    ]
  }

}
callSendAPI(messageData);
} 


 function sendTextMessage (recipientId, messageText){
  var messageData = {
    recipient : {
      id: recipientId
    },
    message:{
      text: messageText
    }
  };
  callSendAPI(messageData)
}


function receivedPostback(event) {
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfPostback = event.timestamp;

  // The 'payload' param is a field we put to trigger an action
  var payload = event.postback.payload;
  if(payload === "intro"){
       request({
      url: "https://graph.facebook.com/v2.6/" + senderID,
      qs: {
        access_token: access,
        fields: "first_name"
      },
      method: "GET"
    }, function(error, response, body) {
      var greeting = "";
      if (error) {
        console.log("Error getting user's name: " +  error);
      } else {
        var bodyObj = JSON.parse(body);
        name = bodyObj.first_name;
        greeting = "Greetings! " + name + ". ";
      }
      var message = greeting + "My name is Deff Jean. I am here to bring you fun stuffs about Jeff Dean! Go ahead and ask me: tell me a funny joke, for example";
      corefunctions.sendText(senderID, message);
    });

  console.log("Received postback for user %d and page %d with payload '%s' " +
    "at %d", senderID, recipientID, payload, timeOfPostback);

  // When a postback is called, we'll send a message back to the sender to
  // let them know it was successful
  //quickButtons(senderID);
} else if (payload === "report"){

    }
else if (payload === "menu"){

  quickButtons(senderID)
} 
}


//function callSendAPI declaration
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

app.listen(app.get('port'), function(){
    console.log('running on port', app.get('port'))
});
