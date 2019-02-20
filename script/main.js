///////////////............StartingMenue..........///////////////
var playerName = "SomeOne";
var capacity = "easy";
var capacityValue = 10;
var score = 0;

//////////////////////////////////////////////////////////////// 

////////////............StartControlFunction...........////////////
function getInfo(){
playerName = document.getElementById("playerName").value;
if(playerName === ""){
    playerName = "SomeOne";
}

//???????............CapacityDecider..........?????????????????????
capacity = document.getElementsByName("capacity");
if(capacity[0].checked){
    capacity = "easy";
    capacityValue = 10;
}
if(capacity[1].checked){
    capacity = "inter";
    capacityValue = 100;
}
if(capacity[2].checked){
    capacity = "hard";
    capacityValue = 300;
}
//?????????????????????????????????????????????????????????????????
console.log(playerName);
console.log(capacity);
console.log(capacityValue);

}

////////////////////////////////////////////////////////////////////


/////////////........ScoreCalculator...........////////////////

function calScore() {
    if(capacity <= 50){
        score = score + 1;
    }
    else if(capacity >=50 || capacity <= 100){
        score = score + 2;
    }
    else if(capacity >=100 || capacity <= 200){
        score = score + 4;
    }
    else if(capacity >=200 || capacity <= 300){
        score = score + 8;
    }
    else{
        score = score + 16;
    }

    console.log(score + "Score");
    // document.getElementById("score").innerHTML = score;

}

/////////////////////////////////////////////////////////////////////

///////////..........StorageManager..............///////////////////

function start(){
    getInfo();
    /*
    To save :
        CapacityValue
        Score
        Player Name
    */
   localStorage.setItem("score", score);
   localStorage.setItem("capacity", capacityValue);
   localStorage.setItem("name", playerName);
   
}