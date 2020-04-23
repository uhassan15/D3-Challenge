//setting parameters and defining the charts margin

var svgHeight = 450;
var svgWidth = 900;

var margin = { top: 15, right: 30, bottom: 60, left: 80};

//define dimensions of the charts area
var height = svgHeight - margin.left - margin.right;
var width = svgWidth - margin.top - margin.bottom;


//select SVG and append body to it and make responsive 

var svg = d3.select("#scatter").append("svg").attr("width", svgWidth).attr("height", svgHeight);
var chartGroup = svg.append("g").attr("transform", 'translate(${margin.left}, ${margin.top})');


//create axis labels 
let xlabelconf = [
    {
        'x' : 0, 
        'y' : 30, 
        'value' : "poverty", 
        'active' : true, 
        'inactive' : false, 
        'text' : "% In Poverty"
    },
    {
        'x' : 0, 
        'y' : 60,                             //come back to this later and see if the parameters need change 
        'value' : "age", 
        'active' : false, 
        'inactive' : true, 
        'text' : "Age"   
    },
    {
        'x' : 0, 
        'y' : 80, 
        'value' : "income", 
        'active' : false, 
        'inactive' : true, 
        'text' : " Household Income"
    }   
];

let ylabelconf = [
    {
        'x' : -height / 2, 
        'y' : -margin.left * 4 / 5, 
        'value' : "obesity", 
        'active' : true, 
        'inactive' : false, 
        'text' : "% Obese"
    },
    {
        'x' : -height / 2, 
        'y' : -margin.left * 3 / 5, 
        'value' : "smokes", 
        'active' : false, 
        'inactive' : true, 
        'text' : "% of Smokers"
    },
    {
        'x' : -height / 2, 
        'y' : -margin.left * 2 / 5, 
        'value' : "healthcare", 
        'active' : false, 
        'inactive' : true, 
        'text' : "% Lacks Healthcare "
    }
];

