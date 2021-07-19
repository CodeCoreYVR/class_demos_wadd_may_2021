var players = process.argv.slice(2);

//console.log(players);

const a = players[0];

console.log(p1);
const b = players[1];

//console.log(player2);
const c = players[2];

//console.log(player3);
const d = players[3];

//console.log(player4);
const e = players[4];

//console.log(player5);
const f = players[5];

//console.log(player6);
var player1={
    name:"a",
      age:22,
    weight:Math.floor(Math.random() * 100) + 1,
    height:"165cm"
}
var player2={
    name:"b",
      age:22,
    weight:Math.floor(Math.random() * 100) + 1,
    height:"185cm"
}
var player3={
    name:"c",
      age:20,
    weight:Math.floor(Math.random() * 100) + 1,
    height:"166cm"
}
var player4={
    name:"d",
      age:24,
    weight:Math.floor(Math.random() * 100) + 1,
    height:"186cm"
}
var player5={
    name:"e",
      age:26,
    weight:Math.floor(Math.random() * 100) + 1,
    height:"189cm"
}
var player6={
    name:"f",
      age:26,
weight:Math.floor(Math.random() * 100) + 1,
height:"185cm"}
const Team1=[player1,player2,player3];
const Team2=[player5,player4,player6];
//console.log(Team1)
const weightTeam1=player1.weight+player2.weight+player3.weight;
const weightTeam2=player4.weight+player5.weight+player6.weight;
const diff=weightTeam2-weightTeam1;
const diff1= weightTeam1-weightTeam2;
if(weightTeam1>weightTeam2){
    console.log("Team 1 wins by:"+" "+diff1+" "+"kgs")
    
}
else{
    console.log("Team 2 wins by:"+" "+diff+" "+"kgs")
}