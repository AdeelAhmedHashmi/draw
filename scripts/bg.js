// set up
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 
ctx.fillStyle = 'red';
ctx.lineWidth = '1';

class Particles {
    constructor(effect){
        this.effect = effect;
        this.radius = Math.random() * 20 + 5;  
        this.x = this.radius + Math.random() * (this.effect.width - this.radius *3);
        this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);
        this.vx = Math.random()*1 + 0.02;
        this.vy = Math.random()*1 + 0.01;
        this.color = `rgb(${Math.random()*244+1},${Math.random()*244+1},${Math.random()*244+1})`
    }
    draw(context){
        context.beginPath();
        context.arc(this.x,this.y,this.radius , 0, Math.PI *2)
        context.fill();
        context.stroke();
        context.fillStyle = this.color
    }
    update(){
        this.x += this.vx;
        if(this.x > this.effect.width - this.radius || this.x < 0 +this.radius) this.vx *= -1;

        this.y += this.vy;
        if(this.y > this.effect.height - this.radius || this.y < 0 +this.radius) this.vy *= -1;
    }
}

class Effect {
    constructor(canvas) {
        this.canvas = canvas;
        this.height = canvas.height;
        this.width = canvas.width;
        this.particles = [];
        this.numberOfParticles = 150;
        this.createParticles();
    }
    createParticles(){
        for(let i=0 ; i<=this.numberOfParticles; i++){
            this.particles.push(new Particles(this));
        }
    }
    handleParticles(context){
        this.particles.forEach(particle =>{
            particle.draw(context);
            particle.update();
        })
    }
}

const effect = new Effect(canvas);

function animate(params) {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    effect.handleParticles(ctx);
    requestAnimationFrame(animate);
}
animate();