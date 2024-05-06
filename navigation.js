let buttons = document.querySelectorAll(".button");
let homeButton = document.querySelector(".header-title");

homeButton.addEventListener("click", ()=>{
    window.open(`../pages/index.html`,"_self")
})

buttons.forEach(button => {
    button.addEventListener("click", () => {
        window.open(`../pages/${button.name}.html`,"_self");
    });
});