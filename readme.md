# 오목

### 사용 설명

기존의 오목 게임과 같습니다.

### 향후 계획

3x3 금지, 턴당 시간제한, 물르기 기능 구현
<br/>

### 게임하러 가기
# Gomoku

click [here](https://en.wikipedia.org/wiki/Gomoku) to learn  Gomoku.

Gomuku is a game in which players alternate turns placing a stone of their color on an empty intersection. The winner is the first player to form an unbroken chain of five stones horizontally, vertically, or diagonally.

## Features to be added

1) 3x3 rule
2) Time limits
3) Undo turns

 
1) 3x3 rule
The rule of three and three bans a move that simultaneously forms two open rows of three stones (rows not blocked by an opponent's stone at either end).
Since there was a method which guarantees the player who starts first(black) to win, 3x3 was banned as a rule.

![Screenshot](https://user-images.githubusercontent.com/50646019/68020292-642ca780-fce1-11e9-9c95-c1e246f26aa3.png)
![Screenshot](https://user-images.githubusercontent.com/50646019/68020298-67c02e80-fce1-11e9-9b4d-125b8cf22d8a.png) 

(As shown above, if the black puts the stone in the marked place, no matter if  which way the white side blocks, the black side wins.)



2) Time-limit rule

There should be a finite amount of time spent on each turn.
For each turn, there is n second time limit, and if a player does not abide this rule the player gets disqualified, and the opponent automatically wins.



3) Undo turns

It would be inconvenient to start over again because of a single miss click.
Undoing a turn makes the stone put on the field during the previous turn disappear.



##How to play
https://omok-wait-a-minute.netlify.com/

