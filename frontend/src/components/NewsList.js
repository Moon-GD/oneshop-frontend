import '../css/NewsList.css'

function NewsList() {
    
    return (
        <div className='containerNews'>
            <div className='items1'>
                <div className='string'>
                    EDxMartin<br></br>
                    parr.art<br></br>
                    space.<br></br>
                    2023.0406<br></br>
                </div>
                <div className='item'>
                    <div className='image'>
                    <img src={require('../images/10.jpg')} alt="작품"/>
                    </div>
                </div>
                <div className='item'>
                    <div className='image'>
                    <img src={require('../images/7.jpg')} alt="작품"/>
                    </div>
                </div>
                <div className='item'>
                    <div className='image'>
                    <img src={require('../images/1.jpg')} alt="작품"/>
                    </div>
                </div>
                <div className='item'>
                    <div className='image'></div>
                </div>
                <div className='item'>
                    <div className='image'></div>
                </div>
            </div>
            <div className='items2'>
                <div className='item'>
                    <div className='image'></div>
                </div>
                <div className='item'>
                    <div className='image'></div>
                </div>
                <div className='string'>
                    New prod-<br></br>
                    uct with<br></br>
                    Jang-Hyeok<br></br>
                    Jun.<br></br>
                </div>
                <div className='item'>
                    <div className='image'></div>
                </div>
                <div className='item'>
                    <div className='image'></div>
                </div>
                <div className='item'>
                    <div className='image'></div>
                </div>
            </div>
            <div className='items3'>
                <div className='item'>
                    <div className='image'></div>
                </div>
                <div className='item'>
                    <div className='image'></div>
                </div>
                <div className='item'>
                    <div className='image'></div>
                </div>
                <div className='item'>
                    <div className='image'></div>
                </div>
                <div className='item'>
                    <div className='image'></div>
                </div>
                <div className='item'>
                    <div className='image'></div>
                </div>
            </div>
        </div>
    )
}

export default NewsList
