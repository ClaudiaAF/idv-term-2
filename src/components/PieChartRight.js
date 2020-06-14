import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
import CardsSmallRight from './CardsSmallRight';

const state = {
  labels: ['December', 'February', 'September',
           'March', 'April'],
  datasets: [
    {
      label: 'Snow',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class PieChart extends React.Component {
   
  render() {
    return (
      <div>
        <Pie height="200" width="300" style
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Snow per month',
              fontSize:20

            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Snow Per Month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}