var btn = document.getElementById("btnImage");
var article = document.querySelector("article");
var ul = document.querySelector("ul");
var btnRemoveAll = document.getElementById("btnAll");
var title = document.getElementsByClassName("title");

var liElements = document.getElementsByClassName("liSavedClass");
var btnLiSaved = document.getElementsByClassName("btnLiClass");


var count = 0;
var number = 0;
var grow = true;
var counterLiElements = 0;

var growEnter = true;

function createNote()
{
	var container = document.createElement("div");
	container.classList.add("container");
	container.setAttribute("id", "div" + count);

	var headerNote = document.createElement("div");
	headerNote.classList.add("headerClass");
	var textarea = document.createElement("textarea");
	textarea.classList.add("textareaClass");

	var title = document.createElement("div");
	title.classList.add("title");
	title.textContent = count + ". " + "Title " + count;

	var btnClose = document.createElement("input");
	btnClose.setAttribute("type", "submit");
	btnClose.classList.add("buttonClose");
	btnClose.setAttribute("value", "X");

	headerNote.appendChild(btnClose);
	headerNote.appendChild(title);
	container.appendChild(headerNote);
	container.appendChild(textarea);
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

	var mainTextAreaElements = document.getElementsByClassName("textareaClass");

	mainTextAreaElements[0].addEventListener("keypress", function key(e){
		if(e.keyCode == 13){
			var li = document.createElement("li");
			li.classList.add("liSavedClass");

			var btnLi = document.createElement("input");
			btnLi.classList.add("btnLiClass");
			btnLi.setAttribute("type", "submit");
			btnLi.setAttribute("value", title.textContent);

			li.appendChild(btnLi);
			ul.appendChild(li);

			var btnLiElements = document.getElementsByClassName("btnLiClass");

			btnLiElements[0].addEventListener("click", function(){
				if(grow == false){
					container.style.visibility = "visible";
					grow = true;
				}else{
					container.style.visibility = "hidden";
					grow = false;
				}
			});
			mainTextAreaElements[0].removeEventListener("keypress", key);
		}
	});

	btnRemoveAll.addEventListener("click", function(){
		var elements = document.getElementsByClassName("liSavedClass");

		for(var i=elements.length-1; i>= 0; i--){
			elements[i].parentNode.removeChild(elements[i]);
		}
	});

	count++;
}


window.onload = function()
{
	btnImage.addEventListener("click", function(){
		createNote();
	});
}