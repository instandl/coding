// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[5]);
// //document.all[5].textContent = 'JAVASCRIPT';
// console.log(document.forms);
// console.log(document.links);
// console.log(document,images);

//GET ELEMENT BE ID
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent = 'Java Script';
//headerTitle.innerText = 'DOM';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3>JAVA SCRIPT DOM</h3>';
//headerTitle.style.borderBottom = 'solid 3px #000';


//GETELEMENT BYCLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Rice'
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // to style the whole class we us a loop
// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

//GETELEMENTBYTAGNAME

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Rice'
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // to style the whole class we us a loop
// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// // QUERYSELECTOR
// var header = document.querySelector('input');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'input your text';

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// //QUERYSELECTALL
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i< li.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';    
// }

//TRAVERSING THE DOM

// var itemList = document.querySelector('#items');
// ////parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// ////PARENTELEMENT
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// ////CHILDNODES
// console.log(itemList.chilNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';


// ////FIRSTCHILD
// console.log(itemList.firstChild);

// ////FIRSTELEMENT
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'RICE';

// ////LASTCHILD
// console.log(itemList.lastChild);

// ////LASTELEMENTCHILD
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'MEAT';

// ////PREVIOUSSIBLING
// console.log(itemList.previousSibling);

// ////PREVIOUSELEEMENTSIBLING
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// ////creatingHTML element

// ////create a div
// var newDiv = document.createElement('div');

// ////ADD CLASS
// newDiv.ClassName = 'class';

// ////ADD ID
// newDiv.id = 'id'

// ////ADD ATRIBUTES
// newDiv.setAttribute('title', 'Hello Div')

// ////CREATE TEXT NODE
// var newDivText = document.createTextNode('Hello World');

// ////ADD TEXT TI DIV
// newDiv.appendChild(newDivText);
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

// var btn = document.getElementById('botton').addEventListener('click', buttonClick);

// function buttonClick(e){
//     document.getElementById("header-title").textContent = 'This Text Has Been Changed From JavaScript';
//     document.querySelector('#main-header').style.backgroundColor = 'blue';
//     document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//     ////To Get the class name and other functons that happen on clickinng the botton
//     console.log(e);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.classList);
// //// to get the type of event executed

// console.log(e.type);

// ////to get the position where the button was clicked
// console.log(e.clientX);
//}


var button = document.getElementById('button');
//var box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('bdclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

 //box.addEventListener('mousemove', runEvent);

// function runEvent(e){
//     console.log('EVENT TYPE:'+e.type);

//     output.innerHTML = '<h3> Mouse X:'+e.offsetX+'</h3><h3> Mouse Y:'+e.offsetY+'</h3>';

//     box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";


// }

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');
var from = document.querySelector('form');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);


// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);
// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
//itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e){

    e.preventDefault();


    console.log('EVENT TYPE:'+e.type);

    console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'


}