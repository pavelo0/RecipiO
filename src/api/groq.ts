import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function main(products: string, cuisine: string) {
  const chatCompletion = await getGroqChatCompletion(products, cuisine);
  return chatCompletion.choices[0]?.message?.content || '';
}

export async function getGroqChatCompletion(products: string, cuisine: string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: `Your task is to generate a recipe of some meal from the next products: ${products}. Also it's fully nesseccary to offer only ${cuisine} food. WRITE ONLY IN ENGLISH`,
      },
    ],
    model: 'openai/gpt-oss-20b',
  });
}
