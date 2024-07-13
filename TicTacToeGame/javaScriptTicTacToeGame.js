let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let msg=document.querySelector("#msg");
let msgc=document.querySelector(".magContainer");
let newbtn=document.querySelector("#newGameBtn");

let turnO=true; //player X ,Player O

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]    
];


resetbtn.addEventListener("click",()=>{
    location.reload();
   
});

newbtn.addEventListener("click",()=>{
    location.reload();
   
});



boxes.forEach((box)=>{
    
   
    box.addEventListener("click",()=>{

        if (turnO===true) {
            box.innerText="O";
            turnO=false; 
        }else
        {
            box.innerText="X";
            turnO=true; 

        }
       box.disabled=true;
       checkWinner();
      
    });
})

const disableBoxes=()=>{
    boxes.forEach(box=>box.disabled=true);
    resetbtn.disabled=true;
}

const checkWinner=()=>{
    for(let pattern of winPattern)
    {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!=""&&pos2val!=""&&pos3val!="")
        {
            if(pos1val===pos2val&&pos2val===pos3val)
            {console.log("wins "+pos1val);
                msgc.classList.remove("hide");
                if(pos1val==="O")
                { 
                    msg.innerText="Player 1\nYOU WINS!!!";
                    disableBoxes();
                }
                else
                {
                  msg.innerText="Player 2\n YOU WINS!!!";
                  disableBoxes();
                }
            }
        }
    }
}
