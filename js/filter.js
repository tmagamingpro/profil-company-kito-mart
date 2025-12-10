const buttons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-item");

buttons.forEach(btn => {
    btn.onclick = () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const category = btn.dataset.category;

        products.forEach(item => {
            if(category === "all" || item.dataset.category === category){
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    };
});
