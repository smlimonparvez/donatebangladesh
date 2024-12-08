// Card 1
document
  .getElementById("donate-now-btn-1")
  .addEventListener("click", function () {
    const inputAmount = commonInputValue("input-amount-1");
    const totalAmount = commonInnerText("total-amount");

    if (
      inputAmount <= 0 ||
      isNaN(inputAmount) ||
      inputAmount.length === 0 ||
      inputAmount > totalAmount
    ) {
      alert("Incorrect Input, Please try again.");
      document.getElementById("input-amount-1").value = "";
      return;
    }
    my_modal_1.showModal();

    const cardAmount = commonInnerText("card-amount-1");
    const totalCardAmount = cardAmount + inputAmount;
    document.getElementById("card-amount-1").innerText = totalCardAmount;
    const newTotalAmount = totalAmount - inputAmount;
    document.getElementById("total-amount").innerText = newTotalAmount;
    document.getElementById("input-amount-1").value = "";
    document.getElementById('img').classList.add('hidden');

    // history push
    const title = document.getElementById("title-1").innerText;
    const date = new Date();
    const detailsHistoryCard = document.getElementById("history-card");
    const div = document.createElement("div");
    div.classList.add(
      "shadow-lg",
      "rounded-lg",
      "p-5",
      "border",
      "space-y-3",
      "mb-5"
    );
    div.innerHTML = `
    <p class="font-semibold text-base">${inputAmount} Taka is donate for ${title}</p>
    <p>Date: ${date}</p>
    `;
    detailsHistoryCard.appendChild(div);
  });

// card 2
document
  .getElementById("donate-now-btn-2")
  .addEventListener("click", function () {
    const inputAmount = commonInputValue("input-amount-2");
    const totalAmount = commonInnerText("total-amount");

    if (
      inputAmount <= 0 ||
      isNaN(inputAmount) ||
      inputAmount.length === 0 ||
      inputAmount > totalAmount
    ) {
      alert("Incorrect Input, Please try again.");
      document.getElementById("input-amount-2").value = "";
      return;
    }
    my_modal_2.showModal();

    const cardAmount = commonInnerText("card-amount-2");
    const totalCardAmount = cardAmount + inputAmount;
    document.getElementById("card-amount-2").innerText = totalCardAmount;
    const newTotalAmount = totalAmount - inputAmount;
    document.getElementById("total-amount").innerText = newTotalAmount;
    document.getElementById("input-amount-2").value = "";
    document.getElementById('img').classList.add('hidden');

    // history push
    const title = document.getElementById("title-2").innerText;
    const date = new Date();
    const detailsHistoryCard = document.getElementById("history-card");
    const div = document.createElement("div");
    div.classList.add(
      "shadow-lg",
      "rounded-lg",
      "p-5",
      "border",
      "space-y-3",
      "mb-5"
    );
    div.innerHTML = `
    <p class="font-semibold text-base">${inputAmount} Taka is donate for ${title}</p>
    <p>Date: ${date}</p>
    `;
    detailsHistoryCard.appendChild(div);
  });

// card 3
document
  .getElementById("donate-now-btn-3")
  .addEventListener("click", function () {
    const inputAmount = commonInputValue("input-amount-3");
    const totalAmount = commonInnerText("total-amount");

    if (
      inputAmount <= 0 ||
      isNaN(inputAmount) ||
      inputAmount.length === 0 ||
      inputAmount > totalAmount
    ) {
      alert("Incorrect Input, Please try again.");
      document.getElementById("input-amount-3").value = "";
      return;
    }
    my_modal_3.showModal();

    const cardAmount = commonInnerText("card-amount-3");
    const totalCardAmount = cardAmount + inputAmount;
    document.getElementById("card-amount-3").innerText = totalCardAmount;
    const newTotalAmount = totalAmount - inputAmount;
    document.getElementById("total-amount").innerText = newTotalAmount;
    document.getElementById("input-amount-3").value = "";
    document.getElementById('img').classList.add('hidden');

    // history push
    const title = document.getElementById("title-3").innerText;
    const date = new Date();
    const detailsHistoryCard = document.getElementById("history-card");
    const div = document.createElement("div");
    div.classList.add(
      "shadow-lg",
      "rounded-lg",
      "p-5",
      "border",
      "space-y-3",
      "mb-5"
    );
    div.innerHTML = `
    <p class="font-semibold text-base">${inputAmount} Taka is donate for ${title}</p>
    <p>Date: ${date}</p>
    `;
    detailsHistoryCard.appendChild(div);
  });

// Toggole Feature
document.getElementById("history-btn").addEventListener("click", function () {
  featureOnOff("history-card");
  colorOnOff("history-btn");
});

document.getElementById("donation-btn").addEventListener("click", function () {
  featureOnOff("donation-card");
  colorOnOff("donation-btn");
});
