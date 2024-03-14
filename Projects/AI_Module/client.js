document.addEventListener('DOMContentLoaded', () => {
    const chatLog = document.getElementById('chat-log');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    sendBtn.addEventListener('click', sendMessage);

    async function sendMessage() {
        const message = userInput.value;
        if (!message) return;

        try {
            const response = await fetch('/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            const data = await response.json();
            appendMessage('You', message);
            appendMessage('Bot', data.message);
            userInput.value = '';
            chatLog.scrollTop = chatLog.scrollHeight;
        } catch (error) {
            console.error('Error:', error.message);
            alert('An error occurred. Please try again later.');
        }
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${sender}: ${message}`;
        chatLog.appendChild(messageElement);
    }
});
