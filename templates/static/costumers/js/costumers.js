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
    const costumer = document.getElementById("costumer-select");
    const csrf_token = document.querySelector('[name=csrfmiddlewaretoken]').value;
    const id_costumer = costumer.value;

    const data = new FormData();
    data.append('id_costumer', id_costumer);

    fetch("update_costumer/", {
        method: "POST",
        headers: {
            'X-CSRFToken': csrf_token,  // Corrigido cabeçalho CSRF
        },
        body: data 
    })
    .then(function(response){
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(function(data){
        console.log('Update successful:', data);
    })
    .catch(function(error){
        console.error('Error:', error);
    });

    console.log(data)
}
