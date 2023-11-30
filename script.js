function updateChart() {
    const NYC_TIME_DIFF = -5; // New York City is UTC-5
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const nycTime = new Date(utc + (3600000 * NYC_TIME_DIFF));
    
    const totalMinutes = 24 * 60;
    const currentMinute = nycTime.getHours() * 60 + nycTime.getMinutes();
    const remainingMinutes = totalMinutes - currentMinute;

    myChart.data.datasets[0].data = [currentMinute, remainingMinutes];
    myChart.update();
}

const ctx = document.getElementById('timeChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Elapsed', 'Remaining'],
        datasets: [{
            label: 'Time of Day',
            data: [0, 1440], // initially set to full day
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Current Time in NYC as Pie Chart'
        }
    }
});

setInterval(updateChart, 60000); // Update every minute
updateChart(); // Initial update
