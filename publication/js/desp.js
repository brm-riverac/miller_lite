$(document).ready(function(){
		  
       $(".tog1").click(function(){
           $(".desp1").toggle( "slow", "linear" );
       });

      
       $(".tog2").click(function(){
           $(".desp2").toggle( "slow", "linear" );
       });
      

	   $(".statusXPUser").click(function(){
		   var location = $(this).attr("data-expand");
		   
		   if(location=='showStatus'){
			   //jQuery('.statusXPUser[data-expand='+location+']').addClass('showStatusbar');
			   jQuery('.statusXPUser[data-expand='+location+']').addClass('showStatusbar');
			   jQuery('.insideStatus[data-expand='+location+']').addClass('insideStatusOpen');
			   //jQuery('.insideStatus[data-expand='+location+']').show('fade');
			   console.log('cargo funcion 1');
			 }else if(location=='showStatus2'){
				 jQuery('.statusXPUser[data-expand='+location+']').addClass('showStatusbar');
				 jQuery('.insideStatus[data-expand='+location+']').addClass('insideStatusOpen');
				   console.log('cargo funcion 2');
			 }else if(location=='showStatus3'){
				 jQuery('.statusXPUser[data-expand='+location+']').addClass('showStatusbar');
				 jQuery('.insideStatus[data-expand='+location+']').addClass('insideStatusOpen');
				 console.log('cargo funcion 3');
				 
			 }
			 
			 
		   
		   });
	   
});
