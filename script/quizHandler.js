//////////////............FirstView.................../////////////
var startbtn = document.getElementById("displayButton");
var btnX = document.createElement("input");
btnX.setAttribute("class", "quizBtn w3-button w3-block w3-white w3-border w3-border-red w3-round-large");
btnX.setAttribute( "onclick", "removeStartBtn()");
btnX.setAttribute( "onclick", "start()");
btnX.setAttribute( "Value", "Play");
btnX.setAttribute( "type", "button");
btnX.setAttribute( "id", "startBtn");
startbtn.appendChild(btnX);


///////////////////////////////////////////////////////////////////



//////////////...........Initialization............/////////////

var ans = 0;
var level = 1;
var levelFlag = 0;

var pName = localStorage.getItem("name");
document.getElementById("name").innerHTML = pName;
console.log(pName);

var capacity = localStorage.getItem("capacity");
capacity = Number(capacity);
console.log(capacity);

var score = localStorage.getItem("score");//score =0;
score = Number(score);
console.log(score);

///////////////////////////////////////////////////////////////////
///////////..........ClearingStartBtns..................../////////
function removeStartBtn(){
    
    var removeBtn = document.getElementById("displayButton").innerHTML = "";
    // removeBtn.parentNode.removeChild(removeBtn);
}


////////////////////////////////////////////////////////////////////






/////////////..............Dispaying................////////////
function questionDraw() {
    ans = 0;
    var pNum1 = Math.ceil(Math.random() * capacity);
    var pNum2 = Math.floor(Math.random() * capacity);
    // console.log(pNum1);
    // console.log(pNum2);
    ans = pNum1 * pNum2;
    // console.log(ans);
    document.getElementById("displayQuiz").innerHTML = pNum1 + "x" + pNum2;
}
/////////////////////////////////////////////////////////////////


////////////...........ScoreCalculator.........///////////
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

    // console.log(score + "Score");
    document.getElementById("score").innerHTML = score;
    
}
//////////////////////////////////////////////////////////////////


///////////////..........ButtonInitialization.......///////////////
var xi = 0;
var xii = 0;
var xiii = 0;
var xiv = 0;
var xv = 0;
// console.log("XII" +" "+  xii);

//////////................ButtonDecider............///////////////
function quizGenerator() {
    xi = 0; xii = 0; xiii = 0; xiv = 0; xv = 0;
    var rid = Math.round(Math.random() * 10);
    // var rid = 3;
    // console.log(rid);
    
    switch (rid) {
        case 0:
        xiv = ans;
        console.log("Xiv");
        break;
        
        case 1:
        xi = ans;
        xii = ans * 3; xiii = ans + 9; xiv = ans * 5; xv = ans - 7;
        console.log("Xi");
        break;
        case 2:
        xii = ans;
        xi = ans * 3; xiii = ans + 9; xiv = ans * 5; xv = ans - 7;
        console.log("Xii");
        break;
        case 3:
        console.log("Xiii");
        xiii = ans;
        xii = ans * 3; xi = ans + 9; xiv = ans * 5; xv = ans - 7;
        break;
        case 4:
        xiv = ans;
        xii = ans * 3; xiii = ans + 9; xi = ans * 5; xv = ans - 7;
        console.log("Xiv");
        break;
        case 5:
        console.log("Xv");
        xv = ans;
        xii = ans * 3; xiii = ans + 9; xiv = ans * 5; xi = ans - 7;
        break;
        case 6:
        console.log("Xv");
        xv = ans;
        xii = ans * 3; xiii = ans + 9; xiv = ans * 5; xi = ans - 7;
        break;
        case 7:
        console.log("Xiv");
        xiv = ans;
        xii = ans * 3; xiii = ans + 9; xi = ans * 5; xv = ans - 7;
        break;
        case 8:
        console.log("Xiii");
        xiii = ans;
        xii = ans * 3; xi = ans + 9; xiv = ans * 5; xv = ans - 7;
        break;
        case 9:
        console.log("Xii");
        xii = ans;
            xi = ans * 3; xiii = ans + 9; xiv = ans * 5; xv = ans - 7;
            break;
            case 10:
            console.log("Xi");
            xi = ans;
            xii = ans * 3; xiii = ans + 9; xiv = ans * 5; xv = ans - 7;
            break;
            default:
            console.log("Error in generating Buttons");
            
        }
        
        console.log("Xi" + " " + xi);
        console.log("Xii" + " " + xii);
        console.log("Xiii" + " " + xiii);
        console.log("Xiv" + " " + xiv);
        console.log("Xv" + " " + xv);
        
    }
    
