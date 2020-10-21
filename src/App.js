import React from 'react';
import image1 from './developpeur-react-native-mission-freelance-et-remote.jpg';

import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <div className="styl">

<h1 className="titlered">Nahed</h1>


<br/>
<img src={image1} ></img>

<br/>

<img src="téléchargement.jpg" ></img>

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" ></source>

</video>
    </div>
  );
}

export default App;
