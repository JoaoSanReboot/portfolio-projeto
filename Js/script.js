document.getElementById("link-pdf").addEventListener("click", function(event) {
  
    var pdfPath = "/pdf/Joao-Curriculo.pdf";
    
    var link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Joao-Curriculo.pdf"; 
    
    link.click();
    event.preventDefault();
});