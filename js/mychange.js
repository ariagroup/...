window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar-example");
    const homeSection = document.getElementById("home"); // تأكد أن لديك id="home" في أول سكشن

    // إذا كان المستخدم نزل مسافة تساوي ارتفاع أول سكشن، نضيف كلاس "scrolled"
    if (window.scrollY > homeSection.offsetHeight - navbar.offsetHeight) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});




