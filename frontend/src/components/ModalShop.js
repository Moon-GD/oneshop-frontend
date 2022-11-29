import '../css/Backdrop.css'

function ModalShop(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }
    return (
        <div className="modals">
            <div className="item">
                <div className="image">
                <img src={props.address} alt="작품"/>
                </div>
            </div>
            <p>Are you sure?</p>
            <button className="btn btn--alt" id="btn-cancel" onClick={cancelHandler}>Cancel</button>
            <button className="btn" id="btn-purchase" onClick={confirmHandler}>Purchase</button>
        </div>
    )
}

export default ModalShop