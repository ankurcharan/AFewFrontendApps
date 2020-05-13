// alert("Connected!");

var mode=0;
var timeCounter =0;
var lapCounter = 0;
var action;
var lapNumber=0;

var ts=0,tcs=0,tm=0,ls=0,lcs=0,lm=0;

hideshowbuttons("#startbut","#lapbut");

$("#startbut").click(function(){
	// mode=1;
	hideshowbuttons("#stopbut","#lapbut");
	$("#lapbut").attr('disabled',false);
	$("#lapbut").removeClass('disabled');
	startAction();
});

$("#stopbut").click(function(){
	hideshowbuttons("#resumebut","#resetbut");
	$("#resetbut").attr('disabled',false);
	$("#resetbut").removeClass('disabled');
	clearInterval(action);
});

$("#resumebut").click(function(){
	hideshowbuttons("#stopbut","#lapbut");
	startAction();
});

$("#resetbut").click(function(){
	location.reload();
});

$("#lapbut").click(function(){
	clearInterval(action);
	lapCounter=0;
	addLap();
	startAction();
});











function hideshowbuttons(x,y)
{
	$(".control").hide();
	$(x).show();
	$(y).show();
}

function startAction()
{
	action = setInterval(function(){
		timeCounter++;
		if(timeCounter==100*100*60)
		{
			timeCounter=0;
		}
		lapCounter++;
		if(lapCounter==100*100*60)
		{
			lapCounter=0;
		}
		updateTime();

	},10);
}

function updateTime()
{
	tm = Math.floor(timeCounter/6000);
	ts = Math.floor((timeCounter%6000)/100);
	tcs = (timeCounter%6000)%100;

	$("#tmin").text(format(tm));
	$("#tsec").text(format(ts));
	$("#tcsec").text(format(tcs));

	lm = Math.floor(lapCounter/6000);
	ls = Math.floor((lapCounter%6000)/100);
	lcs = (lapCounter%6000)%100;

	$("#lmin").text(format(lm));
	$("#lsec").text(format(ls));
	$("#lcsec").text(format(lcs));
}

function format(x)
{
	if(x<10)
		return '0'+x;
	else
		return x;
}

function addLap()
{
	lapNumber++;
	var lapDetails = 
		'<div class="laptimeline">'+
			'<div class="laptimetitle">'+
				'Lap' + lapNumber +
			'</div>'+
			'<div class="laptime">'+
				'<span>'+ format(lm) +'</span>'+
                ':<span>'+ format(ls) +'</span>'+
                ':<span>'+ format(lcs) +'</span>'+
            '</div>'+
        '</div>';

    $(lapDetails).prependTo("#laps");
}