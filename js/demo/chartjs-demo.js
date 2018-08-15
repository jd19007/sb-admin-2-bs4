( function ( $) {
    "use strict";
    //Team chart
    var ctx=document.getElementById( "team-chart");
    ctx.height=150;
    var myChart=new Chart( ctx, {
        type: 'line', data: {
            labels: [ "2010", "2011", "2012", "2013", "2014", "2015", "2016"], type: 'line', defaultFontFamily: 'Montserrat', datasets: [ {
                data: [ 0, 7, 3, 5, 2, 10, 7], label: "Expense", backgroundColor: '#b9dcec', borderColor: '#f572a1', borderWidth: 3.5, pointStyle: 'circle', pointRadius: 5, pointBorderColor: 'transparent', pointBackgroundColor: '#f572a1',
            }
            , ]
        }
        , options: {
            responsive: true, tooltips: {
                mode: 'index', titleFontSize: 12, titleFontColor: '#000', bodyFontColor: '#000', backgroundColor: '#fff', titleFontFamily: 'Montserrat', bodyFontFamily: 'Montserrat', cornerRadius: 3, intersect: false,
            }
            , legend: {
                display: false, position: 'top', labels: {
                    usePointStyle: true, fontFamily: 'Montserrat',
                }
                ,
            }
            , scales: {
                xAxes: [ {
                    display: true, gridLines: {
                        display: false, drawBorder: false
                    }
                    , scaleLabel: {
                        display: false, labelString: 'Month'
                    }
                }
                ], yAxes: [ {
                    display: true, gridLines: {
                        display: false, drawBorder: false
                    }
                    , scaleLabel: {
                        display: true, labelString: 'Value'
                    }
                }
                ]
            }
            , title: {
                display: false,
            }
        }
    }
    );
    //Sales chart
    var ctx=document.getElementById( "sales-chart");
    ctx.height=150;
    var myChart=new Chart( ctx, {
        type: 'line', data: {
            labels: [ "2010", "2011", "2012", "2013", "2014", "2015", "2016"], type: 'line', defaultFontFamily: 'Montserrat', datasets: [ {
                label: "Foods", data: [ 0, 30, 10, 120, 50, 63, 10], backgroundColor: 'transparent', borderColor: '#b9dcec', borderWidth: 3, pointStyle: 'circle', pointRadius: 5, pointBorderColor: 'transparent', pointBackgroundColor: '#b9dcec',
            }
            , {
                label: "Electronics", data: [ 0, 50, 40, 80, 40, 79, 120], backgroundColor: 'transparent', borderColor: '#f572a1', borderWidth: 3, pointStyle: 'circle', pointRadius: 5, pointBorderColor: 'transparent', pointBackgroundColor: '#f572a1',
            }
            ]
        }
        , options: {
            responsive: true, tooltips: {
                mode: 'index', titleFontSize: 12, titleFontColor: '#000', bodyFontColor: '#000', backgroundColor: '#fff', titleFontFamily: 'Montserrat', bodyFontFamily: 'Montserrat', cornerRadius: 3, intersect: false,
            }
            , legend: {
                display: false, labels: {
                    usePointStyle: true, fontFamily: 'Montserrat',
                }
                ,
            }
            , scales: {
                xAxes: [ {
                    display: true, gridLines: {
                        display: false, drawBorder: false
                    }
                    , scaleLabel: {
                        display: false, labelString: 'Month'
                    }
                }
                ], yAxes: [ {
                    display: true, gridLines: {
                        display: false, drawBorder: false
                    }
                    , scaleLabel: {
                        display: true, labelString: 'Value'
                    }
                }
                ]
            }
            , title: {
                display: false, text: 'Normal Legend'
            }
        }
    }
    );
    //radar chart
    var ctx=document.getElementById( "radarChart");

    ctx.height=160;
    var myChart=new Chart( ctx, {
        type: 'radar', data: {
            labels: [ [ "Eating", "Dinner"], [ "Drinking", "Water"], "Sleeping", [ "Designing", "Graphics"], "Coding", "Cycling", "Running"], datasets: [ {
                label: "My First dataset", data: [ 65, 59, 66, 45, 56, 55, 40], borderColor: "rgba(255, 205, 205, 0.6)", borderWidth: "1", backgroundColor: "rgba(255, 205, 175, 0.4)"
            }
            , {
                label: "My Second dataset", data: [ 28, 12, 40, 19, 63, 27, 87], borderColor: "rgba(200, 251, 241, 0.7", borderWidth: "1", backgroundColor: "rgba(200, 251, 241, 0.7)"
            }
            ]
        }
        , options: {
            legend: {
                position: 'top'
            }
            , scale: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    }
    );
    //bar chart
    var ctx=document.getElementById( "barChart");
    ctx.height=160;
    var myChart=new Chart( ctx, {
        type: 'bar', data: {
            labels: [ "January", "February", "March", "April", "May", "June", "July"], datasets: [ {
                label: "My First dataset", data: [ 65, 59, 80, 81, 56, 55, 40], borderColor: "rgba(155, 241, 225, 0.5)", borderWidth: "0", backgroundColor: "rgba(155, 241, 225, 0.5)"
            }
            , {
                label: "My Second dataset", data: [ 28, 48, 40, 19, 86, 27, 90], borderColor: "rgba(196,88,80,0.09)", borderWidth: "0", backgroundColor: "rgba(196,88,80,0.07)"
            }
            ]
        }
        , options: {
            scales: {
                yAxes: [ {
                    ticks: {
                        beginAtZero: true
                    }
                }
                ]
            }
        }
    }
    );
    //line chart
    var ctx=document.getElementById( "lineChart");
    ctx.height=150;
    var myChart=new Chart( ctx, {
        type: 'line', data: {
            labels: [ "January", "February", "March", "April", "May", "June", "July"], datasets: [ {
                label: "My First dataset", borderColor: "rgba(0,0,0,.09)", borderWidth: "1", backgroundColor: "rgba(22,205,250,0.07)", data: [ 22, 44, 67, 43, 76, 45, 12]
            }
            , {
                label: "My Second dataset", borderColor: "rgba(30, 50,100, 0.9)", borderWidth: "1", backgroundColor: "rgba(245, 114, 161, 0.5)", pointHighlightStroke: "rgba(26,179,148,1)", data: [ 16, 32, 18, 26, 42, 33, 44]
            }
            ]
        }
        , options: {
            responsive: true, tooltips: {
                mode: 'index', intersect: false
            }
            , hover: {
                mode: 'nearest', intersect: true
            }
        }
    }
    );
    //pie chart
    var ctx=document.getElementById( "pieChart");
    ctx.height=150;
    var myChart=new Chart( ctx, {
        type: 'pie', data: {
            datasets: [ {
                data: [ 25, 20, 15], backgroundColor: [ "#254080", "#b59bc9", "#cccc99"], hoverBackgroundColor: [ "#254080", "#b59bc9", "#cccc99"]
            }
            ], labels: [ "navy blue", "purple", "yellow"]
        }
        , options: {
            responsive: true
        }
    }
    );
    //doughut chart
    var ctx=document.getElementById( "doughutChart");
    ctx.height=150;
    var myChart=new Chart( ctx, {
        type: 'doughnut', data: {
            datasets: [ {
                data: [ 45, 25, 20, 10], backgroundColor: [ "#242440", "#8596a7", "#a7cccc", "#eeeedb"], hoverBackgroundColor: [ "#242440", "#8596a7", "#a7cccc", "#eeeedb"]
            }
            ], labels: [ "blue", "grey", "green", "yellow"]
        }
        , options: {
            responsive: true
        }
    }
    );
    //polar chart
    var ctx=document.getElementById( "polarChart");
    ctx.height=150;
    var myChart=new Chart( ctx, {
        type: 'polarArea', data: {
            datasets: [ {
                data: [ 15, 18, 9, 19], backgroundColor: [ "#242440", "#8596a7", "#a7cccc", "#eeeedb"]
            }
            ], labels: [ "blue", "grey", "green", "yellow"]
        }
        , options: {
            responsive: true
        }
    }
    );
    // single bar chart
    var ctx=document.getElementById( "singelBarChart");
    ctx.height=150;
    var myChart=new Chart( ctx, {
        type: 'bar', data: {
            labels: [ "Sun", "Mon", "Tu", "Wed", "Th", "Fri", "Sat"], datasets: [ {
                label: "My First dataset", data: [ 40, 55, 75, 81, 56, 55, 40], borderColor: "rgba(60,186,159,1)", borderWidth: "0", backgroundColor: "rgba(60,186,159,0.2)"
            }
            ]
        }
        , options: {
            scales: {
                yAxes: [ {
                    ticks: {
                        beginAtZero: true
                    }
                }
                ]
            }
        }
    }
    );
    // bubble-chart
    var ctx=document.getElementById( "bubble-chart");
    ctx.height=150;
    var myChart=new Chart( ctx, {
        type: 'bubble', data: {
            labels: "Color", datasets: [ {
                label: ["Yellow"], backgroundColor: "rgba(255,221,50,0.2)", borderColor: "rgba(255,221,50,1)", data: [ {
                    x: 21269017, y: 5.245, r: 15
                }
                ]
            }
            , {
                label: ["Green"], backgroundColor: "rgba(60,186,159,0.2)", borderColor: "rgba(60,186,159,1)", data: [ {
                    x: 258702, y: 7.526, r: 10
                }
                ]
            }
            , {
                label: ["Grey"], backgroundColor: "rgba(0,0,0,0.2)", borderColor: "#000", data: [ {
                    x: 3979083, y: 6.994, r: 15
                }
                ]
            }
            , {
                label: ["Red"], backgroundColor: "rgba(193,46,12,0.2)", borderColor: "rgba(193,46,12,1)", data: [ {
                    x: 4931877, y: 5.921, r: 15
                }
                ]
            }
            ]
        }
        ,
    }
    );
}

)( jQuery);