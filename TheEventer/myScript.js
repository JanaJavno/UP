//не оценивайте пока что, пожалуйста
var photoPosts = [
    {
        id: '1',
        name: 'Lords of the Sound',
        descriprion: 'Музыка известных кинокомпозиторов: Эннио Морриконе, Джон Уильямс.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'classicmusic.jpg',
        scale: 'global',
        plannedFor: new Date ('2018-04-27T19:00:00'),
        age: '6',
        hashTags: ['#музыка', '#классика'],
        likes:[]
    },
    {
        id: '2',
        name : 'Дерись как девчонка',
        description: 'Семинар по женской самообороне от Krav Maga Belarus.',
        createdAt: new Date('2018-02-21T22:00:00'),
        author: 'Иванов Василий',
        photoLink: 'fight.jpg',
        scale: 'global',
        plannedFor: new Date ('2018-04-03T12:00:00'),
        age: '16',
        hashTags: ['#самооборона', '#женская_самооборона'],
        likes:[]
    },
    {
        id: '3',
        name : 'Девушки поют',
        description: 'Вспомните хоть один сольный проект молодого белорусского парня?',
        createdAt: new Date('2018-02-29T20:00:00'),
        author: 'Иванов Георгий',
        photoLink: 'girlmusic.jpg',
        scale: 'global',
        plannedFor: new Date ('2018-03-03T19:00:00'),
        age: '12',
        hashTags: ['#музыка', '#открытый_микрофон'],
        likes:[]
    },
    {
        id: '4',
        name : 'Колер святла',
        description: 'Выстава сучаснага чэшскага шкла, прадставленая Пятром Стахам і яго вучнямi.',
        createdAt: new Date('2018-02-15T18:20:00'),
        author: 'Иванов Инокентий',
        photoLink: 'glass.jpg',
        scale: 'global',
        plannedFor: new Date ('2018-02-28T19:00:00'),
        age: '0',
        hashTags: ['#стекло', '#выставка'],
        likes:[]
    },
    {
        id: '5',
        name : 'Love-квест',
        description: 'Вас увлекут и захватят в плен самые громкие легенды о любви в истории.',
        createdAt: new Date('2018-01-28T15:20:00'),
        author: 'Иванов Влаислав',
        photoLink: 'love.jpg',
        scale: 'global',
        plannedFor: new Date ('2018-02-14T19:00:00'),
        age: '18',
        hashTags: ['#любовь', '#квест'],
        likes:[]
    },
    {
        id: '6',
        name : 'Beissoul & Einius',
        description: 'Звезды летних фестивалей возвращается в Минск с сольным концертом!',
        createdAt: new Date('2018-01-25T15:20:00'),
        author: 'Иванов Игорь',
        photoLink: 'musicband.jpg',
        scale: 'global',
        plannedFor: new Date ('2018-03-02T20:00:00'),
        age: '12',
        hashTags: ['#музыка', '#фестиваль'],
        likes:[]
    },
    {
        id: '7',
        name : '1/2 Orchestra',
        description: 'Традиционное звучание духовых инструментов и экспериментов с электроникой.',
        createdAt: new Date('2018-03-01T15:20:00'),
        author: 'Иванов Эдуард',
        photoLink: 'orcestra.png',
        scale: 'global',
        plannedFor: new Date ('2018-03-10T20:00:00'),
        age: '12',
        hashTags: ['#музыка', '#электроника'],
        likes:[]
    },
    {
        id: '8',
        name : 'Пилатес',
        description: 'Проходит набор в группу по пилатесу для начинающих.',
        createdAt: new Date('2018-02-20T15:20:00'),
        author: 'Иванов Илья',
        photoLink: 'pilates.jpg',
        scale: 'global',
        plannedFor: new Date ('2018-03-01T10:00:00'),
        age: '16',
        hashTags: ['#пилатес', '#набор_в_группу'],
        likes:[]
    },
    {
        id: '9',
        name : 'Арт-тэрапія для пажылых людзей',
        description: 'Арт-тэрапія, якую вядзе архітэктарка і выкладчыца для дзяцей і дарослых.',
        createdAt: new Date('2018-01-15T15:20:00'),
        author: 'Иванов Ян',
        photoLink: 'pineapple.jpg',
        scale: 'global',
        plannedFor: new Date ('2018-01-25T11:00:00'),
        age: '18',
        hashTags: ['#арт', '#для_пожилых'],
        likes:[]
    },
    {
        id: '10',
        name : 'Регби для подростков',
        description: 'Не важно, какого ты роста и веса, как быстро бегаешь кроссы и сколько можешь отжаться.',
        createdAt: new Date('2017-12-28T15:20:00'),
        author: 'Иванов Кирилл',
        photoLink: 'regbi.jpg',
        scale: 'global',
        plannedFor: new Date ('2018-01-02T12:00:00'),
        age: '6',
        hashTags: ['#регби', '#набор_в_группу'],
        likes:[]
    },
    {
        id: '11',
        name : 'Расчистим двор вместе!',
        description: 'Вы можете взять лопату и помочь коммунальщикам справиться с весенним снегом у себя во дворе.',
        createdAt: new Date('2018-02-28T09:20:00'),
        author: 'Иванов Егор',
        photoLink: 'snow.jpg',
        scale: 'local',
        plannedFor: new Date ('2018-03-01T12:00:00'),
        age: '12',
        hashTags: ['#снега_слишком_много', '#помощь_другу', '#ищу_компанию'],
        likes:[]
    },
    {
        id: '12',
        name : 'Посещение дегустационного фестиваля пиццы',
        description: 'Ищу в компанию милую девушку',
        createdAt: new Date('2018-02-18T09:20:00'),
        author: 'Иванов Максим',
        photoLink: 'pizza.jpg',
        scale: 'local',
        plannedFor: new Date ('2018-02-25T12:00:00'),
        age: '18',
        hashTags: ['#дегустация', '#фестиваль', '#ищу_компанию'],
        likes:[]
    },
    {
        id: '13',
        name : 'Помощь интернату',
        description: 'Для небольших строительных работ ищем двух волонтеров',
        createdAt: new Date('2018-03-06T11:20:00'),
        author: 'Иванов Владимир',
        photoLink: 'volont.jpg',
        scale: 'local',
        plannedFor: new Date ('2018-03-10T12:00:00'),
        age: '18',
        hashTags: ['#благотворительность', '#волонтер'],
        likes:[]
    },
    {
        id: '14',
        name : 'Старики жаждят общения!',
        description: 'Библиотека Первомайского района №7 организует тренинг для пожилых людей с привлечением молодежи.',
        createdAt: new Date('2018-04-06T11:20:00'),
        author: 'Иванов Роман',
        photoLink: 'oldman.jpg',
        scale: 'local',
        plannedFor: new Date ('2018-04-10T12:00:00'),
        age: '18',
        hashTags: ['#для_пожилых', '#общение', '#ищу_компанию'],
        likes:[]
    },
    {
        id: '15',
        name : 'Snowboarding',
        description: 'Ищу напарника для совместной поездки в Силичи на уик-энд и катания на сноуборде',
        createdAt: new Date('2018-01-12T11:20:00'),
        author: 'Иванов Александр',
        photoLink: 'snowbord.jpg',
        scale: 'local',
        plannedFor: new Date ('2018-01-T13:00:00'),
        age: '18',
        hashTags: ['#спорт', '#сноуборд', '#ищу_компанию'],
        likes:[]
    },
    {
        id: '16',
        name : 'Приглашаю в кино',
        description: 'Ищу компанию для похода в кино на "Три билборда на границе Миссури"',
        createdAt: new Date('2018-02-19T11:20:00'),
        author: 'Иванов Вениамин',
        photoLink: 'cinema.jpg',
        scale: 'local',
        plannedFor: new Date ('2018-02-21T21:00:00'),
        age: '18',
        hashTags: ['#кино', '#ищу_компанию'],
        likes:[]
    },
    {
        id: '17',
        name : 'Вместе попробуем обновленный бар Kew London',
        description: 'Ищу в компанию девушку с приятной внешностю',
        createdAt: new Date('2018-03-13T11:20:00'),
        author: 'Иванов Павел',
        photoLink: 'vine.jpg',
        scale: 'local',
        plannedFor: new Date ('2018-03-21T22:00:00'),
        age: '18',
        hashTags: ['#бар', '#ищу_компанию'],
        likes:[]
    },
    {
        id: '18',
        name : '#Деньбезмяса: станьте веганом хотя бы на день и ешьте в минских кафе со скидкой 50%',
        description: 'А еще сэкономьте 3000 литров воды и 300 деревьев.',
        createdAt: new Date('2018-03-12T11:20:00'),
        author: 'Иванов Алексей',
        photoLink: 'food.jpg',
        scale: 'global',
        plannedFor: new Date ('2018-03-20T13:00:00'),
        age: '18',
        hashTags: ['#деньбезмяса', '#ищу_компанию'],
        likes:[]
    },
    {
        id: '19',
        name : 'Здесь и сейчас',
        description: 'Выставка молодых художников.',
        createdAt: new Date('2018-03-12T18:20:00'),
        author: 'Иванов Евгений',
        photoLink: 'vystavka.jpeg',
        scale: 'global',
        plannedFor: new Date ('2018-03-07T19:00:00'),
        age: '16',
        hashTags: ['#выставка', '#искусство'],
        likes:[]
    },
    {
        id: '20',
        name : 'Луна',
        description: 'Молодая представительница электронной музыки',
        createdAt: new Date('2018-02-10T11:20:00'),
        author: 'Иванов Евгений',
        photoLink: 'moon.jpg',
        scale: 'global',
        plannedFor: new Date ('2018-03-10T20:00:00'),
        age: '16',
        hashTags: ['#музыка', '#электроника'],
        likes:[]
    },
];

(function () {
    function getPhotoPosts(skip, top, filterConfig) {

    };
    function getPhotoPost (id){
        for (i = 0; i < photoPosts.size; i++) {
            if (photoPosts[i].id === id)
                return photoPosts[i];
        }
    };
    function validatePhotoPost(photoPost){
        if (photoPost instanceof photoPosts){
            console.log("That is ok");
            if (isNaN(photoPost.id))
                return false;
            if ((typeof photoPost.name !== 'string')||(photoPost.name === null))
                return false;
        }
    }
})();
