var add = document.getElementById('add');
var input = document.getElementById('input');
var inputTitle = document.getElementById('inputTitle');
var mainUl = document.getElementById('mainUl');
let template = document.getElementById('template');
function getText()
{
	var text = input.value;
	return text; 
}

function getTitle()
{
	var text = inputTitle.value;
	return text;
}

function del(btn)
{
var data = btn.getAttribute('data');
var liData = document.querySelectorAll("[data='"+data +"']");
liData[0].style.display = "none";
}


var counterofArray = 0;
class build
{
	constructor(text, title)
	{
		counterofArray++;
		var li = document.createElement('li');
		var div = document.createElement('div');
		var a = document.createElement('a');
		var h3 = document.createElement('h3');
		var divBtn = document.createElement('div');
		var button = document.createElement('button');
		var hr = document.createElement('hr');
		var br = document.createElement('br');
		div.className = 'todo-object';
		h3.innerHTML = title;
		a.innerHTML = text;	
		divBtn.className = 'todo-object-button';
		button.id = 'delete';
		button.innerHTML = '-';
		/////////////////////////////////////////////
		button.setAttribute("onclick", 'del(this)');
			button.setAttribute("data", counterofArray);	
		/////////////////////////////////////////////

		////////////////////////////////////////////
		li.setAttribute("data", counterofArray);	
		////////////////////////////////////////////
		mainUl.appendChild(li);
		li.appendChild(h3);
		li.appendChild(div);
	
		div.appendChild(br);
		div.appendChild(a);
		div.appendChild(divBtn);
		divBtn.appendChild(button);
		li.appendChild(hr);
	}
	
}
/*

created by Roman Parhomenko(Rome0Coder)

*/

function startBuild()
{
	var text = getText();
	var title = getTitle();
	if(text == '')
	{
		alert('error');
		template.style.display = 'block';
	}
	else
	{
		template.style.display = 'none';
		var b = new build(text, title);
	}
}
/*

created by Roman Parhomenko(Rome0Coder)

*/
