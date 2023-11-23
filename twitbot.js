require('dotenv').config();
const Twit = require('twit');

//Initializing all tokens and keys
const client = new Twit({
  consumerKey: process.env.TWITTER_API_KEY,
  consumerSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessTokenSecret: process.env.WITTER_ACCESS_TOKEN_SECRET
});

//Post Function
const postTweet = (verse) => {
  return new Promise((resolve, reject) => {
    client.post("status/update", {
      status:verse
    }, (error, data, response) => {
        if (error){
          console.log(error);
          reject(error);
        } else {
          console.log(data);
          resolve(data);
        }
    });
  });
};

module.exports = {postTweet}; 