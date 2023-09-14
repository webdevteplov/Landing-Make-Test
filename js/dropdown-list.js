const select = () => {
    const selectHeader = document.querySelectorAll(".select__header");
    const selectItem = document.querySelectorAll(".select__item");
    const selectPrompt = document.querySelector(".select__prompt");

    selectHeader.forEach((item) => {
        item.addEventListener("click", selectToogle);
    });

    selectItem.forEach((item) => {
        item.addEventListener("click", selectChoose);
    });

    function selectToogle() {
        this.parentElement.classList.toggle("is-active");
    }

    function selectChoose() {
        selectItem.forEach((item) => {
            item.classList.remove("is-active");
        });
        this.classList.add("is-active");
        const text = this.innerText;
        const currentText =
            this.closest(".select-main").querySelector(".select__current");
        currentText.innerText = text;
        selectPrompt.style.display = "block";
    }
};

select();
