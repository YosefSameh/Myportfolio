
// let minuProduct = document.querySelector(".minu-product")
// let productdiv = document.getElementById("products")
// let productdiv2 = document.querySelector(".products2")

// let products2 = [
//     {Titel:"موبيل انفنيكس هوت 20", Price:8500, Url:"img/infinix-20.jpg"},
//     {Titel:"نوكيا سي 10", Price:4500, Url:"img/noxia-10.jpg"},
//     {Titel:"ريلمي سي 53", Price:6500, Url:"img/relme-c53.jpg"},
//     {Titel:"ريدمي نوت 12", Price:8000, Url:"img/redme-12.jpg"},
//     {Titel:"سامسونج ام 43", Price:10000, Url:"img/samsung-m43.jpg"},
//     {Titel:"سامسونج 54", Price:12000, Url:"img/samsung-a54.jpg"},
// ]
// console.log(productdiv);
// console.log(productdiv2);
// console.log(minuProduct);
// let listCart = []


// let Show = ()=>{
//     products2.forEach((pro,key)=>{
//         if (key !=4 && key !=5 )  {
//             productdiv.innerHTML +=`
//             <div class="d-flex justify-content-between  ">
//             <div class="bg-white p-4 product text-center ">
//             <img src=${pro.Url} alt="" class="img-product">
//             <p class="fw-bold fs-5">${pro.Titel}</p>
//             <p class="fw-bold text-secondary ">${pro.Price}EGP</p>
//             <button onclick="AddToCart(${key})" class="btn-add fw-bold">AddToCart</button>
//             </div>
//             </div>
//             `
//         }else{
//             productdiv2.innerHTML +=`
//             <div class="d-flex justify-content-between  ">
//             <div class="bg-white p-4 product text-center ">
//             <img src=${pro.Url} alt="" class="img-product">
//             <p class="fw-bold fs-5">${pro.Titel}</p>
//             <p class="fw-bold text-secondary ">${pro.Price}EGP</p>
//             <button onclick="AddToCart(${key})" class="btn-add fw-bold">AddToCart</button>
//             </div>
//             </div>
//             `
//         }
//     })
// }
// let AddToCart = (key)=>{
//     if (listCart[key] == null) {
//         listCart[key] = JSON.parse(JSON.stringify(products2[key])) 
//         listCart[key].quantity = 1
//     }else{
//         console.log("error");
//     }
    

// }
// Show()




// let Soppingcart = document.getElementById("Sopping-cart")
// console.log(listCart);
// let RelodeCart = ()=>{
    
//     listCart.forEach((pro,key)=>{
//         if (pro != null) {
//             let newdiv = document.createElement("div")
//             newdiv.innerHTML += `
//         <div class="d-flex justify-content-between align-items-center bg-white mb-4 ">
//             <div class="img-div col-4 d-flex justify-content-center p-3">
//                 <img src="${pro.Url}" alt="" style="width: 50%; height: 50%;  object-fit: contain;">
//             </div>
//             <div class="col-4 ">
//                 <p class="fw-bold fs-5">${pro.Titel}</p>
//                 <p class="fw-bold fs-5">${pro.Price}</p>
//             </div>
//             <div class="col-4 d-flex justify-content-end btn-div">
//                 <button class="Minus">-</button>
//                 <p>5</p>
//                 <button class="Plus">+</button>
//             </div>
//         </div>
//         ` 
//         Soppingcart.appendChild(newdiv)
//         }
        
//     })

// }

// ==============================


// index.js


// let  arabic = document.getElementById("arabic")
// const englsh = document.querySelector(".englsh")
// const prevNext = document.querySelector(".prev-next")
// const prev =document.querySelectorAll(".next")
// const item =document.querySelector(".item")








// step 1 
    // arabic.onclick = ()=>{
    //     englsh.classList.toggle("toggle-en")
    // }

    // step 2 
    // import { cartShopping } from "./openCart.js";
    // cartShopping
    // step 3
//     let Slider  =()=>{
//         prev.forEach((btn)=>{
//             let direction = 0
//             btn.onclick = ()=>{
//             if (btn.id === "prev") {
//                 direction = -1
//             }else{
//                 direction = 1
//             }
//             let scrollAmount = item.clientWidth * direction
//             console.log(item.clientWidth);
//             item.scrollBy({left:scrollAmount, behavior:"smooth"})
//             }
//         })
//     }
// window.addEventListener("load",Slider)


