import Table from 'react-bootstrap/Table';
import MyPic from '../pics/me.jpeg';
import Sir from '../pics/sir.jpg';
import '../style/About.css';


function BasicExample() {
    return (
        <>
            <hr></hr>
            <div id='aboutus'>
                <b>About Us</b>
            </div>
            <hr></hr>
            <Table id='newtable'>

                <tbody style={{ width: '40rem' }}>

                    <tr>
                        <td style={{ width: '10rem' }}>
                            <center>
                                <img id='mypic' src={MyPic} style={{ width: '14rem' }} alt='no image'></img>
                            </center>
                        </td>
                        <td id='myname' style={{ width: '10rem' }}>
                            {/* <center> */}
                            <br></br>
                            Name :  <br></br><br></br>
                            Studying at :  <br></br><br></br>
                            Email :  <br></br><br></br>
                            Contact :  <br></br>
                            {/* </center> */}
                        </td>
                        <td id="jas">
                            <br></br>
                            Jasdeep Kaur<br></br><br></br>
                            Kwantlen Polytechnic University<br></br><br></br>
                            reet.gill9779@gmail.com<br></br><br></br>
                            9779347076

                        </td>

                    </tr>

                    {/* ===================================== */}
                    <hr></hr>
                    <tr>
                        <td >
                            <center><img id='mypic' src={Sir} style={{ width: '14rem' }} alt='no image'></img>

                            </center>
                        </td>
                        <td id='myname' style={{ width: '10rem' }}>
                            <br></br><br></br>
                            Under the guidance of :  <br></br><br></br>
                            Author of :  <br></br><br></br>

                        </td>
                        <td id="jas">
                            <br></br><br></br><br></br>
                            Rajesh Bansal<br></br><br></br>
                            Real Java
                        </td>
                    </tr>
                    <tr >
                        <td colSpan={3}>
                            <center>
                                <h3>Location</h3> 
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13791.522932618522!2d74.9523281!3d30.2119513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391732a4f07278a9%3A0x4a0d6293513f98ce!2sBanglore%20Computer%20Education!5e0!3m2!1sen!2sin!4v1702324174501!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </center></td>
                    </tr>



                </tbody>
            </Table >
        </>
    );
}

export default BasicExample;