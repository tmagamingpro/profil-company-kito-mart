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

document.querySelectorAll(".team-btn").forEach(card => {
    card.addEventListener("click", () => {

        document.getElementById("modalName").innerText = card.dataset.name;
        document.getElementById("modalRole").innerText = card.dataset.role;
        document.getElementById("modalImg").src = card.dataset.img;
        document.getElementById("modalAge").innerText = card.dataset.age;
        document.getElementById("modalDesc").innerText = card.dataset.desc;

        let modal = new bootstrap.Modal(document.getElementById("teamModal"));
        modal.show();
    });
});

document.querySelectorAll(".product-btn").forEach(card => {
    card.addEventListener("click", () => {

        document.getElementById("modalName").innerText = card.dataset.name;
        document.getElementById("modalCategory").innerText = card.dataset.category;
        document.getElementById("modalImg").src = card.dataset.img;
        document.getElementById("modalHarga").innerText = card.dataset.harga;
        document.getElementById("modalDesc").innerText = card.dataset.desc;

        let modal = new bootstrap.Modal(document.getElementById("productModal"));
        modal.show();
    });
});
