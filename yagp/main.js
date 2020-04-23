const data = { 
    countries: ["USA", 
                "Japan", 
                "Korea", 
                "Mexico", 
                "Brazil", 
                "China", 
                "Canada", 
                "Australia", 
                "Germany", 
                "Italy", 
                "Switzerland", 
                "Belgium", 
                "Cuba", 
                "Monaco", 
                "Austria", 
                "Portugal", 
                "South Africa", 
                "Peru", 
                "Argentina", 
                "France", 
                "Spain", 
                "Paraguay", 
                "Cyprus", 
                "New Zealand", 
                "Belarus", 
                "Singapore", 
                "Norway", 
                "Ukraine", 
                "Czech Republic", 
                "Romania", 
                "Belarus", 
                "Estonia", 
                "Lithuania", 
                "Indonesia", 
                "Israel", 
                "United Kingdom", 
                "Turkey", 
                "Russia", 
                "Poland", 
                "Latvia", 
                "Venezuela", 
                "Greece", 
                "Mongolia", 
                "Panama"],
    years: { 2000: [23, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             2001: [24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             2002: [35, 12, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
             2003: [22, 7, 0, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             2004: [40, 15, 1, 1,4,3,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             2005: [32,11, 3,1,8,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             2006: [23, 11, 0, 2, 7, 0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
             2007: [32,11,2,3,7,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,1,1,1,0],
             2008: [40,10,3,3,8,1,2,2,1,3,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,1,1],
             2009: [35,19,5,2,3,5,3,3,1,1,2,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0],
             2010: [22,8,6,3,3,5,3,1,0,2,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,2,0,2,0,0,0,0,0,0],
             2011: [24,8,8,6,4,3,2,0,0,2,2,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             2012: [30,10,6,3,7,3,2,1,1,2,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
             2013: [28,9,3,0,12,3,2,1,0,1,3,1,1,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
             2014: [38,14,3,3,6,3,2,2,0,2,1,0,1,1,1,3,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             2015: [37,6,8,1,1,2,5,5,2,2,0,0,0,0,0,5,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             2016: [32,8,2,1,0,4,0,2,4,1,1,0,1,0,0,4,1,0,0,0,2,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             2017: [45,8,3,1,4,1,3,1,0,0,0,0,0,0,3,5,0,0,0,1,0,1,0,0,0,0,1,1,1,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
             2018: [37,10,7,2,4,2,0,1,1,1,1,0,0,0,1,5,0,0,0,1,1,0,0,0,0,1,1,1,0,1,3,0,1,1,0,0,0,0,0,0,0,0,0,0],
             2019: [27,8,5,0,6,1,1,2,1,0,1,1,0,0,0,9,0,1,2,0,0,0,0,0,2,1,0,1,0,2,0,0,0,1,1,0,0,4,0,0,0,0,0,0]
    },
    colors: [
        "#ef83ae",
        "#85d4ec",
        "#bb82b9",
        "#f9cb9d",
        "#9063aa",
        "#749cd2",
        "#f6a9c6",
        "#a6deef",
        "#d2a6cd",
        "#fadbba",
        "#b38dc1",
        "#9dbae2",
        "#facee0",
        "#c9eaf5",
        "#e7cbe2",
        "#fde9d7",
        "#d78cdb",
        "#c7d8ef",
        "#fce5ef",
        "#e2f4fc",
        "#e0cec5",
        "#dedbe8",
        "#e5d7d3",
        "#c1bfd4",
        "#c470ae",
        "#f9ad96",
        "#f6f3a7",
        "#ade0ed",
        "#998dc3",
        "#6b65ad",
        "#fcbe85",
        "#ffcf5b",
        "#fed078",
        "#f2796a",
        "#ee2e81",
        "#f0577a",
        "#25baed",
        "#4993cf",
        "#3a7cc0",
        "#5a4da0",
        "#d3519d",
        "#f26e86",
        "#75459b",
        "#7e53a2"
    ],
    maxAwardsGiven: 85,
    totAwardsPerYear: {2000: 24, 
        2001: 24, 
        2002: 53, 
        2003: 35,
        2004: 67,
        2005: 59,
        2006: 45,
        2007: 65,
        2008: 79,
        2009: 85,
        2010: 65,
        2011: 62,
        2012: 70,
        2013: 69,
        2014: 84,
        2015: 76,
        2016: 66,
        2017: 83,
        2018: 83,
        2019: 77},
    runningTot : {2000: [23, 0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
        2001: [47,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
        2002: [82,	12,	0,	0,	0,	0,	2,	0,	0,	0,	0,	0,	0,	0,	3,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0],
        2003: [104,	19,	0,	2,	4,	0,	2,	0,	0,	0,	0,	0,	0,	0,	3,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0],
        2004: [144,	34,	1,	3,	8,	3,	2,	0,	1,	0,	1,	0,	0,	0,	4,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0],
        2005: [176,	45,	4,	4,	16,	4,	2,	0,	1,	1,	2,	0,	0,	0,	4,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0],
        2006: [199,	56,	4,	6,	23,	4,	2,	0,	1,	1,	3,	0,	0,	0,	4,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	1,	0,	0,	0,	0],
        2007: [231,	67,	6,	9,	30,	5,	3,	0,	1,	1,	4,	0,	0,	0,	4,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	4,	0,	0,	0,	1,	1,	1,	1,	0],
        2008: [271,	77,	9,	12,	38,	6,	5,	2,	2,	4,	4,	0,	0,	0,	4,	1,	0,	0,	0,	1,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	7,	0,	0,	0,	1,	1,	1,	2,	1],
        2009: [306,	96,	14,	14,	41,	11,	8,	5,	3,	5,	6,	0,	0,	0,	4,	2,	0,	0,	0,	1,	1,	2,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	9,	1,	0,	0,	1,	1,	1,	2,	1],
        2010: [328,	104,20,	17,	44,	16,	11,	6,	3,	7,	7,	1,	0,	0,	5,	2,	0,	0,	0,	2,	2,	3,	0,	1,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	1,	11,	1,	2,	0,	1,	1,	1,	2,	1],
        2011: [352,	112,28,	23,	48,	19,	13,	6,	3,	9,	9,	2,	2,	0,	5,	2,	0,	0,	0,	2,	2,	3,	0,	1,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	1,	11,	1,	2,	0,	1,	1,	1,	2,	1],
        2012: [382,	122,34,	26,	55,	22,	15,	7,	4,	11,	10,	2,	2,	0,	5,	3,	0,	1,	0,	2,	3,	3,	0,	1,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	1,	11,	1,	3,	0,	1,	1,	1,	2,	1],
        2013: [410,	131,37,	26,	67,	25,	17,	8,	4,	12,	13,	3,	3,	0,	5,	3,	0,	1,	0,	4,	3,	3,	0,	1,	0,	0,	0,	1,	1,	0,	0,	0,	0,	0,	1,	11,	1,	4,	1,	1,	1,	1,	2,	1],
        2014: [448,	145,40,	29,	73,	28,	19,	10,	4,	14,	14,	3,	4,	1,	6,	6,	1,	2,	1,	5,	3,	3,	0,	1,	0,	0,	0,	1,	1,	0,	0,	0,	0,	0,	1,	11,	1,	4,	1,	1,	1,	1,	2,	1],
        2015: [485,	151,48,	30,	74,	30,	24,	15,	6,	16,	14,	3,	4,	1,	6,	11,	1,	2,	1,	5,	4,	3,	1,	1,	0,	0,	0,	1,	1,	0,	0,	0,	0,	0,	1,	11,	1,	4,	1,	1,	1,	1,	2,	1],
        2016: [517,	159,50,	31,	74,	34,	24,	17,	10,	17,	15,	3,	5,	1,	6,	15,	2,	2,	1,	5,	6,	3,	1,	2,	1,	1,	0,	1,	1,	0,	0,	0,	0,	0,	1,	11,	1,	4,	1,	1,	1,	1,	2,	1],
        2017: [562,	167,53,	32,	78,	35,	27,	18,	10,	17,	15,	3,	5,	1,	9,	20,	2,	2,	1,	6,	6,	4,	1,	2,	1,	1,	1,	2,	2,	2,	1,	1,	0,	0,	1,	11,	1,	4,	1,	1,	1,	1,	2,	1],
        2018: [599,	177,60,	34,	82,	37,	27,	19,	11,	18,	16,	3,	5,	1,	10,	25,	2,	2,	1,	7,	7,	4,	1,	2,	1,	2,	2,	3,	2,	3,	4,	1,	1,	1,	1,	11,	1,	4,	1,	1,	1,	1,	2,	1],
        2019: [626,	185,65,	34,	88,	38,	28,	21,	12,	18,	17,	4,	5,	1,	10,	34,	2,	3,	3,	7,	7,	4,	1,	2,	3,	3,	2,	4,	2,	5,	4,	1,	1,	2,	2,	11,	1,	8,	1,	1,	1,	1,	2,	1]}
}









var year = 2000;
var chart;
var timeLine;
var totAwards;
var runningTot;
function onload() {
    chart = new Chart(document.getElementById("doughnut-chart"), {
        type: 'doughnut',
        data: {
          labels: data.countries,
          datasets: [
            {
              label: "Number of Prizes Awarded",
              backgroundColor: data.colors,
              data: data.years[2000]
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Number of Winners Per Country'
          },
          legend: {
              display: false
          }
        }
    });

    timeLine = new ProgressBar.Line('#timeline-container', {easing: 'easeInOut',
    duration: 1000,
    color: 'var(--light-pink)',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '9rem'}});

    totAwards = new ProgressBar.Line('#awards-container', {easing: 'easeInOut',
    duration: 1000,
    color: 'var(--dark-purple)',
    trailColor: 'var(--light-purple)',
    trailWidth: 1,
    svgStyle: {width: '70%', height: '4rem', paddingTop: '3rem'},
    text: {value: data.totAwardsPerYear[year].toString(),
        style: {color: "var(--light-gray)", fontFamily: "sans-serif", fontSize: "1.6rem"}
    }});

    runningTot = new Chart(document.getElementById('bar-chart'), {
        type: 'bar',
        data: {
            labels: data.countries,
            datasets: [
              {
                label: "Total # Prizewinners From Country",
                backgroundColor: data.colors,
                categoryPercentage: 0.7,
                data: data.years[2000]
              }
            ]
    },
        options: {
            title: {
                display: true,
                text: 'Top 10 Countries, Cumulative Medal Count'
            },
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false,
                      drawBorder: false,
                    },
                  }],
                xAxes: [{
                    gridLines: {
                      display: false,
                    },
                  }],
            }
        }
    });
    updateRunningTot();
    updateTotAwards();
    updateTimeline();
}

function incYear() {
    //update year
    year < 2019 ? (year++) : (year = 2000);

    updatePage();
}

function decYear () {
    year > 2000 ? (year--) : (year = 2019);

    updatePage();
}

function updatePage() {
    updateTitle();
    updateTimeline();
    updateTotAwards();
    updateChart();
    updateRunningTot();
}

function updateTitle() {
    document.getElementById('year').innerHTML = year.toString();
}

function updateChart() {
    chart.data.datasets[0].data = data.years[year];
    chart.update();
}

function updateTimeline() {
    timeLine.animate(0.0525 * (year - 2000));
}

function updateTotAwards() {
    totAwards.animate(data.totAwardsPerYear[year] / data.maxAwardsGiven);
    totAwards.setText(data.totAwardsPerYear[year].toString() + " awards presented (max 85)");
}

function updateRunningTot() {
    var top5ind = getTopFiveIndices();
    runningTot.data.datasets[0].data = getTopFive(data.runningTot[year], top5ind);
    runningTot.data.labels = getTopFive(data.countries, top5ind);
    runningTot.data.datasets[0].colors = getTopFive(data.colors, top5ind);
    runningTot.update();
}

function getTopFive(arr, top5ind) {
    var ret = [];
    for (var i=0; i<top5ind.length; i++) {
        ret.push(arr[top5ind[i]]);
    }
    return ret;
}
function getTopFiveIndices() {
    var curr = data.runningTot[year].slice(0, data.runningTot[year].length);
    var top5ind = [];
    for (var i=0; i<10; i++) {
        //find index of max value, add it to list of indices, set copy's ind to 0
        var ind = maxIndex(curr);
        if (curr[ind] > 0) {
            top5ind.push(ind);
            curr[ind] = 0;
        }
    }
    return top5ind;
}

function maxIndex(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}











