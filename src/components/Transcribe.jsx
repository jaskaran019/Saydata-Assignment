import React, { useState , useRef} from 'react';
import { GrFormClose } from "react-icons/gr";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styles from "../styles/transcribe.module.css";
const options = ['Hindi', 'English', 'French'];
const defaultOption = { label: 'Default', value: null }; // Define the default option object

const Transcribe = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const _onSelect = (selected) => {
    setSelectedOption(selected);
  };
  const fileInputRef = useRef(null);
  
    const handleButtonClick = () => {
      fileInputRef.current.click();
    };
  
    const handleFileSelect = (e) => {
      const files = e.target.files;
      // Handle the selected files
    };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Transcribe File</h2>
        <GrFormClose className={styles.closeBtn} onClick={onClose} />
      </div>
      <h5>Transcription Language</h5>
      <Dropdown
        options={options}
        onChange={_onSelect}
        value={selectedOption}
        placeholder="Select an option"
        styles={styles.dropdownControl}
      />
      <div className={styles.uploadContainer}>
      <label>
        <button className="upload-button" onClick={handleButtonClick} style={{border:"none", background:"transparent", cursor:"pointer"}}>
          <img src="assets/Upload.png" alt="Upload Image" />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          multiple
          onChange={handleFileSelect}
        />
      </label>
        <p><span>Click to Upload</span> or drag and drop</p>
        <p style={{textAlign:"center", fontSize:".8rem"}}>The maximum file size is 1GB for audio and 10GB for videos. <br />
        Supported formats: mp3, mp4, wav, caf, aiff, avi, rmvb, flv, m4a, mov, wmv, wma</p>
      </div>
      <h5 style={{marginTop:"1em"}}>Import from Link</h5>
      <input type="text" placeholder='Paste a Drobpox, Google Drive or Youtube URL here' style={{padding:"1em", borderRadius:"10px", border:"1px solid rgba(208, 213, 221, 1)", outline:"none"}}/>
      <button className="blueButton" style={{background: "rgba(208, 213, 221, 1)"
, marginTop:"2em", padding:"1.2em 0"}}>Transcribe File</button>
    </div>
  );
}

export default Transcribe;
