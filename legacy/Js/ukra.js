document.getElementById("link-ukra").addEventListener("click", function(event) {
  
    var pdfPath = "/pdf/manual-ukra.pdf";
    
    var link = document.createElement("a");
    link.href = pdfPath;
    link.download = "manual-ukra.pdf"; 
    
    link.click();
    event.preventDefault();
});

