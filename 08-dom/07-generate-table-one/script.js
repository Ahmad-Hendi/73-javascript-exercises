/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // let table = "";
    // let rows = 1;
    // let cols = 10;
    // for (let r = 0; r < rows.length; r++){
    //     table += "<tr>";
    //     for (c = 1; c <= cols.length; c++){
    //         table += "<td>" + c + "</td>"
    //     }
    //     table += "<tr>";
    // }
    // document.getElementById("target").appendChild(creatTable);
    // let creatTable = document.createElement("<table> "+ table + "</table>");

// your code here
let target = document.getElementById("target");
let creatTable = document.createElement("tabele");
// let rows = document.createElement("tr");
// let cols = document.createElement("td");

target.appendChild(creatTable);

for (let i = 0; i < 10; i++){
    creatTable.appendChild(document.createElement("tr")).appendChild(document.createElement("td"));
}






    

    

})();
