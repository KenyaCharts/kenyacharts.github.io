/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv-GDPline");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: true,
  panY: true,
  wheelX: "panX",
  wheelY: "zoomX",
  pinchZoomX:true
}));


// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
  behavior: "none"
}));
cursor.lineY.set("visible", false);


// The data
var data = [
  {
    "Year": 2000,
    "Kenya": 100,
    "Sub-Saharan Africa": 100,
    "United States": 100,
    "World": 100
  },
  {
    "Year": 2001,
    "Kenya": 103.7799065,
    "Sub-Saharan Africa": 104.2706349,
    "United States": 100.9543387,
    "World": 101.9968433
  },
  {
    "Year": 2002,
    "Kenya": 104.3474368,
    "Sub-Saharan Africa": 110.818246,
    "United States": 102.6664667,
    "World": 104.3722528
  },
  {
    "Year": 2003,
    "Kenya": 107.4073999,
    "Sub-Saharan Africa": 115.3417878,
    "United States": 105.5372358,
    "World": 107.6608623
  },
  {
    "Year": 2004,
    "Kenya": 112.8897955,
    "Sub-Saharan Africa": 122.8985814,
    "United States": 109.6031133,
    "World": 112.4986701
  },
  {
    "Year": 2005,
    "Kenya": 119.5578188,
    "Sub-Saharan Africa": 130.2767627,
    "United States": 113.4208312,
    "World": 117.0471513
  },
  {
    "Year": 2006,
    "Kenya": 127.2961918,
    "Sub-Saharan Africa": 138.1679714,
    "United States": 116.5771182,
    "World": 122.2864487
  },
  {
    "Year": 2007,
    "Kenya": 136.0169099,
    "Sub-Saharan Africa": 146.6717868,
    "United States": 118.9209099,
    "World": 127.7617108
  },
  {
    "Year": 2008,
    "Kenya": 136.3328537,
    "Sub-Saharan Africa": 154.2246375,
    "United States": 119.0662175,
    "World": 130.4017728
  },
  {
    "Year": 2009,
    "Kenya": 140.8412992,
    "Sub-Saharan Africa": 158.9202551,
    "United States": 115.9706288,
    "World": 128.6728645
  },
  {
    "Year": 2010,
    "Kenya": 152.1909581,
    "Sub-Saharan Africa": 168.3332546,
    "United States": 119.1121069,
    "World": 134.5046779
  },
  {
    "Year": 2011,
    "Kenya": 159.9848185,
    "Sub-Saharan Africa": 175.3770306,
    "United States": 120.9582195,
    "World": 138.9716109
  },
  {
    "Year": 2012,
    "Kenya": 167.2940123,
    "Sub-Saharan Africa": 180.2083475,
    "United States": 123.7168986,
    "World": 142.7337974
  },
  {
    "Year": 2013,
    "Kenya": 173.6475853,
    "Sub-Saharan Africa": 189.3014474,
    "United States": 125.9956097,
    "World": 146.7586593
  },
  {
    "Year": 2014,
    "Kenya": 182.3648868,
    "Sub-Saharan Africa": 198.4894982,
    "United States": 128.8781069,
    "World": 151.2434863
  },
  {
    "Year": 2015,
    "Kenya": 191.4242658,
    "Sub-Saharan Africa": 204.1649253,
    "United States": 132.3660248,
    "World": 155.9033879
  },
  {
    "Year": 2016,
    "Kenya": 199.4899599,
    "Sub-Saharan Africa": 206.7655809,
    "United States": 134.5731913,
    "World": 160.2669618
  },
  {
    "Year": 2017,
    "Kenya": 207.1463012,
    "Sub-Saharan Africa": 211.8318531,
    "United States": 137.6087325,
    "World": 165.6831675
  },
  {
    "Year": 2018,
    "Kenya": 218.8458132,
    "Sub-Saharan Africa": 217.5373421,
    "United States": 141.6253345,
    "World": 171.1120189
  },
  {
    "Year": 2019,
    "Kenya": 230.0379358,
    "Sub-Saharan Africa": 223.0884219,
    "United States": 144.8669541,
    "World": 175.5863965
  },
  {
    "Year": 2020,
    "Kenya": 229.4624828,
    "Sub-Saharan Africa": 218.6446739,
    "United States": 139.9348288,
    "World": 169.8425813
  },
  {
    "Year": 2021,
    "Kenya": 246.7119931,
    "Sub-Saharan Africa": 227.6677446,
    "United States": 147.8706829,
    "World": 179.6969442
  }
];


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "Year",
  startLocation: 0.5,
  endLocation: 0.5,
  renderer: am5xy.AxisRendererX.new(root, {}),
  tooltip: am5.Tooltip.new(root, {})
}));

xAxis.data.setAll(data);

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  renderer: am5xy.AxisRendererY.new(root, {})
}));

// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/

function createSeries(name, field) {
  var series = chart.series.push(am5xy.LineSeries.new(root, {
    name: name,
    xAxis: xAxis,
    yAxis: yAxis,
    stacked:false,
    valueYField: field,
    categoryXField: "Year",
    tooltip: am5.Tooltip.new(root, {
      pointerOrientation: "horizontal",
      labelText: "[bold]{name}[/]\n{categoryX}: {valueY}"
    })
  }));

  series.fills.template.setAll({
    fillOpacity: 0.5,
    visible: false
  });

  series.data.setAll(data);
  series.appear(1000);
}

createSeries("Kenya", "Kenya");
createSeries("Sub-Saharan Africa", "Sub-Saharan Africa");
createSeries("United States", "United States");
createSeries("World", "World");

// Add scrollbar
// https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
chart.set("scrollbarX", am5.Scrollbar.new(root, {
  orientation: "horizontal"
}));

// Create axis ranges
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/axis-ranges/
var rangeDataItem = xAxis.makeDataItem({
  category: "2000",
  endCategory: "2021"
});

var range = xAxis.createAxisRange(rangeDataItem);

rangeDataItem.get("grid").setAll({
  stroke: am5.color('white'),
  strokeOpacity: 0,
  strokeDasharray: [3]
});

rangeDataItem.get("axisFill").setAll({
  fill: am5.color(0x00ff33),
  fillOpacity: 0.1,
  visible:true
});

rangeDataItem.get("label").setAll({
  inside: true,
  text: "Indexed GDP (constant 2015 $US)",
  rotation: 90,
  centerX: am5.p100,
  centerY: am5.p100,
  location: 0,
  paddingBottom: 10,
  paddingRight: 15
});










// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
chart.appear(1000, 100);