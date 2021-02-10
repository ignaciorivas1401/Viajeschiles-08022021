$(function(){


    $("a").click(function(event){

        if(this.hash !== ""){
            event.preventDefault();

            var rueda = this.hash;

            $("html , body").animate({
                scrollTop: $(rueda).offset().top
            }, 800, function(){
                window.location.hash = rueda;
            });
            
        }

    });

    $('[data-toggle="popover"]').popover();

});