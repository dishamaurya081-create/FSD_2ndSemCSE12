let heading=document.getElementById("heading");
let input=document.getElementById("inputText");
let para=document.getElementById("para");

document.getElementById("changeTextBtn").onclick=
function(){
    heading.innerText=input.value;
};
input.onchange=function(){
    console.log("Input changed : ", input.value);
};

/*document.getElementById("bgColorBtn").onclick=function(){
    document.body.style.backgroundColor="lightblue";
};*/
document.getElementById("bgColorBtn").addEventListener("click",function(){
    document.body.style.backgroundColor="lightblue";
    document.body.style.fontFamily="Arial, sans-serif";
});
//size of font increases by 5px on each click if it is less than 100px, otherwise it resets to 100px
 document.getElementById("fontSizeBtn").addEventListener("click",function(){
    while(click>0){
    if(heading.style.fontSize<"10px"){
    heading.style.fontSize+="20px";
    }
    else{
        heading.style.fontSize="40px";
    }
}
});
let isVisible=true;
document.getElementById("toggleParaBtn").addEventListener("click",function(){
    if(isVisible){
        para.style.display="none";
        isVisible=false;
    }
    else{        
        para.style.display="block";
        isVisible=true;
    }
});
document.getElementById("resetBtn").addEventListener("click",function(){
    location.reload();
});

heading.onmouseover=function(){
    heading.style.color="red";
};