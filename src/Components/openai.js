import OpenAI from "openai";
import { Open_AI_KEY } from "../Utils/Constants";

const client = new OpenAI({
  apiKey: Open_AI_KEY,
  dangerouslyAllowBrowser: true,
  // This is the default and can be omitted
});

export default client;
