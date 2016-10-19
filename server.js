var FCM = require('fcm-node');

var serverKey = 'AIzaSyAr2F88VDAeb9IysuhY4B7o8-Y9zse6NnY';
var fcm = new FCM(serverKey);
//*****iOS
//dicxg4dMp5Y:APA91bGTIHN6U2ztIarHJa4ONpIuH11JcYG7DnpWDPcVz_Lfj324ARTHDNSE2M0oUs8Basin0YovbGbMcbwKGDo1gy4KuXufqEQp3EpSO0aRWWJgTFi4_XPOUKQw7vo-FqUmK6TebryG
//*****Android
//cvrIHPlJvfI:APA91bE6Z5lzyDBxJmm9ZcNgmUZMsFJcGGpugBHeJaT0WptbbE3I6g4Htee9tRzfTEpbX6JMKLYgRNGIUMO09BV1k51ymcoXbauSy9jKBT1A1GM6rp0SLxv4v9rRpsGjTCnj7bQf0HvL
var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    // registration_ids: ['dZgdCUwe-L8:APA91bF6SH6Wa_m0Yu17itBKnA9yi7tQgQ-bKfi66ZXwbjspyAtCrNCCEDSECoCIu8-WIUBe6HYivn2fl4RDY1odrGbgnlaMe0wboKf06oZMCFPtk6gBPRte1DBokoAu1JHFLnP8xDl5', 'cvrIHPlJvfI:APA91bE6Z5lzyDBxJmm9ZcNgmUZMsFJcGGpugBHeJaT0WptbbE3I6g4Htee9tRzfTEpbX6JMKLYgRNGIUMO09BV1k51ymcoXbauSy9jKBT1A1GM6rp0SLxv4v9rRpsGjTCnj7bQf0HvL'],
      to:'cvrIHPlJvfI:APA91bE6Z5lzyDBxJmm9ZcNgmUZMsFJcGGpugBHeJaT0WptbbE3I6g4Htee9tRzfTEpbX6JMKLYgRNGIUMO09BV1k51ymcoXbauSy9jKBT1A1GM6rp0SLxv4v9rRpsGjTCnj7bQf0HvL',
    dry_run: true,
    collapse_key: 'Updates Available',
    notification: {
        title: 'ger213213',
        body: 'ger2132131'
    },

    data: { //you can send only notification or only data(or include both)
        my_key: 'my value',
        my_another_key: 'my another value'
    }
};
var i = 0;
var error = 0;
var stopwatch= new Date().getTime();
for (var index = 0; index < 1000; index++) {
    
    (function (n) {
        fcm.send(message, function (err, response) {
            if (err) {
                console.log("Something has gone wrong!:::" + n + "::::" + err);
                console.log(new Date().getTime()-stopwatch);
            } else {
                console.log("Successfully sent with response: :::" + n + "::::", response);
                console.log(new Date().getTime()-stopwatch);
                i++;

            }
        });

    })(index);
}

setTimeout(function () {
  console.log(i);
}, 12000);