//////////////////////////////////////////////////////////////////////////////////

//////////////....................QuizStarter.............../////////////////////
function start() {
    if (capacity <= 50) {
        if (levelFlag === 8) {
            levelUpdate();
        }
        else {
            levelFlag = levelFlag + 1;
        }
    }
    else if (capacity <= 100) {
        if (levelFlag === 6) {
            levelUpdate();
        }
        else {
            levelFlag = levelFlag + 1;
        }
    }
    if (capacity >= 100) {
        if (levelFlag === 4) {
            levelUpdate();
        }
        else {
            levelFlag = levelFlag + 1;
        }
    }
    
    document.getElementById("level").innerHTML = level;
    document.getElementById("result").innerHTML = "";
    document.getElementById("correctAns").innerHTML = "";
    document.getElementById("displayButton").innerHTML = "";
    
    document.getElementById("quizHeadingX").innerHTML = "Quiz!";
    document.getElementById("quizHeadingXi").innerHTML = "Choose right one!";
    
    
    questionDraw();
    quizGenerator();
    
    
    var btnContainer = document.getElementById("displayButton");
    var chooseBtn = document.createElement("input");
    chooseBtn.setAttribute("type", "button");
    chooseBtn.setAttribute("id", xi);
    chooseBtn.setAttribute("class", "quizBtn w3-button w3-block w3-white w3-border w3-border-red w3-round-large");
    chooseBtn.setAttribute("value", xi);
    chooseBtn.setAttribute("onClick", "result(" + xi + ")");
    btnContainer.appendChild(chooseBtn);
    
    
    
    
    var btnContainer = document.getElementById("displayButton");
    var chooseBtn = document.createElement("input");
    chooseBtn.setAttribute("type", "button");
    chooseBtn.setAttribute("id", xii);
    chooseBtn.setAttribute("class", "quizBtn w3-button w3-block w3-white w3-border w3-border-red w3-round-large");
    chooseBtn.setAttribute("value", xii);
        chooseBtn.setAttribute("onClick", "result(" + xii + ")");
        btnContainer.appendChild(chooseBtn);
        // var lineBreak = document.createElement("br");
        // btnContainer.appendChild(lineBreak);
        
        var btnContainer = document.getElementById("displayButton");
        var chooseBtn = document.createElement("input");
        chooseBtn.setAttribute("type", "button");
        chooseBtn.setAttribute("id", xiii);
        chooseBtn.setAttribute("class", "quizBtn w3-button w3-block w3-white w3-border w3-border-red w3-round-large");
        chooseBtn.setAttribute("value", xiii);
        chooseBtn.setAttribute("onClick", "result(" + xiii + ")");
        btnContainer.appendChild(chooseBtn);
        
        var btnContainer = document.getElementById("displayButton");
        var chooseBtn = document.createElement("input");
        chooseBtn.setAttribute("type", "button");
        chooseBtn.setAttribute("id", xiv);
        chooseBtn.setAttribute("class", "quizBtn w3-button w3-block w3-white w3-border w3-border-red w3-round-large");
        chooseBtn.setAttribute("value", xiv);
        chooseBtn.setAttribute("onClick", "result(" + xiv + ")");
        btnContainer.appendChild(chooseBtn);
        // var lineBreak = document.createElement("br");
        // btnContainer.appendChild(lineBreak);
        
        var btnContainer = document.getElementById("displayButton");
        var chooseBtn = document.createElement("input");
        chooseBtn.setAttribute("type", "button");
        chooseBtn.setAttribute("id", xv);
        chooseBtn.setAttribute("class", "quizBtn w3-button w3-block w3-white w3-border w3-border-red w3-round-large");
        chooseBtn.setAttribute("value", xv);
        chooseBtn.setAttribute("onClick", "result(" + xv + ")");
        btnContainer.appendChild(chooseBtn);
        
    }
    
    ///////////////////////////////////////////////////////////////////////////

    //////////////............ResultChecker.....................//////////////
    function result(y) {
        var x = document.getElementById(y).value;
    x = Number(x);
    if (x === ans) {
        // alert("ConditionPassed");
        // document.getElementById("result").innerHTML = "Correct";
        start();
        calScore();
    }
    else {
        // var correct=document.getElementById(ans);
        // correct.setAttribute("class", "quizBtnX w3-button w3-block w3-white w3-border w3-border-red w3-round-large");
        document.getElementById("result").innerHTML = "Incorrect";
        document.getElementById("correctAns").innerHTML ="Correct = " + ans;
        // alert("ConditionFailed");
        chance();
    }
}
///////////////////////////////////////////////////////////////////////////


