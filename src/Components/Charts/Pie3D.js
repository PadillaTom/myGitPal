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
        width: "700", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
        // Chart Configuration
        chart: {
            caption: "Languages",
            theme: "fusion",   
            pieRadius: "50%",
      },
        // Data passed as Props:
        data: data
    }
  };
    return (<ReactFC {...chartConfigs} />)
}
export default ChartComponent;