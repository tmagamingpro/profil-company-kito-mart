// DARK MODE
const toggle = document.getElementById("darkModeToggle");
const icon = toggle.querySelector("i");

if(localStorage.getItem("darkMode") === "on"){
    document.body.classList.add("dark-mode");
    icon.classList.replace("fa-moon","fa-sun");
}

toggle.onclick = () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("darkMode","on");
        icon.classList.replace("fa-moon","fa-sun");
    } else {
        localStorage.removeItem("darkMode");
        icon.classList.replace("fa-sun","fa-moon");
    }
};

// SCROLL TOP
const scrollTopBtn = document.getElementById("scrollTopBtn");

if(scrollTopBtn){
    window.onscroll = () => {
        scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    };
    
    scrollTopBtn.onclick = () => {
        window.scrollTo({top:0, behavior:"smooth"});
    };
}
