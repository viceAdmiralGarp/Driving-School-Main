const translations = {
    en: {
        about_us: "About us",
        sing_up: "Sing up",
        price: "Price",
        cars: "Сar park",
        location: "Our branches",
        contacts: "Contacts",
        comments: "Comments",
        language: "Language",
        hero_text: "One click and\n" +
            "the car license\n" +
            "are in your pocket",
        button_sing_up: "Sign up for a course",
        q_i:"Qualified instructors",
        h_f_e:"Help in preparing for exams",
        m_e_m:"Modern educational materials",
        m_v_f:"Modernized vehicle fleet",
        c_p:"Competitive prices",
        about_us_main_text:"ABOUT US"
    },
    ru: {
        about_us: "О нас",
        sing_up: "Зарегистрироваться",
        price: "Цена",
        cars: "Автопарк",
        location: "Филиалы",
        contacts: "Контакты",
        comments: "Комментарии",
        language: "Язык",
        hero_text: "Один клик и\n" +
            "автомобильные права\n" +
            "у тебя в кармане",
        button_sing_up: "Запишитесь на курс",
        q_i:"Опытные инструкторы",
        f_t_s:"Гибкий график обучения",
        h_f_e:"Помощь с экзаменами",
        m_e_m:"Актуальные материалы",
        m_v_f:"Современный автопарк",
        c_p:"Конкурентные цены",
        about_us_hero:""
    },
    ua: {
        about_us: "Про нас",
        sing_up: "Зареєструватися",
        price: "Ціна",
        cars: "Автопарк",
        location: "Філії",
        contacts: "Контакти",
        comments: "Коментарі",
        language: "Мова",
        hero_text: "Один клік і\n" +
            "водійські  права\n" +
            "у твоїй  кишені",
        button_sing_up: "Запишіться на курс",
        q_i:"Кваліфіковані інструктори",
        f_t_s:"Гнучкий графік навчання",
        h_f_e:"Допомога з іспитіами",
        m_e_m:"Сучасні матеріали",
        m_v_f:"Модернізований автопарк",
        c_p:"Конкурентні ціни",
        about_us_hero:""
    }
}

function changeLanguage(language) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        element.innerText = translations[language][key];
    });
}

changeLanguage('ua')