const name = 'Name';
let breakVar = 'DDOS';
console.log(`Herr / Frau ${name} beherrscht JavaScript`);

function clickAlert() {
  alert('Ich wurde geklickt!');
}

function hideMe() {
  document.getElementById('toHide').classList.toggle('hidden');
}

function breakMe() {
  while (true) {
    breakVar = 'D' + breakVar;
  }
}
