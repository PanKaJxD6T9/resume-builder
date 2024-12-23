import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

    export const AIchatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await AIchatSession.sendMessage("INSERT_INPUT_HERE");
    console.log(result.response.text());