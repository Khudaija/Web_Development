const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Handle OPTIONS preflight requests
app.options('/chat', (req, res) => {
    res.header('Allow', 'POST');
    res.status(200).send();
});

app.post('/chat', async (req, res) => {
    const { message } = req.body;
    const apiKey = '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'; // Replace with your OpenAI API key

    const requestData = {
        model: 'text-davinci-003',
        prompt: message,
        max_tokens: 150
    };

    try {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestData)
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from OpenAI API');
        }

        const data = await response.json();
        const botResponse = data.choices[0].text.trim();

        res.json({ message: botResponse });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



/* This JavaScript code snippet is setting up a basic server using Express, a popular Node.js web
application framework. Here's a breakdown of what the code is doing: */
/* The line `// const express = require('express');` is a JavaScript comment that is used to document
the code. In this case, it is indicating that the line is commented out, which means that it is not
currently active or being executed. */
// const express = require('express');
// const bodyParser = require('body-parser');
// const fetch = require('node-fetch');

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// app.use(express.static('public'));

// app.post('/chat', async (req, res) => {
//     const { message } = req.body;
//     const apiKey = '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'; // Replace with your OpenAI API key

//     const requestData = {
//         model: 'text-davinci-003',
//         prompt: message,
//         max_tokens: 150
//     };

//     try {
//         const response = await fetch('https://api.openai.com/v1/completions', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${apiKey}`
//             },
//             body: JSON.stringify(requestData)
//         });

//         if (!response.ok) {
//             throw new Error('Failed to fetch data from OpenAI API');
//         }

//         const data = await response.json();
//         const botResponse = data.choices[0].text.trim();

//         res.json({ message: botResponse });
//     } catch (error) {
//         console.error('Error:', error.message);
//         res.status(500).json({ error: 'An error occurred' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
