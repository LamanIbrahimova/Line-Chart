var ctx = document.getElementById("myChart");

var myChart = new Chart(ctx,{
  // type: 'doughnut',
  // data:{
  //   labels: ["yes", 'no'], 
  //   datasets: [{
  //     data: [45,78],
  //     backgroundColor: ["#49A9EA", "#36CAAB"]

  //   }]
  // }, 
  // options:{
  //   title:{
  //     text:"Do you like doughnut?",
  //     display: true

  //   }
  // }


  type:'line',
  data:  {
    labels:["24","145","178", "96"] ,
    datasets: [{
      axis: 'y',
      label: 'My First Dataset',
      data: [65, 59, 180, 81, 256, 55, 40],
      fill: false,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  }
  
});