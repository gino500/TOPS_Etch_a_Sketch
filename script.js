const container = document.querySelector(".container");
const btnContainer = document.querySelector(".buttons");
const btnBlack = document.createElement("button");
const btnRgb = document.createElement("button");
const btnSize = document.createElement("button");
const btnReset = document.createElement("button");

function createDivs(col, rows) {
  for (let i = 0; i < col * rows; ++i) {
    const div = document.createElement("div");
    // div.style.border = "1px solid black";
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.appendChild(div).classList.add("box");
  }
}
createDivs(16, 16);

function blackButton() {
  const boxs = container.querySelectorAll(".box");
  btnBlack.textContent = "Old Fashion";
  btnBlack.addEventListener("click", () => {
    boxs.forEach((box) =>
      box.addEventListener("mouseover", () => {
        let Rnum = Math.floor(Math.random() * 255);
        box.style.background = `rgb(${Rnum}, ${Rnum}, ${Rnum})`;
      })
    );
  });
  btnContainer.appendChild(btnBlack).classList.add("btn");
}
blackButton();

function rgbButton() {
  const boxs = container.querySelectorAll(".box");
  btnRgb.textContent = "RGB";
  btnRgb.addEventListener("click", () => {
    boxs.forEach((box) =>
      box.addEventListener("mouseover", () => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        box.style.background = `rgb(${r},${g},${b})`;
      })
    );
  });
  btnContainer.appendChild(btnRgb).classList.add("btn");
}
rgbButton();

function gridReset() {
  const boxs = container.querySelectorAll(".box");
  boxs.forEach((box) => box.remove(btnRgb));
}

function gridSize() {
  btnSize.textContent = "Grid Size?";
  btnSize.addEventListener("click", () => {
    let user = prompt("Gride size, 2-100");
    if (user === null || user < 1 || user > 100) {
      gridReset();
      createDivs(16, 16);
      blackButton();
      rgbButton();
      btnContainer.appendChild(btnSize).classList.add("btn");
    } else {
      gridReset();
      createDivs(user, user);
      blackButton();
      rgbButton();
      btnContainer.appendChild(btnSize).classList.add("btn");
    }
  });
  btnContainer.appendChild(btnSize).classList.add("btn");
}
gridSize();

function pageRefresh() {
  btnReset.textContent = "Reset?";
  btnReset.addEventListener("click", () => window.location.reload());
  btnContainer.appendChild(btnReset).classList.add("btn");
}
pageRefresh();
