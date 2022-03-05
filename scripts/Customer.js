let CustomerData = [
    {
        "image" : "./Images/Customer Have to Say/01.png"
    },
    {
        "image" : "./Images/Customer Have to Say/02.png"
    },
    {
        "image" : "./Images/Customer Have to Say/03.png"
    },
    {
        "image" : "./Images/Customer Have to Say/04.png"
    },
    {
        "image" : "./Images/Customer Have to Say/05.png"
    },
    {
        "image" : "./Images/Customer Have to Say/06.png"
    },
    {
        "image" : "./Images/Customer Have to Say/07.png"
    }
]

                CustomerSay(CustomerData);
                function CustomerSay(data) {
                    let carousal_div = document.getElementById("carousal-div-customer");
                    console.log("Hello");
                    data.forEach((customer) => {                        
                        let cusomer_card = document.createElement("div");
                        cusomer_card.setAttribute("class", "customer-card");
                        // brand_card.setAttribute("class","item");
                        let customer_div = document.createElement("div");
                        customer_div.setAttribute("class", "customer-div");
                        let logo = document.createElement("img");
                        logo.src = customer.image;
                        customer_div.append(logo);        
                        cusomer_card.append(customer_div);                     
                        carousal_div.append(cusomer_card);
                    });
                }

                let customer_card_count = document.getElementsByClassName("customer-card");
                console.log(customer_card_count.length);
            
            
            
                            let slider_customer = document.getElementById("carousal-div-customer");
            
                            let ButtonLeftCustomer = document.getElementById("slider-left-customer");
                            let ButtonRightCustomer = document.getElementById("slider-right-customer");
            
                            let leftCountCustomer = 0;
                            let rightCountCustomer = 0;
            
                            // ButtonLeftCustomer.setAttribute("class", "inactive-button");
                            ButtonLeftCustomer.addEventListener("click", () => {
            
                                if (slider_customer.scrollLeft < (maxScrollLeft_customer - 1)) {
                                    slider_customer.scrollLeft += maxScrollLeft_customer;
                                    // slider.style.transitionDelay="500";
                                }
                                else {
                                    slider_customer.scrollLeft -= 375;
                                }
                                  
                            });
            
                            ButtonRightCustomer.addEventListener("click", () => {                             
                                if (slider_customer.scrollLeft > (maxScrollLeft_customer - 1)) {
                                    slider_customer.scrollLeft -= maxScrollLeft_customer;
                                    // slider.style.transitionDelay="500";
                                }
                                else {
                                    slider_customer.scrollLeft += 375;
                                }
                                        
                            });



                            let maxScrollLeft_customer = slider_customer.scrollWidth - slider_customer.clientWidth;

                            function autoPlay() {
                                if (slider_customer.scrollLeft > (maxScrollLeft_customer - 1)) {
                                    slider_customer.scrollLeft -= maxScrollLeft_customer;
                                    // slider.style.transitionDelay="500";
                                }
                                else {
                                    slider_customer.scrollLeft += 375;
                                }
                            }
            
                    let play = setInterval(autoPlay,2000);
            
                    // let health_card = document.getElementsByClassName("customer-card");
                    // console.log(health_card);
                    for(let i = 0; i < customer_card_count.length; i++)
                    {
                        customer_card_count[i].addEventListener("mouseover",()=>{
                            clearInterval(play);
                        })
                        customer_card_count[i].addEventListener("mouseout",()=>{
                            return play = setInterval(autoPlay,4000);
                        })
                    }


                    let isDownCustomer = false;
                    let starXCustomer;
                    let scrollLeftCustomer;
                    // console.log(slider);
        
                    slider_customer.addEventListener("mousedown",(e)=>{
                        isDownCustomer = true;
                        slider_customer.setAttribute("class","active");
                        // console.log(e.pageX);
                        starXCustomer = e.pageX - slider_customer.offsetLeft;
                        scrollLeftCustomer = slider_customer.scrollLeft;
                        // console.log(starXCustomer);
                    
                    });
        
                    slider_customer.addEventListener("mouseleave",()=>{
                        isDownCustomer = false;
                        slider_customer.removeAttribute("class","active");
                        
                    });
        
                    slider_customer.addEventListener("mouseup",()=>{
                        isDownCustomer = false;
                        slider_customer.removeAttribute("class","active");
                        
                    });
        
                    slider_customer.addEventListener("mousemove",(e)=>{
                        if(!isDownCustomer) return;
                        e.preventDefault();
                        const x = e.pageX - slider.offsetLeft;
                        // console.log({x,starXCustomer});
                        slider_customer.style.transition = "all 0.3s";
                        const walk = (x - starXCustomer)*2;
                        console.log(walk);  
                       if(walk > 0){
                            slider_customer.scrollLeft = maxScrollLeft_customer - walk;
                       }
                       if (slider_customer.scrollLeft > (maxScrollLeft_customer - 1)) {
                        slider_customer.scrollLeft -= maxScrollLeft_customer;
                        // slider.style.transitionDelay="500";
                        }
                        else {
                        slider_customer.scrollLeft += 25;
                        }

                            
                    });