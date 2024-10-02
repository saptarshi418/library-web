// Function to navigate to the specified page
function navigateTo(page) {
    window.location.href = page;
}

document.addEventListener("DOMContentLoaded", function() {
    const bookBtn = document.querySelector("#book_button"); // books btn
    const homeBtn = document.querySelector("#home_button"); //home btn
    const aboutBtn = document.querySelector("#about_button"); //about btn

    
    bookBtn.addEventListener("click", () => navigateTo('book.html'));
    homeBtn.addEventListener("click", () => navigateTo('home.html'));
    aboutBtn.addEventListener("click", () => navigateTo('about.html'));
});
