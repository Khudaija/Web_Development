// Define your API key and endpoint
const apiKey = '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'; // Replace with your actual API key
const apiUrl = 'https://api.openai.com/v1/completions';

// Define your prompt
const prompt = 'Once upon a time, ';

// Define the request data
const requestData = {
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 50 // Adjust based on desired response length
};

// Send a POST request to the OpenAI API
axios.post(apiUrl, requestData, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    }
})
.then(response => {
    // Handle the response
    const generatedText = response.data.choices[0].text.trim();
    document.getElementById('generated-text').innerText = generatedText;
})
.catch(error => {
    // Handle errors
    console.error('Error:', error.message);
    document.getElementById('generated-text').innerText = 'An error occurred. Please try again later.';
});




// const axios = require('axios');

// // Define your API key and endpoint
// const apiKey = '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'; // Replace with your actual API key
// const apiUrl = 'https://api.openai.com/v1/completions';

// // Define your prompt
// const prompt = 'Once upon a time, ';

// // Define the request data
// const requestData = {
//     model: 'text-davinci-003',
//     prompt: prompt,
//     max_tokens: 50 // Adjust based on desired response length
// };

// // Send a POST request to the OpenAI API
// axios.post(apiUrl, requestData, {
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${apiKey}`
//     }
// })
// .then(response => {
//     // Handle the response
//     console.log(response.data.choices[0].text.trim());
// })
// .catch(error => {
//     // Handle errors
//     console.error('Error:', error.message);
// });
