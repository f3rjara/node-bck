function showGoogleMaps( longitud , latiitud , nombreH, direH, city)
{
    //Creamos el punto a partir de la latitud y longitud de una dirección:
    var point = new google.maps.LatLng( latiitud , longitud );

    //Configuramos las opciones indicando zoom, punto y tipo de mapa
    var myOptions = {
        zoom: 15, 
        center: point, 
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    //Creamos el mapa y lo asociamos a nuestro contenedor
    var map = new google.maps.Map(document.getElementById("mapHotel"),  myOptions);

    //Mostramos el marcador en el punto que hemos creado
    var marker = new google.maps.Marker({
        position:point,
        map: map,
        title: `${nombreH} - ${direH} | ${city} `
    });
}


// console.log(id_hotel[2])

const getHotel = ( async ( ) => {   
    console.log('ingresando')
    var ruta = window.location.pathname;
    var data = ruta.split("/", 3);
    const id_hotel = data[2];    
    const res = await fetch('/api/hotel/'+id_hotel);
    if (!res.ok) {
        console.log('error');
        console.log(res)
    } else {
        const hotel = await res.json();
        console.log ( hotel )
        mostrarDatos ( hotel )
    }
})();

function mostrarDatos ( hotel ) {
    document.querySelector('#NameHotel').innerHTML = hotel.nombre
    document.querySelector('#hero_hotel').style.backgroundImage = `url('../img/uploads/${hotel.ruta}')`
    document.querySelector('#long_desc').innerHTML = hotel.long_desc
    document.querySelector('#NameHotel2').innerHTML = hotel.nombre
    document.querySelector('#direccion').innerHTML = hotel.direccion
    document.querySelector('#ciudad').innerHTML = hotel.ciudad
    document.querySelector('#img-2').src=`../img/uploads/${hotel.ruta}` 
    
    
    let longitud = hotel.long
    let latiitud = hotel.lat
    let nombreH = hotel.nombre 
    let direH = hotel.direccion
    let city = hotel.ciudad

    showGoogleMaps( longitud , latiitud , nombreH, direH, city )
}







