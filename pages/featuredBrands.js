let featured_brand_data = [
    {
        "image":"../Images/Featured Brands/Dettol.jpg",
    },
    {
        "image":"../Images/Featured Brands/Horlics.jpg",
    },
    {
        "image":"../Images/Featured Brands/Viks.jpg",
    },
    {
        "image":"../Images/Featured Brands/Liveeasy.jpg",
    },
    {
        "image":"../Images/Featured Brands/Nivea.jpg",
    },
    {
        "image":"../Images/Featured Brands/Bournvita.jpg",
    },
    {
        "image":"../Images/Featured Brands/Revital.png",
    },
    {
        "image":"../Images/Featured Brands/Volini.png",
    },
    {
        "image":"../Images/Featured Brands/Sebamed.png",
    },
    {
        "image":"../Images/Featured Brands/Upkarna.jpg",
    },
    {
        "image":"../Images/Featured Brands/EverHerb.jpg",
    },
    {
        "image":"../Images/Featured Brands/Teddy.jpg",
    },
    {
        "image":"../Images/Featured Brands/Unknown.png",
    },
    {
        "image":"../Images/Featured Brands/Maxirich.jpg",
    },
    {
        "image":"../Images/Featured Brands/Pigeon.jpg",
    },
    {
        "image":"../Images/Featured Brands/bella.jpg",
    },
    {
        "image":"../Images/Featured Brands/Hansaplast.png",
    }


];

featuredBrands(featured_brand_data);
function featuredBrands(data) {
    let carousal_div = document.getElementById("carousal-div-featured");
    data.forEach((brand) => {
        let a = document.createElement("a");
        a.setAttribute("class","brand-link");
        a.href ="#";
        let brand_card = document.createElement("div");
        brand_card.setAttribute("class", "brand-card");
        // brand_card.setAttribute("class","item");
        let logo_div = document.createElement("div");
        logo_div.setAttribute("class", "img-div");
        let logo = document.createElement("img");
        logo.src = brand.image;
        logo_div.append(logo);        
        brand_card.append(logo_div);
        a.append(brand_card);
        carousal_div.append(a);
    });
}

                let slider_featured = document.getElementById("carousal-div-featured");

                let ButtonLeftFeatured = document.getElementById("slider-left-featured");
                let ButtonRIghtFeatured = document.getElementById("slider-right-featured");

                let leftCountFeatured = 0;
                let rightCountFeatured = 0;

                ButtonLeftFeatured.setAttribute("class", "inactive-button");
                ButtonLeftFeatured.addEventListener("click", () => {

                    leftCountFeatured--;
                    if (leftCountFeatured <= 0) {
                        ButtonLeftFeatured.setAttribute("class", "inactive-button");
                    }
                    if (rightCountFeatured >= 5) {
                        // console.log("if :", rightCountFeatured);
                        slider_featured.scrollLeft -= 250;
                        rightCountFeatured = rightCountFeatured - 1;
                        document.getElementById("slider-right-featured").disabled = false;
                        document.getElementById("slider-right-featured").setAttribute("class", 'button');

                    }
                    else {
                        slider_featured.scrollLeft -= 390;
                        rightCountFeatured = rightCountFeatured - 1;
                        // document.getElementById("slider-right").disabled = false;
                        document.getElementById("slider-right-featured").removeAttribute("inactive-button");
                        // slider.style.transitionDelay = "500";
                    }
                });

                ButtonRIghtFeatured.addEventListener("click", () => {
                    rightCountFeatured++;
                    leftCountFeatured++;
                    // console.log(rightCount);

                    if (rightCountFeatured >= 1) {
                        ButtonLeftFeatured.setAttribute("class", "button");
                    }

                    if (rightCountFeatured >= 5) {
                        document.getElementById("slider-right-featured").disabled = true;
                        ButtonRIghtFeatured.setAttribute("class", "inactive-button");

                    }

                    slider_featured.scrollLeft += 390;
                             
                 });

            let isDownFeatured = false;
            let startXFeatured;
            let scrollLeftFeatured;
            // console.log(slider);

            slider_featured.addEventListener("mousedown",(e)=>{
                isDownFeatured = true;
                slider_featured.setAttribute("class","active");
                // console.log(e.pageX);
                startXFeatured = e.pageX - slider_featured.offsetLeft;
                scrollLeftFeatured = slider_featured.scrollLeft;
                // console.log(startXFeatured);
            
            });

            slider_featured.addEventListener("mouseleave",()=>{
                isDownFeatured = false;
                slider_featured.removeAttribute("class","active");
                
            });

            slider_featured.addEventListener("mouseup",()=>{
                isDownFeatured = false;
                slider_featured.removeAttribute("class","active");
                
            });

            slider_featured.addEventListener("mousemove",(e)=>{
                if(!isDownFeatured) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                // console.log({x,startXFeatured});
                slider_featured.style.transition = "all 0.3s";
                const walk = (x - startXFeatured)*2;
                // console.log(walk);  
                slider_featured.scrollLeft = scrollLeftFeatured - walk;              
            });