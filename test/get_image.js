Array.map(document.getElementsByTagName("img"), function(x) { if (x.src.match(/jpg|png$/)) { console.log(x.src) } });
