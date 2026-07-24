const overlay = document.getElementById("pageTransition");

document.querySelectorAll("a").forEach(link => {

    const href = link.getAttribute("href");

    if (!href || href.startsWith("#") || href.startsWith("http")) return;

    link.addEventListener("click", e => {

        e.preventDefault();

        overlay.classList.add("active");

        setTimeout(() => {

            window.location.href = href;

        }, 300);

    });

});

window.addEventListener("pageshow", () => {

    overlay.classList.remove("active");

});