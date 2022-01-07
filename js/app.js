console.log("started")
const image1 = document.querySelector(".image1")
const image2 = document.querySelector(".image2")
const image3 = document.querySelector(".image3")
const image4 = document.querySelector(".image4")
const image5 = document.querySelector(".image5")
image2.addEventListener("click", () => {
    image1.innerHTML = `<img class="img-size" src="./images/image-product-1.jpg" alt="" srcset="">`
})
image3.addEventListener("click", () => {
    image1.innerHTML = `<img class="img-size" src="./images/image-product-2.jpg" alt="" srcset="">`
})
image4.addEventListener("click", () => {
    image1.innerHTML = `<img class="img-size" src="./images/image-product-3.jpg" alt="" srcset="">`
})
image5.addEventListener("click", () => {
    image1.innerHTML = `<img class="img-size" src="./images/image-product-4.jpg" alt="" srcset="">`
})

// Creating Modal
const modal=document.querySelector(".modal")
const itemgallerydesc=document.querySelector('.item-gallery-description')


image1.addEventListener("click",()=>{
  modal.classList.remove('hide-modal')
  itemgallerydesc.classList.add('blur')
})
const cancel=document.querySelector(".fa-times-circle")
cancel.addEventListener("click",()=>{
  itemgallerydesc.classList.remove('blur')
  modal.classList.add("hide-modal")
})
const imgArray = [
  '<img class="img-size" src="./images/image-product-1.jpg" alt="" srcset=""></img>',
  '<img class="img-size" src="./images/image-product-2.jpg" alt="" srcset=""></img>',
  '<img class="img-size" src="./images/image-product-3.jpg" alt="" srcset=""></img>',
  '<img class="img-size" src="./images/image-product-4.jpg" alt="" srcset=""></img>'
]
const leftArrow = document.querySelector(".fa-arrow-circle-left")
const rightArrow = document.querySelector(".fa-arrow-circle-right")
const modalImg=document.querySelector('.modal-img')
let i=0
leftArrow.addEventListener("click", () => {
  if(i>0){
    --i
  }
  modalImg.innerHTML=imgArray[i]
})
rightArrow.addEventListener("click", () => {
  if(i<3){
    ++i
  }
  modalImg.innerHTML=imgArray[i]
})

// Cart functionality
const shoppingCart = document.querySelector(".fa-shopping-cart")
const cartBody = document.querySelector(".cart-body")
const emptyli=document.querySelector(".empty-li")
shoppingCart.addEventListener("click", () => {
    cartBody.classList.toggle('cart-body-hide')

    // TODO ERROR

    // if(totalItems=[]){
    //   emptyli.classList.remove('empty')
    // }
    // else{
    //   emptyli.classList.add('empty')
    // }
})


// adding item to cart
const add = document.querySelector('.add')
const remove = document.querySelector('.remove')
const noofitem = document.querySelector('.noofitem')
const addtocart = document.querySelector('.add-to-cart')
const cartitems = document.querySelector('.cart-items1')
let count = 0

add.addEventListener("click", () => {
    ++count
    noofitem.textContent = count
    console.log(count)
})
remove.addEventListener("click", () => {
    if(count>0){
      --count
      noofitem.textContent = count
    }
})
let totalItems=[]
addtocart.addEventListener("click", () => {
  if(count>0){
    totalItems.push(`<li class="item-li"><div class="cart-items">
    <div class="top">
      <img src="./images/image-product-1-thumbnail.jpg" alt="" srcset="" width="40rem">
      <div class="item">
        <div class="cart-item-title">Fall Limited Edition Sneakers</div>
        <div class="amount">$125.00 * ${count} = $${125*count}</div>
      </div>
    </div>
    <div class="bottom">
      <button class="checkout-btn btn">Checkout</button>
    </div>
  </div></li>`) 
  cartitems.innerHTML=totalItems
  count=0
  noofitem.textContent=count
  cartBody.classList.remove('cart-body-hide')
  }
})




