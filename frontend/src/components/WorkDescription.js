import '../css/WorkDescription.css'
import {useState} from 'react';

function WorkDescription(props) {  
  let [author, setAuthor] = useState("")
  
  function selectChange() {
    let select = document.querySelector("#authorSelect");
    setAuthor(select.options[select.selectedIndex].textContent)
 
  }

  return (
    <div className="descriptionWork">
      <div className="descriptionWork_text">
        <select id="authorSelect" onChange={() => selectChange()}>
          {props.author.map((item) => (
            <option value="1">{item.author}</option>
          ))}
        </select>
        <h3 className="author-h3">작가 이름 : {author}</h3>
        <h5>불시착 식물 사전</h5>
        <h5>효창동 김옥희씨</h5>
        <h5>차가운 미디어</h5>
      </div>
    </div>
  );
}

export default WorkDescription;