let add=document.querySelectorAll(".addbutton");
let cartArray=document.querySelectorAll(".cardCover");

let cartItem=document.querySelectorAll(".productDesc");
let itemPrice=document.querySelectorAll(".price");
let img=document.querySelectorAll(".itemImg");




    for(let x=0;x<add.length;x++){
        add[x].addEventListener("click",function(){
            addItem(cartItem[x].innerHTML,itemPrice[x].innerHTML,img[x].src);
        })
    }

function addItem(item,itemPrice,itemImg){

    let cartrow=document.createElement("div");
    cartrow.classList.add("cartRow");
    
   
    let cartContents=`
<img class="cartItemImg" src="${itemImg}" alt="" srcset="">
            <p class="cartItemDesc">${item}</p>
            <span class="cartItemPrice">${itemPrice}</span>
            <input class="cartqty" type="number" value="1">
            <button class="removebutton">Remove</button>
            
`
cartrow.innerHTML=cartContents;
let cc=document.querySelector(".cartitem");
cc.appendChild(cartrow);
    
}
