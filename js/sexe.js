//AFFICHAGE ACCUEIL
$(document).ready(function() {
    $("#femme").click(function() {
        $(".sexe").slideUp();
        $(".model").fadeIn();
    });
    $(".btn-tiroire").click(function() {
        $(this).animate({
        	left: '90%',});

	});
    
    $(".fa-close").click(function(event) {
        var par = $(event.target).parent();
        $(par).animate({
            left: '0',
        });
        event.stopPropagation();
    });
});


