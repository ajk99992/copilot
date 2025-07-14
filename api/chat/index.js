const axios = require('axios');

module.exports = async function (context, req) {
    const userMessage = req.body?.message || '';
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

    try {
        const openaiResponse = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userMessage }]
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        // Get the AI's reply
        const botReply = openaiResponse.data.choices[0].message.content;
        context.res = {
            headers: { "Content-Type": "application/json" },
            body: { reply: botReply }
        };
    } catch (err) {
        context.res = {
            status: 500,
            body: { reply: "Sorry, there was an error connecting to OpenAI." }
        };
    }
};