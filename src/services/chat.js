import axios from 'axios';

const baseUrl = 'https://api.openai.com/v1/chat/completions';
const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const giveResponse = async (prompt) => {
  const response = await axios.post(
    baseUrl,
    {
      model: 'gpt-4o-mini',
      max_tokens: 100,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
    }
  );
  return response.data.choices[0].message;
};

export { giveResponse };
