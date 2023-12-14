
'use strict';

let post = document.querySelector('.post');
let get = document.querySelector('.get');
let putch = document.querySelector('.putch');
let put = document.querySelector('.put');
let del = document.querySelector('.del');
post.addEventListener('click', postData)
get.addEventListener('click', getData)
putch.addEventListener('click', putchData)
put.addEventListener('click', putData)
del.addEventListener('click', delData)

function postData (){
fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify({
      userId: 2,
      title: "buy vegetables",
      autor: 'some text'
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"	
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
}

function getData(){
fetch('http://localhost:3000/posts')
.then(res=>{
  return res.json();
  
}).then(res=>{
  console.log(res);
})
}
//polnaya novaya versia
function putData(){
  fetch('http://localhost:3000/posts/2', {
      method: 'PUT',
      body: JSON.stringify({
        userId: 22,
        id: 22,
        title: "updated resource",
        completed: false
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"	
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))

}

function putchData(){
  fetch('http://localhost:3000/posts/2', {
      method: 'PATCH',
      body: JSON.stringify({
        title: "my custom title"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"	
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

function delData(){
  fetch('http://localhost:3000/posts/2', {
    method: 'DELETE'
  })
}

let name = "Suren";

function foo(){console.log("this is a function foo")}
