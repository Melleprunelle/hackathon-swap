$(document).ready(function(){

var n_chest = 0;
var n_pant = 0;
initImages('chest', 'chest');
initImages('pants', 'pants');


$('#chest #next').click(function(){
    // on demande la prochaine robe, prochain pull...
    nextImages('chest', 'chest');
    
});
$('#chest #prev').click(function(){
    // on demande la robe précèdente...
    prevImages('chest', 'chest');
});
$('#pants #next').click(function(){
    // on demande la prochaine robe, prochain pull...
    nextImages('pants', 'pants');
    
});
$('#pants #prev').click(function(){
    // on demande la robe précèdente...
    prevImages('pants', 'pants');
});


function initImages(zone, type) {
    
    var url = "https://megaju.github.io/hackathon-swap/"+type+".json";
    
    $.get(url, "json").done(function(data) {
        
        var dress = (data);
        var dressLen = dress.length;
        
        $('#'+zone+' img').remove();
        
        $('#'+zone).append('<img src="' + dress[n_chest].name + '">');
    
    }).fail(function () {
        //alert("error");
    }).always(function () {
        //alert("finished");
    });
    
}
    
function nextImages(zone, type) {
    
    var url = "https://megaju.github.io/hackathon-swap/"+type+".json";
    
    $.get(url, "json").done(function(data) {
        
        dress = (data);
        dressLen = dress.length;
        
        if (n_chest === dressLen - 1) {
            $('#'+zone+' img').remove();
            n_chest = 0;
            $('#'+zone).append('<img src="' + dress[n_chest].name + '">');
        } else {
            $('#'+zone+' img').remove();
            n_chest++;
            $('#'+zone).append('<img src="' + dress[n_chest].name + '">');
        }
        
    
    }).fail(function () {
        //alert("error");
    }).always(function () {
        //alert("finished");
    });
    
}
    
function prevImages(zone, type) {
    
    var url = "https://megaju.github.io/hackathon-swap/"+type+".json";
    
    $.get(url, "json").done(function(data) {
        
        dress = (data);
        dressLen = dress.length;
        
        if (n_chest <= 0) {
            $('#'+zone+' img').remove();
            n_chest = dressLen-1;
            $('#'+zone).append('<img src="' + dress[n_chest].name + '">');
        } else {
            $('#'+zone+' img').remove();
            n_chest--;
            $('#'+zone).append('<img src="' + dress[n_chest].name + '">');
        }
    
    }).fail(function () {
        //alert("error");
    }).always(function () {
        //alert("finished");
    });
    
}
    
    
});