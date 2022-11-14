import '../css/common.css'
import NavBar from './NavBar'
import Ad from '../pages/Ad'

export default function MainFrame() {
    return (
        <section className='main'>
            <NavBar></NavBar>
            <Ad></Ad>
        </section>
    )
}
