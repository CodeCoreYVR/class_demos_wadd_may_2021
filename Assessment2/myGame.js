//(a) Write a script that takes 6 input from the user, those inputs will be the name of players. 
//(b) Create an object of a player named player1, player2, ... player6. Each player will have a property 
// of name, age, weight (randomly generated between 0 to 100), and height. 
//(c) Create Array Team 1 and Team 2. Each team will have three players (the object) that you 
//created above - 10% Marks
//(d) Add the weight of all the players in both teams individually and then compare the total
// weight of Team 1 with Team 2 and the team with the highest weight will WIN!!.

var player = process.argv.slice(2);
//console.log(player);

const player1 = player[0];
//console.log(player1);

const player2 = player[1];
//console.log(player2);

const player3 = player[2];
//console.log(player3);

const player4 = player[3];
//console.log(player4);

const player5 = player[4];
//console.log(player5);

const player6 = player[5];
//console.log(player6);

const p1={
    name: player1,
    age:24,
    weight:Math.floor(Math.random() * 100) + 1,
    height:24
}
//console.log(player1)
const p2={
    name: player2,
    age:23,
    weight:Math.floor(Math.random() * 100) + 1,
    height:29
}
const p3={
    name: player3,
    age:23,
    weight:Math.floor(Math.random() * 100) + 1,
    height:23
}
const p4={
    name: player4,
    age:24,
    weight:Math.floor(Math.random() * 100) + 1,
    height:24
}
const p5={
    name: player5,
    age:23,
    weight:Math.floor(Math.random() * 100) + 1,
    height:23
}
const p6={
    name: player6,
    age:23,
    weight:Math.floor(Math.random() * 100) + 1,
    height:23
}
const Team1=[p1,p2,p3];
const Team2=[p4,p5,p6];
//console.log(Team1)

const weightOfTeam1 = p1.weight+p2.weight+p3.weight;
const weightOfTeam2 = p4.weight+p5.weight+p6.weight;

const sub= weightOfTeam2 - weightOfTeam1;
const sub1= weightOfTeam1 - weightOfTeam2;

if(weightOfTeam1>weightOfTeam2){
    console.log("Team 1 wins by:"+" "+sub1+" "+"pounds")
    
}
else{
    console.log("Team 2 wins by:"+" "+sub+" "+"pounds")
}