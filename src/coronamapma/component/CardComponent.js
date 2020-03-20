import React, { Component } from 'react';
import './CardComponent.css'
class CardComponent extends Component {
    
    render() {
        const {level} = this.props;
        console.log("level",level)
        return (
            <div className={level}>
                <h4 className={level+'-h3'}>{this.props.title}</h4>
                <p className={level+'-p'}>{this.props.value}</p>
            </div>
        );
    }
 
}

export default CardComponent;