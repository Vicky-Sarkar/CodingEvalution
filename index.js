// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myFunction);
var cricketArr=JSON.parse(localStorage.getItem("schedule"))||[]
//
function myFunction(){
    event.preventDefault();

    var obj={
matchName:masaiForm.matchNum.value,
matchTeamA:masaiForm.teamA.value,
matchTeamB:masaiForm.teamB.value,
matchDate:masaiForm.date.value,
matchVenue:masaiForm.venue.value,
    }
    cricketArr.push(obj);

    localStorage.setItem("schedule",JSON.stringify(cricketArr))
window.location.href="./matches.html";
//console.log(cricketArr)
}