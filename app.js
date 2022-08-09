// https://calculator.swiftutors.com/doppler-effect-approaching-receiver-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const newFrequencyofApproachingReceiverRadio = document.getElementById('newFrequencyofApproachingReceiverRadio');
const sourceFrequencyRadio = document.getElementById('sourceFrequencyRadio');
const receiverVelocityRadio = document.getElementById('receiverVelocityRadio');
const waveVelocityRadio = document.getElementById('waveVelocityRadio');

let newFrequencyofApproachingReceiver;
let sourceFrequency = v1;
let receiverVelocity = v2;
let waveVelocity = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

newFrequencyofApproachingReceiverRadio.addEventListener('click', function() {
  variable1.textContent = '(f0) Source Frequency (Hz)';
  variable2.textContent = '(ur) Receiver Velocity (m/s)';
  variable3.textContent = '(v) Wave Velocity (m/s)';
  sourceFrequency = v1;
  receiverVelocity = v2;
  waveVelocity = v3;
  result.textContent = '';
});

sourceFrequencyRadio.addEventListener('click', function() {
  variable1.textContent = '(f1) New Frequency of Approaching Receiver (Hz)';
  variable2.textContent = '(ur) Receiver Velocity (m/s)';
  variable3.textContent = '(v) Wave Velocity (m/s)';
  newFrequencyofApproachingReceiver = v1;
  receiverVelocity = v2;
  waveVelocity = v3;
  result.textContent = '';
});

receiverVelocityRadio.addEventListener('click', function() {
  variable1.textContent = '(f1) New Frequency of Approaching Receiver (Hz)';
  variable2.textContent = '(f0) Source Frequency (Hz)';
  variable3.textContent = '(v) Wave Velocity (m/s)';
  newFrequencyofApproachingReceiver = v1;
  sourceFrequency = v2;
  waveVelocity = v3;
  result.textContent = '';
});

waveVelocityRadio.addEventListener('click', function() {
  variable1.textContent = '(f1) New Frequency of Approaching Receiver (Hz)';
  variable2.textContent = '(f0) Source Frequency (Hz)';
  variable3.textContent = '(ur) Receiver Velocity (m/s)';
  newFrequencyofApproachingReceiver = v1;
  sourceFrequency = v2;
  receiverVelocity = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(newFrequencyofApproachingReceiverRadio.checked)
    result.textContent = `New Frequency of Approaching Receiver = ${computeNewFrequencyofApproachingReceiver().toFixed(2)} Hz`;

  else if(sourceFrequencyRadio.checked)
    result.textContent = `Source Frequency = ${computeSourceFrequency().toFixed(2)} Hz`;

  else if(receiverVelocityRadio.checked)
    result.textContent = `Receiver Velocity = ${computeReceiverVelocity().toFixed(2)} m/s`;

  else if(waveVelocityRadio.checked)
    result.textContent = `Wave Velocity = ${computeWaveVelocity().toFixed(2)} m/s`;
})

// calculation

function computeNewFrequencyofApproachingReceiver() {
  return Number(sourceFrequency.value) * (1 + (Number(receiverVelocity.value) / Number(waveVelocity.value)));
}

function computeSourceFrequency() {
  return Number(newFrequencyofApproachingReceiver.value) / (1 + (Number(receiverVelocity.value) / Number(waveVelocity.value)));
}

function computeReceiverVelocity() {
  return ((Number(newFrequencyofApproachingReceiver.value) / Number(sourceFrequency.value)) - 1) * Number(waveVelocity.value);
}

function computeWaveVelocity() {
  return Number(receiverVelocity.value) / ((Number(newFrequencyofApproachingReceiver.value) / Number(sourceFrequency.value)) - 1);
}