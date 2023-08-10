import { useState } from 'react';
import {uploadFileToStorage} from './firebase';

function App() {
  const [urlUpload, setUrlUpload] = useState <null | string | boolean>(null);
  return (
    <div className="App">
        <h1>Hello App</h1>
        <input type="file" onChange={async (e) => {
          if (e.target.files)  {
            let url = await uploadFileToStorage(e.target.files[0], "yourFiles")
            if(url) {
              setUrlUpload(url)
            }
          }
        }}/>
        <img src={urlUpload ? `${urlUpload}` : ''} alt=''/>
    </div>
  );
}

export default App;
