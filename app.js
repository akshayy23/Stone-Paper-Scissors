let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choose");
let uid=document.querySelector("#uscore");
let cid=document.querySelector("#cscore");
let mes=document.querySelector("#msg");

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("Button is clicked",userChoice);
        playgame(userChoice);
    })
}); 
const compChoice= () =>{
    let options = ["rock","paper","scissor"];
    const idx=Math.floor(Math.random() * 3);
    return options[idx];
};

const drawGame= ()=>{
    console.log("Game is Drawn");
    mes.innerText=`This game is drawn. Choose again`;
    mes.style.backgroundColor= "#9A348E";
}

const playgame= (userChoice) =>{
    console.log(`User choice = ${userChoice}`);
    let cChoice=compChoice();
    console.log(`Computer Choice =${cChoice}`);
    if(userChoice===cChoice){
        drawGame();
    }
    else {
        if(userChoice==='rock'){
            cChoice==="paper"? lostGame(userChoice,cChoice) : wonGame(userChoice,cChoice);
        }
        else if(userChoice==="paper"){
            cChoice==="rock"?  wonGame(userChoice,cChoice): lostGame(userChoice,cChoice);
        }
        else{
            cChoice==="rock"? lostGame(userChoice,cChoice) : wonGame(userChoice,cChoice);
        }
    }
}

const lostGame = (userCho,cCho) =>{
    // console.log("User Lost the Game");
    compscore++;
    cid.innerText=compscore;
    mes.style.backgroundColor="red";
    mes.innerText=`Your ${userCho} lost to computer's ${cCho}. Choose again`;
};
const wonGame = (userCho,cCho) => {
    // console.log("User Won the Game");
    userscore++;
    uid.innerText= userscore;
    mes.style.backgroundColor="green";
    mes.innerText=`Your ${userCho} won to computer's ${cCho}. Choose again`;
}



