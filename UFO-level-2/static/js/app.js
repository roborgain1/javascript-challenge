// from data.js
var tableData = data;

// View data.js in console
console.log(tableData);

// Reference tbody & thead
var tbody = d3.select("tbody");
var thead = d3.select("thead");
// Create an array of the keys in each dictionary in tableData to access values in the function loop
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Function to iterate through each dictionary inside the array
// Function loop creates a table row and appends each row with table data cells for each column 
var appendData = (arrayOfDicts) => {
    arrayOfDicts.forEach(Dict => {
        var aRow = tbody.append("tr");
        columns.forEach(column => aRow.append("td").text(Dict[column]))
    });
}

appendData(tableData);

// Reference input and filter button
var inputDateTime = d3.select("#datetime");
var inputACity = d3.select("#city");
var button = d3.select("#filter-btn");

// Configure search button
button.on("click", () => {

    d3.event.preventDefault();

    var inputDate = inputDateTime.property("value");
    var inputCity = inputACity.property("value");

    var filteredDate = tableData.filter(tableData => tableData.datetime === inputDate);
    var filteredCity = tableData.filter(tableData => tableData.city === inputCity);
    var filteredCombined = tableData.filter(tableData => tableData.datetime === inputDate && tableData.city === inputCity);

    tbody.html("");

    let response = {
        filteredDate, filteredCity, filteredCombined
    }
    if(response.filteredCombined.length !== 0) {
        appendData(filteredCombined);
    }
    else if(response.filteredCombined.length === 0 && ((response.filteredDate.length !== 0 || response.filteredCity.length !== 0))) {
        appendData(filteredDate) || appendData(filteredCity);
    }
    else {
        tbody.append("tr").append("td").text("No sightings with these parameters.");
    }


})

