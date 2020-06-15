import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import Spinner from '../Loader/Spinner'

const headers = {
  "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  "x-rapidapi-key": "0ba2c111bamshcf9ca96b6ebd1d9p1019f0jsn7969bc5f6ec5"
}

const faction = ["Horde", "Alliance", "Neutral"];

const Faction = () => {

  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(false);

  const chart = async () => {
    let cardSetAmount = [];

    for (var i=0; i < faction.length; i++) {
      console.log("Set: " + faction[i]);
      await axios
        .get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/factions/" + faction[i], {
          headers: headers
        })
      
        .then(res => {
            console.log("Set: " + faction[i] + " Length: " + res.data.length);
            cardSetAmount.push(res.data.length);
        })
        .catch(err => {
          console.log(err);
        });
    }
    setLoading(true)

    setChartData({
      labels: faction,
      datasets: [
        {
          label: "Card Factions",
          data: cardSetAmount,
          backgroundColor: ["rgba(237, 161, 21, 0.6)",
          "rgba(115, 71, 28, 0.6)",
          "rgba(252, 210, 55, 0.6)"
        
        ],
          borderWidth: 4
        }
      ]
    });

  }




  useEffect(() => {
    chart()
  }, [])
  return (
    <div className="Chart" style={{ height: "400px", width: "1300px", marginLeft: "18%"}}>
      <h1 className="header" style={{color: 'white'}}>Factions</h1>
      <p className="bodyText" style={{color: 'white'}}>Faction is the term for the 7 individual player-background types. These terms are typically used for flavor and story-building; however, cards in the same faction may share themes of similar keywords and abilities.</p>
      <div >
          <br />
        <Doughnut data={chartData} options={{
          legend: {
            labels: {
                fontColor: "white",
                fontSize: 18
            }
        }
          
        }} />
        {loading ? (chart) : (
          <Spinner />
        )}
      </div>
      

    </div>
  )
}

export default Faction;