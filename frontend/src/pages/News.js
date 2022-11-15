import '../css/common.css';
import UserInfo from '../components/UserInfo';
import NewsYears from './../components/NewsYears';
import NewsList from './../components/NewsList';


function News() {
  return (
    <section className="main">
      <UserInfo></UserInfo>
      <NewsYears></NewsYears>
      <NewsList></NewsList>
    </section>
  );
}

export default News;