function changeButtonTextAndSize( el )
{
     if ( el.value === "Click Me!!" ){
        el.value = "Ow! That hurt!";
    	el.style.height = "200px";
    	el.style.width = "200px";
    }
   else {
        el.value = "Click Me!!";
        el.style.height = "20px";
        el.style.width = "100px";  
 	}
 }