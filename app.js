const count=document.querySelector("#count");
const dec=document.querySelector(".dec");
const res=document.querySelector(".res");
const inc=document.querySelector(".inc");

var i=0;

dec.addEventListener("click",azalt);
inc.addEventListener("click",artir);
res.addEventListener("click",reset);

function azalt(){
    i--;
    count.innerHTML=`${i}`;
}
function artir(){
    i++;
    count.innerHTML=`${i}`;
}
function reset(){
    i=0;
    count.innerHTML=`${i}`;
}