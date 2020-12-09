const sectionNotHotel = document.querySelector('section.not-hotels')
const sectionHotels = document.querySelector('section.section-hotels')
const loader = document.querySelector('#loader-img')
const listHotels = document.querySelector('#row-hotels')


const getHoteles = ( async () => {   
    const res = await fetch('/api/hotels');
    if (!res.ok) {
        console.log('error');
        console.log(res)
    } else {
        const hoteles = await res.json();
        if ( hoteles.length == 0) {            
            loader.classList.remove('d-flex')
            loader.classList.add('d-none')
            sectionNotHotel.classList.remove('d-none')
            sectionHotels.classList.add('d-none')
        }
        else {
            loader.classList.remove('d-flex')
            loader.classList.add('d-none')
            sectionNotHotel.classList.add('d-none')
            sectionHotels.classList.remove('d-none')            
            mostarHotels( hoteles )
        }
    }
})();

function mostarHotels( hoteles ) {
    
    hoteles.forEach(hotel => {
        console.log( hotel )
        listHotels.innerHTML += `
            <div class="content-card col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div class="card ">
                    <img class="card-img-top" src="../img/slide_1.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${hotel.nombre}</h5>
                        <p class="card-text">LO MEJORCITO DE LA ZONA</p>
                        <p class="card-text">
                            ${hotel.estrellas}
                        </p>
                        <p class="card-text"><small class="text-muted">${hotel.ciudad}</small></p>
                    </div>
                </div>
            </div>
        `;
    });
}
