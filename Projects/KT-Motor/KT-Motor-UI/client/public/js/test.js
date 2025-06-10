document.getElementById('voice-search').addEventListener('click', () => {
  // Check browser support
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert('Your browser does not support voice recognition.');
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onstart = () => {
    console.log('Listening...');
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase().trim();
    console.log("Voice input:", transcript);

    // Reset previous values
    document.getElementById('transport').value = '';
    document.getElementById('vehicle').value = '';
    document.getElementById('number').value = '';

    // Basic parsing logic – you can extend this
    if (transcript.includes('tata') || transcript.includes('bharat') || transcript.includes('transport')) {
      document.getElementById('transport').value = 'Tata Motors'; // adjust for your values
    }
    if (transcript.includes('truck') || transcript.includes('tempo')) {
      document.getElementById('vehicle').value = 'Truck'; // adjust for your options
    }
    const numberMatch = transcript.match(/[a-z]{2}[0-9]{2}\s?[a-z]{1,2}\s?[0-9]{3,4}/i);
    if (numberMatch) {
      document.getElementById('number').value = numberMatch[0].toUpperCase();
    }

    // Auto-trigger filter loading
    document.getElementById('load-filter').click();
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    alert("Could not recognize voice. Please try again.");
  };
});
