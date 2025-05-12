let raining = false;

function createRain() {
    const rainContainer = document.getElementById('rain-container') || document.body;

    for (let i = 0; i < 100; i++) {
        const drop = document.createElement("div");
        drop.className = "rain-drop";
        drop.style.left = Math.random() * window.innerWidth + "px";
        drop.style.animationDuration = 0.5 + Math.random() * 1 + "s";
        drop.style.top = Math.random() * -100 + "px"; 
        rainContainer.appendChild(drop);
    }
}

function clearRain() {
    document.querySelectorAll('.rain-drop').forEach(drop => drop.remove());
}

function simulateRain() {
    raining = !raining;

    const sensor1 = document.getElementById('sensor1');
    const sensor2 = document.getElementById('sensor2');

    if (raining) {
        sensor1.style.backgroundColor = "orange";
        sensor1.title = "Sensor de nível: médio (atenção)";
        sensor1.style.boxShadow = "0 0 10px #ffa500";

        sensor2.style.backgroundColor = "red";
        sensor2.title = "Sensor de nível: alto (risco de alagamento)";
        sensor2.style.boxShadow = "0 0 10px #f00";

        createRain();

        alert("⚠️ Alerta: Risco de alagamento em alguns pontos da cidade!");
    } else {
        sensor1.style.backgroundColor = "green";
        sensor1.title = "Sensor de nível: normal";
        sensor1.style.boxShadow = "0 0 5px #0f0";

        sensor2.style.backgroundColor = "green";
        sensor2.title = "Sensor de nível: normal";
        sensor2.style.boxShadow = "0 0 5px #0f0";

        clearRain();
    }
}