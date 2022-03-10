const cryptoCurrency = document.getElementById('cryptoCurrency');
const coinsList = document.getElementById('select1');
const currencyList = document.getElementById('select2');
const result =  document.getElementById('result');


let crypto = ['binance-coin-wormhole','ethereum','solana','near','harmony','fantom','tron','ripple','filecoin','matic-network'];
let fiat = ['inr','usd','eur'];


crypto.sort();
fiat.sort();


const CryptoCoinsList = () => {

      for (let i = 0; i < crypto.length; i++) {
        let icon = '<img src="icons/"' + crypto[i] + '.png'+ '">' + '</img>';
        var token = crypto[i];
        
        if (token.includes('-'))
        {
            token = token.split('-')[0];
        }
        
        coinsList.innerHTML = coinsList.innerHTML +
          icon + '<option value="' + crypto[i] + '">' + token.toUpperCase() + '</option>';
      }

};


const FIATCurrencyList = () => {

      for (var i = 0; i < fiat.length; i++) {
        currencyList.innerHTML = currencyList.innerHTML +
          '<option value="' + fiat[i] + '">' + fiat[i].toUpperCase() + '</option>';
      }

};


const fetchCurrentPrice = () => {
  
  const selectedCurrency = currencyList.value;
  const selectedCoin = coinsList.value;
  let url = `https://api.coingecko.com/api/v3/simple/price?ids=${selectedCoin}&vs_currencies=${selectedCurrency}`;
  
  fetch(url)
    .then(data => data.json())
    .then(data => {
      result.innerHTML = parseInt(cryptoCurrency.value) * parseFloat(data[selectedCoin][selectedCurrency]);
    });
}


CryptoCoinsList();
FIATCurrencyList();