//DOM
const photoRestaurant = document.getElementById('photoRestaurant');
const contentRestaurant = document.getElementById('contentRestaurant');
const presentation = document.getElementById('presentation');


window.onlod = () => {
    let loader = document.getElementById('loader');
    loader.style.visibility = 'hiden';
    loader.style.opacity='0';
}


firebase.database().ref().child('restaurant/barranco')
.on('value', (data) => {
    var html = '';
    data.forEach(e => {
        var element = e.val();
        var nombre = element.name;
        var address = element.address;
        var phone = element.phone;
        var photo = element.photo;
        html += "<li>"+nombre+"</li>"+"<li>"+address+"</li>"+"<li>"+phone+"</li>"+"<li>"+photo+"</li>";
        
    });
    contentRestaurant.innerHTML = html;    
})

firebase.database().ref().child('restaurant/barranco')
.on('value', (data) => {
    var imagen = '';
    data.forEach(e => {
        var element = e.val();
        var photo = element.photo;
        imagen += "<img src="+photo+">";       
    });
    presentation.innerHTML = imagen;    
})
