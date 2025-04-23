// Burger
const burgerButton = document.querySelector('.burgerButton');
const header = document.querySelector('.headerContainer');
const navigation = document.querySelector('.headerNav');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const links = document.querySelectorAll('.navItem');

function closeOpenMenu() {
    header.classList.toggle('burgerOpen');
    line1.classList.toggle('line1Open');
    line2.classList.toggle('line2Open');
    navigation.classList.toggle('burgerOpenNav');
}

burgerButton.addEventListener('click', () => {
    closeOpenMenu();
});

links.forEach((link) => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            closeOpenMenu();
        }
    });
});

// Modal

const modal = document.getElementById("myModal");
const discr1 = document.querySelector(".discription1");
const discr2 = document.querySelector(".discription2");
const discr3 = document.querySelector(".discription3");
const discr4 = document.querySelector(".discription4");

function openModal(offerName, offerCost) {
    document.getElementById("modalTitle").textContent = offerName; // Устанавливаем заголовок в модальном окне
    document.querySelector('.cost').textContent = offerCost;
    if (offerCost == "Стоимость 4800р") {
        discr4.classList.add('select');
    } else if (offerCost == "Стоимость 3800р") {
        discr3.classList.add('select');
    } else if (offerCost == "Стоимость 4000р") {
        discr2.classList.add('select');
    } else if (offerCost == "Стоимость 3800p") {
        discr1.classList.add('select');
    }
    modal.classList.add('show'); // Добавляем класс для анимации
}

// Функция для закрытия модального окна
function closeModal() {
    modal.classList.remove('show'); // Убираем класс для закрытия модального окна
    discr1.classList.remove('select');
    discr2.classList.remove('select');
    discr3.classList.remove('select');
    discr4.classList.remove('select');
}

// Закрытие модального окна при клике вне его содержимого
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        closeModal();
    }
}

// Слайдер

const slides = document.querySelectorAll('.sliderWrap .slide');
const sliderWrap = document.querySelector('.sliderWrap');
let currentSlide = 0;

function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    sliderWrap.style.left = `-${currentSlide * 360}px`;
}
if (document.querySelector('.dream')) {
    setInterval(showNextSlide, 7000);
}

// Feedback

