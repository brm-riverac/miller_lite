$(document).ready(function(){
		  
       $(".tog1").click(function(){
           $(".desp1").toggle( "slow", "linear" );
       });

      
       $(".tog2").click(function(){
           $(".desp2").toggle( "slow", "linear" );
       });
	   
	    $(".logginBTN").click(function(){
			if($(".logginWrapper").hasClass("showLogin"))
			{
           		$(".logginWrapper").removeClass( "showLogin" );
			}else{
				$(".logginWrapper").addClass( "showLogin" );
			}	
       });
      
/*
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
*/

	$(".userGaleryimg").click(function(){
		var $padre = $(this).parent().parent().parent();
		$(".statusXPUser").removeClass('showStatusbar');
		$(".insideStatus").removeClass('insideStatusOpen');
		$padre.addClass('showStatusbar');
		$padre.find('.insideStatus').addClass('insideStatusOpen');

	});
	$(".closeX").click(function(){
		$(".statusXPUser").removeClass('showStatusbar');
		$(".insideStatus").removeClass('insideStatusOpen');
	});
	   
});
