let health_care_data = [
    {
        "image" : "./Images/Health Care html/Products Grid/01.webp",
        "category" : "Covid Essentials",
        "off" : "Upto 77% off"
    },
    {
        "image" : "./Images/Health Care html/Products Grid/02.webp",
        "category" : "Healthcare Devices",
        "off" : "Upto 65% off"
    },
    {
        "image" : "./Images/Health Care html/Products Grid/03.webp",
        "category" : "Health Food and Drinks",
        "off" : "Upto 57% off"
    },
    {
        "image" : "./Images/Health Care html/Products Grid/04.webp",
        "category" : "Personal Care",
        "off" : "Upto 80% off"
    },
    {
        "image" : "./Images/Health Care html/Products Grid/05.webp",
        "category" : "Ayurvedic Care",
        "off" : "Upto 70% off"
    },
    {
        "image" : "./Images/Health Care html/Products Grid/06.webp",
        "category" : "Mother and Baby Care",
        "off" : "Upto 50% off"
    },
    {
        "image" : "./Images/Health Care html/Products Grid/07.webp",
        "category" : "Accessories And Wearables",
        "off" : "Upto 35% off"
    },
    {
        "image" : "./Images/Health Care html/Products Grid/08.webp",
        "category" : "Skin Care",
        "off" : "Upto 50% off"
    },
    {
        "image" : "./Images/Health Care html/Products Grid/09.webp",
        "category" : "Diabetic Care",
        "off" : "Upto 65% off"
    },
    {
        "image" : "./Images/Health Care html/Products Grid/10.webp",
        "category" : "Health Condition",
        "off" : "Upto 65% off"
    },
    {
        "image" : "./Images/Health Care html/Products Grid/11.webp",
        "category" : "Sexuall Wellness",
        "off" : "Upto 53% off"
    },
    {
        "image" : "./Images/Health Care html/Products Grid/12.webp",
        "category" : "Home Care",
        "off" : "Upto 35% off"
    },
    {
        "image" : "./Images/Health Care html/Products Grid/13.webp",
        "category" : "Fitness & Supplements",
        "off" : "Upto 80% off"
    },
    {
        "image" : "./Images/Health Care html/Products Grid/14.webp",
        "category" : "Elderly Care",
        "off" : "Upto 45% off"
    },
    {
        "image" : "./Images/Health Care html/Products Grid/15.webp",
        "category" : "Surgicals and Dressings",
        "off" : "Upto 55% off"
    },
    {
        "image" : "./Images/Health Care html/Products Grid/16.webp",
        "category" : "Pet Care",
        "off" : "Upto 30% off"
    }
];


getData(health_care_data);
    function getData(data){
        let container = document.getElementById("product-grid");
        // console.log(data);
        data.forEach((cat)=>{
            let cat_card = document.createElement("div");
            cat_card.setAttribute("class","car-card");

            let img_div = document.createElement("div");
            img_div.setAttribute("class","img-div");

            let img = document.createElement("img");
            img.src = cat.image;
            img_div.append(img);

            let category = document.createElement("div");
            category.setAttribute("class","category");
            category.textContent = cat.category;

            let off = document.createElement("div");
            off.setAttribute("class","off");
            off.textContent = cat.off;

            cat_card.append(img_div,category,off);
            container.append(cat_card);
        })
    }
