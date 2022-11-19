var  EARRINGS  = [
    {
        oldprice : 19.99,
        newprice : 79,
        img : 'necklace.png',
        quantity : 5,
        description : '22Kt Gold Necklace For  22Kt Gold Necklace For'
    }
    ,
    {
        oldprice : 19.99,
        newprice : 79,
        img : 'necklace.png',
        quantity : 5,
        description : '22Kt Gold Necklace For  22Kt Gold Necklace For'
    },
    {
        oldprice : 19.99,
        newprice : 79,
        img : 'necklace.png',
        quantity : 5,
        description : '22Kt Gold Necklace For  22Kt Gold Necklace For'
    },
    {
        oldprice : 19.99,
        newprice : 79,
        img : 'necklace.png',
        quantity : 5,
        description : '22KtFor'
    },
    {
        oldprice : 178.3,
        newprice : 66,
        img : 'necklace2.png',
        quantity : 5,
        description : 'its a  very nic3cklace'
    },
    {
        oldprice : 1000.99,
        newprice : 79,
        img : 'necklace.png',
        quantity : 5,
        description : '22Kt Gold Nece For  22Kt Gold Necklace For'
    }
]
var NECKLACES = [
    {
        oldprice : 120.99,
        newprice : 99.99,
        img : 'E/E1.jpg',
        quantity : 5,
        description : 'mix of silver and gold and diamond '
    }
    ,
    {
        oldprice : 75,
        newprice : 69.99,
        img : 'E/E2.jpg',
        quantity : 5,
        description : 'what about a splash of gold and an amazing pearls'
    }
    ,   
    {
        oldprice : 199,
        newprice : 179.99,
        img : 'E/E3.jpg',
        quantity : 5,
        description : 'a little bit of diamond followed by gold pearls'
    },
    {
        oldprice : 200,
        newprice : 189.99,
        img : 'E/E4.jpg',
        quantity : 5,
        description : 'a heart of diamond surrounded by gold'
    },
    {
        oldprice : 100,
        newprice : 79.99,
        img : 'E/E5.jpg',
        quantity : 5,
        description : 'a pure set of diamond '
    },
    {
        oldprice : 19.99,
        newprice : 79,
        img : 'E/E6.jpg',
        quantity : 5,
        description : 'art made with full love of diamond'
    },
    {
        oldprice : 178.3,
        newprice : 66,
        img : 'E/E7.jpg',
        quantity : 5,
        description : 'unique gold shape '
    }
]
var  RINGS = [
    {
        oldprice : 19.99,
        newprice : 42,
        img : 'necklaces/N1.jpg',
        quantity : 5,
        description : '22Kt Gold Nee F22Kt Gold Necklace For'
    }
    ,
    {
        oldprice : 19.99,
        newprice : 79,
        img : 'necklaces/N2.jpg',
        quantity : 5,
        description : '22Kt Gold Necklace For  22Kt Gold Necklace For'
    },
    {
        oldprice : 19.99,
        newprice : 4,
        img : 'necklaces/N3.jpg',
        quantity : 5,
        description : '22Kt Gold Neckor  22Kt Golace For'
    },
    {
        oldprice : 19.99,
        newprice : 74,
        img : 'necklaces/N4.jpg',
        quantity : 5,
        description : '22Kt Gold Ne r  22Kt Gold Necklace For'
    },
    {
        oldprice : 19.99,
        newprice : 449,
        img : 'necklaces/N5.jpg',
        quantity : 5,
        description : '22KtFor'
    },
    {
        oldprice : 178.3,
        newprice : 44,
        img : 'necklaces/N6.jpg',
        quantity : 5,
        description : 'its a  very nic3cklace'
    },
    {
        oldprice : 1000.99,
        newprice : 79,
        img : 'necklace.png',
        quantity : 5,
        description : '22Kt Gold Nle For  Kt Gold Necklace For'
    }
    ,
    {
        oldprice : 1000.99,
        newprice : 79,
        img : 'necklaces/N7.jpg',
        quantity : 5,
        description : '22Kt Gold Nle For  Kt Gold Necklace For'
    }
]
if  (document.readyState === 'loading' ){
    document.addEventListener('DOMContentLoaded' , ready)
}
else {
    ready()
}
function ready(){
    addproduct()
    
    var cartdeletebutton = document.getElementsByClassName("deleteall")[0]
    cartdeletebutton.addEventListener('click',cartdeletealll)
    var whishdeletebutton = document.getElementsByClassName("button-54")[0]
    whishdeletebutton.addEventListener('click',wishdeleteall)
    var purchase = document.getElementsByClassName("purchase")[0]
    purchase.addEventListener('click',purrchase)
}

function purrchase(){
    alert("thank you for your time")
    apdatetot()
    cartdeletealll()
}

function removeblock(event){
    let removebuttoncliked = event.target;
    removebuttoncliked.parentElement.remove();
    apdatetot()
    



}
// function repeted(){
//     let wishitemss = document.getElementsByClassName('newproducts')
     
// }


