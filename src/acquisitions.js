import Chart from 'chart.js/auto'

(async function() {
    const data = [
        { month: 'Fevereiro', count: 10 },
        { month: 'Abril', count: 20 },
        { month: 'Julho', count: 15 },
        { month: 'Agosto', count: 25 },
        { month: 'Outubro', count: 22 },
        { month: 'Dezembro', count: 30 },
    ];

    new Chart(
        document.getElementById('acquisitions'),
        {
            type: 'bar',
            data: {
                labels: data.map(row => row.month),
                datasets: [
                    {
                        label: 'Sementes Germinadas',
                        data: data.map(row => row.count)
                    }
                ]
            }
        }
    );
})();