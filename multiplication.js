function getRowsDesired() {
    return (Number(document.getElementById('rows').value))
}

getRowsDesired()

function getColumnsDesired() {
    return Number(document.getElementById('cols').value)
}

function createWithHtmlTable(rows, cols) {
    let string
    if(rows && cols) {
        string = "<table>\n"

        //first "for loop to build the rows of the table
        for (let row = 1; row <= rows; row++) {
            string += "<tr>\n"

            for (let col = 1; col <= cols; col++) {
                string += "<td>\n"
                string += row * col
                string += "</td>\n"
            }
            string += "</tr>\n"
        }
        string += "</table>\n"
    } else {
        string = "provide some inputs"
    }

    document.getElementById('output').innerHTML = string
}