function addtocartlog(event){
    let buttonClicked = event.target;
    let blockClicked = buttonClicked.parentElement.parentElement;
    let imgsrc = blockClicked.getElementsByClassName('imgsrcc')[0].src
    let newprice = blockClicked.getElementsByClassName('productnewprice')[0].innerHTML
    let description = blockClicked.getElementsByClassName('productdesc')[0].innerHTML
    
    var wishlist = document.getElementsByClassName('www')[0]
    let block = document.createElement('div');
    block.setAttribute("class","cartitems");
    let wish = `<img class="wishlistimg" src="${imgsrc}" alt="">
    <div class="description">
      <div class="des">${description}</div>
      <div class="price"><p class="priceo">${newprice}$</p></div>
    </div>
    <button class="deletebutton">Remove</button>
    <div class = "cart-quantity"><input class="cart-quantity-input" type="number" value="1"></div>
    `
    block.innerHTML= wish;
    let cartItems = wishlist.getElementsByClassName("cartitems")
    for (let cartItem of cartItems){
        let desc = cartItem.getElementsByClassName("des")[0].innerHTML
        if (desc == description){
            alert ("Item Already in Cart")
            return
        }
} 

        
    wishlist.append(block)
    block.getElementsByClassName("deletebutton")[0].addEventListener('click',removeblock)
    let x = block.getElementsByClassName('cart-quantity-input')
    for (i of x){
        i.addEventListener('change' , quantitychanged)
    }


    apdatetot()

}
function quantitychanged(event){
    let qun = event.target
    
    if (qun.value<=0 || qun.value>50 || isNaN(qun.value)){
        qun.value = 1
    }
    
    apdatetot()
    
}



function apdatetot(){
    
    let cartlist = document.getElementsByClassName("www")[0]
    let total = 0
    let priceplace = cartlist.getElementsByClassName("cartitems")
    for (let i of priceplace){
        let qun = i.getElementsByClassName('cart-quantity-input')[0]
        let qunvalue = qun.value
        let price = parseFloat(i.getElementsByClassName("priceo")[0].innerHTML.replace('$' ,''))
        var eachprice = price*qunvalue
        total += eachprice
        

    }
    total = Math.round(total *100) /100
    console.log(total)
    let winetotel = document.getElementsByClassName("totallog")[0].innerHTML= '$'+total
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

//     
//     
//     



//     let cartItems = wishlist.getElementsByClassName("wishitems")
//     for (let cartItem of cartItems){
//         let desc = cartItem.getElementsByClassName("des")[0].innerHTML
//         if (desc == description){
//             alert ("Item Already in your wish list")
//             return
//         }
// } 

}





function addtowishlog(event){
    let buttonClicked = event.target;
    let blockClicked = buttonClicked.parentElement.parentElement;
    let imgsrc = blockClicked.getElementsByClassName('imgsrcc')[0].src
    let newprice = blockClicked.getElementsByClassName('productnewprice')[0].innerHTML
    let description = blockClicked.getElementsByClassName('productdesc')[0].innerHTML
    var wishlist = document.getElementsByClassName('vvc')[0]
    let block = document.createElement('div');
    block.setAttribute("class","wishitems");
    let wish = `<img class="wishlistimg" src="${imgsrc}" alt="">
    <div class="description">
      <div class="des">${description}</div>
      <div class="price"><p>${newprice}$</p></div>
    </div>
    <button class="deletebutton">Remove</button>
    `
    block.innerHTML= wish;
    let cartItems = wishlist.getElementsByClassName("wishitems")
    for (let cartItem of cartItems){
        let desc = cartItem.getElementsByClassName("des")[0].innerHTML
        if (desc == description){
            alert ("Item Already in your wish list")
            return
        }
} 
    wishlist.append(block)
    block.getElementsByClassName("deletebutton")[0].addEventListener('click',removeblock)
    var itemcliked = block.getElementsByClassName('des')[0].innerHTML
    
    
    let ff = document.getElementsByClassName("vvc")[0]
    // let fff = ff.getElementsByClassName("des")
    console.log(ff)
    
    // x.push(itemcliked)
    // console.log(x)
    console.log(itemcliked)
    // // console.log(blocks)
    
    
    
    
    }
   
    
   

    

    //  var cartitemsname = cartitems.getElementsByClassName('cart-item-title')
    
    // console.log (cartitemsdes)
    // for (var i in wishlist){
    //     console.log(i)
    //     var cartitemsdes = wishlist.getElementsByClassName('wishitems')[i]

    //     let blocks = wishlist.children
    //     // console.log(blocks)

    //     // var descc = blocks.getElementsByClassName('des')
    //     if(itemcliked == descc){
    //         console.log('ilfffffffffffffffffffff')
    //     }
    // }
    // var cartitems = document.getElementsByClassName('cart-items')[0]
    // console.log(cartitemsname)
    // var cartitemsname = cartitems.getElementsByClassName('cart-item-title')
    // for (var i = 0 ; i < cartitemsname.length ; i++){
    //     if (cartitemsname [i].innerText == tlkj){
    //         alert('this item already existed ')
    //         return
    //     }
    // }

    // var cartitems = document.getElementsByClassName('cart-items')[0]
