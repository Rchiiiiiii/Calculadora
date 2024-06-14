function calculateCarbonFootprint() {
    var activity = document.getElementById("activity").value;
    var quantity = parseFloat(document.getElementById("quantity").value);
    var result = document.getElementById("result");

    // Factores de emisión (en kg CO2eq por unidad de actividad)
    var emissionFactors = {
        "car": 0.2, // Ejemplo: 0.2 kg CO2eq/km
        "electricity": 0.5, // Ejemplo: 0.5 kg CO2eq/kWh
        "flight": 0.15 // Ejemplo: 0.15 kg CO2eq/km
        // Agrega más factores según las actividades que quieras incluir
    };

    if (!isNaN(quantity) && quantity > 0) {
        var emissionFactor = emissionFactors[activity];
        if (emissionFactor) {
            var carbonFootprint = (quantity * emissionFactor).toFixed(2);
            result.innerHTML = "Tu huella de carbono es de aproximadamente " + carbonFootprint + " kg CO2eq.";
        } else {
            result.innerHTML = "Por favor, selecciona una actividad válida.";
        }
    } else {
        result.innerHTML = "Por favor, introduce una cantidad válida.";
    }
}
