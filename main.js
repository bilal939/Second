/*Js Swapper*/

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 2,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {


    200: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    300: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  },
});

 am4core.useTheme(am4themes_animated);
var chart = am4core.create("chartdiv", am4charts.PieChart);

  chart.data = [ {
       "country": "Pakistan",
      "litres": 300,
      "price":114,

     }, {
       "country": "New-Zealand",
      "litres": 300,
       "price":156

    }, {
       "country": "England",
      "litres": 300,
       "price":199
    }, {
       "country": "Germany",
       "litres": 300,
      "price":200
    }, {
       "country": "Australia",
      "litres": 300,
      "price":200
    }, {
      "country": "Austria",
      "litres": 300,
      "price":990
    }, {
      "country": "UK",
      "litres": 300,
      "price":400
    }
     ];


     var pieSeries = chart.series.push(new am4charts.PieSeries());
     pieSeries.dataFields.value = "litres";
     pieSeries.dataFields.category = "country";
     pieSeries.slices.template.stroke = am4core.color("#fff");






 let labels4=["United-States","India","Brazil","Russia","France"];
let data4=["35,584,272","31,572,344","19,839,369","6,242,066","6,079,239"];
 let colors4=["#e5d198","#d59898" ,"#999999","#e5d198","#8e382a"];

// let mychart4= document.getElementById("myChart");
// console.log(mychart4);



// let chart4=new Chart(mychart4,{
//   type:"pie",
//   data: {
//     labels :labels4,
//     datasets:[{
//      data:data4,
//      backgroundColor:colors4,
//     }]
//   },
//   options:{
//     Title:{
//       text:"Five Worst Effected Covid-19 countries",
//       display:true
//     }
//   }
// });


// var ctx = document.getElementById('myChart');
// var myChart = new Chart(ctx, {
//   type: 'pie',
//   data: {
//     labels: labels4,
//     datasets: [{
//       data: data4,
//       backgroundColor: colors4,
//     }]
//   },
//   options: {
//     Title: {
//       text: "Five Worst Effected Covid-19 countries",
//       display: true
//     }
//   }
// });

 const data = {
   labels: [
    "United-States","India","Brazil","Russia","France"
   ],
   datasets: [{
     label: 'My First Dataset',
     data: ["35,584,272","31,572,344","19,839,369","6,242,066","6,079,239"],
     backgroundColor: [
      "#e5d198","#d59898" ,"#999999","#e5d198","#8e382a"
  ],
}]
 };
 const config = {
  type: 'pie',
  data: data,
};

