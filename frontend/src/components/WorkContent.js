import '../css/WorkContent.css'
import { Link } from 'react-router-dom'

function WorkContent() {
    return (
        <div className='containerWork'>
            <div className='items'>
                <div className='item'>
                  <Link to='/collectPicture'>
                    <div className='image'>
                      <img src={require('../images/10.jpg')} alt="작품"/>
                      </div>
                  </Link>   
                </div>
            </div>
            <h5>효창동 김옥희씨/Lee Juntae.HyoChangDong.2022</h5>
        </div>
    )
}

export default WorkContent
