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

/*Declaring varibles globally*/

var editimage=document.getElementById('ShowImage');
var editname=document.getElementById("Editname");
var editdescription=document.getElementById("Editdescription");
var editposition=document.getElementById("Editposition");
var editDataID=document.getElementById("dataid");
var style=document.getElementById("style");
var imageprev=document.getElementById("imagePreview");
var dataimage=document.getElementById("ShowdataImage");
var dataname=document.getElementById("Showname");
var dataposition=document.getElementById("ShowPosition");
var datadescription=document.getElementById("ShowDescription");
let myNewHTML = "";
var container = document.getElementById('Jasondata');
let output="";

/*Edit Buttoon */


$("#EditButton").on('click', () => {      
    $("#Add-Button,#EditButton").hide();
    $(".button3, .check").css("display","inline-block");
    $("#Delete-Card").css("display","flex");
});
/*Edit Buttoon */


/*Cancel-Button */
$("#CancelButton").on('click', () => {
  $("#Add-Button,#EditButton").css("display","block");
  $("#Delete-Card,#CancelButton,.check").hide();
  $(".form-check-input").prop("checked",false)
  mylist.splice(0,mylist.length);
})
/*Cancel-Button */


























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
$("#delete").onclick = () =>  editimage.removeAttribute('src');



var myArr;
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function () {
myArr = JSON.parse(this.responseText);
for (let i = 0; i < myArr.length; i++) {
    
    var content = `
    <div  class="col-xl-2  col-lg-3 col-md-4 col-sm-6 col-xs-12 col-xl-" data-aos="flip-left" data-aos-duration="1000">
    <div class="card">
      <div class="check">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="cardcheck" value="${JSON.stringify(myArr[i].id)}"  >
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
   
  output += content;
   
 
}
container.innerHTML =output



}
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();
 

var formadd=document.querySelector(".form-add").addEventListener('submit' , (e) => {
  e.preventDefault();
   var name = document.getElementById('name').value;
   var postion = document.getElementById('position').value;
   var description = document.getElementById('description').value;
   var pic=document.getElementById("imagePreview").src;
   var sendData={
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
     <input class="form-check-input" type="checkbox"  id="checkboxes" >
     </div>
   </div>
   <img class="card-img-top" id="checkimage" data-toggle="modal" data-target="#exampleModalCenter3" onclick='showfulldata(${JSON.stringify(sendData)})'  src="${pic}" alt="top-image">
   <div class="icon-img" data-toggle="modal" onclick='hoverclick(${JSON.stringify(sendData)})' data-target="#exampleModalCenter2">
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
 output=""
 document.getElementById("res").reset();
 document.getElementById("imagePreview").removeAttribute('src');
 document.getElementById("img").style.padding="50px";
 
});


function hoverclick(data) {
    editname.value=data.name;
    editimage.src=data.image;
    editdescription.value=data.description;
    editposition.value=data.position;
    editDataID.value = data.id;
    editimage.style.height="100px";
    style.style.padding="0px";
   
    
}
function showfulldata(params) {
dataimage.src=params.image;
dataname.textContent=params.name;
dataposition.textContent=params.position;
datadescription.textContent=params.description;
}



//updating cards//
var savedata;
savedata = paramsid => {
paramsid = editDataID.value;
myArr.map(function(data,i){
if (data.id == paramsid) {

    data.name = editname.value;
    data.position=editposition.value;
    data.description=editdescription.value;
    data.image=editimage.src;
    return true;
  } 
   
 });

 

 for (let i = 0; i < myArr.length; i++) {
  
  
  var content = `
  <div class="col-xl-2  col-lg-3 col-md-4 col-sm-6 col-xs-12 col-xl-" data-aos="flip-left" data-aos-duration="1000">
  <div class="card" id="forsake">
    <div class="check">
      <div class="form-check">
      <input class="form-check-input" type="checkbox"  id="checkboxes" value="${JSON.stringify(myArr[i].id)}">
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
 
 myNewHTML += content;
 

}
container.innerHTML = myNewHTML

}



var mylist=[];
var checkbox=document.getElementById("cardcheck");

$(document).on("change", "#cardcheck", (e) => {
  
  if (e.target.checked) {
    mylist.push(e.target.value);
  } else {
    mylist=mylist.filter((data,i) => data !== e.target.value )
  }
  console.log(mylist)
})


var myNewHTML2="";

var  deletecard = () => {

mylist.map((item,i) => { myArr=myArr.filter((data,i) => data.id !== parseInt(item)) })


console.log(myArr)

 for (let i = 0; i < myArr.length; i++) {
  
  
  var content = `
  <div class="col-xl-2  col-lg-3 col-md-4 col-sm-6 col-xs-12 col-xl-" data-aos="flip-left" data-aos-duration="1000">
  <div class="card" id="forsake">
    <div class="check">
      <div class="form-check">
      <input class="form-check-input" type="checkbox"  id="cardcheck" value="${JSON.stringify(myArr[i].id)}" >
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
 
 myNewHTML2 += content;
 

}
container.innerHTML = myNewHTML2

myNewHTML2 = "";

$("#Add-Button,#EditButton").css("display","block");
$("#Delete-Card,#CancelButton,.check").hide();
}


 
  
 
  
  


// class person{
// constructor(name){
//  console.log(this.name)
// }

// normal(params) {
//   console.log("normail function",this.name)
// }


// arrow = () => {
// console.log("arrow" ,this.name)
// }

// }


// let p1 =new person("Bob");
// p1.normal();
// p1.arrow();


const items = [
  {  name:"bike", price:100},
  {  name:"tv", price:200},
  {  name:"computer", price:300},
  {  name:"book", price:400},
  {  name:"table", price:500},


]

const newitems= items.filter((item) => { return item.price > 200 } )
console.log(items)
console.log(newitems);



const itemsnames= items.map((item) => { return item.price} )
console.log(itemsnames);



items.forEach((items)=>{
  console.log(items.name)
})


const  currenttotal=items.reduce((totalvalue,item) =>{
  return item.price + totalvalue;
} ,0)

console.log(currenttotal);




let compaines = [
  {name:"Companyone", category:"Finance", start:1992, end:2000},
  {name:"Companytwo", category:"Management", start:1875, end:2001},
  {name:"CompanyThree", category:"Auto", start:2000, end:2021},
  {name:"Companyfour", category:"Retail", start:2002, end:2022},
  {name:"Companyfive", category:"Auto", start:1990, end:2002},
  {name:"Companysix", category:"Management", start:1888, end:2001},
  {name:"Companyseven", category:"Trial", start:1992, end:2021},
  {name:"Companyeight", category:"Camp", start:1998, end:2020},
  {name:"Companynine", category:"Office", start:1999, end:2021},
]

const cat =compaines.filter(cate => cate.category=="Auto" );
console.log(cat)


const mapf=compaines.map(item => {
  return item.name;
})
console.log(mapf)

const ages = [20,30,12,09,88,12,88,99];
console.log(ages.sort())
const age= ages.filter(compage => compage < 50);
console.log(age)


const detail = compaines.filter(item  => {
  return item.start<1990;
});
console.log(detail)




compaines.forEach(company => {
console.log(company)
});
