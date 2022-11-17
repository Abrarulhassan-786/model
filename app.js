const trigger = document.querySelector("#trigger");
const wrapper = document.querySelector(".Warapper_Modal");
const modalClose = document.querySelector(".closeModal");


trigger.addEventListener("click",()=>{
    wrapper.classList.add("active");
});
modalClose.addEventListener("click", ()=>{
    wrapper.classList.remove("active");
})

wrapper.addEventListener("click", (e)=>{
    if(e.target !== wrapper) return;
    wrapper.classList.remove("active");
})
document.addEventListener("keydown",(e)=>{
    if(e.key === "Shift"){
        wrapper.classList.remove("active");
    }
})