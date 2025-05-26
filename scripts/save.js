download_img = function(el) {
  const type = confirm("Do you want to download image as a png formate?")
  if (type) var imageURI = canvas.toDataURL("image/jpg");
  else var imageURI = canvas.toDataURL("image/png")
  el.href = imageURI;
};
   