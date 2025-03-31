let sidemenu1=document.getElementById("sidemenu");

function openmenu(){
    sidemenu1.style.right="0";
}
function closemenu(){
    sidemenu1.style.right="-200px";
}
 
var typed = new Typed(".typing", {
  strings: ["Full Stack  Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
})
 
 document.getElementById('resume-link-1').addEventListener("click",()=>{
    // console.log("OPENinig.....")
    window.open("https://drive.google.com/drive/folders/1o00FRWV99kVLS-ipE8NlbtYa3E-wULfT?usp=sharing", "_blank");
  })
  
  document.getElementById('resume-link-2').addEventListener("click",()=>{
    // console.log("OPENinig.....")
    window.open("https://drive.google.com/drive/folders/1o00FRWV99kVLS-ipE8NlbtYa3E-wULfT?usp=sharing", "_blank");
  }) 