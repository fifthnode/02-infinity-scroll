const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API (https://unsplash.com/documentation)
const count = 10;
const apiKey = '9gvLqPa_fhNv5_8Rr8M4DAMJHaI7wM5PczfHiorJeFQ';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Helper function to set attributes on DOM elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create elements for links and photos, Add to DOM
function displayPhotos() {
  // Run function for each object in photoArray
  photosArray.forEach(photo => {
    // Create <a> to link to Unsplash
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });
    // Create <img> for photo
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // Put <img> inside <a>, then put both inside imageContainer element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch error here
  }
}

// Check to see if scrolling near bottom of page, Load more photos
window.addEventListener('scroll', () => {
  // console.log('scrolled');
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
    getPhotos();
    // console.log('window.innerHeight', window.innerHeight);
    // console.log('window.scrollY', window.scrollY);
    // console.log('window.innerHeight + window.scrollY', window.innerHeight + window.scrollY);
    // console.log('document.body.offsetHeight - 1000', document.body.offsetHeight - 1000);
    console.log('load more');
  }
});

// On load
getPhotos();