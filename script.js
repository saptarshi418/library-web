document.addEventListener("DOMContentLoaded", () => {
    var openBtn = document.querySelector(".logo-menu");
    var navElement = document.querySelector(".nav_element-phone");
    var flag = 0;

    // Initially hide the nav_element
    navElement.style.display = "none";

    openBtn.addEventListener("click", () => {
        if (flag === 0) {
            navElement.style.display = "flex"; 
            openBtn.src = "elements/cross-menu.png";
            flag = 1;
        } else {
            navElement.style.display = "none";
            openBtn.src = "elements/menu.png";
            flag = 0;
        }
    });
});
