
import './index.css';
import logo from './images/logo-w.svg';
import image from './images/image.svg';


function App() {
  return (

<body class="page">
    <div class="container">
        <header class="header">
            <img class="header__logo" src={logo} alt="лого"/>
        </header>
        <main class="main">
            <section class="profile">
                <div class="profile__info">
                    <div class="profile__container">
                        <img class="profile__avatar" alt='аватар' src={image}/>
                        <button class="profile__change"></button>
                    </div>
                    <div class="profile__description">
                        <h1 class="profile__name">Жак-Ив Кусо</h1>
                        <button class="profile__edit" type="button"></button>
                        <p class="profile__job">Исследователь океана</p>
                    </div>
                </div>
                <button class="profile__button" type="button"></button>
            </section>
            <section class="elements">
            </section>
        </main>
        <footer class="footer">
            <p class="footer__copyright">© 2020 Mesto Russia</p>
        </footer>
        <section id="popup-profile" class="popup popup_profile">
            <div class="popup__body popup__body_profile">
                <div class="popup__content popup__content_profile">
                    <button class="popup__close popup__close_profile" type="button"></button>
                    <h2 class="popup__title">Редактировать профиль</h2>
                    <form class="popup__form popup__form_profile" name="formProfile" novalidate>
                        <input id="username" class="popup__input" type="text" minlength="2" maxlength="40"
                            name="name" required/>
                        <span class="popup__error username-error"></span>
                        <input id="userjob" class="popup__input" type="text" minlength="2" maxlength="200"
                            name="about" required/>
                        <span class="popup__error userjob-error"></span>
                        <button id="profileButton" class="popup__button" type="submit">Сохранить</button>
                    </form>
                </div>
            </div>
        </section>
        <section id="popup-cards" class="popup popup_cards">
            <div class="popup__body popup__body_cards">
                <div class="popup__content popup__content_cards">
                    <button class="popup__close popup__close_cards" type="button"></button>
                    <h2 class="popup__title popup__title_cards">Новое место</h2>
                    <form class="popup__form popup__form_cards" name="formCards" novalidate>
                        <input id="usertittle" class="popup__input" type="text" minlength="2" maxlength="40"
                            name="name" placeholder="Название" required/>
                        <span class="popup__error usertittle-error"></span>
                        <input id="userlink" class="popup__input" type="url" name="link"
                            placeholder="Ссылка на картинку" required/>
                        <span class="popup__error userlink-error"></span>
                        <button disabled="true" id="cardButton" class="popup__button popup__button_disabled"
                            type="submit">Создать</button>
                    </form>
                </div>
            </div>
        </section>
        <section id="popup-image" class="popup popup_image">
            <div class="popup__body">
                <div class="popup__container">
                    <button class="popup__close popup__close_image" type="button"></button>
                    <img class="popup__image"/>
                    <h2 class="popup__text"></h2>
                </div>
            </div>
        </section>
        <section id="popup-avatar" class="popup">
            <div class="popup__body popup__body_avatar">
                <div class="popup__content popup__content_avatar">
                    <button class="popup__close popup__close_avatar" type="button"></button>
                    <h2 class="popup__title popup__title_avatar">Обновить аватар</h2>
                    <form class="popup__form popup__form_avatar" name="formAvatar" novalidate>
                        <input id="useravatar" class="popup__input" type="url" minlength="2" 
                            name="avatar" placeholder="Ссылка на картинку" required/>
                        <span class="popup__error useravatar-error"></span>
                        <button id="avatarButton" class="popup__button" type="submit">Сохранить</button>
                    </form>
                </div>
            </div> 
        </section>
        <section class="popup" id="popup-delete">
            <div class="popup__body">
                <div class="popup__content popup__content_delete">
                    <button class="popup__close popup__close_delete" type="button"></button>
                    <h2 class="popup__title popup__title_delete">Вы уверены?</h2>
                    <form class="popup__form popup__form_delete" name="formDelete" novalidate>
                        <button id="deleteButton" class="popup__button popup__button_delete" type="submit">Да</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
        <template id="cards__template">
            <div class="cards">
                <img class="cards__image"/>
                <button class="cards__trash" type="button"></button>
                <div class="cards__description">
                    <h2 class="cards__text"></h2>
                    <div class="cards__container">
                        <button class="cards__like" type="button"></button>
                        <div class="cards__like__counter">0</div>
                    </div>
                </div>
            </div>
        </template>
</body>
  );
}

export default App;
