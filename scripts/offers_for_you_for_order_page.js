
                let offers_data = [
                    {
                        "icon": "../images/Offers For You/Birthday Week.jpg",
                        "title": "Flat 25% off + up to Rs.7000 surprise cashback",
                        "code": "BDAYBASH"
                    },
                    {
                        "icon": "../Images/Offers For You/PharmEasy.png",
                        "title": "FLAT 18% Off on all medicine orders.",
                        "code": "Not Required"
                    },
                    {
                        "icon": "../Images/Offers For You/FIrststory.jpg",
                        "title": "Get Flat 25% Off on first medicine order + Flat 32% off on Products of Firstcry",
                        "code": "FIRST25"
                    },
                    {
                        "icon": "../Images/Offers For You/Instamart.jpg",
                        "title": "Get Flat 25% Off on first medicine order + Flat Rs.70 Off on Swiggy Instamart",
                        "code": "SWIGGY25"
                    },
                    {
                        "icon": "../Images/Offers For You/Sarva.jpg",
                        "title": "Get 3-months complimentary membership to the SARVA app",
                        "code": "SARVA"
                    },
                    {
                        "icon": "../Images/Offers For You/Myglamm.jpg",
                        "title": "Flat 25% off on first medicine order (MOV-999) + Get 50% discount on the entire range of products of MyGlamm",
                        "code": "MG25"
                    },
                    {
                        "icon": "../Images/Offers For You/Lenskart.png",
                        "title": "Get Flat 25% Off on first medicine order+ Free Lenskart Gold membership for 6 months",
                        "code": "LKART25"
                    },
                    {
                        "icon": "../Images/Offers For You/Go Mechanic.jpg",
                        "title": "Flat 25% off on medicine + Get Flat Rs.750 Off on all Periodic Services on GoMechanic App",
                        "code": "GM25"
                    },
                    {
                        "icon": "../Images/Offers For You/Cult Fit.png",
                        "title": "Get Flat 25% Off on first medicine order + 7 Days access to cult fitness centers & gyms across India",
                        "code": "CFIT25"
                    },
                    {
                        "icon": "../Images/Offers For You/PharmEasy.png",
                        "title": "Get FLAT Rs.400 cashback on PharmEasy Labtests booked above Rs.949",
                        "code": "EASY400"
                    },
                    {
                        "icon": "../Images/Offers For You/tenOff.jpg",
                        "title": "Get extra 10% Off on Everherb, Liveasy and PharmEasy products",
                        "code": "ELP10"
                    },
                    {
                        "icon": "../Images/Offers For You/Paytm Cashback Off.png",
                        "title": "Get 4000 Paytm Cashback Points via Paytm wallet | Postpaid",
                        "code": "Not Required"
                    },
                    {
                        "icon": "../Images/Offers For You/Sidhayu.png",
                        "title": "Extra 5% off on Siddhayu",
                        "code": "SID5"
                    },
                    {
                        "icon": "../Images/Offers For You/Phonepay.png",
                        "title": "Get up to Rs.750 cashback via PhonePe wallet only.",
                        "code": "Not Required"
                    },
                    {
                        "icon": "../Images/Offers For You/Free Style Livre.jpg",
                        "title": "Get 20% off on Freestyle Libre Sensors",
                        "code": "FSL20"
                    },
                    {
                        "icon": "../Images/Offers For You/Savion.jfif",
                        "title": "Additional 10% off on Savlon",
                        "code": "SAVL10"
                    },
                    {
                        "icon": "../Images/Offers For You/Baidhynath.jpg",
                        "title": "Get 3 months of PharmEasy Plus membership on your order of Baidyanath products.",
                        "code": "BNPLUS"
                    },
                    {
                        "icon": "../Images/Offers For You/Everyuth.jpg",
                        "title": "Extra 10% off on Everyuth",
                        "code": "EYUTH10"
                    }

                ];


                offersForYou(offers_data);
                function offersForYou(data) {
                    let carousal_div = document.getElementById("carousal-div");
                    data.forEach((offer) => {
                        let a = document.createElement("a");
                        a.setAttribute("class","order-link");
                        a.href ="https://www.google.com";
                        let offer_card = document.createElement("div");
                        offer_card.setAttribute("class", "offer-card");
                        // offer_card.setAttribute("class","item");
                        let logo_div = document.createElement("div");
                        logo_div.setAttribute("class", "logo-div");
                        let logo = document.createElement("img");
                        logo.className = "img_sushant_sir";
                        logo.src = offer.icon;
                        logo_div.append(logo);
                        let info = document.createElement("div");
                        info.setAttribute("class", "info");
                        let title = document.createElement("div");
                        title.setAttribute("class", "title");
                        title.textContent = offer.title;
                        let code = document.createElement("div");
                        code.setAttribute("class", "code");
                        code.textContent = "Code: ";
                        let c = document.createElement("span");
                        if (offer.code == "Not Required") {
                            // console.log("Not Required");
                            c.setAttribute("class", "code_inactive");
                        }
                        else
                        {
                        c.setAttribute("class","span");
                        }
                        c.textContent = offer.code;
                        code.append(c);
                        info.append(title, code);
                        offer_card.append(logo_div, info);
                        a.append(offer_card);
                        carousal_div.append(a);
                    });
                }


                let slider = document.getElementById("carousal-div");

                let ButtonLeft = document.getElementById("slider-left");
                let ButtonRight = document.getElementById("slider-right");
                let leftCount = 0;
                let rightCount = 0;

                ButtonLeft.setAttribute("class", "inactive-button");
                ButtonLeft.addEventListener("click", () => {

                    leftCount--;
                    if (leftCount <= 0) {
                        ButtonLeft.setAttribute("class", "inactive-button");
                    }
                    if (rightCount >= 14) {
                        // console.log("if :", rightCount);
                        slider.scrollLeft -= 260;
                        rightCount = rightCount - 1;
                        document.getElementById("slider-right").disabled = false;
                        document.getElementById("slider-right").setAttribute("class", 'button');

                    }
                    else {
                        slider.scrollLeft -= 352;
                        rightCount = rightCount - 1;
                        // document.getElementById("slider-right").disabled = false;
                        document.getElementById("slider-right").removeAttribute("inactive-button");
                        // slider.style.transitionDelay = "500";
                    }
                });
                ButtonRight.addEventListener("click", () => {
                    rightCount++;
                    leftCount++;
                    // console.log(rightCount);

                    if (rightCount >= 1) {
                        ButtonLeft.setAttribute("class", "button");
                    }

                    if (rightCount >= 14) {
                        document.getElementById("slider-right").disabled = true;
                        ButtonRight.setAttribute("class", "inactive-button");

                    }

                    slider.scrollLeft += 352;
                             
                 });

                let maxScrollLeft = slider.scrollWidth - slider.clientWidth;

                function autoPlay() {
                    if (slider.scrollLeft > (maxScrollLeft - 1)) {
                        slider.scrollLeft -= maxScrollLeft;
                        // slider.style.transitionDelay="500";
                    }
                    else {
                        slider.scrollLeft += 1;
                    }
                }

        // let play = setInterval(autoPlay,50);

        // let slider = document.getElementById("carousal-div");
        // console.log(offer_card);
        // for(let i = 0; i < offer_card.length; i++)
        // {
        //     offer_card[i].addEventListener("mouseover",()=>{
        //         clearInterval(play);
        //     })
        //     offer_card[i].addEventListener("mouseout",()=>{
        //         return play = setInterval(autoPlay,50);
        //     })
        // }

            let isDown = false;
            let startX;
            let scrollLeft;
            // console.log(slider);

            slider.addEventListener("mousedown",(e)=>{
                isDown = true;
                slider.setAttribute("class","active");
                // console.log(e.pageX);
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
                // console.log(startX);
            
            });

            slider.addEventListener("mouseleave",()=>{
                isDown = false;
                slider.removeAttribute("class","active");
                
            });

            slider.addEventListener("mouseup",()=>{
                isDown = false;
                slider.removeAttribute("class","active");
                
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


