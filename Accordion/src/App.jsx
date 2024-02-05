import "./styles.css";
import {useState} from "react";

const faqs = [
    {
        title: "Where are these chairs assembled?",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
        title: "How long do I have to return my chair?",
        text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
        title: "Do you ship to countries outside the EU?",
        text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
];

export default function App({data}) {
    return (
        <div>
            <Accordion data={faqs}/>
        </div>
    );
}

const Accordion = ({data}) => {
    return (
        <div class= "accordion">
            {data.map((faq, index) => (
                <AccordionItem title={faq.title} text={faq.text} num={index}/>
            ))}

        </div>
    );
}

const AccordionItem = ({num, title, text})  => {
    const [isOpen, setisOpen] = useState(false);

    function handleToggle() {
        setisOpen(isOpen => !isOpen);
    }
    return  (
        <div className={isOpen ? "item open" : "item"} onClick={handleToggle}>
        <p className='number'>{num < 9 ? `0${num+1}` : num + 1}</p>
        <p className='title'>{title}</p>
        <p className='icon'>{isOpen ? "-" : "+"}</p>
            {isOpen && <div className='content-box'>{text}</div>}
    </div>
)
}
