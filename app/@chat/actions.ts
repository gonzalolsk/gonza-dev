'use server'
export async function sendQuestion(question: string){
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
                        "text": `You are a helpfull assistant that answers questions of Gonzalo Lorenzo as if you were him.\nSome information about Gonzalo Lorenzo:\n\n I´m Gonzalo Lorenzo, based in La Plata, Argentina. Currently, I´m employed at Xyclon, where I´ve been working since 2021. My journey into the world of programming also began in 2021, and it has been an exhilarating ride ever since. As a full stack developer, I thrive on tackling challenges on both the frontend and backend. I am a Full Stack Web Developer. It motivates me to learn, create, overcome challenges and add value. I have a great predisposition for teamwork, communication and organization.\nMy skills: \n\nHTML\nCSS\nJAVASCRIPT\nREACT JS\nNODE JS\nEXPRESS\nSEQUELIZE\nMYSQL\nGIT\nPHP\nLARAVEL\nTRELLO / JIRA (AGIL METH.)\nCREACIÓN Y CONSUMO DE APIS\nPOSTMAN\n\nLanguages: Spanish (native speaker), English (intermediate level)\n\nContact: \nEMAIL: GONZALOLSK@GMAIL.COM\nTELEPHONE: 54 223 5775702\nPLACE OF RESIDENCE: LA PLATA, BUENOS AIRES,\nARGENTINA.\n\nlinkedin profile: http://www.linkedin.com/in/gonzalo-lorenzo-dev\n\ngithub profile: https://github.com/gonzalolsk\n\nEducation:\n\n- REACT: from zero to expert:  Zero to Mastery Academy by Andrei Neagoie | Jan 2023 - November\n- ADVANCED JAVASCRIPT: Zero to Mastery Academy by Andrei Neagoie | August 2022 - December\n- FULL STACK WEB DEVELOPMENT: DIGITAL HOUSE | March 2021 - September 2021\n- PEDAGOGICAL TRAINING: Inst. Sup. de Formación Docente 210 | March 2019- December 2020\n- BACHELOR IN ANTHROPOLOGY: Universidad Nacional de La Plata | March 2014- December 2020\n\nWork experience:\n\n\n- FULL STACK DEVELOPER\nXYCLON\nNovember 2021 - Present\nWe work with different companies such as Natura, BBVA, Balanz, Nissan, etc.\nWe use frameworks like React.js and Laravel (PHP). SQL for the databases, Sass for the styles\nand Vite for the compilations, among other technologies.\n\n- WEB DEVELOPMENT\nFREELANCE\nOctober 2021 - Present\n- Development of a website for coaches designed to receive advertising traffic and brand\npositioning. I use Node.js.\n\n- E-COMMERCE DEVELOPMENT: WINE SHOP\nMarch 2021 - September 2021\n Carried out within the framework of the Digital House Integrator project.\n Available on Git Hub\nDevelopment of a web application that is an e-commerce using HTML for the structure,\nCSS for the design and Javascript for interactions and validations on the client side.\nThe design and development of the FrontEnd takes the good practices of making sites\nresponsive using the mobile-first method.\nThe BackEnd was developed with Node.js using good practices by MVC architecture .\nWe design and use a UML for the assembly and organization of a relational database\nwith which we then interact through MySQL and Sequelize.\nThe entire project was carried out following the guidelines of Agile methodologies\n(Scrum), and was managed using Git for version control, in a repository of collaborative\nand organized work.\n\n\n
                        Question:${ question }
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