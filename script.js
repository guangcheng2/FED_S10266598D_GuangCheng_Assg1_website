



/*appointment*/
window.onload = function() {
  const dateDropdown = document.getElementById("date");
  const timeSlotDropdown = document.getElementById("time-slot");

  // Ensure the elements are found
  if (dateDropdown && timeSlotDropdown) {
    dateDropdown.onchange = function() {
      const selectedDate = new Date(dateDropdown.value);
      const dayOfWeek = selectedDate.toLocaleDateString("en-US", { weekday: "long" });

      // Generate time slots based on selected day
      generateTimeSlots(dayOfWeek);
    };
  } else {
    console.log("Elements not found.");
  }

  function generateTimeSlots(day) {
    timeSlotDropdown.innerHTML = "<option value=''>Choose a time</option>"; // Reset dropdown
    const workingHours = {
      Monday: { start: "11:00", end: "20:00" },
      Tuesday: { start: "11:00", end: "20:00" },
      Wednesday: { start: "11:00", end: "20:00" },
      Thursday: { start: "11:00", end: "20:00" },
      Friday: { start: "11:00", end: "20:00" },
      Saturday: { start: "12:00", end: "18:00" },
      Sunday: { start: "12:00", end: "18:00" },
    };

    const hours = workingHours[day];
    if (!hours) return;

    let [startHour, startMin] = hours.start.split(":").map(Number);
    let [endHour, endMin] = hours.end.split(":").map(Number);

    while (startHour < endHour || (startHour === endHour && startMin < endMin)) {
      const timeSlot = `${startHour.toString().padStart(2, "0")}:${startMin.toString().padStart(2, "0")}`;
      const option = document.createElement("option");
      option.value = timeSlot;
      option.textContent = timeSlot;
      timeSlotDropdown.appendChild(option);

      startMin += 30;
      if (startMin >= 60) {
        startHour += 1;
        startMin = 0;
      }
    }
  }
};
Min += 30;
    if (startMin >= 60) {
      startHour += 1;
      startMin = 0;
    }
  



/* Schedule */
window.onload = function() {
  const appointmentForm = document.getElementById('appointment-form');
  const confirmationMessage = document.getElementById('confirmation-message');

  appointmentForm.onsubmit = function(event) {
    event.preventDefault(); // Prevents the form from submitting
    confirmationMessage.style.display = 'block'; // Show the confirmation message
    appointmentForm.reset(); // Optional: Reset the form after submission
  };
};




