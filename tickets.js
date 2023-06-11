
function resumen() {
    
    var cantidad = parseInt(document.getElementById("cantidadTickets").value);
    var categoria = document.getElementById("categoriaSelect").value;
    var precioPorTicket = 200;
    var total = cantidad * precioPorTicket;
  
    // Aplicar descuentos 
    if (categoria === "1") {
      total *= 0.2; // Aplica descuento del 80%
    } else if (categoria === "2") {
      total *= 0.5; // Aplica descuento del 50% 
    } else if (categoria === "3") {
      total *= 0.85; // Aplicar descuento del 15% 
    }
  
    document.getElementById("totalPago").textContent = total;


}  
