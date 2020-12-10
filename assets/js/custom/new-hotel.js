
const formulario = document.querySelector('#FormNewHotel');

formulario.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log("hola");

    const NameHotel = document.querySelector('#NameHotel').value
    const CityHotel = document.querySelector('#CityHotel').value
    const AddressHotel = document.querySelector('#AddressHotel').value
    const LonHotel = document.querySelector('#LonHotel').value
    const LatHotel = document.querySelector('#LatHotel').value
    const StarHotel = document.querySelector('#StarHotel').value
    const ShortHotel = document.querySelector('#ShortHotel').value
    const LongHotel = document.querySelector('#LongHotel').value
    const PhotoHotel = document.querySelector('#PhotoHotel').files

    const formData = new FormData();

    formData.append('nombre',NameHotel )
    formData.append('ciudad',CityHotel )
    formData.append('direccion',AddressHotel )
    formData.append('long',LonHotel )
    formData.append('lat',LatHotel )
    formData.append('estrellas',StarHotel )
    formData.append('short_desc',ShortHotel )
    formData.append('long_desc',LongHotel )
    formData.append('ruta_foto',PhotoHotel[0] )

        
    const res = await fetch('/api/hotels', {
        method: 'POST',
        body: formData
    });
    if (!res.ok) {
        console.log('Error de servidor');
        console.log(res)
    } else {
        const data = await res.json();
        console.log(data.message);
        formulario.reset();
    }
});