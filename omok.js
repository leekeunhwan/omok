let ea = document.querySelector("#ea").value;
let omokPan = new Array(ea);
for (let i = 0; i < ea; i++) {
  omokPan[i] = new Array(ea);
}

for (let i = 0; i < ea; i++) {
  for (let j = 0; j < ea; j++) {
    if (i == 0 && j == 0) {
      omokPan[i][j] = "┌";
    } else if (i == 0 && j == ea - 1) {
      omokPan[i][j] = "┐";
    } else if (i == ea - 1 && j == 0) {
      omokPan[i][j] = "└";
    } else if (i == ea - 1 && j == ea - 1) {
      omokPan[i][j] = "┘";
    } else if (i == ea - 1) {
      omokPan[i][j] = "┴";
    } else if (j == ea - 1) {
      omokPan[i][j] = "┤";
    } else if (i == 0) {
      omokPan[i][j] = "┬";
    } else if (j == 0) {
      omokPan[i][j] = "├";
    } else {
      omokPan[i][j] = "┼";
    }
  }
}
viewOmokPan();

let CurrDolType = true;
function SetDol(x, y) {
  if (CurrDolType) omokPan[x][y] = "●";
  else omokPan[x][y] = "○";
  CurrDolType = !CurrDolType;
  viewOmokPan();
}

function viewOmokPan() {
  let inhtml = "";
  for (let i = 0; i < ea; i++) {
    for (let j = 0; j < ea; j++) {
      inhtml +=
        "<font onclick='SetDol(" +
        i +
        "," +
        j +
        ")'>" +
        omokPan[i][j] +
        "</font>";
    }
    inHtml += "<br>";
  }
  document.getElementById("BoardArea").innerHTML = inHtml;
}
