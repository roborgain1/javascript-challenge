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
var button = d3.select("#filter-btn");

// Configure search button
button.on("click", () => {

    d3.event.preventDefault();

    var inputDate = inputDateTime.property("value");
    var filteredTableData = tableData.filter(tableData => tableData.datetime === inputDate);
    tbody.html("");

        if(filteredTableData.length !== 0) {
            appendData(filteredTableData);
        }
        else {
            thead.html("");
            tbody.append("tr").append("td").text("There are no sightings on this date.");
        }
})

