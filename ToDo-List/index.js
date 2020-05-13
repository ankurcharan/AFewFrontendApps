// alert("connected!");

$("ul").on('click','li',function(){
	$(this).toggleClass("completed");
});

$("ul").on('click','span',function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		var todo = "<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>";
		$("ul").append(todo);
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});