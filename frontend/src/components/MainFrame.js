import '../css/common.css'
import NavBar from './NavBar'
import Ad from './Ad'

export default function MainFrame() {
    return (
        <section className='main' id='mainFrame'>
            <NavBar></NavBar>
            <Ad></Ad>
        </section>
    )
}
