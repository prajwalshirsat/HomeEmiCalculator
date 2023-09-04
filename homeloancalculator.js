console.log(document.getElementById); 


// DOM event handler


document.getElementById('btn').onclick = function(){


    var amount= document.getElementsByName('txtdata')[0].value;
    var roi= document.getElementsByName('txtdata')[1].value;
    var duration= document.getElementsByName('txtdata')[2].value;

    console.log(amount, typeof amount) ;
    console.log(roi);
    console.log(duration);
 
    var p = Number(amount);    //convert to number

    var r = Number(roi);     //anual
    var n = Number(duration);

   /* P x R x (1+R)^N / [(1+R)^N-1] where-

P = Principal loan amount

N = Loan tenure in months

R = Monthly interest rate

The rate of interest (R) on your loan is calculated per month.

R = Annual Rate of interest/12/100           */
 

r=r/12/100;
n=n*12;

var emi = p*r* ( (1+r)**n ) / ( (1+r)**n - 1 );

emi=Math.round(emi);

console.log(emi);

var totalpayableamount= emi*n; //n- no of months

var finalinterest= totalpayableamount-p;

console.log(finalinterest);

 document.getElementById('emi').innerHTML= emi ; //pass emi to h1 tag whose span id='emi'; // pass values to span ids 
 document.getElementById('loanamount').innerHTML= p ;
 document.getElementById('interest').innerHTML= finalinterest;
 document.getElementById('finalamount').innerHTML=totalpayableamount;  ;


 //chart

 // Data retrieved from https://netmarketshare.com
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'PIE CHART OF EMI CALCULATION',
        align: 'left'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Loan Amount',
            y: p,
            sliced: true,
            selected: true
        }, {
            name: 'Total Interest',
            y:finalinterest 
        }]
    }]
});


}



