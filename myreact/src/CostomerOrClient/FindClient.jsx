import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import axios from 'axios';
import Card2 from './Card';

function FindClient() {
  useEffect(() => {

    // alert(Card2.obj);
    FindCities();
    FindCategory();
  }, [])
  const [city, setCity] = useState([]);
  const [cityData, setCityData] = useState("");

  const [Category, setCategory] = useState([]);
  const [showCard, setCard] = useState(false);
  const [cardData, setCardData] = useState([]);


  async function FindCities() {
    var url = "http://localhost:3003/user/fetch-cities-from-task";

    var response = await axios.get(url);
    // alert(JSON.stringify(response.data));
    setCity(response.data);
  }
  function selectedCity(event) {
    // alert();
    var { name, value } = event.target;
    // alert(name);
    setCityData({ ...cityData, [name]: value });

  }
  async function FindCategory() {
    var url = "http://localhost:3003/user/fetch-categories-from-task";

    var response = await axios.get(url);
    // alert(JSON.stringify(response.data));
    setCategory(response.data);
  }
  async function doSearch() {
    // alert();
    var url = "http://localhost:3003/user/search-from-provider";
    var cityName = cityData.comboBox;
    var CateName = cityData.comboCategory;
    var Ary = [cityName, CateName];

    var response = await axios.post(url, Ary);

    // alert(JSON.stringify(response.data.message));
    if (response.data.message == "found!!") {

      // alert(JSON.stringify(response.data.kuch));
      setCardData(response.data);
      
      // alert(JSON.stringify(cardData.kuch));

      var k = cardData;
      alert("k "+JSON.stringify(k));
      // var FetechedData = k.city;
      // alert(JSON.stringify("///" + FetechedData))
      setCard(true);

    }



  }

  return (
    <>
      <center>
        <h1><b>CLIENT</b></h1>
      </center>
      <InputGroup className="mb-3">
        <InputGroupText>City</InputGroupText>
        <Form.Select aria-label="Default select example" onChange={selectedCity} name='comboBox'>
          <option value="" >Select a city</option>
          {city.map((ary) => (

            <option key={ary} value={ary}>
              {ary}
            </option>

          ))}

        </Form.Select>
        {" "}
        <InputGroupText>Category</InputGroupText>
        <Form.Select aria-label="Default select example" onChange={selectedCity} name='comboCategory'>
          <option>Open this select menu</option>
          {Category.map((ary) => (

            <option key={ary} value={ary}>
              {ary}
            </option>

          ))}
        </Form.Select>
      </InputGroup>
      <h6>(fill distinct cities from ServiceProvider Collection)</h6>

      <input type="button" value="Search" className="btn btn-secondary" onClick={doSearch} />

      {showCard &&


        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{"cardData"}</Card.Title>
            <Card.Text>
              
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>


      }
    </>
  );
}

export default FindClient;