
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
