import React, { Component } from 'react';
import CanvasJSReact from '../../canvas-reactjs/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class LineChart extends Component {
	render() {
		const {data} = this.props;
		if(!data){
			return <div/>
		}
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "مقارنة عدد الإصابات مع دول المنطقة"
			},
			axisY: {
				title: "عدد الحالات",
				includeZero: false,
			},
			axisX: {
				title: "يوم",
				prefix: "",
				interval: 7
			},
			data: [{
				type: "spline",
				showInLegend: true,
				name:"morocco",
				toolTipContent: "Day {label}: {y}",
				dataPoints: this.getCasePointByCountryName(data,"Morocco")
				
			},
			{
				type: "spline",
				showInLegend: true,
				name:"algeria",
				toolTipContent: "Day {label}: {y}",
				dataPoints: this.getCasePointByCountryName(data,"Algeria")
			},
			{
				type: "spline",
				showInLegend: true,
				name:"tunisia",
				toolTipContent: "Day {label}: {y}",
				dataPoints: this.getCasePointByCountryName(data,"Tunisia")
			},
			{
				type: "spline",
				showInLegend: true,
				name:"egypt",
				toolTipContent: "Day {label}: {y}",
				dataPoints: this.getCasePointByCountryName(data,"Egypt")
			}

		]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}

	getCasePointByCountryName = (data,countryName)=>{
		console.log(data)
		console.log(countryName)
		var returnedData = [];
		var countryData = data.filter((d)=>{
			return d.country == countryName
		})
		var cases = countryData[0].timeline.cases;
		var keys = Object.keys(cases).slice(cases.lenght)
		var values = Object.values(cases).slice(cases.lenght)

		values.forEach((d,i)=>{
			returnedData.push(
				{
					y:d,label:keys[i]
				}
			)
		})
		console.log(returnedData)
		return returnedData;
	}

	getMorrocanDeathsPoint = (data)=>{
		var returnedData = [];
		var morrocanData = data.filter((d)=>{
			return d.country == "morocco"
		})
		var deaths = morrocanData[0].timeline.deaths;
		var keys = Object.keys(deaths).slice(35,deaths.lenght)
		var values = Object.values(deaths).slice(35,deaths.lenght)

		values.forEach((d,i)=>{
			returnedData.push(
				{
					y:d,label:keys[i]
				}
			)
		})
		return returnedData;
	}

	getAlgerianCasesPoint = (data)=>{
		var returnedData = [];
		var algeria = data.filter((d)=>{
			return d.country == "algeria"
		})
		var cases = algeria[0].timeline.cases;
		var keys = Object.keys(cases).slice(35,cases.lenght)
		var values = Object.values(cases).slice(35,cases.lenght)

		values.forEach((d,i)=>{
			returnedData.push(
				{
					y:d,label:keys[i]
				}
			)
		})
		return returnedData;
	}
}

export default LineChart;                           