function registration() { 
inp1 = document.getElementById("name").value; 
inp5 = document.getElementById("log").value; 
inp6 = document.getElementById("pass").value; 

if (!document.getElementById("name").value ||
!document.getElementById("log").value || !document.getElementById("pass").value) {
alert ("Ошибка! Не все поля заполнены.");
}

else {
window.location.href = '../html/profile.html';	
localStorage.setItem('name', inp1); 
localStorage.setItem('log', inp5); 
localStorage.setItem('pass', inp6); 
}
}

let name_user = localStorage.getItem('name'); 
document.querySelector('.result').innerHTML =  'Добро пожаловать на сайт, ' + name_user;
