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
skill(ind.skills);
edu(ind.education);
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
var right=document.createElement("div");
right.classList.add("right");
right.textContent="technical skills:"
right.appendChild(document.createElement("HR"));
main.appendChild(right);
function skill(ammu) {
  var table=document.createElement("table");
  var row="";
  for(var i = 0; i <ammu.length; i++){
    row +="<tr><td>"+ammu[i].name+"</td><td>"+ammu[i].value+"</td></tr>"
  }
table.innerHTML=row;
right.appendChild(table);
}
function edu(Education){
  var e1=document.createElement("div");
  e1.classList.add("education");
  e1.textContent="Education details:";
  e1.appendChild(document.createElement("HR"));
  right.appendChild(e1);
  for(i in Education){
    var e2=document.createElement("h2");
    e2.textContent=Education[i].course;
      var ul=document.createElement("ul");
      for(j in Education[i].college){
        var list=document.createElement("li");
      list.textContent=Education[i].college[j];
      ul.appendChild(list);
      e1.appendChild(e2);
      e1.appendChild(ul);


    }
  }
}
