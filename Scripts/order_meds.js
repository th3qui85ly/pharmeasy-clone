async function get_data(){
    let search_bar = document.getElementById("results_div");
    search_bar.textContent = ""
    query = document.getElementById("search_input_shiv").value;
    if(query == "") return;
    console.log(query);
    try {
        let res = await fetch(`https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms=${query}`);
        let data = await res.json();
        // console.log(data)
        display_data(data[1]);
    } catch (err) {
        console.log(err);
    }
}

function display_data(data){
    data.forEach(ele => {
        let search_result_div = document.createElement("a");
        search_result_div.innerText = ele;
        search_result_div.setAttribute('href',"./AddtoCart.html");
        search_result_div.addEventListener("click" , function(){
            set_local_storage(ele)
        })
        let search_bar = document.getElementById("results_div");
        search_bar.append(search_result_div);
    });
}


let timer_id ;

function debounce(get_data , delay){
    if(timer_id){
        clearTimeout(timer_id);
    }
    

    timer_id = setTimeout(function(){
        get_data();
    } , delay);
}

let med_names = [];

function set_local_storage(name){
    // console.log(name)
    let img1 = "https://media.istockphoto.com/photos/packet-of-generic-paracetamol-tablets-picture-id1022216070?s=612x612";
    let img2 ="https://media.istockphoto.com/photos/generic-paracetamol-isolated-on-white-picture-id157402355?b=1&k=20&m=157402355&s=170667a&w=0&h=Hq9ID8bkXzloQRM9S6mbztikuGKW0D4Ucs2_nArrQLU="
    let img3="https://media.istockphoto.com/photos/medicine-picture-id841614464?b=1&k=20&m=841614464&s=170667a&w=0&h=h_OpWfYHiw-tKuPMYzosA99XtbmpnV9PPeLOLZ-1C-A="
    let img4="https://media.istockphoto.com/photos/hydrocodone-is-an-analgesic-prescribed-as-potent-pain-medication-picture-id932555698?b=1&k=20&m=932555698&s=170667a&w=0&h=llH6tP5ZKopVW4YYCqQYI7rH-wHztEsQXxJ6vFu4Fyk="
    let img5 = "https://media.istockphoto.com/photos/paracetamol-pain-and-fever-medication-box-picture-id1199617301?b=1&k=20&m=1199617301&s=170667a&w=0&h=eZmHCesEjoGtTYC-BSLQ0lQQPOo7RITekYIHit6tJfI="
    let img6 = "https://media.istockphoto.com/photos/generic-paracetamol-tablets-picture-id1181471590?b=1&k=20&m=1181471590&s=170667a&w=0&h=jx6AFvbY8DRjtG3k7yfK-t00CRDJzWNsOPa180mV0wU=";
    
    let MRP = Math.floor((Math.random() * 100));
    let price = MRP - 5;
    med_names.push({name , img1 , img2 , img3, img4, img5, img6 , MRP , price} );
    localStorage.setItem("med_names" , JSON.stringify(med_names));

}

var k = JSON.parse(localStorage.getItem(("med_names")));
console.log(k[0].img1)