let videoList = document.querySelectorAll('.video-list-container .list');

videoList.forEach(function(video) {
    video.addEventListener('click', function() {
        videoList.forEach(function(remove) {
            remove.classList.remove('active')
        });
        video.classList.add('active');

        let src = video.querySelector('.list-video').src;
        let title = video.querySelector('.list-title').innerHTML;
        
        document.querySelector('.main-video-container .main-video').src = src;
        document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
        document.querySelector('.main-video-container .main-video').play();
    })
})