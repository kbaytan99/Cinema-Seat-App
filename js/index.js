// Hello World, This App is made by Kaan whint love <3.
const container = document.querySelector('.container');
const number = document.querySelector('.count');
const price = document.querySelector('#price');
const movie = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');
const buySeats = document.querySelector('#buySeats');


document.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected');
        number.innerHTML = container.querySelectorAll('.seat.selected').length;
        price.textContent = container.querySelectorAll('.seat.selected').length * movie.options[movie.selectedIndex].value;
        
    }
    movie.addEventListener('change', function(){
        number.innerHTML = container.querySelectorAll('.seat.selected').length;
        price.textContent = container.querySelectorAll('.seat.selected').length * movie.options[movie.selectedIndex].value;
    });
});

buySeats.addEventListener('click', function(e){
    const selectedSeats = container.querySelectorAll('.seat.selected');
    const selectedSeatArr = [];
    const seatssArr = [];
    selectedSeats.forEach(function(seat){
        selectedSeatArr.push(seat);
    });

    seats.forEach(function(seat){
        seatssArr.push(seat);
    });

    let  selectedSeatIndex = selectedSeatArr.map(function(seat){
        return seatssArr.indexOf(seat);
    })
    localStorage.setItem('Film:'+ ' ' + movie.options[movie.selectedIndex].text, JSON.stringify(selectedSeatIndex));
    alert('Your purchase has been completed properly, Film:' + movie.options[movie.selectedIndex].text + ' Seat Numbers: ' + selectedSeatIndex + ' To pay:' + container.querySelectorAll('.seat.selected').length * movie.options[movie.selectedIndex].value);
});

