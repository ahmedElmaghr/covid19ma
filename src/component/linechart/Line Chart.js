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
				dataPoints: this.getCasePointByCountryName(data,"morocco")
				
			},
			{
				type: "spline",
				showInLegend: true,
				name:"algeria",
				toolTipContent: "Day {label}: {y}",
				dataPoints: this.getCasePointByCountryName(data,"algeria")
			},
			{
				type: "spline",
				showInLegend: true,
				name:"tunisia",
				toolTipContent: "Day {label}: {y}",
				dataPoints: this.getCasePointByCountryName(data,"tunisia")
			},
			{
				type: "spline",
				showInLegend: true,
				name:"egypt",
				toolTipContent: "Day {label}: {y}",
				dataPoints: this.getCasePointByCountryName(data,"egypt")
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
		var returnedData = [];
		var countryData = data.filter((d)=>{
			return d.country == countryName
		})
		var cases = countryData[0].timeline.cases;
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
	// 	[
    //   { x: 1, y: 1 },
    //   { x: 2, y: 2 },
    //   { x: 3, y: 10 },
    //   { x: 4, y: 12 }
    // ];
	}

	getMorrocanDeathsPoint = (data)=>{
		var returnedData = [];
		var morrocanData = data.filter((d)=>{
			return d.country == "morocco"
		})
		var deaths = morrocanData[0].timeline.deaths;
		console.log("deaths",deaths)
		var keys = Object.keys(deaths).slice(35,deaths.lenght)
		var values = Object.values(deaths).slice(35,deaths.lenght)
		console.log("values",values)

		values.forEach((d,i)=>{
			console.log("keys",i,keys[i])
			returnedData.push(
				{
					y:d,label:keys[i]
				}
			)
		})
		console.log("returnedData",returnedData)
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
		console.log("values",values)

		values.forEach((d,i)=>{
			console.log("keys",i,keys[i])
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