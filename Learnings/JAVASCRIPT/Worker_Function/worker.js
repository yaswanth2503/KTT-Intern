self.onmessage = function(event) {
    let password = event.data;
    let hashedPassword = 0;

    // Simulating heavy computation (Runs in background)
    for (let i = 0; i < 1e9; i++) {
        hashedPassword = (hashedPassword + password.charCodeAt(i % password.length)) % 1000000;
    }

    postMessage(hashedPassword); // Send result back
};
