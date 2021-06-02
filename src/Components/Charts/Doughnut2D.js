import React from 'react'
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";


// Charts
import SelectedChart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
ReactFC.fcRoot(FusionCharts, SelectedChart, FusionTheme);

const Doughnut2D = ({data}) => {
 // *** Chart Config ***    
 const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
    // Chart Configuration
    chart: {
        // Caption
        caption: "Stars Per Language",            
        captionFont: "'Montserrat', sans-serif",
        captionFontColor: "#ffffff",
        // Chart
        theme: "candy",   
        decimals: 0,
        doughnutRadius: "45%",
        paletteColors: "#b13f29,#e7ddd2,#ddb889,#709693,#e3bdb8",
        showPercentValues: 0,
        slicingDistance: "12",
        // Labels
        labelFont: "'Lora', serif",    
        labelFontColor: "#fcfdff" ,  
        // Legend
        legendItemFontColor: "#fcfdff",
        legendItemFontBold: false,
        // ToolTip: Hover line
        showToolTip: false, 
  },
    // Data passed as Props:
    data: data
}
};
return (<ReactFC {...chartConfigs} />)
}

export default Doughnut2D
