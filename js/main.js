// MLB Data
const mlbData = [
  {player: "Julio Rodriguez", team: "SEA", hr: 32, height: 75, weight: 228},
  {player: "Francisco Lindor", team: "NYM", hr: 31, height: 70, weight: 190},
  {player: "Elly De La Cruz", team: "CIN", hr: 22, height: 77, weight: 200},
  {player: "Brent Rooker", team: "ATH", hr: 30, height: 75, weight: 225},
  {player: "Steven Kwan", team: "CLE", hr: 11, height: 68, weight: 170},
  {player: "Matt Olson", team: "ATL", hr: 29, height: 76, weight: 225},
  {player: "Pete Alonso", team: "NYM", hr: 38, height: 75, weight: 245},
  {player: "Bobby Witt Jr.", team: "KC", hr: 23, height: 73, weight: 200},
  {player: "Vinnie Pasquantino", team: "KC", hr: 32, height: 75, weight: 245},
  {player: "Luis Arraez", team: "SD", hr: 8, height: 70, weight: 175},
  {player: "Heliot Ramos", team: "SF", hr: 21, height: 71, weight: 230},
  {player: "Jarren Duran", team: "BOS", hr: 16, height: 73, weight: 205},
  {player: "Manny Machado", team: "SD", hr: 27, height: 74, weight: 218},
  {player: "Randy Arozarena", team: "SEA", hr: 27, height: 70, weight: 185},
  {player: "Trevor Story", team: "BOS", hr: 25, height: 73, weight: 209},
  {player: "Shohei Ohtani", team: "LAD", hr: 55, height: 75, weight: 210},
  {player: "Michael Harris II", team: "ATL", hr: 20, height: 72, weight: 195},
  {player: "Rafael Devers", team: "BOS/SF", hr: 35, height: 72, weight: 235},
  {player: "Kyle Schwarber", team: "PHI", hr: 56, height: 71, weight: 229},
  {player: "Ozzie Albies", team: "ATL", hr: 16, height: 67, weight: 165},
  {player: "Junior Caminero", team: "TB", hr: 45, height: 73, weight: 220},
  {player: "Riley Greene", team: "DET", hr: 36, height: 74, weight: 200},
  {player: "Nico Hoerner", team: "CHC", hr: 7, height: 71, weight: 200},
  {player: "James Wood", team: "WSH", hr: 31, height: 79, weight: 234},
  {player: "Salvador Perez", team: "KC", hr: 30, height: 75, weight: 255},
  {player: "Geraldo Perdomo", team: "ARI", hr: 20, height: 74, weight: 203},
  {player: "Cal Raleigh", team: "SEA", hr: 60, height: 74, weight: 235},
  {player: "Maikel Garcia", team: "KC", hr: 16, height: 73, weight: 180},
  {player: "Fernando Tatis Jr.", team: "SD", hr: 25, height: 75, weight: 217},
  {player: "Jose Ramirez", team: "CLE", hr: 30, height: 68, weight: 190},
  {player: "Willy Adames", team: "SF", hr: 30, height: 72, weight: 215},
  {player: "Pete Crow-Armstrong", team: "CHC", hr: 31, height: 72, weight: 184},
  {player: "Dansby Swanson", team: "CHC", hr: 24, height: 72, weight: 190},
  {player: "Mookie Betts", team: "LAD", hr: 20, height: 70, weight: 180},
  {player: "Trea Turner", team: "PHI", hr: 15, height: 73, weight: 185},
  {player: "Vladimir Guerrero Jr.", team: "TOR", hr: 23, height: 72, weight: 245},
  {player: "Jose Altuve", team: "HOU", hr: 26, height: 66, weight: 167},
  {player: "Eugenio Suarez", team: "SEA/ARI", hr: 49, height: 71, weight: 213},
  {player: "Cody Bellinger", team: "NYY", hr: 29, height: 75, weight: 204},
  {player: "Brandon Nimmo", team: "NYM", hr: 25, height: 74, weight: 206},
  {player: "Bryan Reynolds", team: "PIT", hr: 16, height: 74, weight: 205},
  {player: "Jackson Holliday", team: "BAL", hr: 17, height: 72, weight: 185},
  {player: "Christian Walker", team: "HOU", hr: 27, height: 71, weight: 208},
  {player: "Brice Turang", team: "MIL", hr: 18, height: 71, weight: 190},
  {player: "Yandy Diaz", team: "TB", hr: 25, height: 73, weight: 235},
  {player: "Bo Bichette", team: "TOR", hr: 18, height: 71, weight: 190},
  {player: "Andy Pages", team: "LAD", hr: 27, height: 73, weight: 212},
  {player: "CJ Abrams", team: "WSH", hr: 19, height: 72, weight: 191},
  {player: "Taylor Ward", team: "LAA", hr: 36, height: 72, weight: 200},
  {player: "TJ Friedl", team: "CIN", hr: 14, height: 68, weight: 180},
  {player: "Juan Soto", team: "NYM", hr: 43, height: 73, weight: 224},
  {player: "Gunnar Henderson", team: "BAL", hr: 17, height: 75, weight: 220},
  {player: "Christian Yelich", team: "MIL", hr: 29, height: 75, weight: 203},
  {player: "Seiya Suzuki", team: "CHC", hr: 32, height: 72, weight: 182},
  {player: "J.P. Crawford", team: "SEA", hr: 12, height: 72, weight: 202},
  {player: "Ian Happ", team: "CHC", hr: 23, height: 71, weight: 205},
  {player: "Lawrence Butler", team: "ATH", hr: 21, height: 75, weight: 210},
  {player: "William Contreras", team: "MIL", hr: 17, height: 70, weight: 218},
  {player: "Corbin Carroll", team: "ARI", hr: 31, height: 70, weight: 165},
  {player: "Spencer Torkelson", team: "DET", hr: 31, height: 73, weight: 220},
  {player: "Xavier Edwards", team: "MIA", hr: 3, height: 68, weight: 175},
  {player: "Tyler Soderstrom", team: "ATH", hr: 25, height: 74, weight: 200},
  {player: "Jung Hoo Lee", team: "SF", hr: 8, height: 72, weight: 197},
  {player: "Freddie Freeman", team: "LAD", hr: 24, height: 76, weight: 220},
  {player: "Jackson Chourio", team: "MIL", hr: 21, height: 72, weight: 204},
  {player: "Nick Castellanos", team: "PHI", hr: 17, height: 75, weight: 203},
  {player: "Ceddanne Rafaela", team: "BOS", hr: 16, height: 70, weight: 165},
  {player: "Ernie Clement", team: "TOR", hr: 9, height: 71, weight: 170},
  {player: "Otto Lopez", team: "MIA", hr: 15, height: 70, weight: 185},
  {player: "Josh Naylor", team: "SEA/ARI", hr: 20, height: 70, weight: 235},
  {player: "Yainer Diaz", team: "HOU", hr: 20, height: 71, weight: 195},
  {player: "Aaron Judge", team: "NYY", hr: 53, height: 79, weight: 282},
  {player: "Nathaniel Lowe", team: "BOS/WSH", hr: 18, height: 76, weight: 220},
  {player: "Hunter Goodman", team: "COL", hr: 31, height: 72, weight: 210},
  {player: "Anthony Volpe", team: "NYY", hr: 19, height: 70, weight: 197},
  {player: "Jordan Beck", team: "COL", hr: 16, height: 74, weight: 225},
  {player: "Carlos Correa", team: "HOU/MIN", hr: 13, height: 75, weight: 220},
  {player: "Agustin Ramirez", team: "MIA", hr: 21, height: 73, weight: 210},
  {player: "Gleyber Torres", team: "DET", hr: 16, height: 71, weight: 205},
  {player: "Sal Frelick", team: "MIL", hr: 12, height: 68, weight: 188},
  {player: "Ke'Bryan Hayes", team: "PIT/CIN", hr: 5, height: 71, weight: 215},
  {player: "Jo Adell", team: "LAA", hr: 37, height: 74, weight: 215},
  {player: "Michael Busch", team: "CHC", hr: 34, height: 72, weight: 210},
  {player: "Lenyn Sosa", team: "CHW", hr: 22, height: 71, weight: 210},
  {player: "Teoscar Hernandez", team: "LAD", hr: 25, height: 72, weight: 215},
  {player: "Matt McLain", team: "CIN", hr: 15, height: 69, weight: 180},
  {player: "Ryan McMahon", team: "COL/NYY", hr: 20, height: 74, weight: 219},
  {player: "Lars Nootbaar", team: "STL", hr: 13, height: 73, weight: 205},
  {player: "Spencer Steer", team: "CIN", hr: 21, height: 69, weight: 185},
  {player: "Adolis Garcia", team: "TEX", hr: 19, height: 72, weight: 205},
  {player: "Brandon Lowe", team: "TB", hr: 31, height: 70, weight: 190},
  {player: "Miguel Vargas", team: "CHW", hr: 16, height: 74, weight: 225},
  {player: "Trevor Larnach", team: "MIN", hr: 17, height: 75, weight: 223},
  {player: "J.T. Realmuto", team: "PHI", hr: 12, height: 72, weight: 212},
  {player: "Brenton Doyle", team: "COL", hr: 15, height: 75, weight: 220},
  {player: "Zach Neto", team: "LAA", hr: 26, height: 71, weight: 185},
  {player: "Bryce Harper", team: "PHI", hr: 27, height: 74, weight: 210},
  {player: "Luis Rengifo", team: "LAA", hr: 9, height: 70, weight: 195},
  {player: "Kyle Tucker", team: "CHC", hr: 22, height: 76, weight: 212},
  {player: "Lourdes Gurriel Jr.", team: "ARI", hr: 19, height: 75, weight: 215}
];

