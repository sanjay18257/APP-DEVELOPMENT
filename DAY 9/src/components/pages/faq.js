import React, { useState } from "react";
import '../../assets/css/FAQ.css';

const FAQ = () => {
  const [faqs] = useState([
    {
      question: 'How do I create an email marketing campaign?',
      answer: 'To create an email marketing campaign, follow these steps: (1) Choose your email marketing platform. (2) Build your email list. (3) Design your email content. (4) Set the campaign goals and parameters. (5) Schedule and send your emails.',
    },
    {
      question: 'What are some effective email marketing strategies?',
      answer: 'Effective email marketing strategies include personalization, segmenting your email list, crafting compelling subject lines, providing value, and using analytics to measure performance.',
    },
    {
      question: 'How can I improve my email open rates?',
      answer: 'To improve email open rates, focus on creating engaging subject lines, sending emails at the right time, and segmenting your audience for targeted content. A/B testing subject lines can also help optimize open rates.',
    },
    {
      question: 'What is the importance of email list hygiene?',
      answer: 'Email list hygiene is crucial to maintain the quality of your email list. Regularly clean your list to remove inactive or invalid email addresses, reducing bounce rates and improving deliverability.',
    },
    {
      question: 'How can I measure the success of my email marketing campaigns?',
      answer: 'Measure email marketing success through key performance indicators (KPIs) like open rates, click-through rates (CTR), conversion rates, and ROI. Use these metrics to refine your future campaigns.',
    },
  ]);

  const [expanded, setExpanded] = useState(null);

  const toggleFAQ = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  return (
    <div className="faqbk">
      <div>
        <br></br>
        <br></br>
        <div className="privacy-text1">
          FREQUENTLY ASKED QUESTIONS
        </div>
        <br />
        {faqs.map((faq, index) => (
          <div key={index} className="faq-ques">
            <div
              className={`faq-question ${expanded === index ? 'faq-question2' : 'faq-question1'}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {expanded === index && (
                <div className="faq-answer">
                  <div className="ans-text">{faq.answer}</div>
                </div>
              )}
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default FAQ;