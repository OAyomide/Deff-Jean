var request = require('request');
var URL = process.env.SERVER_URL;
var access = process.env.FB_ACCESS_TOKEN;
exports.jeffWiki = function wiki(recipientId){
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            attachment:{
                type:"template",
                payload: {
                    template_type: "generic",
                    elements: [
                        {
                            title: "Jeff's wikipedia page",
                            image_url: URL + "/images/dean.gif",
                            default_action: {
                                "type": "web_url",
                                    url: "https://en.wikipedia.org/wiki/Jeff_Dean_(computer_scientist)",
                                    webview_height_ratio: "tall",
                            }
                        }
                    ]
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
