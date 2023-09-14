const popup = () => {
    document.querySelector(".header__menu").addEventListener("click", () => {
        document.querySelector(".popup").classList.add("open");
        document.body.style.overflow = "hidden";
    });

    document.querySelector(".popup_close_ico").addEventListener("click", () => {
        document.querySelector(".popup").classList.remove("open");
        document.body.style.overflow = "scroll";
    });
};

popup();
