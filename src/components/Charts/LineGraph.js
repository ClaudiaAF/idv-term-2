import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import Spinner from '../Loader/Spinner';
import Grid from '@material-ui/core/Grid';
import { render } from '@testing-library/react';

const headers = {
  "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  "x-rapidapi-key": "0ba2c111bamshcf9ca96b6ebd1d9p1019f0jsn7969bc5f6ec5"
}

const sets = ["Basic", "Classic", "Credits", "Naxxramas", "Goblins vs Gnomes", "Missions", "Blackrock Mountain", "Hero Skins", "Tavern Brawl", "The Grand Tournament"];

const LineGraph = () => {

  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(false);

  const chart = async () => {
    let cardSetAmount = [];

    for (var i=0; i < sets.length; i++) {
      console.log("Set: " + sets[i]);
      await axios
        .get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/" + sets[i], {
          headers: headers
        })
      
        .then(res => {
            console.log("Set: " + sets[i] + " Length: " + res.data.length);
            cardSetAmount.push(res.data.length);
        })
        .catch(err => {
          console.log(err);
        });
    }

    
    setLoading(true)

    setChartData({
      labels: sets,
      datasets: [
        {
          label: "Card Sets",
          data: cardSetAmount,
          backgroundColor: ["rgba(75, 192, 192, 0.6)"],
          borderWidth: 4
        }
      ]
    });

  }




  useEffect(() => {
    chart()
  }, [])

  
  return (
    <div className="Chart" style={{ height: "500px", width: "1400px", marginLeft: "18%"}}>
      <h1 className="header" style={{color: 'white'}}>Sets</h1>
      <p className="bodyText" style={{color: 'white'}}>This is the factions set for the cards. we get three different types, blah, blah, and blah.</p>
      
      <Line data={chartData} options = {{
        legend: {
          labels: {
              fontColor: "white",
              fontSize: 18
          }
      },
      scales: {
          yAxes: [{
              ticks: {
                  fontColor: "white",
                  fontSize: 14,
                  beginAtZero: true
              }
          }],
          xAxes: [{
              ticks: {
                  fontColor: "white",
                  fontSize: 14,
                  beginAtZero: true
              }
          }]
      }
      }}/>

        {loading ? (chart) : (
          <Spinner />
        )}
      
      

    </div>
  );
};


export default LineGraph;

