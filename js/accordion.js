const accardion = document.querySelector(".accordion-main");
const accardionContent = document.querySelector(".accordion-main_content");

accardion.addEventListener("click", (el) => {
    if (!accardion.classList.contains("active")) {
        accardionContent.style.display = "block";
        accardion.classList.add("active");
    } else {
        accardionContent.style.display = "none";
        accardion.classList.remove("active");
    }
});
