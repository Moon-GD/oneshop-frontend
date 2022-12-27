import '../css/Backdrop.css'

function NewsModal(props){
  // 서버 연동되었을 때의 NewsModal
  /*
  function getImageLink(image){
    return "http://3.36.122.123:8080/api/image/" + image
  }
  return (
    <div className="modals">
      <div className="itemNews">
              <img src={getImageLink(props.imageFile)} alt="image" />
            </div>
            <div className="content">
              <h2>{props.title}</h2>
              <h3>{props.content}</h3>
              <p>{props.date}</p>
            </div>
    </div>
  )*/
    
  return (
    <div className="modals">
      <div className="itemNews">
        <img src={props.imageFile} alt="image" />
      </div>
      <div className="content">
        <h2>{props.title}</h2>
        <h3>{props.content}</h3>
        <p>{props.date}</p>
      </div>
    </div>
  );
}

export default NewsModal