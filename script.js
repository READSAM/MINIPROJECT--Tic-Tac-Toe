let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let turnO=true; //X,O
const winpat=[[0,1,2],
              [3,4,5],
              [6,7,8],
              [0,3,6],
              [1,4,7],
              [2,5,8],
              [0,4,8],
              [2,4,6] 
            ];
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    console.log("box was clicked");
  if(turnO)
  {
    box.innerText='X';
    turnO=false;
  }
  else
  { box.innerText='O';
  turnO=true;
   }
  box.disabled=true;
  checkWinner();
 });
}); 

let msg=document.querySelector(".msg");
let para=document.querySelector("p");

const checkWinner=()=>{
  for( let pat of winpat)
  {
    let p1=boxes[pat[0]].innerText;
    let p2=boxes[pat[1]].innerText;
    let p3=boxes[pat[2]].innerText;
    if(p1!="" && p2!="" && p3!="")
    {
      if(p1===p2 && p2===p3)
      {
        para.innerText="WINNER IS "+ p1;
        msg.classList.add("dismsg");   
      }
      
    }
  }
}
const rg=()=>{
  boxes.forEach((box)=>{
   box.innerText="";
   turnO=true;
   box.disabled=false;
});
}

reset.onclick=rg;
let newgame=document.querySelector("#NEW");
newgame.addEventListener("click",rg);
newgame.addEventListener("click",()=>{
   msg.classList.remove("dismsg");
})