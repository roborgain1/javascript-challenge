// from data.js
var tableData = data;

// View data.js in console
console.log(tableData);

// Reference tbody, input, and button

var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var appendData = (arrayOfDicts) => {
    arrayOfDicts.forEach(Dict => {
        var aRow = tbody.append("tr");
        columns.forEach(column => aRow.append("td").text(Dict[column]))
    });
}

appendData(tableData);

