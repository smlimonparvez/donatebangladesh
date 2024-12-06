function commonInputValue(id){
    const inputAmountValue = document.getElementById(id).value;
    return Number(inputAmountValue);
}

function commonInnerText(id){
    const totalAmountText = document.getElementById(id).innerText;
    return Number(totalAmountText);
}

function featureOnOff(id){
    document.getElementById("history-card").classList.add('hidden');
    document.getElementById("donation-card").classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function colorOnOff(id){
//     // document.getElementById("donation-btn").classList.remove('bg-lime-400');
//     // document.getElementById("history-btn").classList.remove('bg-lime-400');
//     document.getElementById(id).classList.add('bg-lime-400');
document.getElementById("donation-btn").classList.remove('bg-lime-400');
document.getElementById("history-btn").classList.remove('bg-lime-400');
document.getElementById(id).classList.add('bg-lime-400');
}