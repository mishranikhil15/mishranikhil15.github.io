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
    window.location.assign("https://drive.google.com/file/d/1fD7AWQO8sJAaH3oqe1sK7ix1Ou5moPiO/view?usp=share_link", "_blank");
  })
  
  document.getElementById('resume-link-2').addEventListener("click",()=>{
    // console.log("OPENinig.....")
    window.location.assign("https://drive.google.com/file/d/1fD7AWQO8sJAaH3oqe1sK7ix1Ou5moPiO/view?usp=share_link", "_blank");
  }) 