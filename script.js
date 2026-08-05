
const PASSWORD="MCH2026";
const DESTINATION="https://mch.japhethgordon.com";
document.getElementById("enter").onclick=check;
document.getElementById("pw").addEventListener("keydown",e=>{if(e.key==="Enter")check();});
function check(){
 const v=document.getElementById("pw").value;
 const m=document.getElementById("msg");
 if(v===PASSWORD){
   m.textContent="Access granted...";
   setTimeout(()=>location.href=DESTINATION,900);
 }else{
   m.textContent="Incorrect password.";
 }
}
