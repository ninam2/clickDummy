    google.load('visualization', '1.0', {'packages':['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.setOnLoadCallback(drawChart);


    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Month');
    data.addColumn('number', 'Feeling');
    data.addRows([
    ['March', 3],
    ['April', 1],
    ['Mai', 1],
    ['Jun', 1],
    ['Jul', 2],
    ['Aug', 3],
    ['Sept', 1],
    ['Okt', 3],
    ['Novr', 1],
    ['Dez', 2],
    ]);

    // Set chart options
    var options = {'title':'Happiness index',
    'width':1200,
    'height':600};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
    }