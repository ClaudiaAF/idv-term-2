import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import Spinner from '../Loader/Spinner'

const headers = {
  "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  "x-rapidapi-key": "0ba2c111bamshcf9ca96b6ebd1d9p1019f0jsn7969bc5f6ec5"
}

const races = ["Demon","Dragon","Mech", "Murloc", "Beast", "Pirate", "Totem"];

const PieChartRight = () => {

  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(false);

  const chart = async () => {
    let cardSetAmount = [];

    for (var i=0; i < races.length; i++) {
      console.log("Set: " + races[i]);
      await axios
        .get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/races/" + races[i], {
          headers: headers
        })
      
        .then(res => {
            console.log("Set: " + races[i] + " Length: " + res.data.length);
            cardSetAmount.push(res.data.length);
        })
        .catch(err => {
          console.log(err);
        });
    }
    setLoading(true)

    setChartData({
      labels: races,
      datasets: [
        {
          label: "Races",
          data: cardSetAmount,
          borderWidth: 4,
          backgroundColor: "rgba(76, 0, 152, 0.6)",
          

        }
      ]
    });

  }




  useEffect(() => {
    chart()
  }, [])
  return (
    <div className="Chart" style={{ height: "400px", width: "1300px", marginLeft: "18%"}}>
      <h1 className="header" style={{color: 'white'}}>Races</h1>
      <p className="bodyText" style={{color: 'white'}}>Races determine the orgin/demographic of the card. Races fall under Types, which fall under Classes</p>
     <br />
        <Line data={chartData} options={{
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

      

        
        }} />
        {loading ? (chart) : (
          <Spinner />
        )}
      
      

    </div>
  )
}

export default PieChartRight;