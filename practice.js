
$( "button" ).click(function() {
	
	let artist= $('.js-query-artist').val()
	let title= $('.js-query-title').val()
	console.log(artist, title)
//  alert( "Handler for .click() called." );
    findLyrics(artist, title);
    
});


function findLyrics(artist, title) {
     console.log(artist, title);
      $.get(`https://api.lyrics.ovh/v1/${artist}/${title}`, function(data, status){
      	console.log(data, status)
      	displayLyrics(data);
       // alert("Data: " + data + "\nStatus: " + status);
    });
  }

function displayLyrics(data) {

	$('.text').text(data.lyrics);
}  