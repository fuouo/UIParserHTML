
var isLabelSettingsVisible = false;
var isTextSettingsVisible = false;
var isButtonSettingsVisible = false;

$("#addLabel").click(function(event){
	$("#labelSettings").slideDown( "slow", function(){});
	$("#textSettings").slideUp( "slow", function(){});
	$("#buttonSettings").slideUp( "slow", function(){});
	if(isLabelSettingsVisible){
		hideAllSettings();
		isLabelSettingsVisible = false;
	}
	else
		isLabelSettingsVisible = true;
});

$("#addText").click(function(event){
	$("#labelSettings").slideUp( "slow", function(){});
	$("#textSettings").slideDown( "slow", function(){});
	$("#buttonSettings").slideUp( "slow", function(){});
	if(isTextSettingsVisible){
		hideAllSettings();
		isTextSettingsVisible = false;
	}
	else
		isTextSettingsVisible = true;
});

$("#addButton").click(function(event){
	$("#labelSettings").slideUp( "slow", function(){});
	$("#textSettings").slideUp( "slow", function(){});
	$("#buttonSettings").slideDown( "slow", function(){});
	if(isButtonSettingsVisible){
		hideAllSettings();
		isButtonSettingsVisible = false;
	}
	else
		isButtonSettingsVisible = true;
});


function hideAllSettings(){
	isLabelSettingsVisible = false;
	isTextSettingsVisible = false;
	isButtonSettingsVisible = false;
	$("#labelSettings").slideUp( "slow", function(){});
	$("#textSettings").slideUp( "slow", function(){});
	$("#buttonSettings").slideUp( "slow", function(){});
}
