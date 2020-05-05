
  	const getActiveCasePointByCountryName = (data,countryName)=>{
      var returnedData = [];
      var countryData = data.filter((d)=>{
        return d.country == countryName
      })
      var cases = countryData[0].timeline.cases;
      var deaths = countryData[0].timeline.deaths;
      var recovered = countryData[0].timeline.recovered;
      var keys = Object.keys(cases).slice(cases.lenght)
      var values = Object.values(cases).slice(cases.lenght)
      values.forEach((d,i)=>{
        var deathTemp = deaths[keys[i]];
        var recoveredTemp = recovered[keys[i]];
        var activeCases = d-recoveredTemp-deathTemp;
        returnedData.push({
          y: activeCases,
          label: keys[i],
        });
      })
      return returnedData;
    }

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
        text: "مقارنة حالات الشفاء مع الوفيات",
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
          type: "line",
          showInLegend: true,
          name: "الوفيات",
          color:"black",
          toolTipContent: "Day {label}: {y}",
          dataPoints: getMorrocanDeathsPoint(data,
            "Morocco"),
        },
        {
          type: "line",
          showInLegend: true,
          name: "حالات الشفاء",
          color:"green",
          toolTipContent: "Day {label}: {y}",
          dataPoints: getMorrocanRecoveredPoint(data,
            "Morocco"),
        }
      ],
    };
  };
  const buildMoroccoActiveCasesChartData = (data) => {
    return {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light1", // "light1", "dark1", "dark2"
      title: {
        text: "مقارنة الإصابات مع حالات الشفاء",
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
          type: "line",
          showInLegend: true,
          name: "الحالات المؤكدة",
          color:"orange",
          toolTipContent: "Day {label}: {y}",
          dataPoints: getActiveCasePointByCountryName(
            data,
            "Morocco"
          ),
        },
        {
          type: "line",
          showInLegend: true,
          name: "حالات الشفاء",
          color:"green",
          toolTipContent: "Day {label}: {y}",
          dataPoints: getMorrocanRecoveredPoint(data,
            "Morocco"),
        }


      ],
    };
  };
export default {
  getCasePointByCountryName,
  getActiveCasePointByCountryName,
  getMorrocanDeathsPoint,
  buildMoroccoLineChartData,
  buildMoroccoActiveCasesChartData
};