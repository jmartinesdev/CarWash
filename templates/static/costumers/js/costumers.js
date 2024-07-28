function add_car() {
    const container = document.getElementById('form-car');
    
    if (container) {
        const html = `
            <br>
            <div class="row">
                <div class="col-md">
                    <input type="text" placeholder="Car" class="form-control" name="car">
                </div>
                <div class="col-md">
                    <input type="text" placeholder="Registration Number" class="form-control" name="reg_number">
                </div>
                <div class="col-md">
                    <input type="number" placeholder="Year" class="form-control" name="year">
                </div>
            </div>
        `;
        container.innerHTML += html;
    } else {
        console.error('Container with id "form-car" not found.');
    }
}

function display_form(type) {
    var add_costumer = document.getElementById('add_costumer');
    var upd_costumer = document.getElementById('upd_costumer');

    if (type == "1") {
        upd_costumer.style.display = "none";
        add_costumer.style.display = "block";
    } else if (type == "2") {
        upd_costumer.style.display = "block";
        add_costumer.style.display = "none";
    }
}

function data_costumer(){
    costumer = document.getElementById("costumer-select");
    csrf_token = document.querySelector('[name=csrfmiddlewaretoken]')
    id_costumer = costumer.value

    data = new FormData()
    data.append('id_costumer', id_costumer)

    fetch("costumer/update_costumer/", {
        method: "POST",
        headers: {
            'X-CSRF_Token': csrf_token,
        },
        body: data 

    }).then(function(result){
        return result.json()
    }).then(function(data)){
        console.log('teste')
    }
}


