function GoAnalysis() {
    var options =
    {
        chart: {
            type: "column",
        },
        title: {
            text: "AQP基因家族GO注释"
        },
        xAxis: {
            categories: [],
            labels: {
                rotation: -45,
            },
            tickWidth:0.5,
            tickLength:5,
            lineColor:"#4B7AB2",
            tickColor:"#4B7AB2"

        },
        yAxis: {
            title: {
                text: "Count"
            },
            lineWidth: 1,
            lineColor:"#4B7AB2",
            minorGridLineWidth: 0,
            minorTickWidth: 1,
            minorTickLength: 5,
            minorTickInterval: 20,
            tickColor:"#4B7AB2"

        },

        series: [],
        credits:{
            enabled: false 
       }
    };


    $.get('data/goData.csv', function (data) {
        // 分隔每一行
        var lines = data.split('\n');

        // 遍历每一行
        $.each(lines, function (lineNo, line) {
            var items = line.split(',');

            // 处理第一行，即分类
            if (lineNo == 0) {
                $.each(items, function (itemNo, item) {
                    if (itemNo > 0) {
                        options.xAxis.categories.push(item);
                    }
                });
            }

            // 处理其他的每一行
            if (lineNo == 1) {
                var series = {
                    data: []
                };
                $.each(items, function (itemNo, item) {

                    if (itemNo == 0) {
                        series.showInLegend = false;   // 隐藏数据列的名字
                    } 
                    else {
                        var typeFunc = lines[2].split(',');

                        if(typeFunc[itemNo]=="P")
                        {
                            colcolor = "#B7BFEB";
                        }
                        if(typeFunc[itemNo]=="F")
                        {
                            colcolor = "#FFCC7F"
                        }
                        if(typeFunc[itemNo]=="C")
                        {
                            colcolor = "#FF9E7F"
                        }

                        series.data.push({y:parseFloat(item),color:colcolor}); // 数据，记得转换成数值类型
                    }
                });

                // 最后将数据 push 到数据列配置里
                options.series.push(series);
                
            }
        });

        // 创建图表
        var chart = Highcharts.chart('Go-Chart', options);
        chart.setSize(800, 400);
    });
}


//-------------------2

function ProteinAnalysis() {
    var options =
    {
        chart: {
            type: 'spline',
        },
        title: {
            text: "AQP基因家族GO注释"
        },
        xAxis: {
            categories: [],
            labels: {
                rotation: 90,
            },
            tickWidth:0.5,
            tickLength:5,
            lineColor:"#4B7AB2",
            tickColor:"#4B7AB2"

        },
        yAxis: {
            title: {
                text: "Count"
            },
            lineWidth: 1,
            lineColor:"#4B7AB2",
            minorGridLineWidth: 0,
            minorTickWidth: 1,
            minorTickLength: 5,
            minorTickInterval: 20,
            tickColor:"#4B7AB2"

        },
        plotOptions: {
            series: {
                events: {
                    legendItemClick: function (event) {
                        const chart = this.chart
                        $.each(chart.series,function(itemNo,item){
                             if(item.name = this.name)
                             {
                                item.hide()
                             }
                             else
                             {
                                 item.enabled();
                             }
                        })
                    }
                },
            }
        },
        series: [],
        credits:{
            enabled: false 
       }
    };


    $.get('data/proteinData.csv', function (data) {
        // 分隔每一行
        var lines = data.split('\n');

        // 遍历每一行
        $.each(lines, function (lineNo, line) {
            var items = line.split(',');

            // 处理第一行，即分类
            if (lineNo == 0) {
                $.each(items, function (itemNo, item) {
                    if (itemNo > 0) {
                        options.xAxis.categories.push(item);
                    }
                });
            }

            // 处理其他的每一行
            if (lineNo >= 1) {
                var series = {
                    data: []
                };
                $.each(items, function (itemNo, item) {

                    if (itemNo == 0) {
                        series.name = item;
                        if (lineNo > 1)
                        {
                            series.visible= false;
                        }         
                    } 
                    else {
                        var typeFunc = lines[2].split(',');
                        series.data.push(parseFloat(item)); // 数据，记得转换成数值类型
                    }
                });

                // 最后将数据 push 到数据列配置里
                options.series.push(series);
                
            }
        });



        // 创建图表
        var chart = Highcharts.chart('Protein-Chart', options);
        chart.series[chart.series.length-1].remove();
        chart.setSize(800, 400);
    });
}