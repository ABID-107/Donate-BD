//----------------- 1st card start--------------------
document.getElementById('donate-input-btn-1').addEventListener('click', function (event) {
    event.preventDefault()
    const balance = getNumberByText('main-balance')
    const enterAmount = getValueById('donate-input-1')
    const pushAmount = parseFloat(enterAmount)
    const res = balance - pushAmount
    const dateTime = new Date()
    const modal = document.getElementById('my_modal_1')
    if (enterAmount >= 500) {
        document.getElementById('main-balance').innerText = res
        const p = document.createElement('p')
        p.innerText = `${pushAmount} TK is donated for Flood at Noakhali, Bangladesh 
        Now it's: ${dateTime}`
        p.style.textAlign = 'center'
        p.style.fontWeight = 'bold'
        p.style.backgroundColor = '#6ee7b7'
        p.style.fontSize = '20px'
        p.style.padding = '20px'
        p.style.borderRadius = '10px'
        document.getElementById('transection-fild').appendChild(p)
        modal.showModal()
    }
    else {
        alert('please enter the right amount')
    }
})
//----------------- 1st card end--------------------
//----------------- 2nd card start--------------------
document.getElementById('donate-input-btn-2').addEventListener('click', function (event) {
    event.preventDefault()
    const balance = getNumberByText('main-balance')
    const enterAmount = getValueById('donate-input-2')
    const pushAmount = parseFloat(enterAmount)
    const res = balance - pushAmount
    const dateTime = new Date()
    const modal = document.getElementById('my_modal_1')
    if (enterAmount >= 600) {
        document.getElementById('main-balance').innerText = res
        const p = document.createElement('p')
        p.innerText = `${pushAmount} Tk is donated for Flood Relief in Feni,Bangladesh
        Now it's: ${dateTime}`
        p.style.textAlign = 'center'
        p.style.fontWeight = 'bold'
        p.style.backgroundColor = '#6ee7b7'
        p.style.fontSize = '20px'
        p.style.padding = '20px'
        p.style.borderRadius = '10px'
        document.getElementById('transection-fild').appendChild(p)
        modal.showModal()
    }
    else {
        alert('please enter the right amount')
    }
})
//----------------- 2nd card end--------------------
//----------------- 3rd card start--------------------
document.getElementById('donate-input-btn-3').addEventListener('click', function (event) {
    event.preventDefault()
    const balance = getNumberByText('main-balance')
    const enterAmount = getValueById('donate-input-3')
    const pushAmount = parseFloat(enterAmount)
    const res = balance - pushAmount
    const dateTime = new Date()
    const modal = document.getElementById('my_modal_1')
    if (enterAmount >= 1200) {
        document.getElementById('main-balance').innerText = res
        const p = document.createElement('p')
        p.innerText = `${pushAmount} Tk is Aid for Injured in the Quota Movement 
        Now it's: ${dateTime}`
        p.style.textAlign = 'center'
        p.style.fontWeight = 'bold'
        p.style.backgroundColor = '#6ee7b7'
        p.style.fontSize = '20px'
        p.style.padding = '20px'
        p.style.borderRadius = '10px'
        document.getElementById('transection-fild').appendChild(p)
        modal.showModal()
    }
    else {
        alert('please enter the right amount')
    }
})
//----------------- 3rd card end--------------------
document.getElementById('show-btn-1')
    .addEventListener('click', function () {
        showClickById('donation-section')
    })
document.getElementById('show-btn-2')
    .addEventListener('click', function () {
        showClickById('history-section')
    })

// Get all buttons (or any elements you want to make "active")
const buttons = document.querySelectorAll('.show-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons first
        buttons.forEach(btn => {
            btn.classList.remove('bg-lime-400', 'text-black');
            btn.classList.add('bg-gray-200', 'text-gray-800');
        });

        // Add active classes to clicked button
        button.classList.remove('bg-gray-200', 'text-gray-800');
        button.classList.add('bg-lime-400', 'text-black');
    });
});