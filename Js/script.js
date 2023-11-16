document.getElementById("link-pdf").addEventListener("click", function(event) {
  
    var pdfPath = "/pdf/Joao-PDF.pdf";
    
    var link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Joao-PDF.pdf"; 
    
    link.click();
    event.preventDefault();
});

