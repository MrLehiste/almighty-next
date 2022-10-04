import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is NMN?',
      answer:
        'NMN is the abbreviation of Nicotinamide mononucleotide, molecular weight 334.2192, which is an essential substance for the human body and is also abundant in some fruits and vegetables. In the human body, NMN is the precursor of NAD+ and its function is manifested through NAD+.',
    },
    {
      question: 'What is the function of NMN?',
      answer: 'Reverses human aging. Eliminates wrinkles in the skin. Significantly assists with cardiovascular system diseases. Extends human life with long-term use. In short, NMN can significantly improve various chronic symptoms caused by aging, and fundamentally helps to combat aging.',
    },
    {
      question: 'Why can NMN reverse aging?',
      answer:'Research published in the three top international academic journals, Science, Nature and Cell has shown that NMN is the only cell protein (cytokine) demonstrated as having the function of reversing aging. It is able to activate all seven of the known anti-aging proteins in the body and comprehensively fight aging. It is the most comprehensive and powerful cell anti-aging factor known to science and is considered the most likely substance to control human aging at this stage.',
    },
  ],
  [
    {
      question: 'Is it safe to take NMN?',
      answer:'Taking NMN is safe and has no side effects. NMN itself is a naturally occurring substance in the human body and is also found in many foods. Research has confirmed that NMN supplementation does not affect the activity of various enzymes in the supplement synthesis pathway, and oral NMN has no effect on the activities of NAMPT, PARP, NMNAT and other enzymes in the supplementary synthesis pathway, which directly changes the level of NAD+ in vivo.',
    },
    {
      question: 'Why is NMN called the "elixir of life"?',
      answer:'A study by the Dr. Paul F. Glenn Center for Biological Mechanisms of Aging at Harvard University has found that NMN can reverse aging. Mice with a body condition equating to being more than 60 years old, were given drinking water containing NMN for a week and achieved a body condition equivalent to a 20-year-old, and the life span of the mice taking NMN was extended by 20%. Since then, NMN has been called the "elixir of life". NMN\'s powerful "rejuvenating" effect comes from its three mechanisms: activation of the longevity proteins Sirtuins1~7, activation of the DNA repair enzyme PARP, and activation of the immunomodulatory ring ADP ribose Synthetase.',
    },
    {
      question: 'Is NMN being hyped?',
      answer:'Unlike the false concepts of stem cells and sheep placenta that have recently been circulating in China, NMN is the world\'s first scientifically proven substance to significantly reverse aging and extend life, which has stemmed from serious scientific research. It was initially discovered by Harvard University\'s David Hinkler Laboratory in 2014.',
    },
  ],
  [
    {
      question: 'Is NMN really that amazing?',
      answer:'In a 2013 Cell article, Sinclair\'s lab found that supplementing 22-month-old mice with the NAD+ precursor NMN reversed the mitochondrial function in their muscles to levels seen at 6 months of age, which is equivalent to restoring humans from 60-70 years old to 20-30 years old. Compared to normal white mice, these mice burned fat for energy and kept their muscles in a younger state, even at an older age. Their blood flow and bone density, as well as the number of immune cells, all increased without significant side effects.',
    },
    {
      question: 'Why is NMN so effective and does it contain hormones?',
      answer:'NMN does not contain any hormones. The effectiveness is due to the use of small molecule promotion technology, which means that the NMN is absorbed into the body very quickly, it is absorbed intact through the digestive system, enters the bloodstream in 2~3 minutes, and raises the NMN content in the tissues within 15 minute. 90% is absorbed by the bloodstream, and rapidly raises the NAD+ level in the blood, liver and other organs.',
    },
    {
      question: 'Is it ineffective if I don\'t feel anything after using it?',
      answer:'Aging is a relatively slow process, how you feel after taking this product is related to various factors such as age and health condition, and it is difficult to directly perceive the reduction in DNA damage and aging rate, therefore, no obvious feeling does not mean it is having no effect. Since the amount of NAD+ in the body gradually decreases with age, older people will feel the effect more obviously than younger people. According to statistics, less than 2% of people do not feel the effect.',
    },
  ],
  [
    {
      question: 'How much NMN does an adult need to supplement daily?',
      answer:'Experiments have proven that a 70Kg adult should take 600mg of NMN per day, and the minimum effective oral dose of NMN for a normal person is 200mg per day.',
    },
    {
      question: 'Are there any adverse reactions from taking NMN?',
      answer:'There are no adverse reactions from taking NMN. It is a natural substance, free of artificial chemicals and hormones, safe, non-toxic and without side effects.',
    },
    {
      question: 'Is there any dependence created when taking NMN?',
      answer:'No, there is no dependency.',
    },
  ],
  [
    {
      question: 'What effect does NMN have on health?',
      answer:'NMN is an important source of energy for cellular activities, which can prevent age-related physical decline, improve type 2 diabetes, prevent neurodegenerative diseases (Parkinson\'s, Alzheimer\'s), etc.',
    },
    {
      question: 'Who is NMN suitable for?',
      answer:'Can the elderly take it? Can both men and women take it? Can people with high blood pressure, high blood fat and high blood sugar take it? Everyone can take it. Especially for those who are struggling with anti-aging, poor sleep quality, low immunity, become easily fatigued, have a poor liver function, Parkinson\'s patients, brain stroke patients, Alzheimer\'s patients, etc., NMN can be of significant help.',
    },
    {
      question: 'Where is iHealth NMN made?',
      answer:'All the raw materials of the products come from renowned suppliers in the United States and Germany and are produced in accordance with cGMP standards under the supervision of FDA registration in the U.S. Made in the U.S., directly mailed from the factory to ensure the high quality, safety and reliability of the products from the source.',
    },
  ],
  [
    {
      question: 'At what age should I start taking iHealth NMN?',
      answer:'NMN can be supplemented from the age of 25 onwards. Before the age of 25, the loss of NAD+ in the body is not obvious and there is no need for supplementation.',
    },
    {
      question: 'How can I be sure that the NMN I buy from iHealth is genuine?',
      answer:'All products are shipped directly from the U.S. Postage, tax and customs clearance are all included in the price, to ensure the authenticity.',
    },
    {
      question: 'Is NMN orally administered or injectable?',
      answer:'Orally. No injections, no need to have any tubes embedded. You can achieve anti-aging simply and risk free through oral intake, without any toxic side effects. Achieving beauty that is healthy, natural, safe and long-lasting!',
    },
  ],
  [
    {
      question: '',
      answer:'',
    },
    {
      question: '',
      answer:'',
    },
    {
      question: '',
      answer:'',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <div className="absolute top-0 left-1/2 -translate-x-[30%] -translate-y-[25%]">
        <Image
          src={backgroundImage}
          alt=""
          width={1558}
          height={946}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
