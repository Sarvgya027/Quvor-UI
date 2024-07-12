import BelowHero from "@/components/BelowHero"
import Footer from "@/components/Footer"
import GetQualityEducation from "@/components/GetQualityEducation"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import WatchOurCourses from "@/components/WatchOurCourses"


function page() {
  return (
    <>
      <div className="">

        <Navbar />
        <Hero />
        <BelowHero />
        <GetQualityEducation />
        <WatchOurCourses />
        <Footer />

      </div>
    </>
  )
}

export default page