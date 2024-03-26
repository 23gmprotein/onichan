const resolutionSelector = document.getElementById('resolution');
const contentContainer = document.getElementById('content');

resolutionSelector.addEventListener('change', function() {
    const resolution = this.value;
    let content = '';

    switch(resolution) {
        case '144':
            content = '<img src="moon_144p.png" alt="Pixelated Moon 144p">';
            break;
        case '360':
            content = '<img src="pixelated_moon_360p.jpg" alt="Pixelated Moon 360p">';
            break;
        case '1080':
            content = '<img src="picture_1080p.jpg" alt="Girlfriend Picture 1080p">';
            break;
        case 'hd':
            content = '<img src="girlfriend_picture_hd.jpg" alt="Girlfriend Picture HD">';
            break;
        default:
            content = '<p>Select a resolution to see content</p>';
    }

    contentContainer.innerHTML = content;
});
