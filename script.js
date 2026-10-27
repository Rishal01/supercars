let currentRate = 1200;

function selectCar(carName, rate) {
    document.getElementById('carName').value = carName;
    currentRate = rate;
    calculateTotal();
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

function calculateTotal() {
    const days = document.getElementById('rentalDays').value || 1;
    const total = days * currentRate;
    document.getElementById('totalCost').innerText = `Total: $${total.toLocaleString()}`;
}

function confirmBooking() {
    const car = document.getElementById('carName').value;
    const days = document.getElementById('rentalDays').value;
    alert(`Thank you! Your booking request for the ${car} (${days} day(s)) has been submitted.`);
}
