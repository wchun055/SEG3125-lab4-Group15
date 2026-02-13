function moveUser(eventName){
    element = document.getElementById(eventName);
    element.scrollIntoView();  
}

const form = document.getElementById("booking-form");
form.addEventListener('submit', function(Event){
    Event.preventDefault();
    makeBooking();
});

function makeBooking(){
    nameForm = document.getElementById("name-form");
    nameBooking = document.getElementById("name");
    nameBooking.innerText = "Name: " + nameForm.value;
    phoneNumberForm = document.getElementById("phone-number-form");
    phoneNumber = document.getElementById("phone-number");
    phoneNumber.innerText = "Phone Number: " + phoneNumberForm.value;
    barberForm = document.getElementById("barber-form");
    barber = document.getElementById("barber");
    barber.innerText = "Barber: " + barberForm.options[barberForm.selectedIndex].text;
    haircutForm = document.getElementById("haircut-form");
    haircut = document.getElementById("haircut");
    haircut.innerText = "Haircut: " + haircutForm.options[haircutForm.selectedIndex].text;
    dateForm = document.getElementById("date-form");
    date = document.getElementById("date");
    date.innerText = "Date: " + dateForm.value;
    timeForm = document.getElementById("time-form");
    time = document.getElementById("time"); 
    time.innerText = "Time: " + timeForm.value;
    notesForm = document.getElementById("notes-form");
    notes = document.getElementById("notes"); 
    if(notesForm.value != ""){
        notes.hidden = false;
        notes.innerText = "Additional Notes: " + notesForm.value;
    }
    else {
        notes.hidden = true;
    }
    form.reset();
    alert("Booking Successful!");
}