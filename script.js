function calculate() {
    let principal = parseFloat(document.getElementById('principal').value);
    let rate = parseFloat(document.getElementById('rate').value);
    let time = parseFloat(document.getElementById('time').value);
    
    if (!principal || !rate || !time) {
        document.getElementById('result').innerText = 'Fill all fields!';
        return;
    }
    
    let interest = (principal * rate * time) / 100;
    let total = principal + interest;
    
    document.getElementById('result').innerText = 
        `Interest: $${interest.toFixed(2)} | Total: $${total.toFixed(2)}`;
}