
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



function Covid19Live() {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries")
      ])
      .then(responseArr => {
        setLatest(responseArr[0].data);  //latest data from 1st link
        setResults(responseArr[1].data); //countries data from 2nd link
      })
      .catch(error => {
        console.log(error);
      })
  }, []);
  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();
  const countries = results.map(data => {
    return (
      <Card
        bg="light"
        text="dark"
        className="text-center"
        style={{ margin: "10px" }}>
        <Card.Body>
          <Card.Title>{data.country}</Card.Title>
          <Card.Text>Cases {data.cases}</Card.Text>
          <Card.Text>Deaths {data.deaths}</Card.Text>
          <Card.Text>Recovered {data.recovered}</Card.Text>
          <Card.Text>Today's Cases {data.todayCases}</Card.Text>
          <Card.Text>Today's Deaths {data.todayDeaths}</Card.Text>
          <Card.Text>Active {data.active}</Card.Text>
          <Card.Text>Critical {data.critical}</Card.Text>
        </Card.Body>
      </Card>
    );
  });
  // console.log(results[187]);
  // const swedenData = results.filter(data => data.id === 752)
  // console.log(swedenData);
  // function Sweden() {
  //   return (
  //     <Card
  //       bg="light"
  //       text="dark"
  //       className="text-center"
  //       style={{ margin: "10px" }} >
  //       <Card.Body>
  //         <Card.Title>results[187].country</Card.Title>
  //         <Card.Text>
  //           results[187].cases
  //         </Card.Text>
  //       </Card.Body>
  //     </Card>
  //   );
  // };
  return (
    <div className="App">
      <CardDeck>
        <Card
          bg="secondary"
          text="white"
          className="text-center"
          style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Title>Cases</Card.Title>
            <Card.Text>
              {latest.cases}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card
          bg="warning"
          text="white"
          className="text-center"
          style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Title>Deaths</Card.Title>
            <Card.Text>{latest.deaths}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card
          bg="info"
          text="white"
          className="text-center"
          style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            <Card.Text>{latest.recovered}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      {countries}
      {/* <Sweden /> */}
    </div>
  );
}


export default Covid19Live;
