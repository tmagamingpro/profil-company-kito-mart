document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let alertBox = document.getElementById("alert");

    if(name === "" || email === ""){
        alertBox.className = "alert alert-danger";
        alertBox.innerText = "Nama dan email wajib diisi!";
        alertBox.classList.remove("d-none");
        return;
    }

    alertBox.className = "alert alert-success";
    alertBox.innerText = "Pesan berhasil dikirim!";
    alertBox.classList.remove("d-none");
});
