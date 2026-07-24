const botao = document.getElementById("enterSite");

botao.addEventListener("click", () => {

    sessionStorage.setItem("introVista", "true");

    document
        .querySelector(".opening-screen")
        .classList.add("fade-out");

    setTimeout(() => {

        window.location.href = "index.html";

    }, 600);

});