// Multiple Linear Regression Model
let model = null;

function calculateRegression() {
  const n = mlbData.length;
  const X = mlbData.map(d => [1, d.height, d.weight]);
  const y = mlbData.map(d => d.hr);
  
  // Matrix calculations for Multiple Linear Regression
  const XT = transpose(X);
  const XTX = multiplyMatrices(XT, X);
  const XTXinv = invertMatrix(XTX);
  const XTy = multiplyMatrixVector(XT, y);
  const beta = multiplyMatrixVector(XTXinv, XTy);
  
  // Calculate predictions and R²
  const predictions = X.map(row => 
    beta[0] + beta[1] * row[1] + beta[2] * row[2]
  );
  
  const yMean = y.reduce((a, b) => a + b) / n;
  const ssTotal = y.reduce((sum, yi) => sum + Math.pow(yi - yMean, 2), 0);
  const ssResidual = y.reduce((sum, yi, i) => 
    sum + Math.pow(yi - predictions[i], 2), 0
  );
  const r2 = 1 - (ssResidual / ssTotal);
  
  // Calculate RMSE
  const rmse = Math.sqrt(ssResidual / n);
  
  model = {
    intercept: beta[0],
    heightCoef: beta[1],
    weightCoef: beta[2],
    r2: r2,
    rmse: rmse
  };
  
  return model;
}

