function onScanSuccess(decodedText, decodedResult) {
  document.getElementById("result").innerText = decodedText;
  html5QrcodeScanner.clear(); // stop scanning after successful read
}

function onScanFailure(error) {
  // You can log scan errors if needed
}

const html5QrcodeScanner = new Html5QrcodeScanner(
  "reader",
  { fps: 10, qrbox: 250 },
  false
);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);
