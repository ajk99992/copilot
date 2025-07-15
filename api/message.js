import { app } from '@azure/functions';

app.http('message', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    return {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: "Hello from Azure!" })
    };
  }
});
