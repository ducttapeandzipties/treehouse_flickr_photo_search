// under the hood
var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
var flickrOptions = {
  tags: "",
  format: "json"
};

$('form').submit(function (evt) {
  evt.preventDefault();                         //prevents browser from leaving page
  var searchTerm = $('#search').val();          //captures search term from form

  flickrOptions.tags = searchTerm;              //sets the search term in the flickrOptions object

  $.getJSON(flickrAPI, flickrOptions, displayPhotos);   //gets data from flickr

});

function displayPhotos(data) {                    //iterates over returned data and displays it on the page
  var readout = '<ul>';
  $.each( data.items, function (i, photo){
    readout += '<li><img src="' + photo.media.m + '"></li>';
  });
  readout += '</ul>';
  $('#display').html(readout);                  //places html into #display div
};                                              // end displayPhotos function
