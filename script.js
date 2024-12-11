const currentMonthElement = document.getElementById('current-month');
const daysContainer = document.getElementById('days-container');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');

let currentDate = new Date();

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    currentMonthElement.textContent = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    daysContainer.innerHTML = '';

    // Add empty slots for the previous month's days
    for (let i = 0; i < firstDay; i++) {
        daysContainer.innerHTML += '<div></div>';
    }

    // Add days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;

        // Highlight today
        const today = new Date();
        if (day === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
            dayElement.classList.add('today');
        }

        daysContainer.appendChild(dayElement);
    }
}

// Navigate between months
prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Initial render
renderCalendar();
