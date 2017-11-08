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

$("#orderBack").click(function(){
	uiElements = $("#uipanel").children();
	var containerZ = clickedContainer.css('z-index');

	if(uiElements.length == 1)
		return;

	var index;
	for(var i=0; i<uiElements.length; i++){
		if(clickedContainer.css('z-index') == $(uiElements[i]).css('z-index')){
			if(parseInt(clickedContainer.css('z-index')) <= 1)
				return;

			index = i;
			break;
		}
	}

	var current = uiElements[index];
	var prev; //find prev
	var currentZ = parseInt($(current).css('z-index'));
	var temp = 0;
	for(var i=0; i<uiElements.length; i++){
		temp = parseInt($(uiElements[i]).css('z-index'));
		if(currentZ - 1 == temp){
			prev = uiElements[i];
			break;
		}
	}

	//swap prev to clickedContainer
	var temp;
	temp = $(prev).css('z-index');
	$(prev).css('z-index', $(current).css('z-index'));
	$(current).css('z-index', temp);
});

$("#orderFront").click(function(){

	uiElements = $("#uipanel").children();
	var containerZ = clickedContainer.css('z-index');

	if(uiElements.length == 1)
		return;

	var index;
	for(var i=0; i<uiElements.length; i++){
		if(clickedContainer.css('z-index') == $(uiElements[i]).css('z-index')){
			if(parseInt(clickedContainer.css('z-index')) >= uiElements.length)
				return;

			index = i;
			break;
		}
	}

	var current = uiElements[index];
	var next; //find next
	var currentZ = parseInt($(current).css('z-index'));
	var temp = 0;
	for(var i=0; i<uiElements.length; i++){
		temp = parseInt($(uiElements[i]).css('z-index'));
		if(currentZ + 1 == temp){
			next = uiElements[i];
			break;
		}
	}

	//swap next to clickedContainer
	var temp;
	temp = $(next).css('z-index');
	$(next).css('z-index', $(current).css('z-index'));
	$(current).css('z-index', temp);

});

$("#orderToBack").click(function(){
	uiElements = $("#uipanel").children();
	var containerZ = clickedContainer.css('z-index');

	if(uiElements.length == 1)
		return;

	var index;
	for(var i=0; i<uiElements.length; i++){
		if(clickedContainer.css('z-index') == $(uiElements[i]).css('z-index')){
			if(parseInt(clickedContainer.css('z-index')) <= 1)
				return;
			index = i;
			break;
		}
	}

	var current = uiElements[index];
	var prev; //find prev
	var temp = 0;
	for(var i=0; i<uiElements.length; i++){
		temp = parseInt($(uiElements[i]).css('z-index'));
		if(1 == temp){
			prev = uiElements[i];
			break;
		}
	}

	//swap prev to clickedContainer
	var temp;
	temp = $(prev).css('z-index');
	$(prev).css('z-index', $(current).css('z-index'));
	$(current).css('z-index', temp);
});

$("#orderToFront").click(function(){

	uiElements = $("#uipanel").children();
	var containerZ = clickedContainer.css('z-index');

	if(uiElements.length == 1)
		return;

	var index;
	for(var i=0; i<uiElements.length; i++){
		if(clickedContainer.css('z-index') == $(uiElements[i]).css('z-index')){
			if(parseInt(clickedContainer.css('z-index')) >= uiElements.length)
				return;

			index = i;
			break;
		}
	}

	var current = uiElements[index];
	var next; //find next
	var currentZ = parseInt($(current).css('z-index'));
	var tempZ = 0;
	for(var i=0; i<uiElements.length; i++){
		temp = parseInt($(uiElements[i]).css('z-index'));
		if(uiElements.length == temp){
			next = uiElements[i];
			break;
		}
	}

	//swap next to clickedContainer
	var temp;
	temp = $(next).css('z-index');
	$(next).css('z-index', $(current).css('z-index'));
	$(current).css('z-index', temp);

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
	var fontSize = $("#newFontSize").val(ui.css('font-size').split("px")[0]);
	var text = $("#newText").val(ui.val() || ui.text());

	//console.log(width, height, fontSize, text);
}

