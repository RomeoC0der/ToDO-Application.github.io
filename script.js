var add = document.getElementById('add');
var input = document.getElementById('input');
var mainUl = document.getElementById('mainUl');
let template = document.getElementById('template');
function getText()
{
	var text = input.value;
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
	constructor(text)
	{
		counterofArray++;
		var li = document.createElement('li');
		var div = document.createElement('div');
		var a = document.createElement('a');
		var divBtn = document.createElement('div');
		var button = document.createElement('button');
		var hr = document.createElement('hr');
		div.className = 'todo-object';
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
		li.appendChild(div);
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
	if(text == '')
	{
		alert('error');
		template.style.display = 'block';
	}
	else
	{
		template.style.display = 'none';
		var b = new build(text);
	}
}
/*

created by Roman Parhomenko(Rome0Coder)

*/