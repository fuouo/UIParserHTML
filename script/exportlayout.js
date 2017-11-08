$("#exportLayout").click(function(){
	var FILENAME = "UILayout";
	var obj = [];

	getAllUIElements();

	for(var i=0; i<uiElements.length; i++){

		obj.push( 
		{
		'type': identifyUIElement($(uiElements[i])),
		'x': $(uiElements[i]).position().left < 0 ? 0 : Math.ceil($(uiElements[i]).position().left),
		'y': $(uiElements[i]).position().top < 0 ? 0 : Math.ceil($(uiElements[i]).position().top),
		'width': Math.ceil($(uiElements[i]).width()) + 12,
		'height': Math.ceil($(uiElements[i]).height()) + 12,
		'zindex': parseInt($(uiElements[i]).css('z-index')),
		'fontSize': $($(uiElements[i]).children()[0]).css('font-size').split("px")[0],
		'text' : getTextOfElement($(uiElements[i])),
		}
		);

	}

	var fin = { "elements" : obj };

	var jsonFile = JSON.stringify(fin);

	console.log(jsonFile);

	//var file = new File([jsonFile], FILENAME + ".json", {type: "text/plain;"});
	//saveAs(file);

	// var blob = new Blob([jsonFile], {type: "text/plain;charset=utf-8"});
	// saveAs(blob, FILENAME + ".json");
})



function getAllUIElements(){
	uiElements = $("#uipanel").children();
	sortFromZ();
}

function identifyUIElement(uiElement){
	var LABEL = "uilbl";
	var TEXTBOX = "uitxt";
	var BTN = "uibtn";

	var elem = uiElement;

	if(elem.hasClass(LABEL))
		return "label";
	else if(elem.hasClass(TEXTBOX))
		return "textbox";
	else if(elem.hasClass(BTN))
		return "button";


	return "";
}

function getTextOfElement(uiElement){
	var txt = "";

	var txt = $(uiElement.children()[0]).text();
	if(!$(uiElement.children()[0]).text()){
		txt = $(uiElement.children()[0]).val();
	}

	return txt;

}

function sortFromZ(){

	uiElements.sort(function(a, b){
		return parseInt($(a).css('z-index')) - parseInt($(b).css('z-index')); 
	});

	console.log(uiElements);
}