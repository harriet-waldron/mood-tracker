import React, { useState, useEffect } from 'react';
import './popup.css';
import 'font-awesome/css/font-awesome.min.css';

const Popup: React.FC = () => {
  const [noteContent, setNoteContent] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    const yearsSelect = document.getElementById('years') as HTMLSelectElement;
    const currentYear = new Date().getFullYear();
    for (let i = 2000; i <= currentYear; i++) {
      const option = document.createElement('option');
      option.value = i.toString();
      option.text = i.toString();
      yearsSelect.appendChild(option);
    }
  }, []);

  const saveNote = () => {
    const textToWrite = noteContent;
    const textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
    const fileNameToSaveAs = 'MyNewFile.txt';

    const downloadLink = document.createElement('a');
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = 'Download File';
    if (window.URL != null) {
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    } else {
    //   downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = () => document.body.removeChild(downloadLink);
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink);
    }

    downloadLink.click();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteContent(event.target.value);
  };

  return (
    <div>
      <div id="info">
        <button id="convertText" onClick={saveNote}>save journal as .txt</button>
        <div id="infooverlay"></div>
      </div>

      <div id="pick">
        <div id="prompt">
          <p>choose today's</p><br />
          <p style={{ fontFamily: 'Yesteryear', fontSize: 36, marginTop: -27 }}>roast</p>
        </div>

        <div id="coffee_options">
          <img className="coffee" id="ok" src="art/info.png" alt="coffee" />
        </div>
        <div id="mood_options"></div>

        <div id="barcode">
          <p>gamer</p>
        </div>
        <div id="infoNote">
          <textarea id="input" placeholder="how are you?" onChange={handleInputChange}></textarea>
          <div id="radio">
            <p>themes:</p>
            <label>
              <input type="radio" name="reason" value="work" defaultChecked />
              <i className="fa fa-briefcase" aria-hidden="true"></i>
            </label>
            <label>
              <input type="radio" name="reason" value="talk" />
              <i className="fa fa-comments" aria-hidden="true"></i>
            </label>
            <label>
              <input type="radio" name="reason" value="chill" />
              <i className="fa fa-headphones" aria-hidden="true"></i>
            </label>
            <br />
          </div>
        </div>

        <div id="date">
          <p id="month" style={{ fontFamily: 'Yesteryear', fontSize: 25 }}>uwu</p>
          <p id="day">420</p>
          <select className="years" id="years"></select>
        </div>

        <div id="donate">
          <a href='https://ko-fi.com/Z8Z81ZLEW' target='_blank' id="kofiButton"></a>
        </div>

        <div id="bg"></div>
      </div>

      <div id="tail">
        <p id="tail_name"></p>
        <p id="tail_date"></p>
      </div>

      <div id="calendar">
        <div id="header">
          <button id="goToPick"><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
          <button id="goToInfo"><i className="fa fa-question" aria-hidden="true"></i></button>
          <h1 id="cal_year">2000</h1>
        </div>
        <ul className="months">
          <li id="JanName">J</li>
          <li id="FebName">F</li>
          <li id="MarName">M</li>
          <li id="AprName">A</li>
          <li id="MayName">M</li>
          <li id="JunName">J</li>
          <li id="JulName">J</li>
          <li id="AugName">A</li>
          <li id="SepName">S</li>
          <li id="OctName">O</li>
          <li id="NovName">N</li>
          <li id="DecName">D</li>
        </ul>
        <div id="days">
          <div id="Jan" className="day-grid">
            {/* Render day elements here */}
          </div>
          {/* Repeat for other months */}
        </div>
        <div id="note">
          <div id="lock"><i className="fa fa-lock" aria-hidden="true"></i></div>
          <p id="noteDate"><small><b>March 6</b></small> / &#9734;&#9734;&#9734;&#9734;&#9734;</p>
          <hr />
          <p id="noteContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae varius ex. Vivamus posuere vitae nibh quis pulvinar. Suspendisse condimentum nunc non tempor viverra. Maecenas cursus hendrerit nunc et viverra.</p>
          <textarea id="noteEditor" placeholder="what's up?"></textarea>
          <hr id="line" />
          <div id="noteButtons">
            <br /><br /><button id="goEditNote" onClick={() => setIsEditing(true)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
            <button id="goSaveNote" onClick={() => setIsEditing(false)}><i className="fa fa-check" aria-hidden="true"></i></button>
            <button id="goTrashNote" onClick={() => setNoteContent('')}><i className="fa fa-trash" aria-hidden="true"></i></button>
          </div>
        </div>
        <div id="bg2"></div>
      </div>
    </div>
  );
};

export default Popup;
