import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Layout from './components/Layout'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Services = lazy(() => import('./pages/Services'))
const StuccoInstallation = lazy(() => import('./pages/services/StuccoInstallation'))
const StuccoRepair = lazy(() => import('./pages/services/StuccoRepair'))
const StuccoFinishing = lazy(() => import('./pages/services/StuccoFinishing'))
const CommercialStucco = lazy(() => import('./pages/services/CommercialStucco'))
const EifsContractor = lazy(() => import('./pages/services/EifsContractor'))
const StuccoRemediation = lazy(() => import('./pages/services/StuccoRemediation'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const AustinArea = lazy(() => import('./pages/areas/Austin'))
const RoundRockArea = lazy(() => import('./pages/areas/RoundRock'))
const CedarParkArea = lazy(() => import('./pages/areas/CedarPark'))
const GeorgetownArea = lazy(() => import('./pages/areas/Georgetown'))
const PflugervilleArea = lazy(() => import('./pages/areas/Pflugerville'))
const WestlakeArea = lazy(() => import('./pages/areas/Westlake'))
const TravisCountyArea = lazy(() => import('./pages/areas/TravisCounty'))
const WilliamsonCountyArea = lazy(() => import('./pages/areas/WilliamsonCounty'))
const BellCountyArea = lazy(() => import('./pages/areas/BellCounty'))
const HaysCountyArea = lazy(() => import('./pages/areas/HaysCounty'))
const BurnetCountyArea = lazy(() => import('./pages/areas/BurnetCounty'))
const LlanoCountyArea = lazy(() => import('./pages/areas/LlanoCounty'))
const ComalCountyArea = lazy(() => import('./pages/areas/ComalCounty'))
const BastropCountyArea = lazy(() => import('./pages/areas/BastropCounty'))
const BlancoCountyArea = lazy(() => import('./pages/areas/BlancoCounty'))
const GillespieCountyArea = lazy(() => import('./pages/areas/GillespieCounty'))
const CaldwellCountyArea = lazy(() => import('./pages/areas/CaldwellCounty'))
const LeeCountyArea = lazy(() => import('./pages/areas/LeeCounty'))
const MilamCountyArea = lazy(() => import('./pages/areas/MilamCounty'))
const BrazosCountyArea = lazy(() => import('./pages/areas/BrazosCounty'))
const McLennanCountyArea = lazy(() => import('./pages/areas/McLennanCounty'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <>
    <ScrollToTop />
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading...</div>}>
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
    </Suspense>
    </>
  )
}
