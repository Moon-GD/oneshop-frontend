import '../css/NewsList.css'
import { useState, useEffect } from 'react'
import NewsModal from './NewsModal';
import Backdrop from './Backdrop';
import img01 from "../images/1.jpg";
import img07 from "../images/7.jpg";
import img10 from "../images/10.jpg";

function NewsList(props) {
  // 서버 연동되어 있을 때의 NewsList
  /*
  const [modlaIsOpen, setModalIsOpen] = useState(false)
  const [modalTitle, setTitle] = useState('')
  const [modalContent, setContent] = useState('')
  const [modalImage, setImage] = useState('')
  const [modalDate, setDate] = useState('')


  function deleteHandler(title, content, image, date) {
      setTitle(title)
      setContent(content)
      setImage(image)
      setDate(date)
      setModalIsOpen(true)
  }
  function closeModalHandler() {
    setModalIsOpen(false)
  }  

function getImageLink(image){
  return "http://3.36.122.123:8080/api/image/" + image
}

    return (
        <div className='containerNews'>
            <div className='newsList'>
              {props.items.map(item => (
                <div className='discusBox'>
                  <img src={getImageLink(item.imageFiles)} />

                  <div className='discusTitle'>
                      <h3>{item.title}</h3>
                  </div>

                  <div className='discusBrief'>
                      <p>
                      {item.content}
                      </p>
                  </div>

                  <div className='discusMeta'>
                      <div className='discusMetaPostedOn'>
                          <span>Posted on</span>
                          <span className='discusMetaPostedOnDate'>
                          {item.localDataType}
                          </span>
                      </div>

                      <div className='discusLink' onClick={()=>{deleteHandler(item.title, item.content, item.imageFiles, item.localDateTime)}}>
                          <a href='#'>View &rarr;</a>
                      </div>
                  </div>
                </div>
              ))}
            </div>
            {modlaIsOpen && <Backdrop onClose={closeModalHandler} />}
            {modlaIsOpen && (
              <NewsModal
                imageFile={modalImage}
                title={modalTitle}
                content={modalContent}
                date={modalDate}
                onCancel={closeModalHandler}
                onConfirm={closeModalHandler}
              />
            )}
        </div>
    )
   */

  const [modlaIsOpen, setModalIsOpen] = useState(false);
  const [modalTitle, setTitle] = useState("");
  const [modalContent, setContent] = useState("");
  const [modalImage, setImage] = useState("");
  const [modalDate, setDate] = useState("");
  
  function deleteHandler(title, content, image, date) {
    setTitle(title);
    setContent(content);
    setImage(image);
    setDate(date);
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="containerNews">
      <div className="newsList">
        <div className="discusBox">
          <img src={img01} alt="이미지" />
          <div className="discusTitle">
            <h3>title</h3>
          </div>
          <div className="discusBrief">
            <p>content</p>
          </div>
          <div className="discusMeta">
            <div className="discusMetaPostedOn">
              <span>Posted on</span>
              <span className="discusMetaPostedOnDate">dataType</span>
            </div>

            <div
              className="discusLink"
              onClick={() => {
                deleteHandler("title", "content", img01, "date");
              }}
            >
              <a href="#">View &rarr;</a>
            </div>
          </div>
        </div>
        <div className="discusBox">
          <img src={img07} alt="이미지" />
          <div className="discusTitle">
            <h3>title</h3>
          </div>
          <div className="discusBrief">
            <p>content</p>
          </div>
          <div className="discusMeta">
            <div className="discusMetaPostedOn">
              <span>Posted on</span>
              <span className="discusMetaPostedOnDate">dataType</span>
            </div>

            <div
              className="discusLink"
              onClick={() => {
                deleteHandler("title", "content", img07, "date");
              }}
            >
              <a href="#">View &rarr;</a>
            </div>
          </div>
        </div>
        <div className="discusBox">
          <img src={img10} alt="이미지" />
          <div className="discusTitle">
            <h3>title</h3>
          </div>
          <div className="discusBrief">
            <p>content</p>
          </div>
          <div className="discusMeta">
            <div className="discusMetaPostedOn">
              <span>Posted on</span>
              <span className="discusMetaPostedOnDate">dataType</span>
            </div>

            <div
              className="discusLink"
              onClick={() => {
                deleteHandler("title", "content", img10, "date");
              }}
            >
              <a href="#">View &rarr;</a>
            </div>
          </div>
        </div>
      </div>
      {modlaIsOpen && <Backdrop onClose={closeModalHandler} />}
      {modlaIsOpen && (
        <NewsModal
          imageFile={modalImage}
          title={modalTitle}
          content={modalContent}
          date={modalDate}
          onCancel={closeModalHandler}
          onConfirm={closeModalHandler}
        />
      )}
    </div>
  );
}

export default NewsList
