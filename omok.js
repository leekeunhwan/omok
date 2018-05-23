class Gomoku {
  // 줄 수 설정
  line = 15;
  // - 게임판(오목판) 설정
  board = [
    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "")
  ];
  // - 현재 플레이어
  player = "●";
  // - 턴넘기기
  turn({
    row,
    col
  }) {
    // 만약 바둑판에 돌이 있을 경우 못두게 경고를 띄우고
    if (this.board[row][col] != "") {
      swal({
        icon: "error",
        title: "돌 위에 돌을 둘 수 없습니다.",
        button: "다시두기"
      });
      return;
    } else {
      // 돌이 없을 경우 현재 플레이어에 대한 표시를 게임판의 해당 위치에 넣어주고
      this.board[row][col] = this.player;
    }
    // 현재 플레이어를 변경
    this.player = this.player === "●" ? "○" : "●";
    // 현재 차레가 누군인지 알려주기 위한 로직
    document.querySelector(".currentTurn").textContent =
      "Current Turn : " + this.player;
  }

  // - 누가 이겼는지 판별
  checkWinner() {
    for (let c = 2; c < this.line - 2; c++) {
      for (let r = 0; r < this.line; r++) {
        if (
          // 흑돌이 가로가 5개일 때 숭리
          this.board[r][c - 2] == "●" &&
          this.board[r][c - 1] == "●" &&
          this.board[r][c] == "●" &&
          this.board[r][c + 1] == "●" &&
          this.board[r][c + 2] == "●"
        ) {
          return this.board[r][c];
          break;
        } else if (
          // 흑돌이 세로가 5개일 때 숭리
          this.board[c - 2][r] == "●" &&
          this.board[c - 1][r] == "●" &&
          this.board[c][r] == "●" &&
          this.board[c + 1][r] == "●" &&
          this.board[c + 2][r] == "●"
        ) {
          return this.board[c][r];
          break;
        }
      }
    }

    for (let c = 2; c < this.line - 2; c++) {
      for (let r = 2; r < this.line - 2; r++) {
        if (
          // 흑돌이 대각선 좌->우 5개일 때 숭리
          this.board[r - 2][c - 2] == "●" &&
          this.board[r - 1][c - 1] == "●" &&
          this.board[r][c] == "●" &&
          this.board[r + 1][c + 1] == "●" &&
          this.board[r + 2][c + 2] == "●"
        ) {
          return this.board[r][c];
          break;
        }
        if (
          // 흑돌이 대각선 우->좌 5개일 때 숭리
          this.board[r + 2][c - 2] == "●" &&
          this.board[r + 1][c - 1] == "●" &&
          this.board[r][c] == "●" &&
          this.board[r - 1][c + 1] == "●" &&
          this.board[r - 2][c + 2] == "●"
        ) {
          return this.board[r][c];
          break;
        }
      }
    }

    for (let c = 2; c < this.line - 2; c++) {
      for (let r = 0; r < this.line; r++) {
        if (
          // 백돌이 가로가 5개일 때 승리
          this.board[r][c - 2] == "○" &&
          this.board[r][c - 1] == "○" &&
          this.board[r][c] == "○" &&
          this.board[r][c + 1] == "○" &&
          this.board[r][c + 2] == "○"
        ) {
          return this.board[r][c];
          break;
        }
        if (
          // 백돌이 세로가 5개일 때 승리
          this.board[c - 2][r] == "○" &&
          this.board[c - 1][r] == "○" &&
          this.board[c][r] == "○" &&
          this.board[c + 1][r] == "○" &&
          this.board[c + 2][r] == "○"
        ) {
          return this.board[c][r];
          break;
        }
      }
    }

    for (let c = 2; c < this.line - 2; c++) {
      for (let r = 2; r < this.line - 2; r++) {
        if (
          // 백돌이 대각선 좌->우 5개일 때 승리
          this.board[r - 2][c - 2] == "○" &&
          this.board[r - 1][c - 1] == "○" &&
          this.board[r][c] == "○" &&
          this.board[r + 1][c + 1] == "○" &&
          this.board[r + 2][c + 2] == "○"
        ) {
          return this.board[r][c];
          break;
        }
        if (
          // 백돌이 대각선 우->좌 5개일 때 승리
          this.board[r + 2][c - 2] == "○" &&
          this.board[r + 1][c - 1] == "○" &&
          this.board[r][c] == "○" &&
          this.board[r - 1][c + 1] == "○" &&
          this.board[r - 2][c + 2] == "○"
        ) {
          return this.board[r][c];
          break;
        }
      }
    }
  }
}

// 생성자 생성
const omok = new Gomoku();

// 오목판 순회
const rowEls = document.querySelectorAll(".board__row");
rowEls.forEach((rowEl, rowIndex) => {
  const colEls = rowEl.querySelectorAll(".board__col");
  colEls.forEach((colEls, colIndex) => {
    // 각각의 col(오목판의 빈칸)을 클릭할 경우 이벤트 발생
    colEls.addEventListener("click", e => {
      // 앞서 정의해놓은 turn이라는 메소드 사용
      omok.turn({
        // 이때 인자로 row는 rowIndex를 col은 colIndex를 넘긴다.
        row: rowIndex,
        col: colIndex
      });
      // 화면을 그려낼 draw라는 메소드 사용
      draw();
    });
  });
});

function draw() {
  // 오목판의 배열을 순회한다.
  omok.board.forEach((rowArr, rowIndex) => {
    const rowEl = rowEls[rowIndex];
    const colEls = rowEl.querySelectorAll(".col__grid");
    // 각각의 가로줄을 돌면서 세로열의 요소와 인덱스를 확인
    rowArr.forEach((col, colIndex) => {
      // 만약 col이 "●"일때 클래스에 black이라는 클래스를 더한다
      if (col == "●") {
        colEls[colIndex].classList.add("black");
        // 만약 col이 "○"일때 클래스에 white이라는 클래스를 더한다
      } else if (col == "○") {
        colEls[colIndex].classList.add("white");
      }
    });
  });

  // 승자 판별 로직 실행
  const winner = omok.checkWinner();
  // 승자가 있을경우
  if (winner) {
    // 흑돌이 이겼을때,
    if (winner == "●") {
      // 턴수를 알려주는 창에서는 game over라는 텍스트를 나타낸다.
      document.querySelector(".currentTurn").textContent = "Game Over";
      // 객체형식의 alert를 내보낸다.
      swal({
        icon: "success",
        title: "축하드립니다! 흑돌(" + winner + ")의 승리입니다",
        button: "다시하기"
      }).then(value => {
        // 버튼을 클릭했을때 새로 고쳐서 다시 시작상태로 만든다.
        window.location.reload();
      });
      // 백돌이 이겼을 때
    } else if (winner == "○") {
      // 턴수를 알려주는 창에서는 game over라는 텍스트를 나타낸다.
      document.querySelector(".currentTurn").textContent = "Game Over";
      // 객체형식의 alert를 내보낸다.
      swal({
        icon: "success",
        title: "축하드립니다! 백돌(" + winner + ")의 승리입니다",
        button: "다시하기"
      }).then(value => {
        // 버튼을 클릭했을때 새로 고쳐서 다시 시작상태로 만든다.
        window.location.reload();
      });
    }
    // 버튼을 클릭하지 않을 경우에
    setTimeout(function () {
      // 10초동안 기다렸다가 새로 고쳐서 다시 시작상태로 만든다.
      window.location.reload();
    }, 10000);
  }
}