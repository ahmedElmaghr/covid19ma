import React, { Component } from 'react';
import CanvasJSReact from '../../canvas-reactjs/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class DoughnutChart extends Component {
	shouldComponentUpdate(a){
		console.log("shouldComponentUpdate",a)
		return true;
	}
	render() {
		if (!this.props.data) {
            return <div />
        }
		const options = {
			animationEnabled: true,
			title: {
				text: "إحصائيات المغرب"
			},
			subtitles: [{
				text: "مجموع الحالات " + this.props.data.cases,
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				// yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "عدد الإصابات", y: this.props.data.active ,color:'orange'},
					{ name: "حالات الشفاء", y: this.props.data.recovered ,color:'green'},
					{ name: "عدد الوفيات", y: this.props.data.deaths ,color:'red'}
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref} 
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default DoughnutChart;