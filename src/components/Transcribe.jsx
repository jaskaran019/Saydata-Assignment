import React, { useState, useRef } from 'react';
import axios from 'axios';
import { GrFormClose } from 'react-icons/gr';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styles from '../styles/transcribe.module.css';

const options = ['Hindi', 'English', 'French'];
const defaultOption = { label: 'Default', value: null }; // Define the default option object

const Transcribe = ({ onClose }) => {
  // Open Ai
  const REACT_APP_VITE_OPENAI_API_KEY = process.env.REACT_APP_VITE_OPENAI_API_KEY;
  const model = 'whisper-1';
  const inputRef = useRef(null);
  const [file, setFile] = useState();
  const [response, setResponse] = useState(null);

  const onChangeFile = () => {
    setFile(inputRef.current.files[0]);
  };

  const fetchAudioFile = async () => {
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('model', model);
    formData.append('file', file);

    try {
      const res = await axios.post('https://api.openai.com/v1/audio/transcriptions', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization' : `Bearer ${REACT_APP_VITE_OPENAI_API_KEY}`
        },
      });
      console.log(res.data);
      setResponse(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleTranscribeClick = () => {
    // Call the fetchAudioFile function when the button is clicked
    fetchAudioFile();
  };

  // Dropdown
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const _onSelect = (selected) => {
    setSelectedOption(selected);
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
          <button className="upload-button" style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
            <img src="assets/Upload.png" alt="Upload Image" />
          </button>
          <input
            type="file"
            ref={inputRef}
            accept=".mp3"
            style={{ display: 'block' }}
            multiple
            onChange={onChangeFile}
          />
        </label>
        <p>
          <span>Click to Upload</span> or drag and drop
        </p>
        <p style={{ textAlign: 'center', fontSize: '.8rem' }}>
          The maximum file size is 1GB for audio and 10GB for videos. <br />
          Supported formats: mp3, mp4, wav, caf, aiff, avi, rmvb, flv, m4a, mov, wmv, wma
        </p>
      </div>
      <h5 style={{ marginTop: '1em' }}>Import from Link</h5>
      <input type="text" placeholder="Paste a Dropbox, Google Drive, or Youtube URL here" style={{ padding: '1em', borderRadius: '10px', border: '1px solid rgba(208, 213, 221, 1)', outline: 'none' }} />
      <button className="blueButton" style={{ background: 'rgba(208, 213, 221, 1)', marginTop: '2em', padding: '1.2em 0' }} onClick={handleTranscribeClick}>
        Transcribe File
      </button>
      {response && <div>{JSON.stringify(response, null, 2)}</div>}
    </div>
  );
};

export default Transcribe;
