import React, { Component, useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './CoronaMaContainer.css'
import CardComponent from '../component/CardComponent';
class CoronaMaContainer extends Component {

    render() {
        if (this.props && !this.props.visible) {
            return "";
        }
        return (

            <div className="container">
                <div class="row">
                    <CardComponent level="danger" title="عدد الوفيات" value ={2}></CardComponent>
                    <CardComponent level="info" title="الحالات المستبعدة" value ={265} ></CardComponent>
                    <CardComponent level="warning" title="عدد الإصابات" value ={62}></CardComponent>
                </div>
            </div>
        );
    }
}

export default CoronaMaContainer;