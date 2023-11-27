require('dotenv').config();
const Twit = require('twit');

//Initializing all tokens and keys
const client = new Twit({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

/**
 * @description
 * @author
 * @param {*} verse 
 * @returns {*} 
 */

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