// function signup(){
//     console.log("gg")
//     document.getElementsByClassName("submit")[0].addEventListener("click",alert)
    
// }
// function alert(){
//     alert('zzz')
// }


function addproduct(){
    var productscontainer=document.getElementsByClassName('productscontainer')[0]
    for (let i in NECKLACES){
        var productpp = NECKLACES[i]
        var oldprice = productpp.oldprice
        var newprice = productpp.newprice
        var imgsrc = productpp.img
        var description = productpp.description
        
        let productNode = document.createElement('div');
        productNode.setAttribute("class","newproducts");
        var product = `
        <img class="imgsrcc" src="${imgsrc}" alt="sorry there was a mistake ">
        <p class="productdesc">${description} </p>
        <div class="pricenewold">
            <p class="productoldprice">${oldprice}</p>
            <p class="productnewprice">${newprice}</p>
        </div>  
        <button class="addtocart"><img class="addtocart_logo" src="addtocart_logo.png" alt=""></button>
        <button class="addtowishlist"><img class="addtowishlist_logo" src="addtowishlist_logo.png" alt=""></button>
        `
        var addtocartbutton = document.getElementsByClassName('addtocart')
        
        // for (var s = 0 ; s < addtocartbutton.length ; s++){
        //     var btnclick = addtocartbutton[s]
        //     btnclick.addEventListener('click' , addtocartlog )
        // }
        
        
        productNode.innerHTML = product;
        productscontainer.append(productNode);
        
        productNode.getElementsByClassName("addtocart")[0].addEventListener('click',addtocartlog);
        productNode.getElementsByClassName("addtowishlist")[0].addEventListener('click',addtowishlog)
        

    }
    var productscontainer=document.getElementsByClassName('productscontainer2')[0]
    for (let i in EARRINGS){
        var productpp = EARRINGS[i]
        var oldprice = productpp.oldprice
        var newprice = productpp.newprice
        var imgsrc = productpp.img
        var description = productpp.description
        
        let productNode = document.createElement('div');
        productNode.setAttribute("class","newproducts");
        var product = `
        <img class="imgsrcc" src="${imgsrc}" alt="sorry there was a mistake ">
        <p class="productdesc">${description} </p>
        <div class="pricenewold">
            <p class="productoldprice">${oldprice}</p>
            <p class="productnewprice">${newprice}</p>
        </div>  
        <button class="addtocart"><img class="addtocart_logo" src="addtocart_logo.png" alt=""></button>
        <button class="addtowishlist"><img class="addtowishlist_logo" src="addtowishlist_logo.png" alt=""></button>
        `
        var addtocartbutton = document.getElementsByClassName('addtocart')
        
        // for (var s = 0 ; s < addtocartbutton.length ; s++){
        //     var btnclick = addtocartbutton[s]
        //     btnclick.addEventListener('click' , addtocartlog )
        // }
        
        
        productNode.innerHTML = product;
        productscontainer.append(productNode);

        productNode.getElementsByClassName("addtocart")[0].addEventListener('click',addtocartlog);
        productNode.getElementsByClassName("addtowishlist")[0].addEventListener('click',addtowishlog)
        

    }
    var productscontainer=document.getElementsByClassName('productscontainer3')[0]
    for (let i in RINGS){
        var productpp = RINGS[i]
        var oldprice = productpp.oldprice
        var newprice = productpp.newprice
        var imgsrc = productpp.img
        var description = productpp.description
        let productNode = document.createElement('div');
        productNode.setAttribute("class","newproducts");
        var product = `
        <img class="imgsrcc" src="${imgsrc}" alt="sorry there was a mistake ">
        <p class="productdesc">${description} </p>
        <div class="pricenewold">
            <p class="productoldprice">${oldprice}</p>
            <p class="productnewprice">${newprice}</p>
        </div>  
        <button class="addtocart"><img class="addtocart_logo" src="addtocart_logo.png" alt=""></button>
        <button class="addtowishlist"><img class="addtowishlist_logo" src="addtowishlist_logo.png" alt=""></button>
        `
        var addtocartbutton = document.getElementsByClassName('addtocart')
        
        // for (var s = 0 ; s < addtocartbutton.length ; s++){
        //     var btnclick = addtocartbutton[s]
        //     btnclick.addEventListener('click' , addtocartlog )
        // }
        
        
        productNode.innerHTML = product;
        productscontainer.append(productNode);

        productNode.getElementsByClassName("addtocart")[0].addEventListener('click',addtocartlog);
        productNode.getElementsByClassName("addtowishlist")[0].addEventListener('click',addtowishlog)
        

    }
    
    
}
function wishdeleteall(){
    console.log('fffff')
    var whattodelete = document.getElementsByClassName('vvc')[0]
    whattodelete.innerHTML=""
    apdatetot()
}
function cartdeletealll(){
    console.log('fffff')
    var whattodelete = document.getElementsByClassName('www')[0]
    whattodelete.innerHTML=""
    apdatetot()
}