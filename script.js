const audioFolderPath = 'episodes-audio/episodes-audio'; // Path to the audio folder

window.addEventListener('load', function(){
    console.log('Page loaded');
    fetch('season1.json')
        .then((response) => response.json())
        .then(data => {
            let randomNumber = Math.floor(Math.random() * data.length);
            // Do something with the JSON data
            let nameElement = document.getElementById('random-episode');
            console.log(data)
            nameElement.innerHTML = data[randomNumber].title;
            let audioElement = document.getElementById('audio-player');
            let audioSource = document.getElementById('audio-source');
            audioSource.src = `${audioFolderPath}/${data[randomNumber].audio}`;
            audioElement.load();
        })
})
//         let nameElement = document.getElementById('random-episode');
//         nameElement.innerHTML = data.results[1].title;

//     })
// })

// fetch('season1.json').then(response => response.json()) .then(data =>)

// Select the audio and image elements
const audio = document.getElementById('audio-player');
const image = document.getElementById('myImage');

// Show image when audio starts playing
audio.addEventListener('play', () => {
  image.style.display = 'block'; 
});

// Hide image when audio is paused
audio.addEventListener('pause', () => {
  image.style.display = 'none';
});

// Hide image when audio ends completely
audio.addEventListener('ended', () => {
  image.style.display = 'none';
});
