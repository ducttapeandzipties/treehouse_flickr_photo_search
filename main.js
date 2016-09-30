// under the hood
var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
var flickrOptions = {
  tags: "",
  format: "json"
};

$('form').submit(function (evt) {
  evt.preventDefault();
  var searchTerm = $('#search').val();
  console.log(searchTerm);
  flickrOptions.tags = searchTerm;

  $.getJSON(flickrAPI, flickrOptions, displayPhotos);

});

function displayPhotos(data) {
  console.log(data);
}
