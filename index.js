const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000; // Port number for local server

function readLiveData(timerDurationInSeconds) {
  const url = 'https://d1u2maujpzk42.cloudfront.net/cricket-data/data.json';

  setInterval(() => {
    axios
      .get(url)
      .then(response => {
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error(`Error! Failed to fetch data. Status code: ${response.status}`);
        }
      })
      .then(data => {
       // console.log(data);
        const scoreArray = Object.values(data.run_details); 
        console.log('Runs:', scoreArray);
        const scoresArray = data.balls_details.map(item => item.scoringInformation.score);
        console.log('Scores:', scoresArray);
        const landingPositionsArray = data.balls_details.map(item => item.landingPosition);
        console.log('Landing Positions:', landingPositionsArray);
        const timecodesArray = data.balls_details.map(item => item.timecode);
        console.log('Timecodes:', timecodesArray);
      })
      .catch(error => {
        console.error('Error: ', error);
      });
  }, timerDurationInSeconds * 1000);
}

readLiveData(5); //calling function for 30 seconds

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
