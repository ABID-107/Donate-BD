function getValueById(id) {
    const DonateValue = document.getElementById(id).value
    return DonateValue
}
function getNumberByText(id) {
    const numberId = document.getElementById(id).innerText
    const parsText = parseFloat(numberId)
    return parsText
}
function getTextById(id) {
    const text = document.getElementById(id).innerText
    return text
}
function getElementById(id) {
    const getId = document.getElementById(id)
    return getId
}
function showClickById(id) {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
function handleButtonClick(Button1, Button2) {
    // Add active class to clicked button
    Button1.classList.remove('bg-slate-200');
    Button2.classList.add('bg-lime-400');

    // Reset other button
    Button1.classList.remove('bg-slate-200');
    Button2.classList.add('bg-lime-400');
}