function showMessage() {
    alert('💖 I love you forever! 💖 Happy Rose Day!');
}

// Animated falling roses effect
const canvas = document.getElementById("roseCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const roses = [];
const roseImg = new Image();
roseImg.src = "https://www.pngall.com/wp-content/uploads/5/Red-Rose-PNG-Image.png";

class Rose {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.size = Math.random() * 40 + 20;
        this.speed = Math.random() * 2 + 1;
    }
    fall() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = Math.random() * -canvas.height;
            this.x = Math.random() * canvas.width;
        }
    }
    draw() {
        ctx.drawImage(roseImg, this.x, this.y, this.size, this.size);
    }
}

for (let i = 0; i < 50; i++) {
    roses.push(new Rose());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    roses.forEach(rose => {
        rose.fall();
        rose.draw();
    });
    requestAnimationFrame(animate);
}

roseImg.onload = animate;
window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
