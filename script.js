const video = document.getElementById('myVideo');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      video.play(); // Play when visible
    } else {
      video.pause(); // Pause when scrolled away
    }
  });
}, {
  threshold: 0.5 // 50% of video must be visible to play
});

observer.observe(video);