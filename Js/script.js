document.getElementById("link-pdf").addEventListener("click", function(event) {
  
    var pdfPath = "/pdf/joao-curriculo.pdf";
    
    var link = document.createElement("a");
    link.href = pdfPath;
    link.download = "joao-curriculo.pdf"; 
    
    link.click();
    event.preventDefault();
});

