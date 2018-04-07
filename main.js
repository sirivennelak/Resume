// initialising the ajax techniques
function push(file,callback) {
  var xhr =new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange =function () {
if (xhr.readyState ===4&&xhr.status=="200") {
callback(xhr.responseText);
}
  }
xhr.send();
}
// calling function
push ("data.json",function(text){
  let ind=JSON.parse(text);
  console.log(ind);
profile(ind.basics);
} )
// for geting through id
var main=document.getElementById('main');
// for geting through class
// vat main=document.queryselectio('.main');
var left=document.createElement("div");
left.classList.add("left");
left.setAttribute("id","left");
// appending to main
main.appendChild(left);
function profile(basic){
var image=document.createElement("img");
image.src=basic.photo;
left.appendChild(image);
var name=document.createElement("h1");
name.textContent=basic.name;
left.appendChild(name);
var email=document.createElement("h1");
email.textContent=basic.email;
left.appendChild(email);
var phone=document.createElement("h1");
phone.textContent=basic.phone;
left.appendChild(phone);

}
