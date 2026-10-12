const formulario= document.getElementById('formulario');
const inputs=document.querySelectorAll('#formulario input');
const expresiones=
{
	//expresiones regulares
	//usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
  apellido: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  clave: /^.{4,12}$/, // cualquier caracter 4 a 12 digitos.
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}
const campos=
{
  nombre: false,
  apellido: false,
  telefono: false,
  correo: false,
  clave: false
}
const validarFormulario= (e)=>
{
  //console.log('se ejecuto');
  //console.log(e.target.name);
  switch(e.target.name)
  {
    case "nombre":
  	//console.log('funciona');
	if(expresiones.nombre.test(e.target.value))	  		
	  	{
	      document.getElementById('grupo_nombre').classList.remove('formulario_grupo-incorrecto');
	      document.getElementById('grupo_nombre').classList.add('formulario_grupo-correcto');
	      document.querySelector('#grupo_nombre i').classList.remove('fa-times-circle');
	      document.querySelector('#grupo_nombre i').classList.add('fa-check-circle');
	      document.querySelector('#grupo_nombre .formulario_input-error').classList.remove('formulario_input-error-activo');
	      campos['nombre']=true;
	    }
	 else
	  	{	  		
        document.getElementById('grupo_nombre').classList.add('formulario_grupo-incorrecto');
        document.getElementById('grupo_nombre').classList.remove('formulario_grupo-correcto');
        document.querySelector('#grupo_nombre i').classList.add('fa-times-circle');
	      document.querySelector('#grupo_nombre i').classList.remove('fa-check-circle');
	      document.querySelector('#grupo_nombre .formulario_input-error').classList.add('formulario_input-error-activo');        
      	}  	
  	break;
    case "apellido":
  	//console.log('funciona');
	if(expresiones.apellido.test(e.target.value))	  		
	  	{
	      document.getElementById('grupo_apellido').classList.remove('formulario_grupo-incorrecto');
	      document.getElementById('grupo_apellido').classList.add('formulario_grupo-correcto');
	      document.querySelector('#grupo_apellido i').classList.remove('fa-times-circle');
	      document.querySelector('#grupo_apellido i').classList.add('fa-check-circle');
	      document.querySelector('#grupo_apellido .formulario_input-error').classList.remove('formulario_input-error-activo');
	      campos['apellido']=true;
	    }
	 else
	  	{  		
        document.getElementById('grupo_apellido').classList.add('formulario_grupo-incorrecto');
        document.getElementById('grupo_apellido').classList.remove('formulario_grupo-correcto');
        document.querySelector('#grupo_apellido i').classList.add('fa-times-circle');
	      document.querySelector('#grupo_apellido i').classList.remove('fa-check-circle');
	      document.querySelector('#grupo_apellido .formulario_input-error').classList.add('formulario_input-error-activo');          
      	}  	
  	break;
    case "telefono":
  	//console.log('funciona');
	if(expresiones.telefono.test(e.target.value))	  		
	  	{
	      document.getElementById('grupo_telefono').classList.remove('formulario_grupo-incorrecto');
	      document.getElementById('grupo_telefono').classList.add('formulario_grupo-correcto');
	      document.querySelector('#grupo_telefono i').classList.remove('fa-times-circle');
	      document.querySelector('#grupo_telefono i').classList.add('fa-check-circle');
	      document.querySelector('#grupo_telefono .formulario_input-error').classList.remove('formulario_input-error-activo');
	      campos['telefono']=true;
	    }
	 else
	  	{	  		
        document.getElementById('grupo_telefono').classList.add('formulario_grupo-incorrecto');
        document.getElementById('grupo_telefono').classList.remove('formulario_grupo-correcto');
        document.querySelector('#grupo_telefono i').classList.add('fa-times-circle');
	      document.querySelector('#grupo_telefono i').classList.remove('fa-check-circle');
	      document.querySelector('#grupo_telefono .formulario_input-error').classList.add('formulario_input-error-activo');          
      	}  	
  	break;
  	case "correo":
  	//console.log('funciona');
	if(expresiones.correo.test(e.target.value))  		
	  	{
	      document.getElementById('grupo_correo').classList.remove('formulario_grupo-incorrecto');
	      document.getElementById('grupo_correo').classList.add('formulario_grupo-correcto');
	      document.querySelector('#grupo_correo i').classList.remove('fa-times-circle');
	      document.querySelector('#grupo_correo i').classList.add('fa-check-circle');
	      document.querySelector('#grupo_correo .formulario_input-error').classList.remove('formulario_input-error-activo');
	      campos['correo']=true;
	    }
	 else
	  	{	  		
        document.getElementById('grupo_correo').classList.add('formulario_grupo-incorrecto');
        document.getElementById('grupo_correo').classList.remove('formulario_grupo-correcto');
        document.querySelector('#grupo_correo i').classList.add('fa-times-circle');
	      document.querySelector('#grupo_correo i').classList.remove('fa-check-circle');
	      document.querySelector('#grupo_correo .formulario_input-error').classList.add('formulario_input-error-activo');         
      	}  	
  	break;
  	case "clave":
  	//console.log('funciona');
  	if(expresiones.clave.test(e.target.value))	  		
	  	{
	      document.getElementById('grupo_clave').classList.remove('formulario_grupo-incorrecto');  	
	      document.getElementById('grupo_clave').classList.add('formulario_grupo-correcto');
	      document.querySelector('#grupo_clave i').classList.remove('fa-times-circle');
	      document.querySelector('#grupo_clave i').classList.add('fa-check-circle');
	      document.querySelector('#grupo_clave .formulario_input-error').classList.remove('formulario_input-error-activo');
	      campos['clave']=true;
	    }
	 else
	  	{	  		
        document.getElementById('grupo_clave').classList.add('formulario_grupo-incorrecto');
        document.getElementById('grupo_clave').classList.remove('formulario_grupo-correcto');
        document.querySelector('#grupo_clave i').classList.add('fa-times-circle');
	      document.querySelector('#grupo_clave i').classList.remove('fa-check-circle');
	      document.querySelector('#grupo_clave .formulario_input-error').classList.add('formulario_input-error-activo');
	  	}  	 	
  	break;  	
  }
 }
inputs.forEach((input)=>
{
	input.addEventListener('keyup',validarFormulario);
	input.addEventListener('blur',validarFormulario);		
});
formulario.addEventListener('submit',(e)=>
{
	//preventDefault, para evitar que los formularios se envíen automáticamente
	// cuando se hace clic en el botón Enviar, lo que le brinda la oportunidad 
	// de enviar los datos del formulario de forma asincrónica utilizando JavaScript
	e.preventDefault();
	const terminos = document.getElementById('terminos');
	if (campos.nombre && campos.apellido && campos.telefono && campos.correo && campos.clave && terminos.checked ) 
	{
		formulario.reset();
		document.getElementById('formulario_mensaje-exito').classList.add('formulario_mensaje-exito-activo');
		setTimeout(()=>
		{
			document.getElementById('formulario_mensaje-exito').classList.remove('formulario_mensaje-exito-activo');
		}, 5000);
		document.querySelectorAll('.formulario_grupo-correcto').forEach((icono)=>
		{
			icono.classList.remove('formulario_grupo-correcto');
		});
		document.getElementById('formulario_mensaje').classList.remove('formulario_mensaje-activo');
	} 
  else
	{
		document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo');
	}	
});
