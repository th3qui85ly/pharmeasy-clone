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
        "tablets": "15 Tablet(s) in Strip",
        "mrp" : "399",
        "price": "199.5"
    },
    {
        "img" : "../Images/AddtoCart Page/Crousel Image/03.webp",
        "name" : "Evion 400mg Strip Of 10 Capsules",
        "tablets": "15 Tablet(s) in Strip",
        "mrp" : "32.7",
        "price": "28.78"
    },
    {
        "img" : "../Images/AddtoCart Page/Crousel Image/04.webp",
        "name" : "Neurobion Forte Tablet 30'S",
        "tablets": "15 Tablet(s) in Strip",
        "mrp" : "34.7",
        "price": "30.19"
    },
    {
        "img" : "../Images/AddtoCart Page/Crousel Image/05.webp",
        "name" : "Protinex Mama Vanilla Nutrition Drink Tin Of 250 G",
        "tablets": "15 Tablet(s) in Strip",
        "mrp" : "415",
        "price": "385.95"
    },
    {
        "img" : "../Images/AddtoCart Page/Crousel Image/06.webp",
        "name" : "Cremaffin Fresh Tablets Strip Of 10",
        "tablets": "15 Tablet(s) in Strip",
        "mrp" : "₹10.87",
        "price": "8.91"
    },
    {
        "img" : "../Images/AddtoCart Page/Crousel Image/07.webp",
        "name" : "Liveasy Wellness Calcium, Magnesium, Vitamin D3 - Bones & Dental Health - Bottle Of 90 Tablets",
        "tablets": "15 Tablet(s) in Strip",
        "mrp" : "₹849",
        "price": "466.95"
    }

];


let medicine_storage = JSON.parse(localStorage.getItem("medicine_storage"));

    if(medicine_storage == null)
    {
        localStorage.setItem("medicine_storage",JSON.stringify([]));
        let medicine_storage = JSON.parse(localStorage.getItem("medicine_storage"));

    }


   

carousel(frequent_data);
function carousel(data){
// console.log(data);
let container = document.getElementById("frequently-brougth-crousel");

data.forEach((medicine)=>{

    let medicine_card = document.createElement("div");
    medicine_card.setAttribute("class","medicine-card");

    let img_div = document.createElement("div");
    img_div.setAttribute("class","img-div");
    
    let img = document.createElement("img");
    img.src = medicine.img;
    img_div.append(img);

    let title_div = document.createElement('div');
    title_div.setAttribute("class","title-div");
    title_div.textContent = medicine.name;

    let strip_div = document.createElement('div');
    strip_div.setAttribute("class","strip-div");
    strip_div.textContent = medicine.tablets; 

    let mrp = document.createElement("span");
    mrp.textContent = "MRP ₹ ";
    mrp.setAttribute("class","mrp-span");

    let off_div = document.createElement("span");
    off_div.setAttribute("class","off-div");
    off_div.textContent = medicine.mrp;

    let price_div = document.createElement("div");
    price_div.setAttribute("class","price-div");
    price_div.textContent = "₹ "+ medicine.price;

    let add_bttn = document.createElement("button");
    add_bttn.setAttribute("class","add-bttn-crousel");
    add_bttn.textContent = "Add";
    add_bttn.addEventListener("click",()=>{
        addtoLocal(medicine);
        // location.reload;
        // fetchingFromStorage();
    })
    medicine_card.append(img_div,title_div,strip_div,mrp,off_div,price_div,add_bttn);

    container.append(medicine_card);

})

}

