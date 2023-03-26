function checkUser() { 
  inp1 = document.getElementById("mylogin").value; 
  inp2 = document.getElementById("mypassword").value; 

  if (inp1 == "111" && inp2 == "111") { 
    window.location.href = '../html/myprofile.html';	
  } else {
    alert( "Неверный логин или пароль" ); 
}
}

