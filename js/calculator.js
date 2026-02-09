const VAT_RATES = {
  // Update these values to match current law or your content strategy.
  // Keep them in ONE place.
  standard: 0.19,
  reduced1: 0.09,
  reduced2: 0.05
};

function round2(n){ return Math.round((n + Number.EPSILON) * 100) / 100; }

function formatMoney(n, currency){
  try{
    return new Intl.NumberFormat(undefined, {
      style:"currency", currency, maximumFractionDigits:2
    }).format(n);
  }catch{
    return `${n.toFixed(2)} ${currency}`;
  }
}

function compute(){
  const mode = document.getElementById("mode").value; // net-to-gross or gross-to-net
  const amount = Number(document.getElementById("amount").value || 0);
  const rateKey = document.getElementById("rate").value;
  const currency = document.getElementById("currency").value;

  const r = VAT_RATES[rateKey] ?? VAT_RATES.standard;

  let net=0, vat=0, gross=0;

  if (mode === "net-to-gross"){
    net = amount;
    vat = amount * r;
    gross = net + vat;
  }else{
    gross = amount;
    net = gross / (1 + r);
    vat = gross - net;
  }

  net = round2(net); vat = round2(vat); gross = round2(gross);

  document.getElementById("outNet").textContent = formatMoney(net, currency);
  document.getElementById("outVat").textContent = formatMoney(vat, currency);
  document.getElementById("outGross").textContent = formatMoney(gross, currency);

  document.getElementById("outRate").textContent = `${(r*100).toFixed(2)}%`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("calcForm").addEventListener("input", compute);
  document.getElementById("calcForm").addEventListener("submit", (e) => {
    e.preventDefault();
    compute();
  });
  compute();
});
