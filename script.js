
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
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");

    const serviceNameElement = document.querySelector("#service-name");
    if (service) {
        const formattedService = service.replace(/-/g, " ");
        serviceNameElement.innerText = `Schedule an Appointment for ${formattedService}`;
    }

    
    const calendarEl = document.getElementById("calendar");

    if (calendarEl) {
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: "dayGridMonth",
            headerToolbar: {
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay"
            },
            selectable: true,
            dateClick: (info) => {
                alert(`You selected: ${info.dateStr}`);
            }
        });

        calendar.render();
    } else {
        console.error("Calendar container (#calendar) not found!");
    }
});

