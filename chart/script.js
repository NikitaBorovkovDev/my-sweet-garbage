// const labels = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
// ];

// const data = {
//     labels: labels,
//     datasets: [{
//       label: 'My First dataset',
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: [0, 10, 5, 2, 20, 30, 45],
//     }]
// };

// const config = {
//     type: 'line',
//     data: data,
//     options: {}
// };

// const myChart = new Chart(
//     document.getElementById('myChart'),
//     config
// );
const ctx = document.querySelector('#myChart').getContext('2d');

const grad = ctx.createLinearGradient(300, 200, 300, 0);
  
  grad.addColorStop(0.01, 'rgba(75, 113, 255, 0)');
  grad.addColorStop(1, 'rgba(107, 137, 248, 0.4)');

const myChart = new Chart(ctx, {
    
    type: 'line',
    data: {
        labels: [1,107,505,924,1332,1440],
        datasets: [{
            data: [42, 45, 75, 216, 330, 347],
            backgroundColor: grad,
            borderColor: ['blue'],
            pointBackgroundColor: '#fff',
            borderWidth: 2,
            tension: 0.4,
            fill: true,
        }],
    },
    options: {
        plugins: {
            legend: {
              display: false
            }
        },
        scales: {
            x: {
              grid: {
                display: true,
              },
              stepSize: 1,
              count: 50,
              maxTicksLimit: 50,
            },
            y: {
                grid: {
                    display: false,
                },
                stepSize: 1,
              count: 50,
              maxTicksLimit: 50,
            }
        },
    },
    
})