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

