const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function draw (imageData, color) {
    const rate = imageData.length;
    const pixel = 512 / rate;

    for(let i = 0; i < rate; i++ ) {
        for(let j = 0; j < rate; j++) {
            if (color == 'hex') {
                ctx.fillStyle = `#${imageData[i][j]}`;
            }
            if (color == 'rgba') {
                ctx.fillStyle = `rgba(${imageData[i][j].join()})`;
            }
            ctx.fillRect(j * pixel, i * pixel, pixel, pixel);
        }
    } 
}


document.getElementById('size-1').addEventListener('click', function () {
    draw(size4x4, 'hex');
});

document.getElementById('size-2').addEventListener('click', function () {
    draw(size32x32, 'rgba');
});

document.getElementById('size-3').addEventListener('click', function () {
    const img = new Image();
    img.src = './assets/data/image.png';
    img.onload = function () {
        ctx.drawImage(img, 0, 0, 512, 512);
    };
});