const reviews = [
    {
        text: "Оля, я очень рада, что мы с тобой уже больше 2 лет! Не перестану радоваться тому, что я когда-то доверилась тебе. Моя жизнь изменилась кардинально. Очень благодарна тебе за это.",
        author: "РУШАНА"
    },
    {
        text: "Оля, огромная благоларность. Крутой расклад и крутая твоя подача, все очень понятно. Мне стало так тепло, я сейчас пропитываюсь состоянием нежности, спокойствия, и стремлюсь к этому. Всеми фибрами души чувствую, что я хочу идти дальше.",
        author: "ОЛЬГА"
    },
    {
        text: "Я сильно вырос за этот год, во мне больше уверенности, устойчивости, я делаю и мне не страшно идти в новое. Меня это радует, открываются новые возможности, доход растет. Кайф, я не думал, что так вообще может быть, я жил в сером, страшном мире раньше. Жалею только что не пошел раньше в терапию, когда мне об этом говорили и направляли. Но рад, что пришел к этому сам. Всему свое время.",
        author: "СЕРГЕЙ"
    },
    {
        text: "Ольга, ты мой учитель, я безумно благодарна вселенной и людям, благодаря которым нашла тебя &#10084;. Я благодарю тебя за то, что так бережно взяла меня за руку и показала мне, что жизнь прекрасна всегда, не только в счастье, но и с болями, и с потерями, теперь я верю в себя, люблю и оберегаю. Спасибо за развитие, за силу, за мудрость &#10084;&#10084;&#10084;.",
        author: "ОЛЬГА"
    },
    {
        text: "Оля, доброго дня &#9733;. Благодарю тебя, после практики почувствовала прилив энергии и мотивации. Почувствовала внутреннюю опору.",
        author: "НАТАЛЬЯ"
    },
    {
        text: "Хочу от всей души поблагодарить за вчерашнюю психологическую сессию с метафорическими картами &#10084;. Настолько неожиданно было за разглядыванием и описанием картинок столкнуться лицом к лицу со своими внутренними установками и шаблонами, которые я совсем не замечала в обычной жизни. Это было очень глубоко и мощно. Не ожидала, что так легко откроюсь незнакомому для меня человеку, но с Ольгой настолько легко и приятно общаться, совсем не чувствуешь стеснения и страха. Огромное спасибо за новый опыт и поворот мыслей &#128591;.",
        author: "АЛЁНА"
    },
    {
        text: "Оля, спасибо за встречу! &#128075; Я конечно еще в небольшом дисбалансе нахожусь, но в целом мне стало легче и много чего сегодня заметила. Ты многие моменты подсветила, которых раньше я избегала или не замечала (возможно целенаправленно). Сейчас мне лучше &#128591;, готова дальше работать над собой, чтобы стало еще легче и лучше",
        author: "КСЕНИЯ"
    },
    {
        text: "Оля, спасибо большое. С тобой очень спокойно и безопасно, все мысли расставляются по своим местам. Я стала спокойнее, с мужем отношения улучшились. Очень рада, что пошла в работу и нашла на это время.",
        author: "ТАТЬЯНА"
    },
    {
        text: "Оля, спасибо тебе за практику! Результат точно есть и он меня очень радует. Все вокруг ноют, мерзнут, чихают, осень ненавидят, а я сейчас вижу и ощущаю свежесть, легкость, кучу желаний начать что-то новое. И важно, что сил на это дофига появилось! Сонливость ушла, апатия закончилась, хочется рвать и метать, пахать и достигать, но мягко, аккуратно, по женски.",
        author: "ИРИНА"
    },
    {
        text: "И хочется сказать по поводу вчерашних практик! Оля я до сих пор под впечалением. Мои глаза открываются все больше, от осознания того, на что мы способны, как реагирует наше тело, из чего мы состоим, что происходит с нашей аурой, какая сложная, и в то же время интересная работа предстоит длинною в жизнь – все это будоражит сосзнание в хорошем смысле! Это даже не объяснить. Я в восторге и очень благодарна.",
        author: "ЕВГЕНИЯ"
    },
    {
        text: "Дорогая Оля, то что ты делаешь это – бесценно! \nЭтот месяц действительно пролетел на одном дыхании. Порой было нелегко, посмотреть в глубину себя, в чем-то признаться. Но с каждым днем, с каждой практикой внутри будто раскрывался новый лепесток. Еще и еще, и в какой-то момент понимаешь, что вот ты уже чувствуешь себя совсем по-другому. Начинаешь цвести изнутри и все во внешнем мире потихонечку начинает меняться. Ты так мягко провела по тем уголкам своего сокровенного, куда самой было бы сложно даже просто посмотреть. Бережно, к каждой из нас. Направляя, задавая такие нужные вопросы, подсвечивая действительно важное.",
        author: "ЮЛЯ"
    },
    {
        text: "Привет! Состояние волшебное. Я давно не чувствовала себя такой счастливой и легкой, как будто сбросила тяжелый груз с себя. Оля, спасибо тебе! Этот июнь был очень интересным. Я начала замечать то, что не видела раньше. Больше чувствовать. Больше думать о себе и прислушиваться к себе. Ты дала столько поддержки мне, столько сил и уверенности вселила &#128591;.",
        author: "ОЛЬГА"
    },
    {
        text: "Ольга, спасибо за осознанность, которая пробуждается в нас и за то теплое пространство, которое вы создаете &#127803;.",
        author: "ТАТЬЯНА"
    },
    {
        text: "Я безмерно благодарна тебе, Оля! Ты так чутко, нежно и бережно подсветила мне весь путь, задавая нужные вопросы. Ты права, «волшебной таблетки» не существует и человек сам должен решить, как ему жить. Было местами очень больно и сопротивление до сих пор не отпускает в каких-то моментах. Но именно твоя мягкая поддержка позволяет идти туда, где страшно и больно. Спасибо тебе за твой вклад в меня. Это было замечательное путешествие.",
        author: "КСЕНИЯ"
    },
    {
        text: "Оля, спасибо тебе за этот месяц! Он был безумно интересный, иногда непростой, бывало и сопротивление &#128064;. Спасибо, что была с нами, поддерживала, направляла, помогала двигаться вперед. Самое главное мое достижение, что я разрешала себе быть любой, быть настоящей, не подстраиваться под чьи-то ожидания и навешанные ярлыки. Я не скрываю свои эмоции, просто выражаю их более спокойно, и всегда спрашиваю для чего это сейчас. Мне удалось лучше узнать себя, еще больше чувствовать свои желания.",
        author: "АЛЁНА"
    },
    {
        text: "Вчера, после практики, очень хотела спать, как будто энергия закончилась и сил совсем не было. Сны снились просто вау, поняла по сну, куда иду и зачем, смогла расшифровать сон, тк запомнила его. А утром энергии столько, что готова горы свернуть и настроение улучшилось. Освободилось место для нового. Практика, как новый переход. Благодарю, Ольга!",
        author: "ИРИНА"
    },
    {
        text: "Чувствую себя прекрасно, появилось ощущение твердой опоры под ногами. Увренности в себе, какой-то внутренней опоры. Спасибо, Ольга!",
        author: "ТАТЬЯНА"
    },
    {
        text: "Я не знаю как все это описать, но для меня пожалуй это была самая мощная практика. С благодарностью Ольге, она так сильно помогла и подсветила мне то, о чем я даже не помнила и прятала тысячу лет. Конечно осознав это и прожив эмоции стало уже гораздо легче.",
        author: "ТАТЬЯНА"
    },
    {
        text: "Мне стало так хорошо! Я сейчас на таком расслабоне, будто вышла из бани, массажа, ванны с лавандой одновременно. Нет тяжести в теле, нет кома в груди и само тело мягкое. Я рада, что дала себе время на подумать и все обмозговать, не стала принимать сразу окончательных решений и очень рада, что выбрала такой вариант исхода событий. Вот честно, этот момент вызывает у меня гордость за себя! Спасибо за нашу работу.",
        author: "АНАСТАСИЯ"
    },
    {
        text: "Спасибо, для нас это было очень ценно и важно. После практики стало легче на душе, мы словно открылись друг другу с новых сторон, с уязвимых, которые никогда не показывали ранее. Отношения стали доверительнее. Считаю, что такие совместные походы очень важны.",
        author: "ТАТЬЯНА"
    },
    {
        text: "Оля, спасибо тебя! Длительная работа в терапии приносит свои плоды. Я раньше и подумать не могла, какой кайф можно испытывать от жизни, спорта. Начал уходить вес, 10 кг за два месяца с меня просто слетели. Во мне проснулась женщина.",
        author: "ВИКТОРИЯ"
    },
    {
        text: "Оля, спасибо за этот потрясающий массаж огнем. Первый раз была на таком. У меня все тело было напряженное, много зажимов. Во время прогревания тело начало расслабляться. И это очень приятные ощущения. Эффект бани, но глубоко в тело проникало тепло. Самочувствие стало намного лучше, зажимы ушли.",
        author: "ОЛЬГА"
    },
    {
        text: "Оля, круто, массаж огнем, тема! Пробовал впервые, было очень любопытно, что это. Я расслабился очень, вот прям мысли они словно рассеялись. Очень тепло, тело такое свободное стало. Пришел домой, в голове пустота, зажег благовония и заснул так крепко, давно нормального сна не было. Спасибо!",
        author: "СЕРГЕЙ"
    }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  // Генерируем случайный индекс
        [array[i], array[j]] = [array[j], array[i]];  // Меняем местами элементы
    }
}

