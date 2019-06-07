var config = require('./config.js');
var Twit = require('twit');

// 1..999999 so 1..6 digit numbers are possible this way
// previous version ALWAYS returned six-digits
const getNumbers = () => parseInt(Math.random() * 1000000, 10)

const tweeter = () => {
  const newSentence = getNumbers();
  console.log(`The number: ${newSentence}`)
  if (config.tweet_on) {
    const T = new Twit(config);
    T.post('statuses/update', { status: newSentence }, (err, reply) => {
      if (err) console.log('error:', err);
    });
  }
};

// Tweets once on initialization.
tweeter();
