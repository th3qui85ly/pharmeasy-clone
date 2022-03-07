let m_img = document.getElementById("m-image");
let bttndiv = document.getElementById("button-div");
let addtoCartBttn = document.getElementById("AddtoCartButton");
let random_img = `../Images/AddtoCart Page/cart/0${Math.floor(Math.random() * 10)}.jpg`;
let med_names = JSON.parse(localStorage.getItem("med_names"));
​
let medicine_storage = JSON.parse(localStorage.getItem("medicine_storage"));
if(medicine_storage == null)
{
    localStorage.setItem("medicine_storage",JSON.stringify([]));
}
​
​
​
let cart_msg = document.querySelector(".cart-msg");
    if(medicine_storage.length > 0){
        let cart = document.querySelector(".inactive-button");
        cart.setAttribute("class","view-cart");
​
        cart.addEventListener("click",()=>{
            location.href = "./Cart.html";
        });
        let sum_items = 0;
        medicine_storage.forEach((data)=>{
        sum_items += parseInt(data.cart_m);    
        });
        cart_msg.textContent = sum_items+ " Item(s) in Cart";
        console.log(medicine_storage.length);
    }
​
let all_img = document.querySelectorAll(".other-images");
console.log(all_img[0].children);
let ele = all_img[0].children;
​
for(let i = 0; i < ele.length; i++)
{
    // console.log(ele[i]);
    ele[i].addEventListener("click",function(e){
        console.log(ele[i]);
        for(let j = 0 ; j < ele.length; j++){
            ele[j].removeAttribute("id","active-div");
        }
        ele[i].setAttribute("id","active-div");
        changeImg(e.target);
    })
}
​
​
​
function changeImg(a){    
    m_img.src = a.src;
}
​
addtoCartBttn.addEventListener("click",addquantity);
function addquantity(e){
    console.log(e.target);
    bttndiv.innerHTML = "";
    bttndiv.innerHTML = `<select>
    <option value="" selected disabled hidden>Qty 0</option>
     <option value ="1" name = "Qty 1">1</option>
     <option>2</option>
     <option>3</option>
     <option>4</option>
     <option>5</option>
     <option>6</option>
     <option>7</option>    
    </select>`;
    let select = document.querySelector("select");
    let cart = document.querySelector(".inactive-button");
    
    
    console.log(cart_msg);
    select.onchange = function(){
    
        let cart;
        cart_msg.textContent = "";
​
        let medicine_storage = JSON.parse(localStorage.getItem("medicine_storage"));
        if(medicine_storage == null)
        {
            localStorage.setItem("medicine_storage",JSON.stringify([]));
        }
​
       
​
​
        if(medicine_storage.length > 0){
            let sum_items = 0;
            medicine_storage.forEach((data)=>{
            sum_items += parseInt(data.cart_m);    
            });
            cart_msg.textContent = sum_items + " Item(s) in Cart"; 
            cart = document.querySelector(".view-cart");
        }
        else{
            cart_msg.textContent = select.value + " Item(s) in Cart";
             cart = document.querySelector(".inactive-button");
             cart.setAttribute("class","view-cart");
            }
            cart = document.querySelector(".view-cart");
            
            let name = med_names[0].name;
            let img = random_img;
            let price = med_names[0].price;
            let mrp = med_names[0].MRP;
            let cart_m = select.value;
    
            
            // let med_names = JSON.parse(localStorage.getItem("med_names"));
            // console.log(med_names);
            // let medicine_storage = JSON.parse(localStorage.getItem("medicine_storage"));
            // if(medicine_storage == null)
            // {
            //     localStorage.setItem("medicine_storage",JSON.stringify([]));
            // }
    
            medicine_storage.push({name,img,price,mrp,cart_m});
    
            console.log(medicine_storage);
            med_names[0].cart = select.value;
            localStorage.setItem("med_names",JSON.stringify(med_names))
        
        cart.addEventListener("click",()=>{
            location.href = "./Cart.html";
        });
        localStorage.setItem("medicine_storage",JSON.stringify(medicine_storage));
        // location.reload();
        
    }
}
​
​
let frequent_data = [
        {
            "img" : "../Images/AddtoCart Page/Crousel Image/01.webp",
            "name" : "Supradyn Daily Multivitamin Tablets 15s",
            "tablets": "15 Tablet(s) in Strip",
            "mrp" : "50",
            "price": "47.5"
        },
        {
            "img" : "../Images/AddtoCart Page/Crousel Image/02.webp",
            "name" : "Everherb Karela Jamun Juice - Helps Maintains Healthy Sugar Levels -Helps In Weight Management - 1l",
            "tablets": "20 Tablet(s) in Strip",
            "mrp" : "399",
            "price": "199.5"
        },
        {
            "img" : "../Images/AddtoCart Page/Crousel Image/03.webp",
            "name" : "Evion 400mg Strip Of 10 Capsules",
            "tablets": "6 Tablet(s) in Strip",
            "mrp" : "32.7",
            "price": "28.78"
        },
        {
            "img" : "../Images/AddtoCart Page/Crousel Image/04.webp",
            "name" : "Neurobion Forte Tablet 30'S",
            "tablets": "09 Tablet(s) in Strip",
            "mrp" : "34.7",
            "price": "30.19"
        },
        {
            "img" : "../Images/AddtoCart Page/Crousel Image/05.webp",
            "name" : "Protinex Mama Vanilla Nutrition Drink Tin Of 250 G",
            "tablets": "18 Tablet(s) in Strip",
            "mrp" : "415",
            "price": "385.95"
        },
        {
            "img" : "../Images/AddtoCart Page/Crousel Image/06.webp",
            "name" : "Cremaffin Fresh Tablets Strip Of 10",
            "tablets": "10 Tablet(s) in Strip",
            "mrp" : "10.87",
            "price": "8.91"
        },
        {
            "img" : "../Images/AddtoCart Page/Crousel Image/07.webp",
            "name" : "Liveasy Wellness Calcium, Magnesium, Vitamin D3 - Bones & Dental Health - Bottle Of 90 Tablets",
            "tablets": "12 Tablet(s) in Strip",
            "mrp" : "849",
            "price": "466.95"
        }
​
];
​
​
// let medicine_storage = JSON.parse(localStorage.getItem("medicine_storage"));
// let med_names = JSON.parse(localStorage.getItem("med_names"));
// console.log(med_names);
​
        if(medicine_storage == null)
        {
            localStorage.setItem("medicine_storage",JSON.stringify([]));
        }
