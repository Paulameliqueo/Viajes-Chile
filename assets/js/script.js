$(function(){
    $("a").click(function(event){
     if (this.hash !== ""){
       event.preventDefault();
       
       var gato = this.hash;

       $("html, body").animate({
           scrollTop: $(gato).offset().top
       }, 800, function(){
           window.location.hash = gato;
       });   
     }
});
  
  
  
  
  
  
  
  
  
  
  $(function(){
    $("#titulo1").click(function(){
      $("#texto1").hide(500);
    });
  
    $("#titulo1").dblclick(function(){
      $("#texto1").show(500);
    });
  })

  $(function(){
    $("#titulo2").click(function(){
      $("#texto2").hide(500);
    });
  
    $("#titulo2").dblclick(function(){
      $("#texto2").show(500);
    });
  })

  $(function(){
    $("#titulo3").click(function(){
      $("#texto3").hide(500);
    });
  
    $("#titulo3").dblclick(function(){
      $("#texto3").show(500);
    });
  })
  $(function(){
    $("#titulo4").click(function(){
      $("#texto4").hide(500);
    });
  
    $("#titulo4").dblclick(function(){
      $("#texto4").show(500);
    });
  })