// step 4 



// step 5 
// let products1 = [
//     {titel:"موبيل انفنيكس هوت 20", Price:8500, Url:"img/infinix-20.jpg"},
//     {titel:"نوكيا سي 10", Price:4500, Url:"img/noxia-10.jpg"},
//     {titel:"ريلمي سي 53", Price:6500, Url:"img/relme-c53.jpg"},
//     {titel:"ريدمي نوت 12", Price:8000, Url:"img/redme-12.jpg"},
//     {titel:"سامسونج ام 43", Price:10000, Url:"img/samsung-m43.jpg"},
//     {titel:"سامسونج 54", Price:12000, Url:"img/samsung-a54.jpg"},
    
//     {titel:"شاشة سامسونج 40 بوصة", Price:25000, Url:"img/screen-40.jpg"},
//     {titel:"شاشة سامسونج 43 بوصة", Price:30000, Url:"img/screen-43.jpg"},
//     {titel:"شاشة سامسونج 50 بوصة", Price:45000, Url:"img/screen-50.jpg"},
//     {titel:"شاشة سامسونج 55 بوصة", Price:60000, Url:"img/screen-55.jpg"},
//     {titel:"شاشة سامسونج 60 بوصة", Price:80000, Url:"img/screen-60.jpg"},
//     {titel:"شاشة سامسونج 70 بوصة", Price:120000, Url:"img/screen-70.jpg"},
    
//     {titel:"اطفال", Price:250, Url:"img/kids-1.jpg"},
//     {titel:"اطفال", Price:150, Url:"img/kids-2.jpg"},
//     {titel:"اطفال", Price:500, Url:"img/kids-3.jpg"},
//     {titel:"اطفال", Price:450, Url:"img/kids-4.jpg"},
//     {titel:"اطفال", Price:150, Url:"img/kids-5.jpg"},
//     {titel:"اطفال", Price:700, Url:"img/kids-6.jpg"},
    
//     {titel:"دفاية 4 شعلة", Price:700, Url:"img/home-1.jpg"},
//     {titel:"غلايه 25 لتر", Price:700, Url:"img/home-2.jpg"},
//     {titel:"اير فرير 45 لتر", Price:700, Url:"img/home-3.jpg"},
//     {titel:"غسالة 8 كيلو", Price:700, Url:"img/home-4.jpg"},
//     {titel:"ثلاجة سامسونج ", Price:700, Url:"img/home-5.jpg"},
//     {titel:"اير فرير ديجتيل", Price:700, Url:"img/home-6.jpg"},
    
// ]

// ==========================================

// let requset = new XMLHttpRequest()
// requset.open("GET","https://jsonplaceholder.typicode.com/posts")
// requset.send()
// requset.onload = ()=>{
//     let postsString =requset.responseText
//     let postsObj = JSON.parse(postsString)
//     postsObj.forEach(post => {
//         console.log(post.title);
//     });
// }




