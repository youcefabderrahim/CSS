const hide = document.getElementById(`hide`);

const aside = document.getElementById(`aside`);

hide.onclick = function (event) {
     event.preventDefault(); // prevent jumping
     aside.classList.add(`hidden`);
}