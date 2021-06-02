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
        type: "pie3d", // The chart type
        width: "100%", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
        // Chart Configuration
        chart: {
            // Caption
            caption: "Top 5 Languages",            
            captionFont: "'Montserrat', sans-serif",
            captionFontColor: "#1d1d1d",
            // Chart
            theme: "fusion",   
            decimals: 0,
            pieRadius: "60%",
            paletteColors: "#b13f29,#e7ddd2,#ddb889,#709693,#e3bdb8",
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