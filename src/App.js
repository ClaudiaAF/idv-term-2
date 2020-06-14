import React, { Component } from 'react';
import Spells from './components/Spells';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import Info from './components/Info';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }


  componentWillMount(){
    this.getChartData();
  }
  

  getChartData(){
    //api call here
    this.setState({
      chartData:{
        labels: ['wizards', 'warlock', 'sprite', 'elf', 'half-elf'],
        datasets:[
            {
                label: 'Profiency',
                data:[
                    200,
                    600,
                    400,
                    300,
                    100
                ],
                backgroundColor:[
                    'red',
                    'blue',
                    'green',
                    'yellow',
                    'orange',
                    'purple'
                ]
            }
        ]
    }
    });
  }

  render(){
  return (
   
    <div className="App">
      <body className="App-header">
        <ResponsiveDrawer />
        <Spells />
        
        
      </body>
    </div>
    
  );
}
}



export default App;
