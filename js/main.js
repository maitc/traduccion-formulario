function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];

	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo Electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar Sesión";


}

translate();

function resultado(){
	var res1 = document.getElementById("inputEmail").value;//value me recoge todo lo que ingrese el usuario en las casillas
	var res2 = document.getElementById("inputPassword").value;

	var em = document.getElementById("emailOk");//llamo al parrafo donde quiero que ingrese y muestre.
	var ti = document.getElementById("titulo");
	ti.innerHTML = "Datos de formulario";
	em.innerHTML = "El correo electronico ingresado es: <br>" + res1 + "<br> La clave ingresada es: <br>" + res2;//con inner me ingresará y mostrara lo que ingreso el usuario.

}