///////////...............LevelController..............//////////


function levelUpdate() {
    levelFlag = 0;
    level = level + 1;
    if (capacity <= 50) {
        capacity = capacity + 10;
    }
    else if (capacity <= 100) {
        capacity = capacity + 25;
    }
    else if (capacity <= 150) {
        capacity = capacity + 35;
    }
    else if (capacity <= 200) {
        capacity = capacity + 50;
    }
    else if (capacity <= 300) {
        capacity = capacity + 100;
    }
    else {
        capacity = capacity + 250;
    }
    console.log(level + ' level');
    
}


/////////////////////////////////////////////////////////////////

/////////////...........ChanceController...........///////////////
var userChances = 3;
function chance(){
    if(userChances > 0){
        userChances = userChances - 1;
        document.getElementById("chanceDisplay").innerHTML = userChances;
    }
    else{
        //........GameOverNotice............/////
        document.getElementById("quizHeadingX").innerHTML = "";
        document.getElementById("quizHeadingXi").innerHTML = "";
        var screen = document.getElementById("displayQuiz").innerHTML= "Game Over!";
        // screen.innerHTML = "";
        // var endNode = document.createElement("p");
        // endNode.setAttribute("class", "endNote");
        // var endNote = document.createTextNode("Game Over!!");
        // endNode.appendChild(endNote);
        // screen.appendChild(endNode);
        
        ////......ReStartButton.........../////////////
        
        var endBtns = document.getElementById("displayButton");
        endBtns.innerHTML = "";
        var reStartbtn = document.createElement("input");
        reStartbtn.setAttribute("type", "button");
        reStartbtn.setAttribute("id", "startBtn");
        reStartbtn.setAttribute("class", "quizBtn w3-button w3-block w3-white w3-border w3-border-red w3-round-large");
        reStartbtn.setAttribute("value", "Re-Start!");
        reStartbtn.setAttribute("onclick", "removeStartBtn()");
        reStartbtn.setAttribute("onclick", "reStart()");
        endBtns.appendChild(reStartbtn);
        
        ////////........Menubtn.......................///////////
        var menuAddress = document.createElement("a");
        menuAddress.setAttribute("href", "../index.html");
        var menuBtn = document.createElement("button");
        // reStartbtn.setAttribute("type", "button");
        menuBtn.setAttribute("id", "startBtn");
        menuBtn.setAttribute("class", "quizBtn w3-button w3-block w3-white w3-border w3-border-red w3-round-large");
        // reStartbtn.setAttribute("value", "Menu!");
        var btnNote = document.createTextNode("Menu!");
        menuBtn.appendChild(btnNote);
        // reStartbtn.setAttribute("onclick", "removeStartBtn()");
        // reStartbtn.setAttribute("onclick", "reStart()");
        menuAddress.appendChild(menuBtn);
        endBtns.appendChild(menuAddress);
    }
}

/////////////////////////////////////////////////////////////////

///////////.........Re-Start....................///////////////
function reStart(){
    userChances = 3;
    score = 0;
    level = 1;
    levelFlag = 0;
    capacity = localStorage.getItem("capacity");
    capacity = Number(capacity);
    document.getElementById("chanceDisplay").innerHTML = userChances;
    document.getElementById("score").innerHTML = score;
    start();
}

///////////////////////////////////////////////////////////////