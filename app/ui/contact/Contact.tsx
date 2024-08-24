import ContactItem from "./ContactItem";
import linkedinIcon from "@/public/images/linkedin.svg";
import linkedinHoverIcon from "@/public/images/linkedin2.svg";
import emailIcon from "@/public/images/gmail.svg";
import emailHoverIcon from "@/public/images/gmail2.svg";
import githubIcon from "@/public/images/github.svg";
import githubHoverIcon from "@/public/images/github2.svg";

function Contact() {
    const items = [
        {
            icon: linkedinIcon,
            hoverIcon: linkedinHoverIcon,
            link: "https://www.linkedin.com/in/gonzalo-lorenzo-dev/",
            alt: "LinkedIn",
            text: "LinkedIn",
            intervalDelay: 4000
        },
        {
            icon: emailIcon,
            hoverIcon: emailHoverIcon,
            link: "mailto:gonzalolsk@gmail.com",
            alt: "Email",
            text: "Email",
            intervalDelay: 5000
        },
        {
            icon: githubIcon,
            hoverIcon: githubHoverIcon,
            link: "https://github.com/gonzalolsk",
            alt: "Github",
            text: "Github",
            intervalDelay: 4500
        }
    ];

    return (
        <section id="contact" className="section w-full px-3 pb-20 bg-gradient-to-r from-green-500 to-purple-500 text-black dark:text-white dark:bg-slate-700">
            <h2 className="text-3xl font-bold mb-20 text-center">Reach out!</h2>
            <div className="flex flex-col md:flex-row md:space-x-20 space-y-6 md:space-y-0">
                {items.map((item, i) => (
                    <ContactItem
                        key={item.alt}
                        icon={item.icon}
                        hoverIcon={item.hoverIcon}
                        link={item.link}
                        alt={item.alt}
                        text={item.text}
                        intervalDelay={item.intervalDelay}
                    />
                ))}
            </div>
        </section>
    );
}



export default Contact;