let slider = document.getElementById("frequently-brougth-crousel");
        let isDown = false;
        let startX;
        let scrollLeft;
        // console.log(slider);

        slider.addEventListener("mousedown",(e)=>{
            isDown = true;
            slider.setAttribute("class","active-crousel");
            // console.log(e.pageX);
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            // console.log(startX);
        
        });

        slider.addEventListener("mouseleave",()=>{
            isDown = false;
            slider.removeAttribute("class","active-crousel");
            
        });

        slider.addEventListener("mouseup",()=>{
            isDown = false;
            slider.removeAttribute("class","active-crousel");
            
        });

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



    // addtoLocal(data);

    // let medicine_storage = JSON.parse(localStorage.getItem("medicine_storage"));
    function addtoLocal(data){
        data.cart_m = 1;
        medicine_storage.push(data);
        localStorage.setItem("medicine_storage",JSON.stringify(medicine_storage));
        // location.reload;
        showData();
        function showData(){
            let medicine_storage = JSON.parse(localStorage.getItem("medicine_storage"));
            let container = document.querySelector(".cart-items");
            let n = medicine_storage.length-1;
            let item = medicine_storage[medicine_storage.length - 1];
            let item_card = document.createElement("div");
            item_card.setAttribute("class","item-card");
            item_card.innerHTML = `
            <div id="image" style="margin-left: 0px;"><img src="${item.img}" width="80px" height="50px" style="margin-top: 30px;" id="cart-image" alt=""></div>
            <div id="medicine-info">
                <div class="title-medicine-cart">${item.name}</div>
                <div class="provider-medicine-cart">By USV PVT LTD</div>
                <div class="strip-medicine-cart">14 Tablet(s) in Strip</div>
                <select>
                   <option value="" selected disabled hidden>Qty ${item.cart_m}</option>
                    <option value ="1" name = "Qty 1">1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>    
                   </select>       
                <div class="delevery-date">Delivery <span style="font-weight: 600;">9 Mar - 10 Mar</span> </div>
                
            </div>
            <div id="price-action">
                <div class="delete-img"><span><img src="../Images/AddtoCart Page/Ecosprin/rx.svg" style="width: 25px; height: 13%; padding: 0;" alt=""></span><span><img onclick="localStorageRemove(${n})" class="delete-button" src="../Images/AddtoCart Page/Ecosprin/delete.svg" style="width: 25px; height: 13%; padding: 0;" alt=""></span></div>
                <div class="price">
                   <span style="font-size: 13px; font-weight: 500;  color: rgb(230, 66, 66);">18% OFF <span style="text-decoration: line-through; color: rgb(79, 88, 94);" class="price-mrp">₹ ${item.mrp} </span> </span> <br>
                    <span style="font-size: 18px; font-weight: bold; color: rgb(79, 88, 94);" class="price-price">₹ ${item.price}*</span>
                </div>
            </div>
            `

            container.append(item_card);
            
            let delete_buttons = document.querySelectorAll(".delete-button");
            for(let i = 0 ; i< delete_buttons.length; i++){
                let button = delete_buttons[i];
                button.style.cursor = "pointer";    
               
                // button.addEventListener("click",(e)=>{
                //     console.log(i);
                //     localStorageRemove(i);
                //     location.reload();              
                   
                // })
            }

            let cart_count = document.querySelector(".cart-count-original");
        let sum_price = 0;
        let sum_items = 0;
        medicine_storage.forEach((data)=>{
            sum_price += data.price * data.cart_m;
            sum_items += parseInt(data.cart_m);
            
        })
        // console.log(sum_items);
        
        cart_count.textContent = sum_items +" Item(s) in Cart";
        
        let cart_price = document.getElementById("cart-price");
        cart_price.textContent = "₹ "+(sum_price).toFixed(2);
        let total_price = document.getElementById("total-price");
        total_price.textContent =  "₹ "+ (sum_price).toFixed(2);

        } 

    }



    fetchingFromStorage();  
    function fetchingFromStorage(){
        console.log("Hello");
        let n = 0;

        let medicine_storage = JSON.parse(localStorage.getItem("medicine_storage"));
        
        

        let container = document.querySelector(".cart-items");
        medicine_storage.forEach((item)=>{       
            let item_card = document.createElement("div");
            item_card.setAttribute("class","item-card");
            item_card.innerHTML = `
            <div id="image" style="margin-left: 0px;"><img src="${item.img}" width="80px" height="50px" style="margin-top: 30px;" id="cart-image" alt=""></div>
            <div id="medicine-info">
                <div class="title-medicine-cart">${item.name}</div>
                <div class="provider-medicine-cart">By USV PVT LTD</div>
                <div class="strip-medicine-cart">14 Tablet(s) in Strip</div>
                <select>
                   <option value="" selected disabled hidden>Qty ${item.cart_m}</option>
                    <option value ="1" name = "Qty 1">1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>    
                   </select>       
                <div class="delevery-date">Delivery <span style="font-weight: 600;">9 Mar - 10 Mar</span> </div>
                
            </div>
            <div id="price-action">
                <div class="delete-img"><span><img src="../Images/AddtoCart Page/Ecosprin/rx.svg" style="width: 25px; height: 13%; padding: 0;" alt=""></span><span><img  onclick="localStorageRemove(${n})" class="delete-button" src="../Images/AddtoCart Page/Ecosprin/delete.svg" style="width: 25px; height: 13%; padding: 0;" alt=""></span></div>
                <div class="price">
                   <span style="font-size: 13px; font-weight: 500;  color: rgb(230, 66, 66);">18% OFF <span style="text-decoration: line-through; color: rgb(79, 88, 94);" class="price-mrp">₹ ${item.mrp} </span> </span> <br>
                    <span style="font-size: 18px; font-weight: bold; color: rgb(79, 88, 94);" class="price-price">₹ ${item.price}*</span>
                </div>
            </div>`


            container.append(item_card);
            n++;
        });
        
    }

    let delete_buttons = document.querySelectorAll(".delete-button");
    for(let i = 0 ; i < delete_buttons.length; i++){
        let button = delete_buttons[i];
        button.style.cursor = "pointer";     
    }

   
   function localStorageRemove(ele){         
        medicine_storage = medicine_storage.slice(0,ele).concat(medicine_storage.slice(ele+1,medicine_storage.length));
        localStorage.setItem("medicine_storage",JSON.stringify(medicine_storage));
        console.log(ele);
        location.reload()
         fetchingFromStorage();
    }
   

    let cart_count = document.querySelector(".cart-count-original");
        let sum_price = 0;
        let sum_items = 0;
        medicine_storage.forEach((data)=>{
            sum_price += data.price * data.cart_m;
            sum_items += parseInt(data.cart_m);
            
        })
        // console.log(sum_items);
        
        cart_count.textContent = sum_items +" Item(s) in Cart";
        
        let cart_price = document.getElementById("cart-price");
        cart_price.textContent = "₹ "+(sum_price).toFixed(2);
        let total_price = document.getElementById("total-price");
        total_price.textContent =  "₹ "+ (sum_price).toFixed(2);




let addAddress = document.querySelector(".button2");
addAddress.onclick = ()=>{
    location.href = "../home.html";
}