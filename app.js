const CronJob = require("cron").CronJob;
const bibleVerse = require("./bibleVerse");
const { postTweet } = require("./twitbot");

/**
 * @description
 * @author
 * @returns
 */

function getVerse() {
  return bibleVerse.VERSES[
    Math.floor(Math.random() * bibleVerse.VERSES.length)
  ];
}

new CronJob(
  "10 23 * * *",
  function () {
    postTweet(getVerse());
  },
  null,
  true,
  "Africa/Lagos"
);
