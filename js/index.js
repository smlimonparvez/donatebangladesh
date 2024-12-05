// Card Calculation
document.getElementById("donate-now-btn").addEventListener('click', function(){
    // console.log('clicked')
    const inputAmount = document.getElementById("input-amount").value;
    const totalAmount = document.getElementById("total-amount").innerText;

    if(inputAmount <= 0 || isNaN(inputAmount) || inputAmount.length <= 0 || inputAmount > totalAmount){
        alert('Incorrect Input, Please try again.');
        return;
    }
    my_modal_1.showModal();

    const cardAmount = document.getElementById("card-amount").innerText;
    // console.log(inputAmount, cardAmount);
    const totalCardAmount = Number(cardAmount) + Number(inputAmount);
    document.getElementById("card-amount").innerText = totalCardAmount;
    // console.log(totalAmount);
    const newTotalAmount = Number(totalAmount) - Number(inputAmount);
    document.getElementById("total-amount").innerText = newTotalAmount;
    document.getElementById('input-amount').value = '';

    // history push
    const title = document.getElementById('title').innerText;
    const date = new Date();
    const detailsHistoryCard = document.getElementById("history-card");
    const div = document.createElement('div');
    div.classList.add('shadow-lg', 'rounded-lg', 'p-5', 'border', 'space-y-3')
    div.innerHTML = `
    <p class="font-semibold text-base">${inputAmount} Taka is donate for ${title}</p>
    <p>Date: ${date}</p>
    `;
    detailsHistoryCard.appendChild(div);
})

// Toggole Feature
document.getElementById("history-btn").addEventListener('click', function(){
    document.getElementById("history-card").classList.remove('hidden');
    document.getElementById("donation-card").classList.add('hidden');
    document.getElementById("history-btn").classList.add('bg-lime-400');
    document.getElementById("donation-btn").classList.remove('bg-lime-400');
})

document.getElementById("donation-btn").addEventListener('click', function(){
    document.getElementById("donation-card").classList.remove('hidden');
    document.getElementById("history-card").classList.add('hidden');
    document.getElementById("donation-btn").classList.add('bg-lime-400');
    document.getElementById("history-btn").classList.remove('bg-lime-400');
})