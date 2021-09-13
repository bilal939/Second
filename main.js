/*Declaring Animation*/

 AOS.init();

 /*Declaring Animation*/


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
/*Js Swapper*/

var editimage=document.getElementById('ShowImage');
var editname=document.getElementById("Editname");
var editdescription=document.getElementById("Editdescription");
var editposition=document.getElementById("Editposition");
var style=document.getElementById("style");
var imageprev=document.getElementById("imagePreview")


/*Edit Buttoon */
$('#EditButton').click(function name(params) {
    $("#Add-Button,#EditButton").hide();
    $(".button3, .check").css("display","inline-block");
    $("#Delete-Card").css("display","flex");
});
/*Edit Buttoon */


/*Cancel-Button */
$("#CancelButton").click(function name(params) {
  $("#Add-Button,#EditButton").css("display","block");
  $("#Delete-Card,#CancelButton,.check").hide();
  $(".form-check-input").prop("checked",false)
})
/*Cancel-Button */

// document.getElementById("EditButton").addEventListener('click',function (params) {
//   document.getElementById('Add-Button').style.display="none";
//   document.getElementById('EditButton').style.display="none";
//   document.getElementById('Delete-Card').style.display="flex";
//   document.getElementById('CancelButton').style.display="inline-block";
//   document.getElementById('defaultCheck1').style.display="inline-block";
//   const container = document.querySelectorAll(".check");
//   console.log(container);
//   for (let i = 0; i < container.length; i++) {
//     container[i].style.display="inline-block"
//   }
// });




// document.getElementById("CancelButton").addEventListener('click',function (params) {
//   document.getElementById('Add-Button').style.display="block";
//   document.getElementById('EditButton').style.display="block";
//   document.getElementById('Delete-Card').style.display="none";
//   document.getElementById('CancelButton').style.display="none";
//   const container = document.querySelectorAll(".check");
//   const container2 = document.querySelectorAll(".form-check-input");
 
//   for (let i = 0; i < container.length; i++) {
//     container2[i].checked = false;
//     container[i].style.display="none";
//   }
// });




/*Uploading Add Image */
function preview(value) {
  
  imageprev.src = window.URL.createObjectURL(value.files[0]);
  imageprev.style.width="100%";
  imageprev.style.height="100%";
  document.getElementById("img").style.padding="0px";
  document.getElementById("hi").style.display="none"
}
/*Uploading Add Image */


/*Editing Image*/
function preview2(value) {
  
 editimage.src = window.URL.createObjectURL(value.files[0]);
 editimage.style.width="100px";
 editimage.style.height="100px";
 style.style.padding="0px";
 
}
/*Editing Image*/

document.getElementById("delete").addEventListener("click",function name(params) {
  editimage.removeAttribute('src');
});

    

var myArr;
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function () {
 myArr = JSON.parse(this.responseText);
for (let i = 0; i < myArr.length; i++) {
    var container = document.getElementById('Jasondata');
    
    var content = `
    <div class="col-xl-2  col-lg-3 col-md-4 col-sm-6 col-xs-12 col-xl-" data-aos="flip-left" data-aos-duration="1000">
    <div class="card">
      <div class="check">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
        </div>
      </div>
      <img class="card-img-top"  data-toggle="modal" data-target="#exampleModalCenter3" onclick='showfulldata(${JSON.stringify(myArr[i])})' src="${myArr[i].image}" alt="top-image">
      <div class="icon-img" data-toggle="modal"  onclick='hoverclick(${JSON.stringify(myArr[i])})' data-target="#exampleModalCenter2"  >
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
   
   container.innerHTML += content;
   
 
}


// var formadd=document.querySelector(".form-add").addEventListener('submit' , (e) => {
//      e.preventDefault();
//       var name = document.getElementById('name').value;
//       var postion = document.getElementById('position').value;
//       var description = document.getElementById('description').value;
//       var pic=document.getElementById("imagePreview").src;
//       var sendData={
//         "id":8,
//         "image":pic,
//         "name":name,
//         "position":postion,
//         "description":description
//       }
     
//     myArr.push(sendData);

//     var container = document.getElementById('Jasondata');
//     var output="";
//     var content = `
//     <div class="col-xl-2  col-lg-3 col-md-4 col-sm-6 col-xs-12 col-xl-" data-aos="flip-left" data-aos-duration="1000">
//     <div class="card" >
//       <div class="check">
//         <div class="form-check">
//           <input class="form-check-input" type="checkbox"  id="defaultCheck1">
//         </div>
//       </div>
//       <img class="card-img-top" id="checkimage" data-toggle="modal" data-target="#exampleModalCenter3" onclick='showfulldata(${JSON.stringify(sendData)})'  src="${pic}" alt="top-image">
//       <div class="icon-img" data-toggle="modal" onclick='hoverclick(${JSON.stringify(sendData)})' data-target="#exampleModalCenter2">
//         <svg width="14" height="14" viewBox="0 0 24 24" fill="#2b61b4" xmlns="http:www.w3.org/2000/svg">
//           <path
//             d="M14.9239 4.04412L19.8061 8.92622L7.44801 21.2843L2.56863 16.4022L14.9239 4.04412ZM23.5107 2.86667L21.3334 0.689423C20.492 -0.152008 19.1257 -0.152008 18.2814 0.689423L16.1958 2.77501L21.0779 7.65715L23.5107 5.22443C24.1633 4.57177 24.1633 3.51929 23.5107 2.86667ZM0.0137079 23.2644C-0.0751408 23.6642 0.285881 24.0225 0.685791 23.9253L6.12612 22.6062L1.24674 17.7241L0.0137079 23.2644Z" />
//         </svg>
//       </div>
//       <div class="card-body">
//         <h6>${name}</h6>
       
//         <p>${description}</p>
//       </div>
  
  
//     </div>
//   </div>
//     `;
    
 
//     output += content
//     container.innerHTML += output;
//     document.getElementById("res").reset();
//     document.getElementById("imagePreview").removeAttribute('src');
//     document.getElementById("img").style.padding="50px";
    
// });



}
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();
 

var dataID;


function hoverclick(data) {
    editname.value=data.name;
    editimage.src=data.image;
    editdescription.value=data.description;
    editposition.value=data.position;
    editimage.style.height="100px";
    style.style.padding="0px";
    dataID=document.getElementById("dataid").value=data.id;
    console.log(dataID);
}
function showfulldata(params) {
document.getElementById("ShowdataImage").src=params.image;
document.getElementById("Showname").textContent=params.name;
document.getElementById("ShowPosition").textContent=params.position;
document.getElementById("ShowDescription").textContent=params.description;

}



    //updating cards//
function savedata(data2) {
 data2.value=dataID;
 console.log(data2.value)

 myArr.map(function(myArr,i){
  if (i == dataID) {
    myArr.name=editname.value;
    console.log(myArr.name)
  } else {
   console.log("j")
  }
   
 });;
}

  