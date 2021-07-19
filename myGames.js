var players = process.argv.slice(2);

//console.log(players);

const p1 = players[0];

console.log(p1);
const p2 = players[1];

//console.log(player2);
const p3 = players[2];

//console.log(player3);
const p4 = players[3];

//console.log(player4);
const p5 = players[4];

//console.log(player5);
const p6 = players[5];

//console.log(player6);
const player1={
    name: p1,
    age:23,
    weight:Math.floor(Math.random() * 100) + 1,
    height:23
}
//console.log(player1)
const player2={
    name: p2,
    age:24,
    weight:Math.floor(Math.random() * 100) + 1,
    height:29
}
const player3={
    name: p3,
    age:23,
    weight:Math.floor(Math.random() * 100) + 1,
    height:23
}
const player4={
    name: p4,
    age:23,
    weight:Math.floor(Math.random() * 100) + 1,
    height:23
}
const player5={
    name: p5,
    age:23,
    weight:Math.floor(Math.random() * 100) + 1,
    height:23
}
const player6={
    name: p6,
    age:23,
    weight:Math.floor(Math.random() * 100) + 1,
    height:23
}
const Team1=[player1,player2,player3];
const Team2=[player5,player4,player6];
//console.log(Team1)
const wTeam1=player1.weight+player2.weight+player3.weight;
const wTeam2=player4.weight+player5.weight+player6.weight;
const sub= wTeam2-wTeam1;
const sub1= wTeam1-wTeam2;
if(wTeam1>wTeam2){
    console.log("Team 1 wins by:"+" "+sub1+" "+"pounds")
    
}
else{
    console.log("Team 2 wins by:"+" "+sub+" "+"pounds")
}
