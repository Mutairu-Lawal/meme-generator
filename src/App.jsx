import { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import Context from "./Context";

function App() {
  const API_Url = "https://api.imgflip.com/get_memes";
  const [formData, setFormData] = useState({
    topText: "",
    bottomText: "",
  });
  const [memeData, setMemeData] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const getMemeImage = () => {
    const randomNum = Math.floor(Math.random() * memeData.length);

    setSelectedMeme(memeData[randomNum]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_Url);
        const data = await response.json();
        setMemeData(data.data.memes);
      } catch (error) {
        console.error(error);
      }
    };
    (async () => await fetchData())();
  }, []);

  return (
    <div className="main-container">
      <Header />
      <main>
        <Form
          handleChange={handleChange}
          formData={formData}
          getMemeImage={getMemeImage}
        />

        {selectedMeme && (
          <Context selectedMeme={selectedMeme} formData={formData} />
        )}
      </main>
    </div>
  );
}

export default App;
