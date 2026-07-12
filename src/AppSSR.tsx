import { Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import StuccoInstallation from './pages/services/StuccoInstallation'
import StuccoRepair from './pages/services/StuccoRepair'
import StuccoFinishing from './pages/services/StuccoFinishing'
import CommercialStucco from './pages/services/CommercialStucco'
import EifsContractor from './pages/services/EifsContractor'
import StuccoRemediation from './pages/services/StuccoRemediation'
import ThinStoneVeneer from './pages/services/ThinStoneVeneer'
import Reviews from './pages/Reviews'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import ServiceAreas from './pages/ServiceAreas'
import CountyPage from './pages/CountyPage'
import AustinArea from './pages/areas/Austin'
import RoundRockArea from './pages/areas/RoundRock'
import CedarParkArea from './pages/areas/CedarPark'
import GeorgetownArea from './pages/areas/Georgetown'
import PflugervilleArea from './pages/areas/Pflugerville'
import WestlakeArea from './pages/areas/Westlake'
import ResidentialStuccoLocation from './pages/service-locations/ResidentialStuccoLocation'
import CommercialStuccoLocation from './pages/service-locations/CommercialStuccoLocation'
import StuccoRepairLocation from './pages/service-locations/StuccoRepairLocation'
import EifsContractorLocation from './pages/service-locations/EifsContractorLocation'
import InteriorPlasterLocation from './pages/service-locations/InteriorPlasterLocation'
import ThinStoneVeneerLocation from './pages/service-locations/ThinStoneVeneerLocation'
import FAQs from './pages/FAQs'
import Gallery from './pages/Gallery'
import CommercialQuote from './pages/CommercialQuote'
import NotFound from './pages/NotFound'

export default function AppSSR() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/austin-stucco-services" element={<Services />} />
        <Route path="/austin-stucco-installation" element={<StuccoInstallation />} />
        <Route path="/austin-stucco-repair" element={<StuccoRepair />} />
        <Route path="/austin-stucco-finishing" element={<StuccoFinishing />} />
        <Route path="/austin-commercial-stucco" element={<CommercialStucco />} />
        <Route path="/eifs-contractor-austin" element={<EifsContractor />} />
        <Route path="/austin-stucco-remediation" element={<StuccoRemediation />} />
        <Route path="/austin-thin-stone-veneer" element={<ThinStoneVeneer />} />
        <Route path="/service-areas" element={<ServiceAreas />} />
        <Route path="/service-areas/:slug" element={<CountyPage />} />
        <Route path="/service-area/austin" element={<AustinArea />} />
        <Route path="/service-area/round-rock" element={<RoundRockArea />} />
        <Route path="/service-area/cedar-park" element={<CedarParkArea />} />
        <Route path="/service-area/georgetown" element={<GeorgetownArea />} />
        <Route path="/service-area/pflugerville" element={<PflugervilleArea />} />
        <Route path="/service-area/westlake" element={<WestlakeArea />} />
        <Route path="/travis-county" element={<Navigate to="/service-areas/travis-county-stucco" replace />} />
        <Route path="/williamson-county" element={<Navigate to="/service-areas/williamson-county-stucco" replace />} />
        <Route path="/bell-county" element={<Navigate to="/service-areas/bell-county-stucco" replace />} />
        <Route path="/hays-county" element={<Navigate to="/service-areas/hays-county-stucco" replace />} />
        <Route path="/burnet-county" element={<Navigate to="/service-areas/burnet-county-stucco" replace />} />
        <Route path="/llano-county" element={<Navigate to="/service-areas/llano-county-stucco" replace />} />
        <Route path="/comal-county" element={<Navigate to="/service-areas/comal-county-stucco" replace />} />
        <Route path="/bastrop-county" element={<Navigate to="/service-areas/bastrop-county-stucco" replace />} />
        <Route path="/blanco-county" element={<Navigate to="/service-areas/blanco-county-stucco" replace />} />
        <Route path="/gillespie-county" element={<Navigate to="/service-areas/gillespie-county-stucco" replace />} />
        <Route path="/caldwell-county" element={<Navigate to="/service-areas/caldwell-county-stucco" replace />} />
        <Route path="/lee-county" element={<Navigate to="/service-areas/lee-county-stucco" replace />} />
        <Route path="/milam-county" element={<Navigate to="/service-areas/milam-county-stucco" replace />} />
        <Route path="/brazos-county" element={<Navigate to="/service-areas/brazos-county-stucco" replace />} />
        <Route path="/mclennan-county" element={<Navigate to="/service-areas/mclennan-county-stucco" replace />} />
        <Route path="/residential-stucco/:countySlug" element={<ResidentialStuccoLocation />} />
        <Route path="/commercial-stucco/:countySlug" element={<CommercialStuccoLocation />} />
        <Route path="/stucco-repair/:countySlug" element={<StuccoRepairLocation />} />
        <Route path="/eifs-contractor/:countySlug" element={<EifsContractorLocation />} />
        <Route path="/interior-plaster/:countySlug" element={<InteriorPlasterLocation />} />
        <Route path="/thin-stone-veneer/:countySlug" element={<ThinStoneVeneerLocation />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/request-commercial-quote" element={<CommercialQuote />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  )
}
