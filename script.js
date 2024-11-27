
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

// Initialize an empty cart
let cart = [];

// Function to update the cart display
function updateCart() {
    const cartItemCount = document.querySelector('.cart .item-count');
    cartItemCount.textContent = `Items in Cart: ${cart.length}`;
}

// Add product to the cart when the button is clicked
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product-item');
        const productId = product.getAttribute('data-id');
        const productName = product.getAttribute('data-name');
        const productPrice = parseFloat(product.getAttribute('data-price'));

        const cartItem = {
            id: productId,
            name: productName,
            price: productPrice
        };

        // Add the product to the cart array
        cart.push(cartItem);
        updateCart();
    });
});

// View Cart Function (expandable)
document.getElementById('view-cart').addEventListener('click', function() {
    alert(`You have ${cart.length} item(s) in your cart.`);
});


