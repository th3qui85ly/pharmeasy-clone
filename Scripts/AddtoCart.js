
let m_img = document.getElementById("m-image");
let bttndiv = document.getElementById("button-div");
let addtoCartBttn = document.getElementById("AddtoCartButton");

let med_names = JSON.parse(localStorage.getItem("med_names"));

let all_img = document.querySelectorAll(".other-images");
// console.log(all_img[0].children);
let ele = all_img[0].children;

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



function changeImg(a){    
    m_img.src = a.src;
}

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
    
    let cart_msg = document.querySelector(".cart-msg");
    console.log(cart_msg);
    select.onchange = function(){
        cart.setAttribute("class","view-cart");
        cart_msg.textContent = "";
        cart_msg.textContent = select.value + " Item(s) in Cart";    

        let name = med_names[0].name;
        let img = med_names[0].img1;
        let price = med_names[0].price;
        let mrp = med_names[0].MRP;
        let cart_m = select.value;

        let medicine_storage = JSON.parse(localStorage.getItem("medicine_storage"));
        // let med_names = JSON.parse(localStorage.getItem("med_names"));
        // console.log(med_names);

        if(medicine_storage == null)
        {
            localStorage.setItem("medicine_storage",JSON.stringify([]));
        }

        medicine_storage.push({name,img,price,mrp,cart_m});

        console.log(medicine_storage);
        med_names[0].cart = select.value;
        localStorage.setItem("med_names",JSON.stringify(med_names))
        cart.addEventListener("click",()=>{
            location.href = "./Cart.html";
        });
        localStorage.setItem("medicine_storage",JSON.stringify(medicine_storage));

        
    }
}


let frequent_data = [
        {
            "image" : "../Images/AddtoCart Page/Crousel Image/01.webp",
            "title" : "Supradyn Daily Multivitamin Tablets 15s",
            "tablets": "15 Tablet(s) in Strip",
            "mrp" : "50",
            "price": "₹47.5"
        },
        {
            "image" : "../Images/AddtoCart Page/Crousel Image/02.webp",
            "title" : "Everherb Karela Jamun Juice - Helps Maintains Healthy Sugar Levels -Helps In Weight Management - 1l",
            "tablets": "20 Tablet(s) in Strip",
            "mrp" : "399",
            "price": "₹199.5"
        },
        {
            "image" : "../Images/AddtoCart Page/Crousel Image/03.webp",
            "title" : "Evion 400mg Strip Of 10 Capsules",
            "tablets": "6 Tablet(s) in Strip",
            "mrp" : "32.7",
            "price": "₹28.78"
        },
        {
            "image" : "../Images/AddtoCart Page/Crousel Image/04.webp",
            "title" : "Neurobion Forte Tablet 30'S",
            "tablets": "09 Tablet(s) in Strip",
            "mrp" : "34.7",
            "price": "₹30.19"
        },
        {
            "image" : "../Images/AddtoCart Page/Crousel Image/05.webp",
            "title" : "Protinex Mama Vanilla Nutrition Drink Tin Of 250 G",
            "tablets": "18 Tablet(s) in Strip",
            "mrp" : "415",
            "price": "₹385.95"
        },
        {
            "image" : "../Images/AddtoCart Page/Crousel Image/06.webp",
            "title" : "Cremaffin Fresh Tablets Strip Of 10",
            "tablets": "10 Tablet(s) in Strip",
            "mrp" : "₹10.87",
            "price": "₹8.91"
        },
        {
            "image" : "../Images/AddtoCart Page/Crousel Image/07.webp",
            "title" : "Liveasy Wellness Calcium, Magnesium, Vitamin D3 - Bones & Dental Health - Bottle Of 90 Tablets",
            "tablets": "12 Tablet(s) in Strip",
            "mrp" : "₹849",
            "price": "₹466.95"
        }

];


let medicine_storage = JSON.parse(localStorage.getItem("medicine_storage"));
// let med_names = JSON.parse(localStorage.getItem("med_names"));
// console.log(med_names);

        if(medicine_storage == null)
        {
            localStorage.setItem("medicine_storage",JSON.stringify([]));
        }





        showClickedItem();
        function showClickedItem(){
            let med_names = JSON.parse(localStorage.getItem("med_names"));
            let home_medicine = document.getElementById("home-name-medicine");
            home_medicine.textContent = med_names[0].name;
            let main_image = document.getElementById("m-image");
            main_image.src = med_names[0].img1;

            let img1 = document.getElementById("01");
            img1.src = `../Images/AddtoCart Page/Ecosprin/0${Math.floor(Math.random() * 10)}.webp`;
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

            let name = document.querySelector(".medicine-name");
            name.textContent = med_names[0].name;

            // let strip = document.querySelector(".medicine-strip");
            // strip.textContent = med_names[0].tablets;

            let mrp = document.getElementById("price-addToCart");
            mrp.textContent = "₹ "+med_names[0].MRP;

            let price = document.getElementById("mrp-addToCart");
            price.textContent = "₹ "+med_names[0].price;
 





        }











carousel(frequent_data);
function carousel(data){
    console.log(data);
    let container = document.getElementById("frequently-brougth-crousel");

    data.forEach((medicine)=>{

        let medicine_card = document.createElement("div");
        medicine_card.setAttribute("class","medicine-card");

        let img_div = document.createElement("div");
        img_div.setAttribute("class","img-div");
        
        let img = document.createElement("img");
        img.src = medicine.image;
        img_div.append(img);

        let title_div = document.createElement('div');
        title_div.setAttribute("class","title-div");
        title_div.textContent = medicine.title;

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
        price_div.textContent = medicine.price;

        let add_bttn = document.createElement("button");
        add_bttn.setAttribute("class","add-bttn-crousel");
        add_bttn.textContent = "Add";
        add_bttn.addEventListener("click",()=>{
            addtoLocal(medicine);
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

        function addtoLocal(data){
            console.log(data);
        
        }
        