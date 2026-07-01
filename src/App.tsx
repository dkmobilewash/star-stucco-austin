import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
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
const ServiceAreas = lazy(() => import('./pages/ServiceAreas'))
const CountyPage = lazy(() => import('./pages/CountyPage'))
const AustinArea = lazy(() => import('./pages/areas/Austin'))
const RoundRockArea = lazy(() => import('./pages/areas/RoundRock'))
const CedarParkArea = lazy(() => import('./pages/areas/CedarPark'))
const GeorgetownArea = lazy(() => import('./pages/areas/Georgetown'))
const PflugervilleArea = lazy(() => import('./pages/areas/Pflugerville'))
const WestlakeArea = lazy(() => import('./pages/areas/Westlake'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <>
    <ScrollToTop />
    <Suspense fallback={null}>
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
        <Route path="/service-areas" element={<ServiceAreas />} />
        <Route path="/service-areas/:slug" element={<CountyPage />} />
        <Route path="/service-area/austin" element={<AustinArea />} />
        <Route path="/service-area/round-rock" element={<RoundRockArea />} />
        <Route path="/service-area/cedar-park" element={<CedarParkArea />} />
        <Route path="/service-area/georgetown" element={<GeorgetownArea />} />
        <Route path="/service-area/pflugerville" element={<PflugervilleArea />} />
        <Route path="/service-area/westlake" element={<WestlakeArea />} />
        {/* Redirects from old county URLs to new service-areas paths */}
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
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </Suspense>
    </>
  )
}
