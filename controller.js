function addUser({name, email, img}){
    $("#parent").append(`
    <div class="box-container col-3 p-3" data-aos="fade-down" data-aos-anchor-placement="top-bottom">
    <div class="box rounded row align-items-center bg-light">
        <div class="col-3">
            <img class="w-100 h-100 rounded-circle" src="${img}" alt=""/>
        </div>
        <div class="col-8 d-flex flex-column justify-contetn-between">
            <div class="name-text">${name}</div>
            <div>${email}</div>
        </div>
    </div>
</div>`);
}