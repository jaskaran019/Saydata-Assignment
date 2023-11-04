import './App.css';
import React, { useState , useEffect} from 'react'; 
import axios from 'axios';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Transcribe from './components/Transcribe';
function App() {
  const [transcribeVisible, setTranscribeVisible] = useState(false);
  const [brightness, setBrightness] = useState(100);
  const openTranscribe = () => {
    setTranscribeVisible(true);
    setBrightness(50);
  };

  const closeTranscribe = () => {
    setTranscribeVisible(false);
    setBrightness(100);
  };

  // Table data
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.PUBLIC_URL}/userdata.json`); // Replace with the actual URL or the path to your JSON file
      const data = response.data.history; // Assuming "history" contains the data
      setData(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <>
    <div className="masterContainer" style={{ filter: `brightness(${brightness}%)` }}>
      <Sidebar/>
      <div className="mainContainer">
        <Navbar/>
        <div className="welcomeBanner">
          <div className="bannerDesc">
            <h2>Welcome Shakirat</h2>
            <p>Upload your Audio or Video to convert to text.</p>
          </div>
          <button className='blueButton' style={{width:"auto", padding:"0 1em"}} onClick={openTranscribe}>Transcribe File</button>
        </div>
        <ul className="cards">
          <li className="card">
            <img src="assets/card_file.png" alt="" />
            <h5>100</h5>
            <p>Uploaded Files</p>
          </li>
          <li className="card">
            <img src="assets/transcribed.png" alt="" />
            <h5>50</h5>
            <p>Transcribed</p>
          </li>
          <li className="card">
            <img src="assets/saved.png" alt="" />
            <h5>20</h5>
            <p>Saved</p>
          </li>
        </ul>
        <div className="historyContainer">
          <h2>Recent Files</h2>
          <table>
            <thead style={{backgroundColor:"rgba(235, 243, 255, 1)", border:"1px solid black"}}>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Name</th>
                <th>Type</th>
                <th>Duration</th>
                <th>Date Created</th>
                <th>Last Updated</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr key={index}>
                <td><input type="checkbox" /></td>
                  <td>{entry.name}</td>
                  <td>{entry.type}</td>
                  <td>{entry.duration}</td>
                  <td>{entry.date_created}</td>
                  <td>{entry.last_updated}</td>
                  <td>{entry.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {transcribeVisible && <Transcribe onClose={closeTranscribe} />}
    </>
  );
}

export default App;