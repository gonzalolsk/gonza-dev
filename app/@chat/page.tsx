'use client'

import { useEffect, useState } from "react";
import { sendQuestion } from "./actions";

interface Message {
    id: string;
    text: string;
    owner: 'user' | 'bot';
}

export default function ChatPage(){

    const [isLoading, setIsLoading] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: 'Ask me anything!', owner: 'bot' }, 
    ]);

    useEffect(() => {
        // Scrolear al final del chat
        const msgBox = document.getElementById('msg-box');
        if (msgBox) {
        msgBox.scrollTop = msgBox.scrollHeight;
        }
    }, [messages])

    async function handleSubmit(event: React.ChangeEvent<HTMLFormElement>){
        event.preventDefault()

        const formData = new FormData(event.target)

        setIsLoading(true)

        setMessages(messages => messages.concat({ 
            id: Math.random().toString(), 
            text: formData.get('question') as string, 
            owner: 'user' }
        ))
        
        event.target.reset();

        const answer = await sendQuestion(formData.get('question') as string)

        setMessages(messages => messages.concat({ 
            id: Math.random().toString(), 
            text: answer, 
            owner: 'bot' }
        ))

        setIsLoading(false)


    }

    return(
    <>
        <button id="chat-button" className="fixed bottom-4 right-4 z-10 bg-slate-500 text-white p-4 rounded-full" onClick={() => document.getElementById('opened-chat')?.classList.toggle('hidden')}>
            Chat
        </button>
            
        <section id="opened-chat" className="p-4 grid gap-4 bg-slate-600 fixed bottom-20 right-4 ">  
            <article id="msg-box" className="grid gap-4 max-h-[320px] h-[320px] items-start overflow-y-auto">
                {messages.map(message => (
                    <div key={message.id} className={` p-4 rounded-3xl bg-slate-700 text-white w-fit ${message.owner === 'user' ? 'bg-slate-900 ml-auto rounded-br-none' : 'rounded-bl-none' }`}>
                        {message.text}
                    </div>
                ))}
            </article>

            <form onSubmit={handleSubmit} className="flex">
                <input className="rounded-l-lg px-4 leading-[2.5rem] bg-white text-black flex-1" type="text" name="question" />
                <button disabled={isLoading} className="disabled:opacity-50 bg-slate-500 leading-[2.5rem] px-4 rounded-r-lg text-white  " type="submit">
                    {isLoading ? 'Sending...' : 'Send'}
                </button>
            </form>
        </section>  
        </>
    )
}