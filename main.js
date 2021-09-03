/*Js Swapper*/


 AOS.init();
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

document.getElementById("b1").addEventListener('click',function (params) {
  document.getElementById('b2').style.display="none";
  document.getElementById('b1').style.display="none";
  document.getElementById('Svg-image').style.display="flex";
  document.getElementById('b3').style.display="inline-block";
  document.getElementById('defaultCheck1').style.display="inline-block";
  const container = document.querySelectorAll(".check");
  console.log(container);
  for (let i = 0; i < container.length; i++) {
    container[i].style.display="inline-block"
  }
});

document.getElementById("b3").addEventListener('click',function (params) {
  document.getElementById('b2').style.display="block";
  document.getElementById('b1').style.display="block";
  document.getElementById('Svg-image').style.display="none";
  document.getElementById('b3').style.display="none";
  const container = document.querySelectorAll(".check");
  const container2 = document.querySelectorAll(".form-check-input");
 
  for (let i = 0; i < container.length; i++) {
    container2[i].checked = false;
    container[i].style.display="none";
  }
});

function preview(value) {
  console.log(value);
  document.getElementById('imagePreview').src = window.URL.createObjectURL(value.files[0]);
  document.getElementById('imagePreview').style.width="100%";
  document.getElementById('imagePreview').style.height="100%";
  document.getElementById("img").style.padding="0px";
  document.getElementById("hi").style.display="none"
}
function preview2(value) {
  console.log(value);
  document.getElementById('ShowImage').src = window.URL.createObjectURL(value.files[0]);
  document.getElementById('ShowImage').style.width="100px";
  document.getElementById('ShowImage').style.height="100px";
  document.getElementById("style").style.padding="0px";
 
}


  


    

  


const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
let myArr = JSON.parse(this.responseText);
for (let i = 0; i < myArr.length; i++) {
    var container = document.getElementById('Jasondata');

    var output="";
    
    var content = `
    <div class="col-xl-2  col-lg-3 col-md-4 col-sm-6 col-xs-12 col-xl-" data-aos="flip-left" data-aos-duration="1000">
    <div class="card" >
      <div class="check">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
        </div>
      </div>
      <img class="card-img-top" src="${myArr[i].image}" alt="top-image">
      <div class="icon-img" data-toggle="modal" data-target="#exampleModalCenter2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#2b61b4" xmlns="http:www.w3.org/2000/svg">
          <path
            d="M14.9239 4.04412L19.8061 8.92622L7.44801 21.2843L2.56863 16.4022L14.9239 4.04412ZM23.5107 2.86667L21.3334 0.689423C20.492 -0.152008 19.1257 -0.152008 18.2814 0.689423L16.1958 2.77501L21.0779 7.65715L23.5107 5.22443C24.1633 4.57177 24.1633 3.51929 23.5107 2.86667ZM0.0137079 23.2644C-0.0751408 23.6642 0.285881 24.0225 0.685791 23.9253L6.12612 22.6062L1.24674 17.7241L0.0137079 23.2644Z" />
        </svg>
      </div>
      <div class="card-body">
        <h6>${myArr[i].name}</h6>
        <p>${myArr[i].description}</p>
      </div>
  
  
    </div>
  </div>
    `;
    output += content
   container.innerHTML += output;
  }
  
  
 
  // Append newyly created card element to the container
 
 

   
var formadd=document.querySelector(".form-add")
formadd.addEventListener('submit' , (e) => {
     e.preventDefault();
      var name = document.getElementById('name').value;
      var postion = document.getElementById('position').value;
      var description = document.getElementById('description').value;
      var pic=document.getElementById("imagePreview").src;
      let sendData={
        "id":8,
        "image":pic,
        "name":name,
        "position":postion,
        "description":description
      }



    myArr.push(sendData);
  var container = document.getElementById('Jasondata');
  var output="";
  
  var content = `
  <div class="col-xl-2  col-lg-3 col-md-4 col-sm-6 col-xs-12 col-xl-" data-aos="flip-left" data-aos-duration="1000">
  <div class="card" >
    <div class="check">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
      </div>
    </div>
    <img class="card-img-top" src="${pic}" alt="top-image">
    <div class="icon-img" data-toggle="modal" data-target="#exampleModalCenter2">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#2b61b4" xmlns="http:www.w3.org/2000/svg">
        <path
          d="M14.9239 4.04412L19.8061 8.92622L7.44801 21.2843L2.56863 16.4022L14.9239 4.04412ZM23.5107 2.86667L21.3334 0.689423C20.492 -0.152008 19.1257 -0.152008 18.2814 0.689423L16.1958 2.77501L21.0779 7.65715L23.5107 5.22443C24.1633 4.57177 24.1633 3.51929 23.5107 2.86667ZM0.0137079 23.2644C-0.0751408 23.6642 0.285881 24.0225 0.685791 23.9253L6.12612 22.6062L1.24674 17.7241L0.0137079 23.2644Z" />
      </svg>
    </div>
    <div class="card-body">
      <h6>${name}</h6>
      <p>${description}</p>
    </div>


  </div>
</div>
  `;
  output += content
 container.innerHTML += output;
});

}


    xmlhttp.open("GET", "data.json", true);
    xmlhttp.send();
 
   






document.getElementById("delete").addEventListener("click",function name(params) {
  document.getElementById("ShowImage").removeAttribute('src');
})
