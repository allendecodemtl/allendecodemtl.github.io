(function() {
  var FLICKR_API_KEY = 'ce4d9bfb87aceec1434573bd4e22bac3';
  var FLICKR_API_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=';

  function getPhotosForSeach(letter) {
    var url = `${FLICKR_API_URL}${FLICKR_API_KEY}&text=${letter}`;

    return (
      fetch(url)
      .then(response => response.json())
      .then(data => data.photos.photo)
    );
  }

  var app = document.querySelector('#app');
  var flickrForm = app.querySelector('.flickr-form');
  var flickrInput = flickrForm.querySelector('.flickr-input');
  var getPhotoButton = flickrForm.querySelector('.get-photo-button');
  var flickrPhoto = app.querySelector('.flickr-photo');

  flickrForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting

    var flickr = flickrInput.value;

    flickrPhoto.innerText = "loading... ";

    getPhotosForSeach(flickr)
    .then(function(photos){

      flickrPhoto.innerText = "";

      photos.forEach(function(item,index){
        var url= `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`
        var thumbURL= `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_q.jpg`

        var test = createFlickrThumb({
          large: url,
          thumb: thumbURL,
          title: item.title
        });

        flickrPhoto.appendChild(test);
      });
    })

  });

  function createFlickrThumb(photoData) {

    var link = document.createElement('a');
    link.setAttribute('href', photoData.large);
    link.setAttribute('target', '_blank');

    var image = document.createElement('img');
    image.setAttribute('src', photoData.thumb);
    image.setAttribute('alt', photoData.title);

    link.appendChild(image);

    return link;

  }
})();
