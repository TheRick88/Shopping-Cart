// export let generateShop = () => {
//     return (shop.innerHTML = shopItemsData.map((x)=>{
//         let {id, name, price, imgSrc} = x
//         return `
//         <div id="product-id-${id}" class=" col-2 col-md-6 col-lg-2 mb-5">		
//                             <div class="card text-center">
//                                 <img src="${imgSrc}" alt="Belgium flowers" class="card-img-top">
//                                 <div class="card-body">
//                                     <h5 class="card-title text-center">${name}</h5>
//                                     <h3  class="h3 text-center">€${price}</h3>
//                                     <div class="buttons">
//                                     <i onclick="decrement(${id})" class="bi bi-dash text-warning me-2 fs-2"></i>
//                                     <div id=${id} class="quantity fw-bold fs-2">0</div>
//                                     <i onclick="increment(${id})" class="bi bi-plus text-success ms-2 fs-2"></i>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>	
//         `;
//     })
//     .join(""));
// };

