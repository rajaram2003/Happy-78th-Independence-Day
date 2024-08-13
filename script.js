window.addEventListener('load', function() {
    const audio = document.getElementById('background-music');

    // Attempt to play the audio and handle autoplay restrictions
    audio.muted = false;
    audio.play().catch(error => {
        console.log('Audio playback failed:', error);
        // Optionally, you can handle user interaction here to start playback
    });

    // Ensure audio loops
    audio.addEventListener('ended', function() {
        audio.currentTime = 0; // Reset time to the start
        audio.play();           // Play again
    });
});

// GSAP animations for the text
gsap.from(".text-overlay h1", {
    duration: 2,
    opacity: 0,
    scale: 1.2,
    ease: "power1.inOut"
});

gsap.from(".text-overlay p", {
    duration: 2,
    opacity: 0,
    y: 30,
    ease: "power1.inOut",
    delay: 0.5
});
