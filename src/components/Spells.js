import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Spells extends React.Component{

    state = {
        loading: true,
        spell: null,
    };

   async componentDidMount(){
        const url ="https://www.dnd5eapi.co/api/classes/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({spell: data, loading: false});
    }

    render(){
        if (this.state.loading) {
            return <div>conjuring...</div>
        }

        if (!this.state.spell){
            return <div>conuration failed</div>
        }

        return (
            <div>
                <div>{this.state.count}</div>
            </div>
        );
    }
}

export default Spells;