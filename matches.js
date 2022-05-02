// write js code here corresponding to matches.html
//JSON.parse(localStorage.getItem("favourites"))||[]
var favoutriteArr=[]
var cricketArr=JSON.parse(localStorage.getItem("schedule"))||[]

displaydata(cricketArr)

function displaydata(data){
    console.log(data)
data.forEach(function(elem){
    
    var tr=document.createElement("tr");
var td1=document.createElement("td");
td1.innerText=elem.matchName
   
var td2=document.createElement("td");
td2.innerText=elem.matchTeamA
   
var td3=document.createElement("td");
td3.innerText=elem.matchTeamB
   
var td4=document.createElement("td");
td4.innerText=elem.matchDate
   
var td5=document.createElement("td");
td5.innerText=elem.matchVenue;

var td6=document.createElement("td");
td6.innerText="Fabourite";

td6.style.color="blue";
td6.style.cursor="pointer"

td6.addEventListener("click",function(elem){
    favoutrite(elem)
})





tr.append(td1,td2,td3,td4,td5,td6)
document.querySelector('tbody').append(tr);
})

function favoutrite(elem){
     favoutriteArr.push(elem);
     localStorage.setItem("favourites",JSON.stringify(favoutriteArr))
     //console.log(elem)
    }


}