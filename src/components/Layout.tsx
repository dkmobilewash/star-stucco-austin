import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MobileCallBar from './MobileCallBar'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-14 sm:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  )
}
