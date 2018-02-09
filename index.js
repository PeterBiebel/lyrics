/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getDataFromApi, displaySearchData, and watchSubmit functions. When you're done, this app should allow a user to search for an artist and song title (both should be required), and display the song lyrics. You should make requests to this API: https://lyricsovh.docs.apiary.io/# . Also make any necessary adjustments to make this app accessible. */

function getDataFromApi(artist, title, callback) {
 console.log(callback);
 
   $.ajax({
    type:"GET",
    url:`https://api.lyrics.ovh/v1/${artist}/${title}`,
    success: function(data) {
      callback(data); 
      
      //$('.text').text(data.lyrics);
    },
  });
    

}
function displaySearchData(data) {
  console.log(data);
  $('.text').text(data.lyrics);
}

function watchSubmit() {
   $('form').submit(function (e){
    e.preventDefault();
    let artist= $('.js-query-artist').val();
    let title= $('.js-query-title').val();
    getDataFromApi(artist, title, displaySearchData);
   })
   
}

$(watchSubmit);