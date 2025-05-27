import Hero from '../components/home/Hero'
import QuickNavigation from '../components/home/QuickNavigation'
import FeaturedPrograms from '../components/home/FeaturedPrograms'
import Statistics from '../components/home/Statistics'
import Testimonials from '../components/home/Testimonials'
import CallToAction from '../components/home/CallToAction'

const Home = () => {
  return (
    <div>
      <Hero />
      <QuickNavigation />
      <FeaturedPrograms />
      <Statistics />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

export default Home 