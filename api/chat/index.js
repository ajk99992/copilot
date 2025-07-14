module.exports = async function (context, req) {
    const userMessage = req.body?.message || '';
    // For now, just echo the user's message
    context.res = {
        headers: { "Content-Type": "application/json" },
        body: {
            reply: `You said: ${userMessage}`
        }
    };
};