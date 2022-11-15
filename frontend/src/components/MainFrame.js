import '../css/common.css'
import NavBar from './NavBar'
<<<<<<< HEAD
import Ad from './Ad'
import UserInfo from './UserInfo'

export default function MainFrame() {
    return (
        <section className='main' id='mainFrame'>
=======
import Ad from '../pages/Ad'

export default function MainFrame() {
    return (
        <section className='main'>
>>>>>>> a70fb51a2cf8c25a9284b8ad73d46bf9fb2631c1
            <NavBar></NavBar>
            <Ad></Ad>
        </section>
    )
}
