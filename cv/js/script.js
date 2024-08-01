document.getElementById('cta-button').addEventListener('click', function() {
    alert('Start your journey with us!');
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
});

    document.addEventListener('DOMContentLoaded', () => {
        const images = [
            'image/travel.jpg',
            'image/How-Will-Geography-Help-Me-In-the-Future.jpg',
            'image/1646567616_barcelona_to_marine_drive_2022_03_06t172026_587.jpg'
        ];
        let currentIndex = 0;
        const heroSection = document.querySelector('.hero');

        function changeBackgroundImage() {
            currentIndex = (currentIndex + 1) % images.length;
            heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
        }

        setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds
    });
