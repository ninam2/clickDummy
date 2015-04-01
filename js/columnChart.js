google.load('visualization', '1', {packages: ['corechart']});
    google.setOnLoadCallback(drawChart);

    function drawChart() {
    element.style {
      position: relative;
      width: 500px;
      height: 300px;
      left: 65%;
    }

        var data = google.visualization.arrayToDataTable([
         ['Emotion', 'People', { role: 'style' }],
         ['Aargh!', 8.94, '#03C464' ],
         ['Not good', 10.49, '#03C464' ],
         ['Good', 21.45, 'color: #03C464'],
         ['Awesome!', 19.30, '#03C464' ]

      ]);

      var options = {
        width: 500,
        height: 300,
        hAxis: {
          title: 'Emotion'
        },
        vAxis: {
          title: 'People'
        }
      };

      var chart = new google.visualization.columnChart(
        document.getElementById('columnChart'));

      chart.draw(data, options);
    }