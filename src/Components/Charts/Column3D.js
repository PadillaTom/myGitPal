import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";

// Charts
import SelectedChart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, SelectedChart, FusionTheme);

const ChartComponent = ({data}) => {
    // *** Chart Config ***    
    const chartConfigs = {
        type: "column3d", // The chart type
        width: "100%", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
        // Chart Configuration
        chart: {
            // Caption
            caption: "Most Popular",            
            captionFont: "'Montserrat', sans-serif",
            captionFontColor: "#1d1d1d",
            // Chart
            theme: "fusion",   
            decimals: 0,            
            paletteColors: "#b13f29,#e7ddd2,#ddb889,#709693,#e3bdb8",
            // Axis            
            yAxisName: "Stars",
            xAxisName: "Repos",
            xAxisNameFontSize: "1.5rem",
            yAxisNameFontSize: "1.5rem",
            // Labels
            labelFont: "'Lora', serif",    
            labelFontColor: "#4a4c53" ,   
            // ToolTip: Hover line
            showToolTip: false, 
      },
        // Data passed as Props:
        data: data
    }
  };
    return (<ReactFC {...chartConfigs} />)
}
export default ChartComponent;