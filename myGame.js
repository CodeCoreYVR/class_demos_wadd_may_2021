var players = process.argv.slice(2);

const gamer1 = players[0];

console.log(gamer1);
const gamer2 = players[1];


const gamer3 = players[2];


const gamer4 = players[3];


const gamer5 = players[4];


const gamer6 = players[5];


const player1={
    name: gamer1, 
    age:27,
    weight:Math.floor(Math.random() * 100) + 1,
    height:44
}

const player2={
    name: gamer2,
    age:20,
    weight:Math.floor(Math.random() * 100) + 1,
    height:31
}
const player3={
    name: gamer3,
    age:32,
    weight:Math.floor(Math.random() * 100) + 1,
    height:46
}
const player4={
    name: gamer4,
    age:23,
    weight:Math.floor(Math.random() * 100) + 1,
    height:52
}
const player5={
    name: gamer5,
    age:18,
    weight:Math.floor(Math.random() * 100) + 1,
    height:40
}
const player6={
    name: gamer6,
    age:33,
    weight:Math.floor(Math.random() * 100) + 1,
    height:42
}
const Team1=[player1,player2,player3];
const Team2=[player5,player4,player6];

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

