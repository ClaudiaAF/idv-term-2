import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import Spinner from '../Loader/Spinner'

const headers = {
  "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  "x-rapidapi-key": "0ba2c111bamshcf9ca96b6ebd1d9p1019f0jsn7969bc5f6ec5"
}

const classes = ["Druid", "Hunter", "Mage", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior", "Dream"];

const PieChart = () => {

  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(false);

  const chart = async () => {
    let cardSetAmount = [];

    for (var i=0; i < classes.length; i++) {
      console.log("Set: " + classes[i]);
      await axios
        .get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/" + classes[i], {
          headers: headers
        })
      
        .then(res => {
            console.log("Set: " + classes[i] + " Length: " + res.data.length);
            cardSetAmount.push(res.data.length);
        })
        .catch(err => {
          console.log(err);
        });
    }
    setLoading(true)

    setChartData({
      labels: classes,
      datasets: [
        {
          label: "Card Classes",
          data: cardSetAmount,
          backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(115, 71, 28, 0.6)",
          "rgba(252, 210, 55, 0.6)",
          "rgba(0, 204, 102, 0.6)",
          "rgba(153, 0, 153, 0.6)",
          "rgba(204, 0, 0, 0.6)",
          "rgba(0, 0, 205, 0.6)",
          "rgba(76, 0, 152, 0.6)",
          "rgba(253, 102, 178, 0.6)",
          "rgba(0, 153, 153, 0.6)"],
          borderWidth: 4,
          color: 'white'

        }
      ]
    });

  }




  useEffect(() => {
    chart()
  }, [])
  return (
    <div className="Chart" style={{ height: "400px", width: "1300px", marginLeft: "18%"}}>
      <h1 className="header" style={{color: 'white'}}>Classes</h1>
      <p className="bodyText" style={{color: 'white'}}>Class is the primary determinant of a hero's powers and abilities, and the strongest factor in deck selection</p>
      
      <br />
        <Bar data={chartData} options={{
          
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

export default PieChart;