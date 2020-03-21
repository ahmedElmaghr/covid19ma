import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardComponent from '../component/CardComponent';
import CoronaMaContainer from '../coronamaroc/main/container/CoronaMaContainer';
import StackedArea from '../stackedarea/StackedArea';
import './Covid19Container.css';
class Covid19Container extends Component {
    iconFontSize = 100 + '%';
    constructor(props) {
        super(props);
        this.state = {
            mapVisible: false,
        }
    }


    render() {
        const { context } = this.props;
        console.log("context", context)
        console.log("kkkkk", window.screen.height);
        return (
            <div className="row">
                <div className="leftside">
                    <div className="group-btn">
                        <Link className="btn" to="/page1" ><i className="fa fa-map" aria-hidden="false" style={{ fontSize: this.iconFontSize }}></i></Link>
                        <Link className="btn" to="/page2"><i class="fa fa-bar-chart" aria-hidden="true" style={{ fontSize: this.iconFontSize }}></i></Link>
                        <Link className="btn" to="/page3"><i class="fa fa-university" aria-hidden="true" style={{ fontSize: this.iconFontSize }}></i></Link>
                    </div>
                </div>
                <div id="dashboard" className="rightside" style={{ height: (window.screen.height - 100) + 'px' }}>
                    {this.buildPageByContext(context)}
                </div>
            </div >
        );
    }
    /**Use the strategy pattern */
    buildPageByContext = (context) => {
        switch (context) {
            case "page1":
                return this.buildPage1();
            case "page2":
                return this.buildPage2();
            case "page3":
                return this.buildPage3();
        }
    }

    isPage1 = (context) => {

        if (context == "page1") {
            return true;
        }
        return false;
    }

    isPage2 = (context) => {

        if (context == "page2") {
            return true;
        }
        return false;
    }

    isPage3 = (context) => {

        if (context == "page3") {
            return true;
        }
        return false;
    }

    buildPage1 = () => {
        return (
            <div className="container" style={{ marginTop: 2 + 'vh' }}>
                <div className="row">
                    <div className="col">
                        <CardComponent level="danger" title="عدد الوفيات" value={3}></CardComponent>
                    </div>
                    <div className="col">
                        <CardComponent level="info" title="الحالات المستبعدة" value={265} ></CardComponent>
                    </div>
                    <div className="col">
                        <CardComponent level="warning" title="عدد الإصابات" value={74}></CardComponent>
                    </div>
                </div>
                <div className="row" style={{ marginTop: 2 + 'vh' }}>
                    <div className="col" >
                        <h2>Dashboard 2 </h2>
                        <svg id="myDV" viewBox="0 0 800 400" style={{ border: 'solid 2px white', backgroundColor: 'darkgrey' }}></svg>
                    </div>
                    <div className="col">
                        <h2>Dashboard 1</h2>
                        <div id="mapMorocco">
                            <CoronaMaContainer visible={true}></CoronaMaContainer>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: 2 + 'vh' }}>
                    <div className="col">
                        <svg id="myDV11" viewBox="0 0 800 400" style={{ border: 'solid 2px white', backgroundColor: 'darkgrey' }}></svg>
                    </div>
                    <div className="col">
                        <svg id="myDV22" viewBox="0 0 800 400" style={{ border: 'solid 2px white', backgroundColor: 'darkgrey' }}></svg>
                    </div>
                </div>
            </div>
        )
    }

    buildPage2 = () => {
        return (
            <div className="container" style={{ marginTop: 2 + 'vh' }}>
            </div>
        )
    }

    buildPage3 = () => {
        return (
            <div className="container" style={{ marginTop: 2 + 'vh' }}>
            </div>
        )
    }
}

export default Covid19Container;