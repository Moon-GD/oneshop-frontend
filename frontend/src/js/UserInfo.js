import '../css/UserInfo.css';

function UserInfo() {
  // 나중에 백엔드 받아서 사용자 ID 담아줄 변수
  let userID = 'GD'

  return(
    <div id='userinfo-area'>
      {userID}님 반갑습니다.
    </div>
  )
}

export default UserInfo;