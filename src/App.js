import { useState } from 'react';
import './App.css';
import logo from './assets/logo.png'
import profile from './assets/icons8-user-50.png'
import ReactPlayer from 'react-player'
function App() {
  const [videoData, setVideoData] = useState([]);

  const handleSearch = async (e) => {
    try {
      const response = await fetch(
        `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${e.target.value}&numResults=12`
      );
      const data = await response.json();
      setVideoData(data.results);

    } catch (error) {
      console.log(error)
    }
  }
  function removeText(inputText) {
    const colon = inputText.indexOf(':');
    if (colon !== -1) {
      const extractedText = inputText.substring(0, colon).trim();
      return extractedText;
    } else {
      return inputText;
    }
  }
  // console.log(videoData)
  return (
    <div className="App">
      <div className="flex justify-between items-center h-24 p-4 md:p-6 lg:p-0 bg-gradient-to-b from-black to-gray-800 ">
        <div className="logo">
          <img src={logo} alt="Logo" className="h-12  md:h-24 lg:h-24" />
        </div>
        <div className=" flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearch}
            className="py-2 md:py-3 md:w-[400px] lg:w-[800px] px-8 rounded-full border focus:outline-none focus:ring-2 focus:ring-gradient-to-b from-black to-gray-950"
          />
        </div>
        <div className="md:px-4">
          <img src={profile} alt="Profile" className="h-12 md:h-16 lg:h-16" />
        </div>
      </div>

      {/* Card data   */}
      <div className='flex justify-center flex-wrap -mx-4 h-full w-full px-2 '
      >
        {
          videoData && videoData.length > 0 ? videoData.map((item, index) => {
            return (<div key={index} className="border border-gray-300 rounded-lg overflow-hidden m-4 shadow-md bg-white flex flex-col w-96">
              <div className="relative video-container">
                <ReactPlayer
                  url={item.video}
                  controls
                  width="100%"
                  height="100%"
                />
                {/* <iframe
                  src={item.video}
                  title={item.heading}
                  allowFullScreen
                  className="absolute w-full h-full top-0 left-0"
                ></iframe> */}
              </div>
              <div className="p-4 card-info">
                <h2 className="text-xl font-bold mb-2">{removeText(item.heading)}</h2>
                <div className="tags">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gradient-to-b from-black to-gray-800 text-white  rounded-full px-3 py-1 text-sm font-semibold mr-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>);
          }) : <div className="min-h-screen flex flex-col  justify-center items-center ">
            <div className="text-center text-white">
                <h1 className="md:text-6xl font-extrabold mb-6 text-3xl">Discover Fitness and Code Search My Videos</h1>
              <p className="text-yellow-400 md:text-lg text-sm font-semibold mb-8">Welcome to Your Ultimate Destination for Fitness & Code Unlocking a Healthier Lifestyle and Mastering Programming Skills!</p>
            </div>
          </div>
        }
      </div>

    </div>
  );
}

export default App;
