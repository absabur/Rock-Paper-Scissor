let buttonDiv = document.querySelector(".button-div");
let userChoose = document.querySelector(".user-choose");
let computerChoose = document.querySelector(".computer-choose");

let rock = buttonDiv.querySelectorAll(".choose")[0];
let paper = buttonDiv.querySelectorAll(".choose")[1];
let scissor = buttonDiv.querySelectorAll(".choose")[2];

let showUserRock = userChoose.querySelectorAll(".img-user-option")[1];
let showUserPaper = userChoose.querySelectorAll(".img-user-option")[0];
let showUserScissor = userChoose.querySelectorAll(".img-user-option")[2];

let showCompRock = computerChoose.querySelectorAll(".img-comp-option")[1];
let showCompPaper = computerChoose.querySelectorAll(".img-comp-option")[0];
let showCompScissor = computerChoose.querySelectorAll(".img-comp-option")[2];

let userResult = document.querySelector(".user-header");
let compResult = document.querySelector(".computer-header");

let instantResult = document.querySelector(".instant-result");

let p = document.querySelector("p");
let userHeader = document.querySelector(".user-header");
let compHeader = document.querySelector(".computer-header");

let totalTry = 0;
let countWon = 0;
let countloss = 0;
let coutDraw = 0;
let countRemain = 7;


function compResultShow(randomNumber){
    if(randomNumber===0){
        compResult.innerHTML= "Computer choice was Rock"
        showCompRock.classList.add("display-result");
        showCompPaper.classList.remove("display-result");
        showCompScissor.classList.remove("display-result");
    }else if(randomNumber===1){
        compResult.innerHTML= "Computer choice was Paper"
        showCompPaper.classList.add("display-result");
        showCompRock.classList.remove("display-result");
        showCompScissor.classList.remove("display-result");
    }else{
        compResult.innerHTML= "Computer choice was Scissor"
        showCompScissor.classList.add("display-result");
        showCompRock.classList.remove("display-result");
        showCompPaper.classList.remove("display-result");
    }
}

function calc(){
    rock.addEventListener("click",function(){
        totalTry++;
        countRemain--;
        userResult.innerHTML= "Your choice is Rock";
        showUserRock.classList.add("display-result");
        showUserPaper.classList.remove("display-result");
        showUserScissor.classList.remove("display-result");
        let randomNumber = Math.floor(Math.random()*3);
        if(randomNumber===0){
            instantResult.innerHTML = "This is draw";
            compResultShow(randomNumber);
            coutDraw++;
        }else if(randomNumber===1){
            instantResult.innerHTML = "Computer is winner";
            compResultShow(randomNumber);
            countloss++;
        }else{
            instantResult.innerHTML = "You are winner";
            compResultShow(randomNumber);
            countWon++;
        }
        document.querySelector(".count-all").innerHTML = `Total try : ${totalTry}<br>Remaining try : ${countRemain}<br>You win : ${countWon}<br>Computer win : ${countloss}<br>Draw : ${coutDraw}`
        if(totalTry>6){
            rock.disabled = true
            paper.disabled = true
            scissor.disabled = true
            setTimeout(function(){
                showCompPaper.classList.remove("display-result");
                showCompRock.classList.remove("display-result");
                showCompScissor.classList.remove("display-result");
                showUserPaper.classList.remove("display-result");
                showUserRock.classList.remove("display-result");
                showUserScissor.classList.remove("display-result");
                p.classList.add("last")
                instantResult.innerHTML = "Final result";
                userHeader.classList.add("display-hide");
                compHeader.classList.add("display-hide");
            }, 2000)
        }
        
    })
    paper.addEventListener("click",function(){
        totalTry++;
        countRemain--;
        userResult.innerHTML= "Your choice is Paper";
        showUserPaper.classList.add("display-result");
        showUserRock.classList.remove("display-result");
        showUserScissor.classList.remove("display-result");
        let randomNumber = Math.floor(Math.random()*3);
        if(randomNumber===0){
            instantResult.innerHTML = "You are winner";
            compResultShow(randomNumber);
            countWon++;
        }else if(randomNumber===1){
            instantResult.innerHTML = "This is draw";
            compResultShow(randomNumber);
            coutDraw++;
        }else{
            instantResult.innerHTML = "Computer is winner";
            compResultShow(randomNumber);
            countloss++;
        }
        document.querySelector(".count-all").innerHTML = `Total try : ${totalTry}<br>Remaining try : ${countRemain}<br>You win : ${countWon}<br>Computer win : ${countloss}<br>Draw : ${coutDraw}`
        if(totalTry>6){
            rock.disabled = true
            paper.disabled = true
            scissor.disabled = true
            setTimeout(function(){
                showCompPaper.classList.remove("display-result");
                showCompRock.classList.remove("display-result");
                showCompScissor.classList.remove("display-result");
                showUserPaper.classList.remove("display-result");
                showUserRock.classList.remove("display-result");
                showUserScissor.classList.remove("display-result");
                p.classList.add("last")
                instantResult.innerHTML = "Final result";
                userHeader.classList.add("display-hide");
                compHeader.classList.add("display-hide");
            }, 2000)
        }
        
    })
    scissor.addEventListener("click",function(){
        totalTry++;
        countRemain--;
        userResult.innerHTML= "Your choice is Scissor";
        showUserScissor.classList.add("display-result");
        showUserRock.classList.remove("display-result");
        showUserPaper.classList.remove("display-result");
        let randomNumber = Math.floor(Math.random()*3);
        if(randomNumber===0){
            instantResult.innerHTML = "Computer is winner";
            compResultShow(randomNumber);
            countloss++;
        }else if(randomNumber===1){
            instantResult.innerHTML = "You are winner";
            compResultShow(randomNumber);
            countWon++;
        }else{
            instantResult.innerHTML = "This is draw";
            compResultShow(randomNumber);
            coutDraw++;
        }
        document.querySelector(".count-all").innerHTML = `Total try : ${totalTry}<br>Remaining try : ${countRemain}<br>You win : ${countWon}<br>Computer win : ${countloss}<br>Draw : ${coutDraw}`
        if(totalTry>6){
            rock.disabled = true
            paper.disabled = true
            scissor.disabled = true
            setTimeout(function(){
                showCompPaper.classList.remove("display-result");
                showCompRock.classList.remove("display-result");
                showCompScissor.classList.remove("display-result");
                showUserPaper.classList.remove("display-result");
                showUserRock.classList.remove("display-result");
                showUserScissor.classList.remove("display-result");
                p.classList.add("last")
                instantResult.innerHTML = "Final result";
                userHeader.classList.add("display-hide");
                compHeader.classList.add("display-hide");
            }, 2000)
        }
        
    })

}

calc();



// compResultShow();

