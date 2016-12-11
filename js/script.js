$(document).ready(function(){

var n_chest = 0;
initImages('chest');


$('#next-chest').click(function(){
    // on demande la prochaine robe, prochain pull...
    nextImages('chest');
    
});
$('#prev-chest').click(function(){
    // on demande la robe précèdente...
    prevImages('chest');
});


function initImages(zone) {
    
    var url = "http://localhost/hackathon-swap/test.json";
    
    $.get(url, "json").done(function(data) {
        
        var dress = (data);
        
        $('#'+zone+' img').remove();
            
        $('#'+zone).append('<img src="' + dress[n_chest].name + '">');

    
    }).fail(function () {
        //alert("error");
    }).always(function () {
        //alert("finished");
    });
    
}
    
function nextImages(zone) {
    
    var url = "http://localhost/hackathon-swap/test.json";
    
    $.get(url, "json").done(function(data) {
        
        dress = (data);
        
        $('#'+zone+' img').remove();
        n_chest++;
        $('#'+zone).append('<img src="' + dress[n_chest].name + '">');
        console.log(n_chest);
    
    }).fail(function () {
        //alert("error");
    }).always(function () {
        //alert("finished");
    });
    
}
    
function prevImages(zone) {
    
    var url = "http://localhost/hackathon-swap/test.json";
    
    $.get(url, "json").done(function(data) {
        
        dress = (data);
        
        $('#'+zone+' img').remove();
        n_chest--;
        $('#'+zone).css("transition", "5s");
        $('#'+zone).append('<img src="' + dress[n_chest].name + '">');

        console.log(n_chest);
    
    }).fail(function () {
        //alert("error");
    }).always(function () {
        //alert("finished");
    });
    
}
    
    
});