const arrayOfRiddles = [
    {
        riddle: "Головастиком родился,\n" +
            "В попрыгушку превратился.\n" +
            "Я зеленая квакушка,\n" +
            "Языком хватаю мушек.\n" +
            "Кто я?",
        answer: "Лягушка"
    },
    {
        riddle: "Кто с высоких тёмных сосен\n" +
            "В ребятишек шишку бросил?\n" +
            "И в кусты через пенёк\n" +
            "Промелькнул, как огонёк?",
        answer: "Белка"
    },
    {
        riddle: "Один брат — ест и голодает, а другой — идёт и пропадает",
        answer: "Огонь и дым"
    },
    {
        riddle: "Я — вода и по воде плаваю. Кто я?",
        answer: "Льдина"
    },
    {
        riddle: "Все меня топчут, а я — всё лучше.",
        answer: "Тропинка"
    },
    {
        riddle: "Что невозможно удержать и десяти минут, хотя оно легче пёрышка?",
        answer: "Дыхание"
    },
]

const riddlesBlock = document.querySelector(".riddles")

arrayOfRiddles.forEach(item => {
    const riddleDiv = document.createElement("div");
    riddleDiv.setAttribute("class", "riddleDiv");

    const riddleP = document.createElement("p");
    riddleP.setAttribute("class", "riddleText");
    riddleP.innerText = item.riddle;

    const riddleAnswer = document.createElement("span");
    riddleAnswer.setAttribute("class", "riddleAnswer hideAnswer");
    riddleAnswer.innerText = item.answer;

    const showHideBtn = document.createElement("button");
    showHideBtn.setAttribute("class", "riddleBtn");
    showHideBtn.innerText = "Показать ответ";

    riddleDiv.append(riddleP, showHideBtn, riddleAnswer );
    riddlesBlock.append(riddleDiv);

    let isShown = false;

    showHideBtn.onclick = () => {
        if (isShown) {
            showHideBtn.innerText = "Показать ответ";
        } else {
            showHideBtn.innerText = "Скрыть ответ";
        }
        riddleAnswer.classList.toggle("hideAnswer");
        isShown = !isShown;
    }
})