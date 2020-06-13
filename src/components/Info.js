import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class Info extends Component{
constructor(props){
    super(props);
    this.state={
        chartData:props.chartData
    }
}

static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    category: 'Classes'
}

    render(){
        return(
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:"Profiencies" + " " + this.props.category,
                            fontSize:25
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                        }
                    }}
                    height= "100px" 
                />
{/* 
                <Line
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:"Profiencies" + " " + this.props.category,
                            fontSize:25
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                        }
                    }}
                    height="200px" 
                />

                <Pie
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:"Profiencies" + " " + this.props.category,
                            fontSize:25
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                        }
                    }}
                    height="200px" 
                /> */}
            </div>
        )
    }
}
   
export default Info;