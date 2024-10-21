// Main Logic
function setcolor(color){
    ctx.strokeStyle = color;
}

function setBold(lenght){
    ctx.lineWidth = lenght;
}

function setPen(){
    ctx.lineWidth = '2';
    cursor.innerHTML = '✏️';
}

function setMarker(){
    ctx.lineWidth = '7';
    cursor.innerHTML = '🖌️';
}

function setEraser(){
        ctx.strokeStyle = 'white';
        ctx.lineWidth = '25';
        cursor.innerHTML = '🧽';
}

apply.addEventListener('click',()=>{
    console.log(cursor.innerHTML);
    if(cursor.innerHTML != '🧽'){
        setcolor(color.value);
        setBold(lenght.value);
        main();
    }
    else{
        alert('Choose pen before change the setting!');
    }
})

pen.addEventListener('click',()=>{
    setPen();
    main();
})

marker.addEventListener('click',()=>{
    setMarker();
    main();
})

eraser.addEventListener('click',()=>{
    setEraser();
    main();
})

lenght.addEventListener('click',()=>{
    apply.addEventListener('click',()=>{
        cursor.innerHTML = '✏️';
    })
})

color.addEventListener('click',()=>{
    cursor.innerHTML = '✏️';
})
