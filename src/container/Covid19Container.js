import React, { Component } from 'react';
import './Covid19Container.css'
import Container from '../coronamapglobal/main/container/Container';
import { Link } from 'react-router-dom';
import CoronaMaContainer from '../coronamapma/container/CoronaMaContainer';
class Covid19Container extends Component {
    iconFontSize = 1.5+'rem';
    constructor(props) {
        super(props);
        this.state = {
            mapVisible: false,
        }
    }


    render() {
        const { context } = this.props;
        console.log("context", context)
        return (
            <div className="row">
                <div className="leftside">
                    <div className="group-btn">
                        <Link className="btn" to="/covid19wordwide" ><i className="fa fa-map" aria-hidden="false" style={{ fontSize: this.iconFontSize }}></i></Link>
                        <Link className="btn" to="/covid19ma"><i class="fa fa-bar-chart" aria-hidden="true" style={{ fontSize: this.iconFontSize }}></i></Link>
                        <Link className="btn" to="/infos"><i class="fa fa-university" aria-hidden="true" style={{ fontSize: this.iconFontSize }}></i></Link>
                    </div>
                </div>
                <div id="dashboard" className="rightside">
                    {/* Map worldwide container*/}
                    <Container visible={this.iscovid19wordwide(context)}></Container>
                    <CoronaMaContainer visible={this.iscovid19ma(context)} ></CoronaMaContainer>
                </div>
            </div >
        );
    }

    iscovid19wordwide = (context) => {

        if (context == "covid19wordwide") {
            return true;
        }
        return false;
    }

    iscovid19ma = (context) => {

        if (context == "covid19ma") {
            return true;
        }
        return false;
    }

    clickFirstButton = () => {
        console.log("first button clicked : render component map")
        this.setState(
            {
                mapVisible: true
            }
        );
    }

    clickSecondButton = () => {
        console.log("second button clicked")
        this.setState(
            {
                mapVisible: false
            }
        );
    }

    clickThirdButton = () => {
        console.log("third button clicked")

    }
}

export default Covid19Container;