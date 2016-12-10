//AFFICHAGE NAVBAR
function AffNavbar() {
    var element = document.getElementById("navbar");
    if (element.style.display == "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

//AFFICHAGE ACCUEIL
$(document).ready(function() {
    $("#femme").click(function() {
        $(".sexe").slideUp();
        $(".model").fadeIn();
    });
});