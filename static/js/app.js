// Assign the data from `data.js` to a descriptive variable
var ufo = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
// console.log(data);

ufo.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
// Select the button
var button = d3.select("#filter-btn");

// Select the form
// var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
// form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var datetimeInput = d3.select("#datetime");
    var cityInput = d3.select("#city");
    var shapeInput = d3.select("#shape");
  
    // Get the value property of the input element
    var dateValue = datetimeInput.property("value");
    var cityValue = cityInput.property("value");
    var shapeValue = shapeInput.property("value");
  
    console.log(`Date Value is: ${dateValue}`);
    console.log(`City Value is: ${cityValue}`);
    console.log(`Shape Value is: ${shapeValue}`);
    // console.log(ufo);

    // var filteredData = ufo.filter(u => u.datetime === dateValue);

    if (dateValue != '' && cityValue != '' && shapeValue != '') {
        var filteredData = ufo.filter(u => u.datetime === dateValue && u.city === cityValue && u.shape === shapeValue);
        }
      else if (dateValue != '' && cityValue != '' && shapeValue === '') {
          var filteredData = ufo.filter(u => u.datetime === dateValue && u.city === cityValue);
        }
      else if (dateValue != '' && cityValue === '' && shapeValue != '') {
          var filteredData = ufo.filter(u => u.datetime === dateValue && u.shape === shapeValue);
        }
      else if (dateValue != '' && cityValue === '' && shapeValue === '') {
          var filteredData = ufo.filter(u => u.datetime === dateValue);
        }
      else if (dateValue === '' && cityValue != '' && shapeValue != '') {
        var filteredData = ufo.filter(u => u.city === cityValue && u.shape === shapeValue);
        }
      else if (dateValue === '' && cityValue != '' && shapeValue === '')  {
          var filteredData = ufo.filter(u => u.city === cityValue);
        }
      else if (dateValue === '' && cityValue === '' && shapeValue != '')  {
          var filteredData = ufo.filter(u => u.shape === shapeValue);
        }

    // Then, select the tbody element
    var table = d3.select("tbody");

    // remove any children from the table to
    table.html("");

    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

  };