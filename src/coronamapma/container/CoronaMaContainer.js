import React, { Component } from 'react';
import './CoronaMaContainer.css'
class CoronaMaContainer extends Component {

    render() {
        if (this.props && !this.props.visible) {
            return "";
        }
        return (
            <div className="container">
                draw charts to fit this container
            </div>
        );
    }
}

export default CoronaMaContainer;