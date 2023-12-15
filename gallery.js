
 function upDate(previewPic) {
 document.getElementById("image").textContent; 
 document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
   document.getElementById("image").textContent = previewPic.alt;
  }
  function unDo() {
  document.getElementById("image").style.backgroundImage = originalImage;
   document.getElementById("image").textContent = originalText;
  }