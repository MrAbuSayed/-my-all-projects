

var bars =   document.querySelector('.bar').addEventListener("click",function(){

   $('.navber').slideToggle(100);
});

 
var type = new Typed('.post',{

    strings : [" Front End Developer", " Front End Developer","Full Stuck Web Developer", "Grafix Designer","Programmer"],
    typeSpeed : 120,
    loop : true


   });

//    let navss = document.querySelector(".navss").addEventListener("click",function(){
  
//     let navber=document.querySelector(".navber");
//     navber.style.display="none";

//   });


let anim = document.querySelector(".education").addEventListener("mouseover",function(){

   let row1= document.querySelector(".row2");
   row1.classList.add("rows");
   let row2= document.querySelector(".row3");
   row2.classList.add("rows");
   let row3= document.querySelector(".row1");
   row3.classList.add("row1Anim");
    


});


//    this is demo for Picture
let allPic = document.querySelector("#all");
allPic.addEventListener("click",function(){
  
    let webDesign =document.querySelector(".webDesign").style.display="block";
    let grafix = document.querySelector(".grafixDsn").style.display="block";
    let code = document.querySelector(".codeer").style.display="block";

});

let webDesign= document.querySelector("#webDesign").addEventListener("click",function(){

    let webDesign1 =document.querySelector(".webDesign").style.display="block";
    let grafix1 = document.querySelector(".grafixDsn").style.display="none";
    let code1 = document.querySelector(".codeer").style.display="none";

});


let Grpaphic = document.querySelector("#Grpaphic").addEventListener("click",function(){

    let webDesign2 =document.querySelector(".webDesign").style.display="none";
    let grafix2 = document.querySelector(".grafixDsn").style.display="block";
    let code2 = document.querySelector(".codeer").style.display="none";


});


let Codee = document.querySelector("#Code").addEventListener("click",function(){
    
    let webDesign3 =document.querySelector(".webDesign").style.display="none";
    let grafix3 = document.querySelector(".grafixDsn").style.display="none";
    let code3 = document.querySelector(".codeer").style.display="block";

});


