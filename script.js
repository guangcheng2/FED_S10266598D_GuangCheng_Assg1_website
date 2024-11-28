
const consultationTypeSelect = document.getElementById('consultation-type');
const form = document.getElementById('consultation-form');

consultationTypeSelect.addEventListener('change', function () {
    const selectedOption = consultationTypeSelect.value;

    if (selectedOption === 'initial') {
        
        form.querySelector('h2').innerText = 'Initial Consultation Form';
        form.querySelector('form').querySelector('button').innerText = 'Submit Initial Consultation';
    } else if (selectedOption === 'follow-up') {
        
        form.querySelector('h2').innerText = 'Follow-Up Consultation Form';
        form.querySelector('form').querySelector('button').innerText = 'Submit Follow-Up Consultation';
    }
});

/*appointment*/
$(document).ready(function () {
    // Generate Calendar
    const daysInMonth = new Date(2024, 11, 0).getDate(); // December 2024
    const calendar = $('#calendar');
    
    for (let i = 1; i <= daysInMonth; i++) {
      let day = $('<div class="day">').text(i);
      day.on('click', function () {
        $('#calendar .day').removeClass('selected');
        $(this).addClass('selected');
        $('#selected-date').text(`Selected Date: December ${i}, 2024`);
        $('#book-slot').prop('disabled', false);
      });
      calendar.append(day);
    }
  
    
    $('#book-slot').on('click', function () {
      alert(`Appointment booked for December ${$('#selected-date').text().split(' ')[2]}, 2024.`);
      $('#book-slot').prop('disabled', true);
      $('#selected-date').text('');
      $('#calendar .day').removeClass('selected');
    });
  });
  
  

/* products*/

const cart = [];
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const products = [
    { id: 1, name: "Dog Treats", price: 5.99 },
    { id: 2, name: "Cat Toy", price: 3.49 },
    { id: 3, name: "Premium Pet Food", price: 14.99 },
    { id: 4, name: "Chew Bone", price: 6.99 },
    { id: 5, name: "Bird Seed", price: 4.99 },
    { id: 6, name: "Hamster Wheel", price: 10.49 },
];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = parseInt(e.target.closest('.product-card').dataset.id);
        const product = products.find(p => p.id === productId);
        cart.push(product);
        updateCart();
    });
});

function updateCart() {
    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            const cartItem = document.createElement('p');
            cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(cartItem);
        });
    }
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = total.toFixed(2);
}



