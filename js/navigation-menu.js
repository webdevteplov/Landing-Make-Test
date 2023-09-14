const getCoords = (elem) => {
    const box = elem.getBoundingClientRect();

    return {
        top: box.top + scrollY,
        left: box.left + scrollX,
    };
};

const grid = document.querySelector(".content__grid");
const typography = document.querySelector(".content__typography");
// здесь должен быть ".content__ui",
// но с ним не правильно определяются координаты
const ui = document.querySelector(".content__ui__select");

const sidebarHeader = document.querySelector(".sidebar__header");
const sidebarGrid = document.querySelector(".sidebar__grid");
const sidebarTypography = document.querySelector(".sidebar__typography");
const sidebarUi = document.querySelector(".sidebar__ui");

// -1 нужен для того, чтобы, уменьшить координату
// каждого начала блока на странице, чтобы
// меню навигации красилось корректно
const positionHeader = { top: 0, left: 0 }.top - 1;
const positionGrid = getCoords(grid).top - 1;
const positionTypography = getCoords(typography).top - 1;
const positionUi = getCoords(ui).top - 1;

// если toggle = 1, то "ховер" работает, то есть при наведении
// мыши красит в черный, а в противоположном случае красит обратно
// в серый. Если toggle = 0, то "ховер" отключается и выбранный,
// в данный момент, элемент красится в тот же цвет, то есть в синий
const hover = (item, toggle) => {
    if (toggle === 1) {
        item.onmouseover = () => {
            item.style.color = "#1b1b1b";
        };
        item.onmouseleave = () => {
            item.style.color = "#7d7d7d";
        };
    } else {
        item.onmouseover = () => {
            item.style.color = "#3E29E3";
        };
        item.onmouseleave = () => {
            item.style.color = "#3E29E3";
        };
    }
};

window.addEventListener("scroll", () => {
    const positionWindow = window.scrollY;
    if (positionWindow > positionHeader && positionWindow < positionGrid) {
        hover(sidebarGrid, 1);
        hover(sidebarHeader, 0);
        sidebarHeader.style.color = "#3E29E3";
        sidebarGrid.style.color = "#7D7D7D";
    } else if (
        positionWindow > positionGrid &&
        positionWindow < positionTypography
    ) {
        hover(sidebarGrid, 0);
        hover(sidebarHeader, 1);
        hover(sidebarTypography, 1);
        sidebarHeader.style.color = "#7D7D7D";
        sidebarGrid.style.color = "#3E29E3";
        sidebarTypography.style.color = "#7D7D7D";
    } else if (
        positionWindow > positionTypography &&
        positionWindow < positionUi
    ) {
        hover(sidebarTypography, 0);
        hover(sidebarGrid, 1);
        hover(sidebarUi, 1);
        sidebarTypography.style.color = "#3E29E3";
        sidebarGrid.style.color = "#7D7D7D";
        sidebarUi.style.color = "#7D7D7D";
    } else if (positionWindow > positionUi) {
        hover(sidebarUi, 0);
        hover(sidebarTypography, 1);
        sidebarUi.style.color = "#3E29E3";
        sidebarTypography.style.color = "#7D7D7D";
    }
});