​
​
​
​
​
        showClickedItem();
        function showClickedItem(){
            let med_names = JSON.parse(localStorage.getItem("med_names"));
            let home_medicine = document.getElementById("home-name-medicine");
            home_medicine.textContent = med_names[0].name;
            let main_image = document.getElementById("m-image");
            main_image.src = random_img;
​
            let img1 = document.getElementById("01");
            img1.src = random_img;
            let img2 = document.getElementById("02");
            img2.src = med_names[0].img2;
            let img3 = document.getElementById("03");
            img3.src = med_names[0].img3;
            let img4 = document.getElementById("04");
            img4.src = med_names[0].img4;
            let img5 = document.getElementById("05");
            img5.src = med_names[0].img5;
            let img6 = document.getElementById("06");
            img6.src = med_names[0].img6;
​
            let name = document.querySelector(".medicine-name");
            name.textContent = med_names[0].name;
​
            // let strip = document.querySelector(".medicine-strip");
            // strip.textContent = med_names[0].tablets;
​
            let mrp = document.getElementById("price-addToCart");
            mrp.textContent = "₹ "+med_names[0].MRP;
​
            let price = document.getElementById("mrp-addToCart");
            price.textContent = "₹ "+med_names[0].price;
        }
​
​
​
​
​
​
​
​
​
​
​
carousel(frequent_data);
function carousel(data){
    console.log(data);
    let container = document.getElementById("frequently-brougth-crousel");
​
    data.forEach((medicine)=>{
​
        let medicine_card = document.createElement("div");
        medicine_card.setAttribute("class","medicine-card");
​
        let img_div = document.createElement("div");
        img_div.setAttribute("class","img-div");
        
        let img = document.createElement("img");
        img.src = medicine.img;
        img_div.append(img);
​
        let title_div = document.createElement('div');
        title_div.setAttribute("class","title-div");
        title_div.textContent = medicine.name;
​
        let strip_div = document.createElement('div');
        strip_div.setAttribute("class","strip-div");
        strip_div.textContent = medicine.tablets; 
​
        let mrp = document.createElement("span");
        mrp.textContent = "MRP ₹ ";
        mrp.setAttribute("class","mrp-span");
​
        let off_div = document.createElement("span");
        off_div.setAttribute("class","off-div");
        off_div.textContent = medicine.mrp;
​
        let price_div = document.createElement("div");
        price_div.setAttribute("class","price-div");
        price_div.textContent = "₹ "+ medicine.price;
​
        let add_bttn = document.createElement("button");
        add_bttn.setAttribute("class","add-bttn-crousel");
        add_bttn.textContent = "Add";
        add_bttn.addEventListener("click",()=>{
            addtoLocal(medicine);
        })
        medicine_card.append(img_div,title_div,strip_div,mrp,off_div,price_div,add_bttn);
​
        container.append(medicine_card);
​
    })
​
}
​
    let slider = document.getElementById("frequently-brougth-crousel");
            let isDown = false;
            let startX;
            let scrollLeft;
            // console.log(slider);
​
            slider.addEventListener("mousedown",(e)=>{
                isDown = true;
                slider.setAttribute("class","active-crousel");
                // console.log(e.pageX);
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
                // console.log(startX);
            
            });
​
            slider.addEventListener("mouseleave",()=>{
                isDown = false;
                slider.removeAttribute("class","active-crousel");
                
            });
​
            slider.addEventListener("mouseup",()=>{
                isDown = false;
                slider.removeAttribute("class","active-crousel");
                
            });
​
            slider.addEventListener("mousemove",(e)=>{
                if(!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                // console.log({x,startX});
                slider.style.transition = "all 0.3s";
                const walk = (x - startX)*2;
                // console.log(walk);  
                slider.scrollLeft = scrollLeft - walk;              
            });
    
​
​
        // addtoLocal(data);
​
        function addtoLocal(data){
​
            let medicine_storage = JSON.parse(localStorage.getItem("medicine_storage"));
            data.cart_m = 1;
            medicine_storage.push(data);
            localStorage.setItem("medicine_storage",JSON.stringify(medicine_storage));
            location.reload();
        
        }
