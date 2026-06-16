import { Routes, Route } from 'react-router-dom'
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
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import AustinArea from './pages/areas/Austin'
import RoundRockArea from './pages/areas/RoundRock'
import CedarParkArea from './pages/areas/CedarPark'
import GeorgetownArea from './pages/areas/Georgetown'
import PflugervilleArea from './pages/areas/Pflugerville'
import WestlakeArea from './pages/areas/Westlake'
import TravisCountyArea from './pages/areas/TravisCounty'
import WilliamsonCountyArea from './pages/areas/WilliamsonCounty'
import BellCountyArea from './pages/areas/BellCounty'
import HaysCountyArea from './pages/areas/HaysCounty'
import BurnetCountyArea from './pages/areas/BurnetCounty'
import LlanoCountyArea from './pages/areas/LlanoCounty'
import ComalCountyArea from './pages/areas/ComalCounty'
import BastropCountyArea from './pages/areas/BastropCounty'
import BlancoCountyArea from './pages/areas/BlancoCounty'
import GillespieCountyArea from './pages/areas/GillespieCounty'
import CaldwellCountyArea from './pages/areas/CaldwellCounty'
import LeeCountyArea from './pages/areas/LeeCounty'
import MilamCountyArea from './pages/areas/MilamCounty'
import BrazosCountyArea from './pages/areas/BrazosCounty'
import McLennanCountyArea from './pages/areas/McLennanCounty'
import NotFound from './pages/NotFound'

export default function App() {
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
        <Route path="/service-area/austin" element={<AustinArea />} />
        <Route path="/service-area/round-rock" element={<RoundRockArea />} />
        <Route path="/service-area/cedar-park" element={<CedarParkArea />} />
        <Route path="/service-area/georgetown" element={<GeorgetownArea />} />
        <Route path="/service-area/pflugerville" element={<PflugervilleArea />} />
        <Route path="/service-area/westlake" element={<WestlakeArea />} />
        <Route path="/travis-county" element={<TravisCountyArea />} />
        <Route path="/williamson-county" element={<WilliamsonCountyArea />} />
        <Route path="/bell-county" element={<BellCountyArea />} />
        <Route path="/hays-county" element={<HaysCountyArea />} />
        <Route path="/burnet-county" element={<BurnetCountyArea />} />
        <Route path="/llano-county" element={<LlanoCountyArea />} />
        <Route path="/comal-county" element={<ComalCountyArea />} />
        <Route path="/bastrop-county" element={<BastropCountyArea />} />
        <Route path="/blanco-county" element={<BlancoCountyArea />} />
        <Route path="/gillespie-county" element={<GillespieCountyArea />} />
        <Route path="/caldwell-county" element={<CaldwellCountyArea />} />
        <Route path="/lee-county" element={<LeeCountyArea />} />
        <Route path="/milam-county" element={<MilamCountyArea />} />
        <Route path="/brazos-county" element={<BrazosCountyArea />} />
        <Route path="/mclennan-county" element={<McLennanCountyArea />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  )
}
