document.getElementById("link-pdf").addEventListener("click", function(event) {
  
    var pdfPath = "/pdf/João-Curriculo.pdf";
    
    var link = document.createElement("a");
    link.href = pdfPath;
    link.download = "João-Curriculo.pdf"; 
    
    link.click();
    event.preventDefault();
});