$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	$(this).parent().remove();
	event.stopPropagation();
});

$("input").change(function() {
	var todoText = $("input").val();
	$("input").val(""); 
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
});

$(".fa-plus").on("click",function(){
	$("input").fadeToggle();
});

