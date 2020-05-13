// console.log("Hi");

var but1 = document.querySelector("#b1");
var but2 = document.querySelector("#b2");
var butR = document.querySelector("#reset");
var p1sc=0;
var h1p1 = document.querySelector('#p1');
var p2sc=0;
var h1p2 = document.querySelector('#p2');
var gameOver = false;
var numIp = document.querySelector('input');
var pl_turn = document.querySelector('#turns');
// pl_turn = (int)pl_turn;
// var pl_turn=5;
var win_sc = 5;

function reset(){
	h1p1.textContent = '0';
	h1p2.textContent = '0';
	p1sc=0;
	p2sc=0;
	gameOver=false;
	h1p2.style.color='black';
	h1p1.style.color = 'black';
}


but1.addEventListener("click",function(){
	if(!gameOver)
		{
			p1sc++;
			h1p1.textContent = p1sc;
			if(p1sc===win_sc)
			{
				gameOver=true;
				h1p1.style.color = 'green';
			}
		}
})

but2.addEventListener("click",function(){
	
	if(!gameOver)
		{
			p2sc++;
			h1p2.textContent = p2sc;
			if(p2sc===win_sc)
			{
				gameOver = true;
				h1p2.style.color='green';
			}
		}
})
butR.addEventListener("click",reset)

numIp.addEventListener("change",function(){
	pl_turn.textContent = this.value;
	win_sc = Number(this.value);
	reset();

})