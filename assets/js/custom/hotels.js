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
        var NumStar = "";
        for (let index = 1; index <= 5; index++) {
            if (index <= hotel.estrellas) {
                NumStar += '<li> <img src="../img/star.svg"> </li>';
            }
            else{
                NumStar += '<li> <img src="../img/no-star.svg"> </li>';
            }
        }
        
        listHotels.innerHTML += `
            <div class="content-card col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div class="card card-hotel">
                    <a href="/hotel/${hotel._id}" class="img-hotel">
                        <img class="card-img-top" src="../img/uploads/${hotel.ruta}" alt="Card image cap">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${hotel.nombre}</h5>
                        <p class="card-text">${hotel.short_desc}</p>
                        <p class="card-text">
                            <ul class="star-hotel">
                                ${NumStar}
                            </ul>
                        </p>
                        <p class="card-text">
                            <small class="text-muted"> 
                                ${hotel.ciudad} <strong> | From COP ${hotel.precio}  </strong> 
                            </small>
                        </p>
                        <a href="/hotel/${hotel._id}" class="btn btn-read-more">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
}
