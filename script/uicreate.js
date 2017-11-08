var uiElements = [];
var uiPanel = $("#uipanel");

$("#createLabel").click(function(event){
	//width, height, text
	var labelWidth = $("#labelWidth").val() || $("#labelWidth").attr('placeholder');
	var labelHeight = $("#labelHeight").val() || $("#labelHeight").attr('placeholder');
	var labelFontSize = $("#labelFontSize").val() || $("#labelFontSize").attr('placeholder');
	var labelText = $("#labelText").val() || $("#labelText").attr('placeholder');
	createLabel(labelWidth, labelHeight, labelFontSize, labelText);
});

$("#createText").click(function(event){
	var textWidth = $("#textWidth").val() || $("#textWidth").attr('placeholder');
	var textHeight = $("#textHeight").val() || $("#textHeight").attr('placeholder');
	var textFontSize = $("#textFontSize").val() || $("#textFontSize").attr('placeholder');
	var textText = $("#textText").val() || $("#textText").attr('placeholder');
	createTextBox(textWidth, textHeight, textFontSize, textText);
});

$("#createButton").click(function(event){
	var buttonWidth = $("#buttonWidth").val() || $("#buttonWidth").attr('placeholder');
	var buttonHeight = $("#buttonHeight").val() || $("#buttonHeight").attr('placeholder');
	var buttonFontSize = $("#buttonFontSize").val() || $("#buttonFontSize").attr('placeholder');
	var buttonText = $("#buttonText").val() || $("#buttonText").attr('placeholder');
	createButton(buttonWidth, buttonHeight, buttonFontSize, buttonText);
});


function createLabel(width, height, fontSize, text){
	var styleContainer = "style= \"width:" + width + "px; height:" + height + "px \"";
	var styleUI = "style=\"font-size:" + fontSize + "px;\"";
	var style = "style= \"width:" + width + "px; height:" + height + "px; font-size: " + fontSize + "px; \""; 
	var LABEL = '<div class="resize-container dragobject draggable uilbl"' + styleContainer +' > <input type="text" ' + styleUI +' class="form-control label dragui" placeholder="Insert Label Text" value = "' +  text + '"> </div>';
	uiPanel.append(LABEL);
	setZOfElement($("#uipanel").children()[$("#uipanel").children().length-1]);
}

function createTextBox(width, height, fontSize, text){
	var styleContainer = "style= \"width:" + width + "px; height:" + height + "px \"";
	var styleUI = "style=\"font-size:" + fontSize + "px;\"";
	//var style = "style= \"width:" + width + "px; height:" + height + "px; font-size: " + fontSize + "px; \""; 
	var TEXTBOX = '<div class="resize-container dragobject draggable uitxt" ' + styleContainer +' > <input type="text" ' + styleUI +' class="form-control dragui" placeholder="Insert Input Text" value = "' +  text + '"> </div>';		
	uiPanel.append(TEXTBOX);
	setZOfElement($("#uipanel").children()[$("#uipanel").children().length-1]);

}

function createButton(width, height, fontSize, text){
	var styleContainer = "style= \"width:" + width + "px; height:" + height + "px \"";
	var styleUI = "style=\"font-size:" + fontSize + "px;\"";

	//var style = "style= \"width:" + width + "px; height:" + height + "px; font-size: " + fontSize + "px; \""; 
	var BUTTON = '<div class="resize-container dragobject draggable uibtn" ' + styleContainer +' > <button type="button" ' + styleUI +' class="btn btn-primary dragui">' + text + '</button> </div>';
	uiPanel.append(BUTTON);
	setZOfElement($("#uipanel").children()[$("#uipanel").children().length-1]);

}

function getMinZ(elements){
	var min;
	if(elements.length <= 0)
		min = elements[0];
	else 
		return;

	for(var i=1; i<elements.length; i++){
		if(elements[0] < min)
			min = elements[0];
	}
}

function setZOfElement(element){ 
	//html element must be added to uiElement array before calling this method
	var max;
	//var newElement = $("#uipanel").children()[$("#uipanel").children().length-1];
	uiElements = $("#uipanel").children();

	if(uiElements.length > 0){
		max = $(uiElements[0]).css('z-index') == 'auto' ? 0 : $(uiElements[0]).css('z-index');

		if(uiElements.length == 1){
			$(uiElements[0]).css('z-index', 1);
			return;
		}

		for(var i=1; i<uiElements.length; i++){
			var currentz = $(uiElements[i]).css('z-index') == 'auto' ? 0 : $(uiElements[i]).css('z-index');
			if(max < currentz)
				max = currentz;
		}

		$(element).css('z-index', parseInt(max) + 1);
	}
}