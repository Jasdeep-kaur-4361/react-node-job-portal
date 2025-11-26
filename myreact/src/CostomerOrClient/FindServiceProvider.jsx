import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import axios from 'axios';
// import 
import { Link, Route, Routes, useNavigate, Navigate } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import ModalPage from './modalServiceP';

function FindServiceProvider() {
  const navigate = useNavigate();

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
  // ===============modal=================
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);

  // if (ModalPage != null) {
  //   setModal(true);
  // }
  // else {
  //   setModal(false);
  // }
  const handleClose = () => {
    setShow(false);
  }
  const handleShow = (data) => {
    // alert(cardData.kuch[index]);
    // alert(JSON.stringify(data));
    // doFindEmailDetails(data);
    // setShow(true);
    // setModal(true);
  }
  // async function doFindEmailDetails(data) {
  //   // alert(JSON.stringify(data));
  //   var postData = JSON.stringify(data);
  //   var url = "http://localhost:3003/user/search-email-data";

  //   var response = await axios.post(url, postData);
  //   // alert(JSON.stringify(response.data));
  //   // setCity(response.data);
  // }

  async function FindCities() {
    var url = "http://localhost:3003/user/fetch-cities-from-provider";

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
    var url = "http://localhost:3003/user/fetch-categories-from-provider";

    var response = await axios.get(url);
    // alert(JSON.stringify(response.data));
    setCategory(response.data);
  }
  async function doSearch() {
    var url = "http://localhost:3003/user/search-from-provider";
    var cityName = cityData.comboBox;
    var CateName = cityData.comboCategory;
    var Ary = [cityName, CateName];
    // alert(Ary);

    var response = await axios.post(url, Ary);

    // alert(JSON.stringify(response.data.kuch));
    if (response.data.message == "found!!") {

      setCardData(response.data);
      setCard(true);

    }



  }

  return (
    <>
      <center>
        <h1><b>Find Services Provider</b></h1>
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

      <center>
        <input type="button" value="Search" className="btn btn-secondary" onClick={doSearch} />

      </center>
      <br></br>
      {showCard &&
        cardData.kuch.map((item, index) => (
          // updateObj(item.email);
          <Card style={{ width: '20rem', height: '25rem', marginTop: '20px', marginBottom: '20px', marginLeft: '20px', float: 'left' }}>
            <Card.Img variant="top" />
            <Card.Body>
              <b><h3>{item.email}</h3></b><br></br>
              <Card.Text>
                {/* <h1>{index}</h1> */}
                <b><h5>Expert In : </h5></b>{item.expertin}<br></br>

                <b><h5>Experience : </h5></b>{item.experience}
                <br></br>
                {/* {item.idpath} */}
              </Card.Text>
              <center>
                <Button variant="primary" onClick={() => 
                  { navigate(`/modalproviders/${item.email}`) }}>More Details</Button>

              </center>
              {/* ======  MODAL  ================ */}

              {/* {modal &&
                cardData.kuch.filter((item, index) => (

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <h2>{item.name}</h2>
                      <h1>{index}</h1>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                ))} */}

            </Card.Body>
          </Card>


        ))
      }

      {/* {showCard &&


        <Card style={{ width: '18rem' }}>
          
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{"fvrvw"}</Card.Title>
            <Card.Text>
              
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>


      } */}
    </>
  );
}

export default FindServiceProvider;