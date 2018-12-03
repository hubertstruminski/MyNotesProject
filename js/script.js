var btn = document.getElementById("btnImage");
var article = document.querySelector("article");

var title = document.getElementsByClassName("title");

var count = 0;
var titleTxtAreaCount = 0;
var number = 0;
function dropdown()
{

	title.innerHTML = "<textarea>Set title</textarea>";
}
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
	title.setAttribute("onclick", "dropdown()");
	title.textContent = "Title " + count;

	var btnClose = document.createElement("input");
	btnClose.setAttribute("type", "submit");
	btnClose.classList.add("buttonClose");
	btnClose.setAttribute("value", "X");

	var btnSave = document.createElement("input");
	btnSave.setAttribute("type", "submit");
	btnSave.classList.add("buttonSave");
	btnSave.setAttribute("value", "Save");

	headerNote.appendChild(btnSave);
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
		 container.parentNode.removeChild(container);
	});



	count++;
}


window.onload = function()
{
	btnImage.addEventListener("click", function(){
		createNote();
	});



}