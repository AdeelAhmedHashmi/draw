download_img = function(el) {
    var imageURI = canvas.toDataURL("image/jpg");
    console.log(imageURI);
    el.href = imageURI;
};
   