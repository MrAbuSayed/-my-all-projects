

   var type = new Typed('.type-text',{

    strings : [" Front End Developer","Full Stuck Web Developer", "Grafix Designer"],
    typeSpeed : 120,
    loop : true


   });



// Theme color changer

   let themeColor = document.querySelectorAll(" .theme-toggler .clr");
   themeColor.forEach(color => color.addEventListener("click", ()=>{
       let background= color.style.background;
       document.querySelector('.body').style.background=background;
   }))

  

