'use server'
export async function sendQuestion(question: string){

    if(!process.env.GEMINI_SYS_PROMPT) throw new Error('Missing GEMINI_SYS_PROMPT')
    if(!process.env.GEMINI_API_KEY) throw new Error('Missing GEMINI_API_KEY')

    const answer = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=${process.env.GEMINI_API_KEY}`, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                "contents": [
                {
                    "parts": [
                        {
                        "text": `${process.env.GEMINI_SYS_PROMPT}
                        \n\nQuestion:${ question }
                        \n\nAnswer:`
                        }
                    ]
                    }
                ],
                "generationConfig": {
                "temperature": 1,
                "topK": 0,
                "topP": 0.95,
                "maxOutputTokens": 8192,
                "stopSequences": []
                },
                "safetySettings": [
                {
                    "category": "HARM_CATEGORY_HARASSMENT",
                    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                    "category": "HARM_CATEGORY_HATE_SPEECH",
                    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                    "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                    "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
                    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
                }
                ]
            }
        )
    }).then(res => res.json() as Promise<{candidates: {content: {parts: {text:string}[]}}[]}>)
    .then(data => data.candidates[0].content.parts[0].text)

    return answer
}