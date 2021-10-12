$(document).ready(function() {
    $("#input").validate({
        rules:
            {
                num: {required: true, number: true, min: 2, max: 10},
            }
    });
})

function process() {
    if ($("#input").valid()) {
        var table = "<table id='square'>"
        var number = parseInt(document.getElementById("num").value);
        for (let row = 0; row < number; row++) {
            table += "<tr>";
            for (let column = 0; column < number; column++) {

                if (row===0 || row===number-1 || column===0 || column===number-1) {
                    table += "<td>*</td>";
                }
                else {
                    table += "<td> </td>";
                }
            }
            table += "</tr>";
        }
            table += "</table>";
        return document.getElementById("output").innerHTML = table;
}}
