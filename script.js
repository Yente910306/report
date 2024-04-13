document.addEventListener('DOMContentLoaded', function() {
    initFactorInputs();
    populateData();

    function initFactorInputs() {
        const factorInputs = document.getElementById('factorInputs');
        for (let i = 1; i <= 7; i++) {
            const label = document.createElement('label');
            label.textContent = `因素 ${i}: `;
            const select = document.createElement('select');
            [0, 20, 40, 60, 80, 100].forEach(percent => {
                const option = document.createElement('option');
                option.value = percent;
                option.textContent = `${percent}%`;
                select.appendChild(option);
            });
            label.appendChild(select);
            factorInputs.appendChild(label);
        }
    }

    function populateData() {
        const data = [
            [83, 76, 91, 67, 88, 93, 71],
            [88, 64, 76, 66, 85, 87, 90],
            [91, 89, 85, 77, 92, 81, 80]
        ];
        const tableBody = document.querySelector('#dataTable tbody');
        data.forEach((row, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>地區 ${index + 1}</td>` + row.map(value => `<td>${value}</td>`).join('');
            tableBody.appendChild(tr);
        });
    }
});

function calculateScores() {
    const rows = document.querySelectorAll('#dataTable tbody tr');
    const scores = Array.from(rows).map(row => {
        const cells = row.querySelectorAll('td');
        return Array.from(cells).slice(1).reduce((total, cell, index) => {
            const factorWeight = document.querySelectorAll('#factorInputs select')[index].value / 100;
            return total + (parseFloat(cell.textContent) * factorWeight);
        }, 0);
    });
    displayResults(scores);
}

function displayResults(scores) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.style.display = 'block';
    resultsDiv.innerHTML = '<h2>結果</h2>';
    scores.forEach((score, index) => {
        const p = document.createElement('p');
        p.textContent = `地區 ${index + 1} 總分: ${score.toFixed(2)}`;
        resultsDiv.appendChild(p);
    });
}

