
	const getCasePointByCountryName = (data,countryName)=>{
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
		return returnedData;
	}

	const getMorrocanDeathsPoint = (data)=>{
		var returnedData = [];
		var morrocanData = data.filter((d)=>{
			return d.country == "Morocco"
		})
		var deaths = morrocanData[0].timeline.deaths;
		var keys = Object.keys(deaths).slice(deaths.lenght)
		var values = Object.values(deaths).slice(deaths.lenght)

		values.forEach((d,i)=>{
			returnedData.push(
				{
					y:d,label:keys[i]
				}
			)
		})
		return returnedData;
  }
  
	const getMorrocanRecoveredPoint = (data)=>{
		var returnedData = [];
		var morrocanData = data.filter((d)=>{
			return d.country == "Morocco"
		})
		var recovered = morrocanData[0].timeline.recovered;
		var keys = Object.keys(recovered).slice(recovered.lenght)
		var values = Object.values(recovered).slice(recovered.lenght)

		values.forEach((d,i)=>{
			returnedData.push(
				{
					y:d,label:keys[i]
				}
			)
		})
		return returnedData;
  }
  
const buildMoroccoLineChartData = (data) => {
    return {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light1", // "light1", "dark1", "dark2"
      title: {
        text: "مبيان تطو الإصابات ",
      },
      axisY: {
        title: "عدد الحالات",
        includeZero: false,
      },
      axisX: {
        title: "يوم",
        prefix: "",
        interval: 7,
      },
      data: [
        {
          type: "column",
          showInLegend: true,
          name: "الوفيات",
          color:"black",
          toolTipContent: "Day {label}: {y}",
          dataPoints: getMorrocanDeathsPoint(data,
            "Morocco"),
        },
        {
          type: "column",
          showInLegend: true,
          name: "حالات الشفاء",
          color:"green",
          toolTipContent: "Day {label}: {y}",
          dataPoints: getMorrocanRecoveredPoint(data,
            "Morocco"),
        },
        {
          type: "line",
          showInLegend: true,
          name: "الإصابات",
          color:"red",
          toolTipContent: "Day {label}: {y}",
          dataPoints: getCasePointByCountryName(
            data,
            "Morocco"
          ),
        },


      ],
    };
  };

export default{getCasePointByCountryName,getMorrocanDeathsPoint,buildMoroccoLineChartData}