import Resume from './components/resume/resume';
import Header from './components/header/header';
import SidebarRight from './components/sidebar/sidebarRight';
import SidebarLeft from './components/sidebar/sidebarLeft';
import Footer from './components/footer/footer';

export default function Home() {

  return (
    <>
      <Header />
      <SidebarLeft />
      <div className="Main">
        <Resume />
      </div>
      <SidebarRight />
      <Footer />
    </>
  )
}
