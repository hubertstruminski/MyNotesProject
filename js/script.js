var btn = document.getElementById("btnImage");
var article = document.querySelector("article");
var ul = document.querySelector("ul");
var btnRemoveAll = document.getElementById("btnAll");
var title = document.getElementsByClassName("title");

var btnLiElements = document.getElementsByClassName("btnLiClass");

var count = 0;
var number = 0;
var grow = true;

//----------------------------
var divX = 0;
var divY = 0;

var drawActive = false;

var insertDivX;
var insertDivY;
//----------------------------

function createNote()
{
	var container = document.createElement("div");
	container.classList.add("container");
	container.setAttribute("id", "div" + count);

	var headerNote = document.createElement("div");
	headerNote.classList.add("headerClass");
	var textarea = document.createElement("textarea");
	textarea.classList.add("textareaClass");
	textarea.setAttribute("type", "text");

	var title = document.createElement("div");
	title.classList.add("title");
	title.textContent = count + ". " + "Title " + count;

	var btnClose = document.createElement("input");
	btnClose.setAttribute("type", "submit");
	btnClose.classList.add("buttonClose");
	btnClose.setAttribute("value", "X");

	var btnSave = document.createElement("input");
	btnSave.setAttribute("type", "submit");
	btnSave.classList.add("buttonSave");
	btnSave.setAttribute("value", "Save");

	var footerNote = document.createElement("div");
	footerNote.classList.add("footerClass");

	var btnMinus = document.createElement("input");
	btnMinus.setAttribute("type", "submit");
	btnMinus.classList.add("buttonMinus");
	btnMinus.setAttribute("value", "-");

	var btnPlus = document.createElement("input");
	btnPlus.setAttribute("type", "submit");
	btnPlus.classList.add("buttonPlus");
	btnPlus.setAttribute("value", "+");

	headerNote.appendChild(btnSave);
	headerNote.appendChild(btnClose);
	headerNote.appendChild(title);

	footerNote.appendChild(btnPlus);
	footerNote.appendChild(btnMinus);

	container.appendChild(headerNote);
	container.appendChild(textarea);
	container.appendChild(footerNote);

	article.appendChild(container);

	title.addEventListener("dblclick", function(e){
		title.textContent = "";
		var txtAreaTitle = document.createElement("textarea");
		txtAreaTitle.classList.add("txtAreaTitle");
		txtAreaTitle.setAttribute("id", "text" + number)
		title.appendChild(txtAreaTitle);

		txtAreaTitle.addEventListener("keypress", function(e){
			if(e.keyCode == 13){
				title.textContent = txtAreaTitle.value;
			}
		});
	});

	btnClose.addEventListener("click", function(){
		 container.style.visibility = "hidden";
		 grow = false;
	});

	// var mainTextAreaElements = document.getElementsByClassName("textareaClass");

	// mainTextAreaElements[0].addEventListener("keypress", function key(e){
	// 	if(e.keyCode == 13){
	// 		var li = document.createElement("li");
	// 		li.classList.add("liSavedClass");

	// 		var btnLi = document.createElement("input");
	// 		btnLi.classList.add("btnLiClass");
	// 		btnLi.setAttribute("type", "submit");
	// 		btnLi.setAttribute("value", title.textContent);

	// 		li.appendChild(btnLi);
	// 		ul.appendChild(li);

	// 		var btnLiElements = document.getElementsByClassName("btnLiClass");

	// 		btnLiElements[0].addEventListener("click", function(){
	// 			if(grow == false){
	// 				container.style.visibility = "visible";
	// 				grow = true;
	// 			}else{
	// 				container.style.visibility = "hidden";
	// 				grow = false;
	// 			}
	// 		});
	// 		mainTextAreaElements[0].removeEventListener("keypress", key);
	// 	}
	// });


	btnSave.addEventListener("click", function(){
		btnLiElements[count].setAttribute("value", title.textContent);
		btnLiElements[count].style.color = "black";
		btnLiElements[count].style.backgroundColor = "#ef854c";

		btnLiElements[count].addEventListener("click", function(){
			if(grow == false){
				container.style.visibility = "visible";
				grow = true;
			}else{
				container.style.visibility = "hidden";
				grow = false;
			}
		});	
	});

	btnRemoveAll.addEventListener("click", function(){
		for(var i=btnLiElements.length-1; i>= 0; i--){
			btnLiElements[i].setAttribute("value", "Empty tab");
			btnLiElements[i].style.color = "#666";
			btnLiElements[i].style.backgroundColor = "#2196F3";
		}

		var container = document.getElementsByClassName("container");

		for(var i=0; i<container.length; i++){
			container[i].parentNode.removeChild(container[i]);
		}

		count = 0;
	});

	btnPlus.addEventListener("click", function(){
		width = window.getComputedStyle(textarea, null).getPropertyValue("width");
    	currentSizeWidth = parseFloat(width);
    	height = window.getComputedStyle(textarea, null).getPropertyValue("height");
    	currentSizeHeight = parseFloat(height)

    	currentSizeWidth += 40;
    	currentSizeHeight += 40;

    	textarea.style.width = currentSizeWidth + "px";
    	textarea.style.height = currentSizeHeight + "px";
	});

	btnMinus.addEventListener("click", function(){
		width = window.getComputedStyle(textarea, null).getPropertyValue("width");
    	currentSizeWidth = parseFloat(width);
    	height = window.getComputedStyle(textarea, null).getPropertyValue("height");
    	currentSizeHeight = parseFloat(height)

    	currentSizeWidth -= 40;
    	currentSizeHeight -= 40;

    	textarea.style.width = currentSizeWidth + "px";
    	textarea.style.height = currentSizeHeight + "px";
	});

	container.addEventListener("mousedown", function(e){
		container.style.backgroundColor = "gray";
		drawActive = true;

		insertDivX = e.offsetX;
		insertDivY = e.offsetY;

	});

	container.addEventListener("mousemove", function(e){
		if(drawActive){

			divX = e.clientX - insertDivX;
			divY = e.clientY - insertDivY;

			container.style.left = divX + "px";
			container.style.top = divY + "px";
		}

	});

	container.addEventListener("mouseup", function(){
		container.style.backgroundColor = "black";
		drawActive = false;
	});

	count++;
}


window.onload = function()
{
	count = 0;

	btnImage.addEventListener("click", function(){
		createNote();
	});
}