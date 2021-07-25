var players = process.argv.slice(2);

//console.log(players);

const aman= players[0];

console.log(p1);
const sunny= players[1];

//console.log(player2);
const raman= players[2];

//console.log(player3);
const sawan= players[3];

//console.log(player4);
const preet = players[4];

//console.log(player5);
const rajan = players[5];

//console.log(player6);
var player1={
    name:"aman",
      age:20,
    weight:Math.floor(Math.random() * 100) + 1,
    height:"180cm"
}
var player2={
    name:"sunny",
      age:20,
    weight:Math.floor(Math.random() * 100) + 1,
    height:"170cm"
}
var player3={
    name:"raman",
      age:25,
    weight:Math.floor(Math.random() * 100) + 1,
    height:"173cm"
}
var player4={
    name:"sawan",
      age:22,
    weight:Math.floor(Math.random() * 100) + 1,
    height:"171cm"
}
var player5={
    name:"preet",
      age:24,
    weight:Math.floor(Math.random() * 100) + 1,
    height:"180cm"
}
var player6={
    name:"rajan",
      age:20,
weight:Math.floor(Math.random() * 100) + 1,
height:"179cm"}
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