// ------------------------------------------
// index.html


    // <div class="nav bg-black text-white ">
    //     <button class="up" id="up">Up</button>
    //     <div class="d-flex justify-content-between  w-100 m-2" >
    //         <div class="d-flex justify-content-between align-items-center ms-4 " style="width: 18%;" >
    //             <a href="index.html"><p class="fs-4 fw-bold text-white">LOGO</p></a>
    //             <p class="fs-5 fw-bold"><i class="fa-solid fa-location-dot"></i>Your location</p>
    //         </div>
    //         <div class="d-flex col-4 search">
    //             <div class="p-2  all bg-secondary ">
    //                 <p class="">All</p>
    //                 <i class="fa-solid fa-caret-down  ms-1"></i>
    
    //             </div>
    //             <input type="text" class="w-100 inp-search" placeholder="search">
    //             <div class="p-2  icon-search">
    //                 <i class="fa-solid fa-magnifying-glass"></i>
    //             </div>
    //         </div>    
    //         <div class="d-flex justify-content-between align-items-center  me-4" style="width: 12%; position: relative;">
    //             <div class="d-flex flex-column">
    //                 <div class="d-flex justify-content-center arabic" id="arabic">
    //                     <p class="fw-bold">AR</p>
    //                     <i class="fa-solid fa-caret-down text-white-50 ms-1"></i>
    //                 </div>
    //                 <div class="englsh">
    //                     <p>EN</p>
    //                 </div>
    //             </div>
    //             <p id="cart-shopping">عربة التسوق<i class="fa-solid fa-cart-shopping"></i></p>
    //             <div class="NumberOfCart">
    //                 <span>0</span>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // step2
    //     <div class="nav-main">
    //         <div class="d-flex justify-content-between flex-row-revers mx-5 py-1">
    //             <a href=""><i class="fa-solid fa-bars me-2"></i>الكل </a>
    //             <a href="mopile.html">موبيلات</a>
    //             <a href="elctronces.html">الاكترونيات</a>
    //             <a href="Home appliances.html">الاجهزه المنزلية</a>
    //             <a href="playKids.html">العاب الاطفال</a>
    //         </div>
    //     </div>
    //     <!-- step 3  -->
    //     <!-- <div class="w-100">
    //         <div class="w-100 img-sale">
    //             <img class="w-100" src="img/Sale.jpg" alt="">
    //         </div>
    //         <div class="">
    //             <a href="mopile.html">
    //                 <div class="card-phone">
    //                     <p class="fs-4 fw-bold">اكسسوارات الموبيلات | اقل من 49جنيه</p>
    //                     <img src="img/phone.jpg" alt="">
    //                 </div>
    //             </a>
    //             <a href="elctronces.html">
    //                 <div class="card-elcterch">
    //                     <p class="fs-4 fw-bold">الاكترونيات | اقل من 150جنيه</p>
    //                     <img src="img/hedphone.jpg" alt="">
    //                 </div>
    //             </a>
    //             <a href="playKids.html">
    //                 <div class="card-playkids">
    //                     <p class="fs-4 fw-bold">العاب الاطفال بي خصومات تصل الي %69</p>
    //                     <img src="img/homeKids.jpg" alt="">
    //                 </div>
    //             </a>
    //         </div>
    //     </div>
    //     step 4 
    //         <div class="slide mx-5">
    //             <div class="d-flex justify-content-between  item">
    //                 <img src="img/phone.jpg" alt="">
    //                 <img src="img/hedphone.jpg" alt="">
    //                 <img src="img/homeKids.jpg" alt="">
    //                 <img src="img/bike.jpg" alt="">
    //             </div>
    //             <div class="prev-next">
    //                 <button id="prev" class="next"><</button>
    //                 <button  id="next" class="next">></button>
    //             </div>
    //         </div>
    //             step 5 
    //             <div class="fotter mt-5">
    //                     <div class="d-flex justify-content-between mx-5  py-5">
                        
    //                         <div class="d-flex flex-column ">
    //                             <p class="fw-bold">اعرف المزيد عنا</p>
    //                             <a href="" class="mb-1"><p class="informesh">معلومات عنا</p></a>
    //                             <a href=""><p class="jops">وظائف</p></a>
    //                         </div>
    //                         <div class="">
    //                             <p class="fw-bold">	تسوق معنا</p>
    //                             <a href=""class="mb-1"><p class="informesh">حسابك</p></a>
    //                             <a href=""><p class="informesh">مشترياتك</p></a>
    //                             <a href=""><p class="informesh">عناوينك</p></a>
    //                             <a href=""><p class="informesh">قوائمك</p></a>
    //                         </div>
    //                         <div class="">
    //                             <p class="fw-bold">	كن شريكاً معنا</p>
    //                             <a href=""class="mb-1"><p class="informesh">حماية وبناء علامتك التجارية</p></a>
    //                             <a href=""><p class="informesh">أعلن عن منتجاتك</p></a>
    //                             <a href=""><p class="informesh">البيع على أمازون</p></a>
    //                             <a href=""><p class="informesh">الشحن مع أمازون</p></a>
    //                         </div>
    //                         <div class="">
    //                             <p class="fw-bold">	دعنا نساعدك</p>
    //                             <a href=""class="mb-1"><p class="informesh">المساعدة</p></a>
    //                             <a href=""><p class="informesh">سياسات وأسعار الشحن</p></a>
    //                             <a href=""><p class="informesh">طلبات الإرجاع والاستبدال</p></a>
    //                             <a href=""><p class="informesh">تحميل تطبيق أمازون</p></a>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 step 6
    //                 <div class="end">
    //                     <div class="d-flex justify-content-center align-items-center text-center">
    //                         <p>  2024حقوق الطبع والنشر محفوظة لي هذا المتجر </p>
    //                     </div>
    //                 </div>  --></img>


