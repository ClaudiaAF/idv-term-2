import React, { useState, useEffect } from 'react';
import { Polar } from 'react-chartjs-2';
import axios from 'axios';
import Spinner from '../Loader/Spinner'

const headers = {
  "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  "x-rapidapi-key": "0ba2c111bamshcf9ca96b6ebd1d9p1019f0jsn7969bc5f6ec5"
}

const qualities = ["Free", "Common", "Rare", "Epic", "Legendary"];

const Qualities = () => {

  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(false);

  const chart = async () => {
    let cardSetAmount = [];

    for (var i=0; i < qualities.length; i++) {
      console.log("Set: " + qualities[i]);
      await axios
        .get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/qualities/" + qualities[i], {
          headers: headers
        })
      
        .then(res => {
            console.log("Set: " + qualities[i] + " Length: " + res.data.length);
            cardSetAmount.push(res.data.length);
        })
        .catch(err => {
          console.log(err);
        });
    }
    setLoading(true)

    setChartData({
      labels: qualities,
      datasets: [
        {
          label: "Card Qualities",
          data: cardSetAmount,
          backgroundColor: ["rgba(252, 210, 55, 0.6)",
          "rgba(0, 204, 102, 0.6)",
          "rgba(153, 0, 153, 0.6)",
          "rgba(204, 0, 0, 0.6)",
        "rgba(75, 192, 192, 0.6)"],
          borderWidth: 2
        }
      ]
    });

  }




  useEffect(() => {
    chart()
  }, [])
  return (
    <div className="Chart" style={{ height: "400px", width: "1500px", marginLeft: "16%"}}>
      <h1 className="header" style={{color: 'white'}}>Qualities</h1>
      <p className="bodyText" style={{color: 'white'}}>The qality of the card determines the rarity, as well as the level of damage and special abilities.</p>
      
        <Polar data={chartData} options={{
          legend: {
            labels: {
                fontColor: "white",
                fontSize: 18
            }
        },
        scale: {
            color: "white"
          }
       
        }} />
        {loading ? (chart) : (
          <Spinner />
        )}
     
      

    </div>
  )
}

export default Qualities;