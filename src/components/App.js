import React from 'react';
import { ReactDOM } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {
  return (

<div className="page">
    <div className="container">
        <Header />
        <Main />
        <Footer />
        <template id="cards__template">
            <div className="cards">
                <img className="cards__image"/>
                <button className="cards__trash" type="button"></button>
                <div className="cards__description">
                    <h2 className="cards__text"></h2>
                    <div className="cards__container">
                        <button className="cards__like" type="button"></button>
                        <div className="cards__like__counter">0</div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</div>
  );
}

export default App;
