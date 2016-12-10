$(document).ready(function(){  

// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
$('#next-chest').click(function(){
    // on demande la prochaine robe, prochain pull...
    getImages('chest');
});

function getImages(zone) {
    var url = "http://localhost/hackathon-swap" + "/?" + zone;
    var jqxhr = $.get(url, function () {
     // alert("success");
    }).done(function ( data ) {
        // alert("reponse success=" + data);
        // exploiter la reponse
        alert(data); 
    }).fail(function () {
        alert("error");
    }).always(function () {
        alert("finished");
    });
    // Perform other work here ...
    // Set another completion function for the request above
    jqxhr.always(function () {
        alert("second finished");
    });
}
});