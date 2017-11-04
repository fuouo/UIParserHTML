var clickedContainer, clickedUI;
$('body').on('click', '.dragobject', function(event){
	var container = $(this);
	var ui = $(container.children()[0]);
	console.log(ui);
	console.log(container);

	clickedContainer = container;
	clickedUI = ui;
	hideAllSettings();
	$("#newSettings").slideDown('slow', function(){});
	initEditTable(clickedUI, clickedContainer);
});

$("#updateUI").click(function(){
	$(clickedContainer).width( $("#newWidth").val() - 12);
	$(clickedContainer).height($("#newHeight").val() - 12);
	$(clickedUI).css('font-size', $("#newFontSize").val() + "px");
	$(clickedUI).text($("#newText").val());
	$(clickedUI).val($("#newText").val());

});

$("#deleteUI").click(function(){
	$(clickedContainer).remove();
})

function initEditTable(ui, container){
	var width = $("#newWidth").val(container.width() + 12);
	var height = $("#newHeight").val(container.height() + 12);
	console.log(ui.css('font-size').split("px")[0]);
	var fontSize = $("#newFontSize").val(ui.css('font-size').split("px")[0]);
	var text = $("#newText").val(ui.val() || ui.text());

	console.log(width, height, fontSize, text);
}

