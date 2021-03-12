import "./App.css";
import Photo from "./Component/Profile/ProfilePhoto";
import Name from "./Component/Profile/FullName";
import Adress from "./Component/Profile/Adress";
function App() {
    return (
        <div className="App">
            <Photo />
            <Name />
            <Adress />
        </div>
    );
}

export default App;
