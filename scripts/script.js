
canvas.addEventListener('touchmove',(e)=>{
    cursor.style.left = e.touches[0].clientX+2+'px'
    cursor.style.top = e.touches[0].clientY-18+'px'
})
function showMenu(){
    if(!states.show){
        setting.classList.add('show');
        setting.classList.remove('hide');
        states.show = true;
    }else{
        setting.classList.remove('show');
        setting.classList.add('hide');
        states.show = false;
    }
}
menuBtn.addEventListener('click',showMenu);
function hidePlaceholder(){
    placeholder.classList.add('back');
}
placeholder.addEventListener('mousedown',hidePlaceholder);

// Canvas 

const height = canvas.height = window.innerHeight;
const width = canvas.width = window.innerWidth;
const ctx = canvas.getContext('2d');

function main(){
    ctx.beginPath();
    ctx.lineWidht = 2;
    canvas.addEventListener('touchmove',(e)=>{
        if(states.ready == true){
            ctx.lineTo(e.touches[0].clientX,e.touches[0].clientY)
            ctx.stroke()
        }
    })
    canvas.addEventListener('touchend',(e)=>{
        states.ready = false;
    })
    canvas.addEventListener('touchstart',(e)=>{
        states.ready = true;
        ctx.moveTo(e.touches[0].clientX,e.touches[0].clientY);
    })
}
main();


