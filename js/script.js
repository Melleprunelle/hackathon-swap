$(document).ready(function(){  


$('#next-chest').click(function(){
    // on demande la prochaine robe, prochain pull...
    getImages('chest');
});


function getImages(zone) {
    
    
    var dess = {};
    
    
    var url = "http://192.168.10.63/woman/head"/* + "/?" + zone*/;
    
    
    $.get(url, function(){
     // alert("success");
    }, "json").done(function ( data ) {
        alert("reponse success=" + data);
        // exploiter la reponse
        dress = /*JSON.parse*/(data);
        for (var i = 0; i < 5; i++) {
            console.log(dress.name);
        }
    }).fail(function () {
        alert("error");
    }).always(function () {
        alert("finished");
    });
    
    
}
    
    
});