const reviewsContainer = document.getElementById('reviews-container');
const prevButton = document.querySelector('.leftArrow');
const nextButton = document.querySelector('.rightArrow');

shuffleArray(reviews);

reviews.forEach(review => {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('fbck');

    // Добавляем текст отзыва
    const reviewText = document.createElement('p');
    reviewText.innerHTML = review.text;
    
    // Добавляем имя автора
    const authorName = document.createElement('p');
    authorName.textContent = review.author;

    // Вставляем текст отзыва и имя автора в контейнер отзыва
    reviewElement.appendChild(reviewText);
    reviewElement.appendChild(authorName);

    // Добавляем готовый отзыв в общий контейнер
    if (reviewsContainer != null) {
        reviewsContainer.appendChild(reviewElement);
    }
});

let currentPosition = 0;

function getStep() {
    if (window.innerWidth >= 680 && window.innerWidth <= 1024) {
        return 500; 
    } else if (window.innerWidth >= 590 && window.innerWidth < 680) {
        return 440;
    } else if (window.innerWidth < 590) {
        return 340;
    }
    return 690;
}

function prevSlide() {
    const step = getStep();
    if (currentPosition <= step) {
        prevButton.classList.add('hidden');
    } else {
        prevButton.classList.remove('hidden');
    }
    if (currentPosition > 0) {
        currentPosition -= step;
        reviewsContainer.style.transform = `translateX(-${currentPosition}px)`;
        nextButton.classList.remove('hidden');
    }
}

function nextSlide() {
    const step = getStep();
    if (currentPosition < (reviewsContainer.children.length - 1) * step) {
        currentPosition += step;
        reviewsContainer.style.transform = `translateX(-${currentPosition}px)`;
    }
    if (currentPosition >= (reviewsContainer.children.length - 1) * step) {
        nextButton.classList.add('hidden');
    } else {
        nextButton.classList.remove('hidden');
    }
    prevButton.classList.remove('hidden');
}
if (currentPosition == 0 && prevButton != null) {
    prevButton.classList.add('hidden');
}
if (prevButton != null) {
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
}

// For mobile

let touchstart = 0;
let touchend = 0;
let intervalId = null;
const slidesReview = document.querySelectorAll('.fbck');

slidesReview.forEach((slide) => {
    slide.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    }, false);
});

slidesReview.forEach((slide) => {
    slide.addEventListener('touchstart', function(event) {
        event.preventDefault();
        paused = true;
        clearInterval(intervalId);
        touchstart = event.touches[0].clientX;
    });
    
    slide.addEventListener('touchend', function(event) {
        paused = false;
        touchend = event.changedTouches[0].clientX;
        
        if (touchstart - touchend > 50) {
            clearInterval(intervalId);
            progress = 0;
            nextSlide();
        } else if (touchend - touchstart > 50) {
            clearInterval(intervalId);
            progress = 0;
            prevSlide();
        }
    });
});

function changeImage() {
    const image = document.getElementById('image');
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      image.src = './pic/OLY.png';
    } else {
      image.src = './pic/logo2.png';
    }
}
changeImage();