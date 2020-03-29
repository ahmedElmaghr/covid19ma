import React, { Component } from 'react';
import './CardComponent.css';
class CardComponent extends Component {

    render() {
        const { level } = this.props;
        console.log("level", level)
        return (
            <div className={level}>
                <h4 className={level + '-h3'}>{this.getIconByLevel(level)}  {this.props.title}</h4>
                <p className={level + '-p'}>{this.props.value}</p>
            </div>
        );
    }
    getIconByLevel = (level) => {
        switch (level) {
            case 'danger':
                return <i class="fa fa-heartbeat" aria-hidden="true"></i>
                break;
            case 'good':
                return <i class="fa fa-smile-o" aria-hidden="true"></i>
                break;
            case 'warning':
                return <i class="fa fa-ambulance" aria-hidden="true"></i>
                break;
            default:
                break;
        }
    }
}

export default CardComponent;