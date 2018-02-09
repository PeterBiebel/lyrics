$('button').click(function() {
 
    let artist= $('.js-query-artist').val();
    let title= $('.js-query-title').val();
     console.log(artist, title)
	getLryics(artist, title);
})

function getLryics(artist, title) {
	console.log(artist, title);
	$.get( `https://api.lyrics.ovh/v1/${artist}/${title}`, function( data ) {
        console.log(data);
        displayLyrics(data.lyrics);
		})
	};

function displayLyrics(data) {
    
     $('.text').text(data);
}	