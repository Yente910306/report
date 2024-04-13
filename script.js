document.addEventListener('DOMContentLoaded', function() {
    initFactorInputs();
    initRegions();

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

    function initRegions() {
        const regions = document.getElementById('regions');
        const regionSizes = [9, 7, 11, 4]; // 個體數量 for each region
        regionSizes.forEach((size, index) => {
            const regionDiv = document.createElement('div');
            regionDiv.id = `region${index + 1}`;
            const h3 = document.createElement('h3');
            h3.textContent = `地區 ${index + 1}`;
            regionDiv.appendChild(h3);
            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const trHead = document.createElement('tr');
            trHead.appendChild(document.createElement('th')).textContent = '個體';
            for (let i = 1; i <= 7; i++) {
                trHead.appendChild(document.createElement('th')).textContent = `因素 ${i}`;
            }
            thead.appendChild(trHead);
            table.appendChild(thead);
            const tbody = document.createElement('tbody');
            for (let i = 1; i <= size; i++) {
                const tr = document.createElement('tr');
                tr.appendChild(document.createElement('td')).textContent = `個體 ${i}`;
                for (let j = 1; j <= 7; j++) {
                    tr.appendChild(document.createElement('td')).appendChild(document.createElement('input')).type = 'number';
                }
                tbody.appendChild(tr);
            }
            table.appendChild(tbody);
            regionDiv.appendChild(table);
            regions.appendChild(regionDiv);
        });
    }
});
