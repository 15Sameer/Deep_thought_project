document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const sidebarIcon = document.getElementById("sidebar-icon");

    sidebarIcon.addEventListener("click", function() {
        sidebar.classList.toggle("expanded");
    });
});