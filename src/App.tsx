import {uploadFileToStorage} from './firebase';

function App() {
  return (
    <div className="App">
        <h1>Hello App</h1>
        <input type="file" onChange={async (e) => {
          if (e.target.files)  {
            let url = await uploadFileToStorage(e.target.files[0], "yourFiles")
            console.log("url", url)
          }
        }}/>

    </div>
  );
}

export default App;
