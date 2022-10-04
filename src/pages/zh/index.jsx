import Head from 'next/head'

import { Header } from '@/components/zh/Header'
import { Hero } from '@/components/zh/Hero'
import { PrimaryFeatures } from '@/components/zh/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/zh/SecondaryFeatures'
import { CallToAction } from '@/components/zh/CallToAction'
import { Testimonials } from '@/components/zh/Testimonials'
import { VideoTestimonials } from '@/components/zh/VideoTestimonials'
import { Pricing } from '@/components/zh/Pricing'
import { Faqs } from '@/components/zh/Faqs'
import { Footer } from '@/components/zh/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>歡迎來到iHealth NMN - 這裡是最完整的中文NMN網站，提供您最充分的NMN資訊和最優質的NMN產品!</title>
        <meta
          name="description"
          content="歡迎來到iHealth NMN - 這裡是最完整的中文NMN網站，提供您最充分的NMN資訊和最優質的NMN產品!"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        {/* <PrimaryFeatures /> */}
        <VideoTestimonials />
        <SecondaryFeatures />
        <CallToAction />
        {/* <Testimonials />
        <Pricing />
        <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
