/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.




(function numberOfFridaythe13thsIn() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August","September", "october", "Novermber", "December" ]
    
    document.getElementById("run").addEventListener("click", () => {   
    let d = new Date();
    let inputYear = document.getElementById("year").value; 
    
    let resualt = [];

    for (let month = 0; month < 12; month++){
        let d = new Date(inputYear, month, 13); // pour chaque mois de l'anee on est en train de faire une nouvelle date avec seulment le mois qui a le 13  

        if (d.getDay() == 5){
            let elem = monthNames[d.getMonth()] + "" + d.getFullYear() + " has a Friday 13th ";
            resualt.push(elem);
        }
    }    
    alert(resualt);

    // your code here
});
})();




// (function() {
//     document.getElementById("run").addEventListener("click",function(){
//         let date=new Date;
//         let months=["January","February","March","April","Mai","June","July","August","September","October","November","December"];
//         let monthsList="";
//         date.setFullYear(document.getElementById("year").value);
//         date.setDate(13);
//         for (let i=0; i<12;i++){
//             date.setMonth(i);
//             if (date.getDay()===5){
//                 monthsList+=months[i]+" ";
//             }
//         }
//         alert(monthsList);
//     })
// })();
