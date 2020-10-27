// Unsplash API (https://unsplash.com/documentation)
const count = 10;
const apiKey = '9gvLqPa_fhNv5_8Rr8M4DAMJHaI7wM5PczfHiorJeFQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch error here
  }
}

// On load
getPhotos();