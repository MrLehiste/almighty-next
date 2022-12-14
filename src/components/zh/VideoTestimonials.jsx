import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'

const testimonials = [
  [
    {
      content:
        'NMN is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.',
      author: {
        name: 'Sheryl Berge',
        role: '',
        image: avatarImage1,
      },
    },
    {
      content:
        'I’m trying to get more NMN products. Please get back to me right away.',
      author: {
        name: 'Amy Hahn',
        role: '',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        'The best part about NMN is every time I take it I notice immediate improvements.',
      author: {
        name: 'Leland Kiehn',
        role: '',
        image: avatarImage5,
      },
    },
    {
      content:
        'There are so many things I love about NMN, but looking better and healthier is a top one.',
      author: {
        name: 'Erin Powlowski',
        role: 'COO at Armstrong Inc',
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        'I used to have to take so many other products, now NMN is all I need.',
      author: {
        name: 'Peter Renolds',
        role: '',
        image: avatarImage3,
      },
    },
    {
      content:
        'This is the fourth such product I have tried, but hands down NMN is the best.',
      author: {
        name: 'Amy Hahn',
        role: '',
        image: avatarImage4,
      },
    },
  ],
]

const videoList = [
  [
    {
      video: 'https://video.fujisuzuki.com/nmn/nmn-harvard.mp4',
      poster: 'https://video.fujisuzuki.com/nmn/nmn-harvard.jpg',
    },
    {
      video: 'https://video.fujisuzuki.com/nmn/nmn-sinai.mp4',
      poster: 'https://video.fujisuzuki.com/nmn/nmn-sinai.jpg',
    },
  ],
  [
    {
      video: 'https://video.fujisuzuki.com/nmn/nmn-cell.mp4',
      poster: 'https://video.fujisuzuki.com/nmn/nmn-cell.jpg',
    },
    {
      video: 'https://video.fujisuzuki.com/nmn/nmn-greater-boston.mp4',
      poster: 'https://video.fujisuzuki.com/nmn/nmn-greater-boston.jpg',
    },
  ],
  [
    {
      video: 'https://video.fujisuzuki.com/nmn/nmn-nad.mp4',
      poster: 'https://video.fujisuzuki.com/nmn/nmn-nad.jpg',
    },
    {
      video: 'https://video.fujisuzuki.com/nmn/nmn-physiological.mp4',
      poster: 'https://video.fujisuzuki.com/nmn/nmn-physiological.jpg',
    },
  ],
  [
    {
      video: 'https://video.fujisuzuki.com/nmn/nmn-ch-tv-1.mp4',
      poster: 'https://video.fujisuzuki.com/nmn/nmn-ch-tv-1.jpg',
    },
    {
      video: 'https://video.fujisuzuki.com/nmn/nmn-ch-tv-2.mp4',
      poster: 'https://video.fujisuzuki.com/nmn/nmn-ch-tv-2.jpg',
    },
  ],
  [
    {
      video: 'https://video.fujisuzuki.com/nmn/nmn-ch-tv-3.mp4',
      poster: 'https://video.fujisuzuki.com/nmn/nmn-ch-tv-3.jpg',
    },
    {
      video: 'https://video.fujisuzuki.com/nmn/nmn-ch-tv-4.mp4',
      poster: 'https://video.fujisuzuki.com/nmn/nmn-ch-tv-4.jpg',
    },
  ],
  [
    {
      video: 'https://video.fujisuzuki.com/nmn/nmn-world-class.mp4',
      poster: 'https://video.fujisuzuki.com/nmn/nmn-world-class.jpg',
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

function VideoTag ( props ) { 
  if (!props.video) {
    return null;
  }
  return(
    <video controlsList="nodownload" controls width="100%" src={props.video}
        poster={props.poster} preload="auto">
        <source src={props.video} type="video/mp4" />
        <source src={props.webm} type="video/webm" />
        Your browser does not support HTML5 video.
    </video>
  );
}

export function VideoTestimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            NMN Gene BALANCE.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            通过补充NAD +的前体物质来改善健康和长寿.
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {videoList.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <VideoTag video={testimonial.video} poster={testimonial.poster} />
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