// Matrix helper functions
function transpose(matrix) {
  return matrix[0].map((_, i) => matrix.map(row => row[i]));
}

function multiplyMatrices(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    result[i] = [];
    for (let j = 0; j < b[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < a[0].length; k++) {
        sum += a[i][k] * b[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

function multiplyMatrixVector(matrix, vector) {
  return matrix.map(row => 
    row.reduce((sum, val, i) => sum + val * vector[i], 0)
  );
}

function invertMatrix(matrix) {
  const n = matrix.length;
  const identity = Array(n).fill().map((_, i) => 
    Array(n).fill().map((_, j) => i === j ? 1 : 0)
  );
  
  const augmented = matrix.map((row, i) => [...row, ...identity[i]]);
  
  for (let i = 0; i < n; i++) {
    let maxRow = i;
    for (let k = i + 1; k < n; k++) {
      if (Math.abs(augmented[k][i]) > Math.abs(augmented[maxRow][i])) {
        maxRow = k;
      }
    }
    [augmented[i], augmented[maxRow]] = [augmented[maxRow], augmented[i]];
    
    const pivot = augmented[i][i];
    for (let j = 0; j < 2 * n; j++) {
      augmented[i][j] /= pivot;
    }
    
    for (let k = 0; k < n; k++) {
      if (k !== i) {
        const factor = augmented[k][i];
        for (let j = 0; j < 2 * n; j++) {
          augmented[k][j] -= factor * augmented[i][j];
        }
      }
    }
  }
  
  return augmented.map(row => row.slice(n));
}

// Create 3D Plot
function create3DPlot() {
  calculateRegression();
  
  const trace1 = {
    x: mlbData.map(d => d.height),
    y: mlbData.map(d => d.weight),
    z: mlbData.map(d => d.hr),
    mode: 'markers',
    type: 'scatter3d',
    marker: {
      size: 6,
      color: mlbData.map(d => d.hr),
      colorscale: 'Viridis',
      showscale: true,
      colorbar: {
        title: 'Home Runs',
        thickness: 15
      }
    },
    text: mlbData.map(d => `${d.player}<br>HR: ${d.hr}<br>Height: ${d.height}"<br>Weight: ${d.weight} lbs`),
    hoverinfo: 'text',
    name: 'Players'
  };
  
  // Create regression plane
  const heightRange = [Math.min(...mlbData.map(d => d.height)), 
                        Math.max(...mlbData.map(d => d.height))];
  const weightRange = [Math.min(...mlbData.map(d => d.weight)), 
                        Math.max(...mlbData.map(d => d.weight))];
  
  const heightGrid = [];
  const weightGrid = [];
  const hrGrid = [];
  
  const steps = 20;
  for (let i = 0; i <= steps; i++) {
    const h = heightRange[0] + (heightRange[1] - heightRange[0]) * i / steps;
    const hRow = [];
    const wRow = [];
    const hrRow = [];
    
    for (let j = 0; j <= steps; j++) {
      const w = weightRange[0] + (weightRange[1] - weightRange[0]) * j / steps;
      hRow.push(h);
      wRow.push(w);
      hrRow.push(model.intercept + model.heightCoef * h + model.weightCoef * w);
    }
    
    heightGrid.push(hRow);
    weightGrid.push(wRow);
    hrGrid.push(hrRow);
  }
  
  const trace2 = {
    x: heightGrid,
    y: weightGrid,
    z: hrGrid,
    type: 'surface',
    opacity: 0.7,
    colorscale: 'Reds',
    showscale: false,
    name: 'Regression Plane',
    hoverinfo: 'skip'
  };
  
  const layout = {
    scene: {
      xaxis: { title: 'Height (inches)' },
      yaxis: { title: 'Weight (lbs)' },
      zaxis: { title: 'Home Runs' },
      camera: {
        eye: { x: 1.5, y: 1.5, z: 1.3 }
      }
    },
    title: {
      text: '3D Multiple Linear Regression Model',
      font: { size: 20, color: '#0f172a' }
    },
    showlegend: true,
    hovermode: 'closest',
    paper_bgcolor: 'white',
    plot_bgcolor: 'white'
  };
  
  const config = {
    responsive: true,
    displayModeBar: true,
    displaylogo: false
  };
  
  Plotly.newPlot('plot3d', [trace1, trace2], layout, config);
  
  // Update statistics
  updateStatistics();
}

function updateStatistics() {
  document.getElementById('r2-score').textContent = model.r2.toFixed(4);
  document.getElementById('rmse').textContent = model.rmse.toFixed(2);
  document.getElementById('player-count').textContent = mlbData.length;
  
  const equation = `HR = ${model.intercept.toFixed(2)} + ${model.heightCoef.toFixed(2)} × Height + ${model.weightCoef.toFixed(2)} × Weight`;
  document.getElementById('equation').textContent = equation;
  
  const coefficientsHTML = `
    <div class="coef-item">
      <div class="coef-label">Intercept (β₀)</div>
      <div class="coef-value">${model.intercept.toFixed(4)}</div>
    </div>
    <div class="coef-item">
      <div class="coef-label">Height Coefficient (β₁)</div>
      <div class="coef-value">${model.heightCoef.toFixed(4)}</div>
    </div>
    <div class="coef-item">
      <div class="coef-label">Weight Coefficient (β₂)</div>
      <div class="coef-value">${model.weightCoef.toFixed(4)}</div>
    </div>
  `;
  document.getElementById('coefficients').innerHTML = coefficientsHTML;
}

function predictHomeRuns() {
  const height = parseFloat(document.getElementById('height-input').value);
  const weight = parseFloat(document.getElementById('weight-input').value);
  
  if (!height || !weight) {
    alert('Please enter both height and weight values');
    return;
  }
  
  const prediction = model.intercept + model.heightCoef * height + model.weightCoef * weight;
  
  document.getElementById('prediction-value').textContent = Math.round(prediction);
  document.getElementById('prediction-result').style.display = 'block';
}

// Populate data table
function populateTable() {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = mlbData.map(player => `
    <tr>
      <td>${player.player} (${player.team})</td>
      <td>${player.hr}</td>
      <td>${player.height}</td>
      <td>${player.weight}</td>
    </tr>
  `).join('');
}

// Search functionality
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const rows = document.querySelectorAll('#table-body tr');
      
      rows.forEach(row => {
        const playerName = row.cells[0].textContent.toLowerCase();
        if (playerName.includes(searchTerm)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  }
});

// Sort table
function sortTable(column) {
  const tbody = document.getElementById('table-body');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  
  const columnIndex = column === 'hr' ? 1 : 0;
  
  rows.sort((a, b) => {
    const aVal = parseInt(a.cells[columnIndex].textContent);
    const bVal = parseInt(b.cells[columnIndex].textContent);
    return bVal - aVal;
  });
  
  tbody.innerHTML = '';
  rows.forEach(row => tbody.appendChild(row));
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburgerButton && mobileMenu) {
    hamburgerButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });

    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });
  }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Initialize everything when page loads
window.addEventListener('load', () => {
  create3DPlot();
  populateTable();
});