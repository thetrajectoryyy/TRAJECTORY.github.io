// chaning nav bar styles when we scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0)
})
//show/hide nav menu in tablets
const menu=document.querySelector(".menu");
const menuBtn=document.querySelector("#open-menu-btn");
const closeBtn=document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click',()=>{
    menu.style.display="flex";
    closeBtn.style.display='inline-block';
    menuBtn.style.display="none";
})
// close nav menu
const closeNav=()=>{
    menu.style.display="none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block";
}

closeBtn.addEventListener('click',closeNav)