import logo from './trngkhng.svg';
import './App.css';

function App() {
  return (

    <div className="h-screen w-screen 
                   bg-hero-pattern bg-no-repeat bg-cover bg-center
                   cursor-default">

      <div className="flex flex-col text-white text-center mb-12">
        <div className="avatar mt-12"></div>
        <p className="text-lg mt-1">#trngkhng</p>
        <p className="font-light text-sm">Descriptions goes here</p>
      </div>         

      <div className="flex flex-col">
        <a href="https://www.facebook.com/Trung.Nguyen.LMs/" target="_blank" className="redirect-items">Facebook</a>
        <a href="https://www.instagram.com/trungkhung__/" target="_blank" className="redirect-items">Instagram</a>
        <p className="redirect-items">Youtube</p>
        <p className="redirect-items">Shop my Merch</p>
      </div>

    <div className=" fixed bottom-0 w-screen py-2 font-light
                      bg-t-blue text-white text-center font-thin text-sm
                    ">
        #trngkhng © 2021
      </div>      
    </div>    
  );
}

export default App;
