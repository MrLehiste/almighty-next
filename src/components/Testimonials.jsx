import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/001-ye-cheng.jpg'
import avatarImage2 from '@/images/avatars/002-anfen.jpg'
import avatarImage3 from '@/images/avatars/003-zhenxin.jpg'
import avatarImage4 from '@/images/avatars/004-songyu.jpg'
import avatarImage5 from '@/images/avatars/005-dingli.jpg'
import avatarImage6 from '@/images/avatars/006-lizhi.jpg'

const testimonials = [
  [
    {
      content:
        'A Lesson Learned from Watering New Believers: coming before God and laying down a foundation is a process that takes time. Doing my duty in this way made me feel truly peaceful and at ease.',
      author: {
        name: 'By Ye Cheng',
        role: '',
        image: avatarImage1,
      },
    },
    {
      content:
        'How I Let Go of a Secure Job: choosing to put down my job and take the path of belief in God, I know this was the wisest choice I have ever made in my life. Being able to expend and dedicate my life to preaching the gospel and testifying to God is more valuable and meaningful than anything else I could do.',
      author: {
        name: 'By Lizhi',
        role: '',
        image: avatarImage6,
      },
    },
  ],
  [
    {
      content:
        'Reflections After Becoming Sick During the Pandemic: Lots of people have died in this pandemic, and I survived entirely thanks to God’s wondrous care and salvation for me. I’m filled with gratitude and praise for God. I give thanks to God for His love and salvation!',
      author: {
        name: 'By Ding Li',
        role: '',
        image: avatarImage5,
      },
    },
    {
      content:
        'In 2020, I accepted the work of Almighty God in the last days. It was my great blessing to be able to welcome the Lord’s return. To spread this incredibly important good news, I started preaching the gospel',
      author: {
        name: 'By An’fen',
        role: '',
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        'Growing Through Failures and Setbacks: I had a real, personal experience that God’s love and salvation for mankind are pure and real. God is always guiding me, leading me—He is by my side. I have more resolve to do my duty and satisfy God.',
      author: {
        name: 'By Zhenxin',
        role: '',
        image: avatarImage3,
      },
    },
    {
      content:
        'Through my experience, I realized that people who live by satanic philosophies can only become despicable and mean. Not only do they harm the church’s work, they make God hate and detest them. Practicing the truth and God’s words can bring us true spiritual release and freedom.',
      author: {
        name: 'By Song Yu',
        role: '',
        image: avatarImage4,
      },
    },
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
          Testimonies
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          Relying on God Is the Greatest Wisdom.{/* Almighty God is so widely popular. */}
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="h-14 w-14 overflow-hidden rounded-full bg-slate-50">
                          <Image src={testimonial.author.image} alt="" />
                        </div>
                      </figcaption>
                    </figure>
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
