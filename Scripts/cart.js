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
        "tablets": "15 Tablet(s) in Strip",
        "mrp" : "399",
        "price": "₹199.5"
    },
    {
        "image" : "../Images/AddtoCart Page/Crousel Image/03.webp",
        "title" : "Evion 400mg Strip Of 10 Capsules",
        "tablets": "15 Tablet(s) in Strip",
        "mrp" : "32.7",
        "price": "₹28.78"
    },
    {
        "image" : "../Images/AddtoCart Page/Crousel Image/04.webp",
        "title" : "Neurobion Forte Tablet 30'S",
        "tablets": "15 Tablet(s) in Strip",
        "mrp" : "34.7",
        "price": "₹30.19"
    },
    {
        "image" : "../Images/AddtoCart Page/Crousel Image/05.webp",
        "title" : "Protinex Mama Vanilla Nutrition Drink Tin Of 250 G",
        "tablets": "15 Tablet(s) in Strip",
        "mrp" : "415",
        "price": "₹385.95"
    },
    {
        "image" : "../Images/AddtoCart Page/Crousel Image/06.webp",
        "title" : "Cremaffin Fresh Tablets Strip Of 10",
        "tablets": "15 Tablet(s) in Strip",
        "mrp" : "₹10.87",
        "price": "₹8.91"
    },
    {
        "image" : "../Images/AddtoCart Page/Crousel Image/07.webp",
        "title" : "Liveasy Wellness Calcium, Magnesium, Vitamin D3 - Bones & Dental Health - Bottle Of 90 Tablets",
        "tablets": "15 Tablet(s) in Strip",
        "mrp" : "₹849",
        "price": "₹466.95"
    }

];


let medicine_storage = JSON.parse(localStorage.getItem("medicine_storage"));

    if(medicine_storage == null)
    {
        localStorage.setItem("medicine_storage",JSON.stringify([]));
        let medicine_storage = JSON.parse(localStorage.getItem("medicine_storage"));

        medicine_storage.push(
            {
                "name":"Crosin", 
                "img": "../Images/AddtoCart Page/Ecosprin/01.webp",
                "price": "3.50",
                "mrp" : "4.29"
            }        
            );

            localStorage.setItem("medicine_storage",JSON.stringify(medicine_storage));
    }


   

        // console.log(medicine_storage);

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
        // console.log(data);
    
    }


    fetchingFromStorage();
    function fetchingFromStorage(){

        let medicine_storage = JSON.parse(localStorage.getItem("medicine_storage"));


        let image = document.getElementById("image");
        image.src = medicine_storage[0].img;

        let   title = document.querySelector(".title-medicine-cart");
        title.textContent = medicine_storage[0].name; 

        let mrp = document.querySelector(".price-mrp");
        mrp.textContent = medicine_storage[0].mrp;
        let price = document.querySelector(".price-price");
        price.textContent = medicine_storage[0].price;

        
    }