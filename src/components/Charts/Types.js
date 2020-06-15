import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import Spinner from '../Loader/Spinner'

const headers = {
  "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  "x-rapidapi-key": "0ba2c111bamshcf9ca96b6ebd1d9p1019f0jsn7969bc5f6ec5"
}

const types = ["Hero", "Minion", "Spell", "Enchantment", "Weapon", "Hero Power"];

const Types = () => {

  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(false);

  const chart = async () => {
    let cardSetAmount = [];

    for (var i=0; i < types.length; i++) {
      console.log("Set: " + types[i]);
      await axios
        .get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/types/" + types[i], {
          headers: headers
        })
      
        .then(res => {
            console.log("Set: " + types[i] + " Length: " + res.data.length);
            cardSetAmount.push(res.data.length);
        })
        .catch(err => {
          console.log(err);
        });
    }
    setLoading(true)

    setChartData({
      labels: types,
      datasets: [
        {
          label: "Card Types",
          data: cardSetAmount,
          backgroundColor: ["rgba(75, 192, 192, 0.6)",
          "rgba(204, 0, 0, 0.6)",
          "rgba(0, 0, 205, 0.6)",
          "rgba(76, 0, 152, 0.6)",
          "rgba(253, 102, 178, 0.6)",
          "rgba(0, 153, 153, 0.6)"],
          borderWidth: 2
        }
      ]
    });

  }




  useEffect(() => {
    chart()
  }, [])
  return (
    <div className="Chart" style={{ height: "500px", width: "1400px", marginLeft: "18%"}}>
      <h1 className="header" style={{color: 'white'}}>Types</h1>
      <p className="bodyText" style={{color: 'white'}}>Each card falls into a certain type, there are four main types of cards in Hearthstone: minions, spells, enchantment, weapons, and hero cards.</p>
      
        <Pie data={chartData} options={{
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
  )
}

export default Types;