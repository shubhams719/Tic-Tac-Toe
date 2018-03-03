var main = function() {
var flag = 0;
var board = [],
    cols = 3;
//init the grid matrix
for ( var i = 0; i < cols; i++ ) {
    board[i] = []; 
}
initEventHandlers();        
function checkwin(board) {
    for(var i=0;i<3;i++){
    var countx=0;
    var counto=0;    
    for(var j=0;j<3;j++){

    if(board[i][j] === 'X'){
      countx= countx + 1;
    }
    else if(board[i][j] === 'O'){
        counto= counto + 1;
    }
    }
        if(countx == 3 && flag == 1){
        alert("X wins")
        return true;
      }
    if(counto == 3 && flag == 0){
        alert("O wins")
        return true;
      }
  }
   for(var i=0;i<3;i++){
    var countx=0;
    var counto=0;   
    for(var j=0;j<3;j++){

    if(board[j][i] === 'X'){
      countx= countx + 1;
    }
    else if(board[j][i] === 'O'){
        counto= counto + 1;
    }
    }
        if(countx == 3 && flag == 1){
        alert("X wins" )
        return true;
      }
    if(counto == 3 && flag == 0){
        alert("O wins")
        return true;
      }
  }
    var countx=0;
    var counto=0;   
    for(var i=0;i<3;i++){
    if(board[i][i] === 'X'){
      countx= countx + 1;
    }
    else if(board[i][i] === 'O'){
        counto= counto + 1;
    }
    
        if(countx == 3 && flag == 1){
        alert("X wins")
        return true;
      }
    if(counto == 3 && flag == 0){
        alert("O wins")
        return true;
      }
  }
    var countx=0;
    var counto=0;  
    for(var i=0,j=2;i<3,j>=0;i++,j--){
    if(board[j][i] === 'X'){
      countx= countx + 1;
    }
    else if(board[j][i] === 'O'){
        counto= counto + 1;
    }
    
        if(countx == 3 && flag == 1){
        alert("X wins")
        return true;
      }
    if(counto == 3 && flag == 0){
        alert("O wins")
        return true;
      }
  }
    
}    

function addToBoard(board, x, y) {
  if(board[x][y] === undefined){
    if(flag == 0){
      flag = 1;
    board[x][y] = 'X';
    $('#' + x + y).text(board[x][y]);
    }
    else{
      flag = 0;
      board[x][y] = 'O';
      $('#' + x + y).text(board[x][y]);
    }
  }
    else {
      return false;
    }
checkwin(board);
}
function parseString(str) {
  var r = str[0];
  var c = str[1];
  return[r,c];
}
function initEventHandlers() {
  $('.cell').click(function (){
    var b = $(this).attr('id');
    var dim = parseString(b);
    var row = parseInt(dim[0]); 
    var column= parseInt(dim[1]);
      addToBoard(board,row,column);
      });
   $('.buton').click(function(){
     $('.cell').text("");
       flag = 0;
    for(var i =0;i<3;i++){
        for(var j=0;j<3;j++){
            board[i][j]=undefined;
        }
    }    
   })
}
}
$(document).ready(main);
