const centimeter = document.querySelector("#cm"),
inch = document.querySelector("#in");
const m = document.querySelector("#m")
ft = document.querySelector("#ft")

window.addEventListener("load", () => centimeter.focus());
window.addEventListener("load", () => m.focus());

centimeter.addEventListener("input", ()=>{
    inch.value = (centimeter.value * 0.3937).toFixed(4);
    if(!centimeter.value) inch.value = "";
});
inch.addEventListener("input", () => {
    centimeter.value = (inch.value * 2.54).toFixed(2);
    if(!inch.value) centimeter.value = "";
});
m.addEventListener("input", ()=>{
    ft.value = (m.value * 3.28).toFixed(2);
    if(!m.value) ft.value = "";
});
ft.addEventListener("input", ()=>{
    m.value = (ft.value * 0.3048).toFixed(0);
    if(!ft.value) m.value = "";
});
