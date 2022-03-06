

async function get_data(){
    let search_bar = document.getElementById("results_div");
    search_bar.textContent = ""
    query = document.getElementById("search_input_shiv").value;
    if(query == "") return;
    console.log(query);
    try {
        let res = await fetch(`https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms=${query}`);
        let data = await res.json();
        display_data(data[1]);
    } catch (err) {
        console.log(err);
    }
}

function display_data(data){
    data.forEach(ele => {
        let search_result_div = document.createElement("p");
        search_result_div.textContent = ele;
        console.log(ele)
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