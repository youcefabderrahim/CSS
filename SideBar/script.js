// const hide = document.getElementById(`hide`);

// const aside = document.getElementById(`aside`);

// let sideBarHidden = false;


// hide.onclick = function (event) {
//     event.preventDefault(); // prevent jump if button is inside <a> or something
//     if (sideBarHidden) {
//         aside.classList.add(`aside`);
//     } else {
//         aside.classList.add(`hidden`);

//     }
//     sideBarHidden = !sideBarHidden;  // flip the state every time the button is clicked

// }


const hide = document.getElementById("hide");
const aside = document.getElementById("aside");

hide.onclick = (event) => {
  event.preventDefault();
  aside.classList.toggle("hidden");
}