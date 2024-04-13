document.addEventListener('DOMContentLoaded', function() {
    initFactorInputs();

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
});

function calculateScores() {
    const data = [
        [83, 76, 91, 67, 88, 93, 71],
        [88, 64, 76, 66, 85, 87, 90],
        [91, 89, 85, 77, 92, 81, 80]
    ];

    const factorWeights = Array.from(document.querySelectorAll('#factorInputs select')).map(select => select.value / 100);
    const scores = data.map(scores => scores.reduce((total, current, index) => total + current * factorWeights[index], 0));
    const resultsDiv = document.getElementById('results');
    resultsDiv.style.display = 'block';
    resultsDiv.innerHTML = '<h2>結果</h2>';

    scores.forEach((score, index) => {
        const p = document.createElement('p');
        p.textContent = `地區 ${index + 1} 總分: ${score.toFixed(2)}`;
        resultsDiv.appendChild(p);
    });
}

