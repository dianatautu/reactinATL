console.log("Hello from JavaScript");
const songList =[
    {
        imageLink: "./assets/Drake_-_Take_Care_cover.jpg",
        title: "Shot For Me",
        album: "Take Care",
        duration: "3:44"
    },
    {
        imageLink: "./assets/sonderson.jpg",
        title: "Sonder Son (Interlude)",
        album: "Sonder Son",
        duration: "1:40"
    },
    {
        imageLink: "./assets/reputationjpeg.jpg",
        title: "Delicate",
        album: "Reputation",
        duration: "3:51"
    },
    {
        imageLink: "./assets/graduation.jpg",
        title: "Flashing Lights",
        album: "Graduation",
        duration: "3:57"
    },
];

window.onload = function() {
    const songsWrapper = document.getElementById("songs-wrapper");
    songsWrapper.innerHTML="";
    for(let i=0; i<songList.length;i++) {
        songsWrapper.innerHTML += melodyComponent(i+1, songList[i]);
    }
}

const melodyComponent = function(index, songInfo) {
    return `<div class="melody">
    <span class="song-nr">
        ${index}
    </span>
    <img src="${songInfo.imageLink}" class="song-cover">
    </img>
    <span class="song-title">
        ${songInfo.title}
    </span>
    <span class="song-album">
        ${songInfo.album}
    </span>
    <span class="song-duration">
        ${songInfo.duration}
    </span>
</div>`
}