function handleFileSelect(e) {
	var file = e.target.files[0];
	console.log(file.name);

	var contents;

	if(file) {
		var reader = new FileReader();
		reader.onload = function(e) {
			contents = e.target.result;
			console.log(contents);
			contents = JSON.parse(contents);

			var elements = contents.elements;

			// for elements
			for(var i = 0; i < elements.length; i ++) {
				console.log(elements[i]);
				var x = parseInt(elements[i].x);
				var y = parseInt(elements[i].y);
				var width = parseInt(elements[i].width);
				var height = parseInt(elements[i].height);
				var text = elements[i].text;
				var fontSize = parseInt(elements[i].fontSize);
				var type = elements[i].type;

				// add to ui
				if(type == "label") {
					createLabel(x, y, width, height, fontSize, text);
				} else if(type == "button") {
					createButton(x, y, width, height, fontSize, text);
				} else if(type == "textbox") {
					createTextBox(x, y, width, height, fontSize, text);
				}
			}


		}

		reader.readAsText(file);
	} else {
		console.log("Failed to load file");
	}

	// var filepath = URL.createObjectURL(file);

	// console.log(filepath);

	// $.getJSON(file.name, function(json) {
	//     console.log(json); // this will show the info it in firebug console
	// });
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);