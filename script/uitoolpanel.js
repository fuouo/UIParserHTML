
var isLabelSettingsVisible = false;
var isTextSettingsVisible = false;
var isButtonSettingsVisible = false;

$("#addLabel").click(function(event){
	$("#labelSettings").slideDown( "slow", function(){});
	$("#textSettings").slideUp( "slow", function(){});
	$("#buttonSettings").slideUp( "slow", function(){});
	$("#newSettings").slideUp( "slow", function(){});

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
	$("#newSettings").slideUp( "slow", function(){});

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
	$("#newSettings").slideUp( "slow", function(){});

	if(isButtonSettingsVisible){
		hideAllSettings();
		isButtonSettingsVisible = false;
	}
	else
		isButtonSettingsVisible = true;
});

$(".hideSettings").click(function(event){
	var settingContainer = $(this).parent();
	switch(settingContainer.attr('id')){
		case 'labelSettings':
		isLabelSettingsVisible = false;
		break;
		case 'textSettings':
		isTextSettingsVisible = false;
		break;
		case 'buttonSettings':
		isButtonSettingsVisible = false;
		break;
	}

	settingContainer.slideUp("slow", function(){});
});

function hideAllSettings(){
	isLabelSettingsVisible = false;
	isTextSettingsVisible = false;
	isButtonSettingsVisible = false;
	$("#labelSettings").slideUp( "slow", function(){});
	$("#textSettings").slideUp( "slow", function(){});
	$("#buttonSettings").slideUp( "slow", function(){});
}
