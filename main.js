function currencyConvert() {
    const amount = document.querySelector(".amount").value;
    const from = document.querySelector(".from").value;
    const to = document.querySelector(".to").value;
    const resultDiv = document.querySelector(".resultDiv");

    if (amount && from && to) {
        fetch(`https://v6.exchangerate-api.com/v6/c78aa43531a9ee3a2b6da0a5/latest/${from}`)
        .then((response) => response.json())
        .then((data) => {
            const rate = data.conversion_rates[to];
            const result = (amount * rate).toFixed(2);
            resultDiv.innerHTML = `${amount} ${from} = ${result} ${to}`;
        }).catch((error) => {
            resultDiv.innerHTML = `Somthing Went Wrong ${error}`;
        })
    } else {
        result.innerHTML = "Please Fill All Feilds";
    }
}