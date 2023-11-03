import './App.css';
import React, { useState } from 'react'; 
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
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Duration</th>
                <th>Date Created</th>
                <th>Last Updated</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Peng Meeting</td>
                <td>Audio</td>
                <td>05:24</td>
                <td>20/10/2023</td>
                <td>05:24</td>
              </tr>
              <tr>
                <td>Tofunmi Idowu</td>
                <td>Audio</td>
                <td>04:26</td>
                <td>01/07/2023</td>
                <td>05:24</td>
              </tr>
              <tr>
                <td>Peng Meeting</td>
                <td>Audio</td>
                <td>05:24</td>
                <td>20/10/2023</td>
                <td>05:24</td>
              </tr>
              <tr>
                <td>Peng Meeting</td>
                <td>Audio</td>
                <td>05:24</td>
                <td>20/10/2023</td>
                <td>05:24</td>
              </tr>
              <tr>
                <td>Peng Meeting</td>
                <td>Audio</td>
                <td>05:24</td>
                <td>20/10/2023</td>
                <td>05:24</td>
              </tr>
              <tr>
                <td>Peng Meeting</td>
                <td>Audio</td>
                <td>05:24</td>
                <td>20/10/2023</td>
                <td>05:24</td>
              </tr>
              <tr>
                <td>Peng Meeting</td>
                <td>Audio</td>
                <td>05:24</td>
                <td>20/10/2023</td>
                <td>05:24</td>
              </tr>
              {/* Add more rows as needed */}
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