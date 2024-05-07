import Groq from "groq-sdk";
import * as dotenv from 'dotenv';

dotenv.config();

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

async function main() {
    const chatCompletion = await getGroqChatCompletion();
    // Print the completion returned by the LLM.
    const resp = chatCompletion.choices[0]?.message?.content || "";

    console.log(resp);
}

async function getGroqChatCompletion() {
    return groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: "Me conte uma piada"
            }
        ],
        model: "llama3-8b-8192"
    });
}

main();