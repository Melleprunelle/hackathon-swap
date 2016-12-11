$(document).ready(function(){  


$('#next-chest').click(function(){
    // on demande la prochaine robe, prochain pull...
    getImages('chest');
});

var i = 0;

function getImages(zone) {
    
    var dess = {};
    
    var url = "http://localhost/hackathon-swap/test.json"/* + "/?" + zone*/;
    
    
    i++;
    
    $.get(url, function(){
     // alert("success");
    }, "json").done(function ( data ) {
        //alert("reponse success=" + data);
        // EPLOIT RESPONSE
        dress = /*JSON.parse*/(data);
        $('#chest img').remove();
        
        if (i == 5) {
            i = 1;
            $('#chest').append('<img src="' + dress[i].name + '">');
        } else {
            $('#chest').append('<img src="' + dress[i].name + '">');
        }
    
    }).fail(function () {
        //alert("error");
    }).always(function () {
        //alert("finished");
    });
    
}
    
    
});