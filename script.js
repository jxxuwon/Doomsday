// script.js

// Initial values for variables (simulate real-world data)
const variables = {
    co2: 420,         // ppm
    temp: 1.1,        // °C
    sea: 3,           // mm/year
    conflict: 0.7,    // 0-1 scale
    renewable: 15     // percentage
  };
  
  // Function to calculate time until doomsday (simple simulation)
  function calculateDoomsday() {
    const { co2, temp, sea, conflict, renewable } = variables;
  
    // Simple weighted model
    const risk =
      0.5 * (co2 / 450) + 
      0.3 * (temp / 2) + 
      0.2 * (sea / 10) +
      0.4 * conflict -
      0.3 * (renewable / 100);
  
    // Remaining years until doomsday
    const remainingYears = Math.max(100 - risk * 100, 0); // Cap at 0
    return remainingYears.toFixed(2); // Keep 2 decimal places
  }
  
  // Function to format numbers to 2 decimal places
  function formatNumber(value) {
    return parseFloat(value).toFixed(2); // Convert and fix to 2 decimals
  }
  
  // Update the DOM with calculated values
  function updateUI() {
    const countdownTime = document.getElementById("countdown-time");
    const co2Display = document.getElementById("co2");
    const tempDisplay = document.getElementById("temp");
    const seaDisplay = document.getElementById("sea");
    const conflictDisplay = document.getElementById("conflict");
    const renewableDisplay = document.getElementById("renewable");
  
    // Set formatted variable values
    co2Display.textContent = `${formatNumber(variables.co2)} ppm`;
    tempDisplay.textContent = `${formatNumber(variables.temp)}°C`;
    seaDisplay.textContent = `${formatNumber(variables.sea)} mm/year`;
    conflictDisplay.textContent = formatNumber(variables.conflict);
    renewableDisplay.textContent = `${formatNumber(variables.renewable)}%`;
  
    // Update countdown
    const remainingYears = calculateDoomsday();
    countdownTime.textContent = `${remainingYears} years remaining`;
  }
  
  // Simulate real-time updates every 5 seconds
  setInterval(() => {
    // Example: Increment CO2 and temp for simulation
    variables.co2 += 0.1;
    variables.temp += 0.01;
    updateUI();
  }, 5000);
  
  // Initial UI update
  updateUI();
  