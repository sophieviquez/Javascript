// Productos y precios
const productos = {
  Aqua: 200,
  Emoción: 180,
  Alegría: 160,
  Frescura: 150,
};

// Vendedores y sus ventas
let ventas = {
  Juana: {
    Aqua: 0,
    Emoción: 0,
    Alegría: 0,
    Frescura: 0,
  },
  Pedro: {
    Aqua: 0,
    Emoción: 0,
    Alegría: 0,
    Frescura: 0,
  },
};

// Función para registrar una venta
function registrarVenta(vendedor, producto, cantidad) {
  if (isNaN(cantidad) || cantidad < 0) {
    alert("Por favor ingresa una cantidad válida.");
    return;
  }
  ventas[vendedor][producto] += cantidad;
  alert(
    `Venta registrada: ${vendedor} vendió ${cantidad} unidades de ${producto}.`
  );
}

// Función para calcular la suma total de dinero recolectada por cada vendedor
function calcularTotal(vendedor) {
  let total = 0;
  for (let producto in ventas[vendedor]) {
    total += ventas[vendedor][producto] * productos[producto];
  }
  return total;
}

// Función para determinar el empleado del mes
function empleadoDelMes() {
  let totalJuana = calcularTotal("Juana");
  let totalPedro = calcularTotal("Pedro");
  let mensaje = `Total de ventas:\nJuana: $${totalJuana}\nPedro: $${totalPedro}\n`;

  if (totalJuana > totalPedro) {
    mensaje += "\nEl empleado del mes es Juana.";
  } else if (totalPedro > totalJuana) {
    mensaje += "\nEl empleado del mes es Pedro.";
  } else {
    mensaje += "\nEs un empate.";
  }

  alert(mensaje);
}

// Función para mostrar ventas de cada vendedor
function mostrarVentas() {
  let mensaje = "Ventas por vendedor:\n\n";
  for (let vendedor in ventas) {
    mensaje += `${vendedor}:\n`;
    for (let producto in ventas[vendedor]) {
      mensaje += `${producto}: ${ventas[vendedor][producto]} unidades\n`;
    }
    mensaje += `Total recolectado: $${calcularTotal(vendedor)}\n\n`;
  }
  alert(mensaje);
}

// Eventos de los botones
document.getElementById("registrarVentaBtn").addEventListener("click", () => {
  const vendedor = prompt("Ingrese el nombre del vendedor (Juana/Pedro):");
  const producto = prompt(
    "Ingrese el nombre del producto (Aqua/Emoción/Alegría/Frescura):"
  );
  const cantidad = parseInt(prompt("Ingrese la cantidad vendida:"), 10);
  registrarVenta(vendedor, producto, cantidad);
});

document
  .getElementById("mostrarVentasBtn")
  .addEventListener("click", mostrarVentas);
document
  .getElementById("empleadoDelMesBtn")
  .addEventListener("click", empleadoDelMes);
