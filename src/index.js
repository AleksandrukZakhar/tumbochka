const burger = document.querySelector(".burger");
const search = document.querySelector(".mobile-search-icon");
const headerMobile = document.querySelector(".header-mobile");
const searchContainer = document.querySelector(".input-container");
const x = document.querySelector(".x");
const sidebar = document.querySelector(".sidebar");
const sidebarBurger = document.querySelector(".sidebar-burger");

burger.addEventListener("click", () => {
    sidebar.classList.add("show");
});

search.addEventListener("click", () => {
    headerMobile.classList.add("hide");
    searchContainer.classList.add("show");
});

x.addEventListener("click", () => {
    headerMobile.classList.remove("hide");
    searchContainer.classList.remove("show");
});

sidebarBurger.addEventListener("click", () => {
    sidebar.classList.remove("show");
});
