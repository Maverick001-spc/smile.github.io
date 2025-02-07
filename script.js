document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".button").addEventListener("click", showMessage);
});

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
        this.angle = Math.random() * 360;
    }
    fall() {
        this.y += this.speed;
        this.angle += 2;
        this.x += Math.sin(this.angle * Math.PI / 180) * 2;

        if (this.y > canvas.height) {
            this.y = Math.random() * -canvas.height;
            this.x = Math.random() * canvas.width;
        }
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.angle * Math.PI) / 180);
        ctx.drawImage(roseImg, -this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

for (let i = 0; i < 70; i++) {
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
