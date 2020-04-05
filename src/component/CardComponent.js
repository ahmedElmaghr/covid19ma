import React, { Component } from 'react';
import './CardComponent.css';
class CardComponent extends Component {

    render() {
        const { level } = this.props;
        return (
            // <div className={level}>
            //     <h4 className={level + '-h3'}>{this.getIconByLevel(level)}  {this.props.title}</h4>
            //     <p className={level + '-p'}>{this.props.value}</p>
            // </div>
            <div >
             <div className="info">نظرة عامة</div>
             <div className="info-p">
                 <div>
                     <div>عدد الإصابات</div>
                     <div></div>
                 </div>
                 <div>حالات الشفاء</div>
                 <div>عدد الوفيات</div>
             </div>
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