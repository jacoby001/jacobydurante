function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    // Show chosen page
    document.getElementById(pageId).classList.add("active");

    // Highlight active nav link
    document.querySelectorAll(".nav-links a").forEach(nav => {
        nav.classList.remove("active");
    });

    document.getElementById("nav-" + pageId).classList.add("active");
}
