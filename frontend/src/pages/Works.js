import '../css/common.css';
import UserInfo from '../components/UserInfo';
import WorkDescription from './../components/WorkDescription';
import WorkContent from '../components/WorkContent';
import { useState, useEffect } from 'react';


function Works() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingItems, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://3.36.122.123:8080/api/work", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedMeetups(data);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className="main">
      <UserInfo></UserInfo>
      <WorkDescription author={loadingItems}></WorkDescription>
      <WorkContent works={loadingItems}></WorkContent>
    </section>
  );
}

export default Works;