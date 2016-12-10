$(document).ready(function(){  


$('#next-chest').click(function(){
    // on demande la prochaine robe, prochain pull...
    getImages('chest');
});


function getImages(zone) {
    
    
    var dess = {};
    
    
    var url = "http://localhost/hackathon-swap/test.json"/* + "/?" + zone*/;
    
    
    $.get(url, function(){
     // alert("success");
    }, "json").done(function ( data ) {
        alert("reponse success=" + data);
        // exploiter la reponse
        dress = /*JSON.parse*/(data);
        for (var i = 0; i < 5; i++) {
            console.log(dress[i].name);
        }
    }).fail(function () {
        alert("error");
    }).always(function () {
        alert("finished");
    });
    
    
}
    
    
});