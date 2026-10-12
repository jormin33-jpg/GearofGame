// ejecutar la funcion main cuando todo el documento este cargado
$(document).ready(main);
var contador = 1 ;
function main ()
{
  $('.menu_bar').click(function()
  {
  	if (contador == 1) 
  	{
  		$('nav').animate
  		({
  			left:0
  		});
  		contador = 0;

  	} 
  	else 
  	{
  		contador = 1;
  		$('nav').animate
  		({
  			//es lo lo mismo que poner right
  			left: '-100%'
  		});
  	}
  });
  //Mostramos y ocultamos submenus
 $('.submenu').click(function(){
     $(this).children('.children').slideToggle();

 })

}
