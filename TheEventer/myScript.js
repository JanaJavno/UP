const postManager = (function () {
    let post = function (id, name, description, createdAt,
                         author, photoLink, scale, plannedFor, age, hashTags, likes) {
        return {
            id,
            name,
            description,
            createdAt: new Date(createdAt),
            author,
            photoLink,
            scale,
            plannedFor: new Date (plannedFor),
            age,
            hashTags,
            likes
        }
    };
    let hashTags = ['#музыка', '#классика', '#самооборона', '#женская_самооборона', '#открытый_микрофон', '#стекло', '#выставка',
        '#любовь', '#квест', '#фестиваль', '#электроника', '#пилатес', '#набор_в_группу', '#арт', '#для_пожилых', '#регби',
        '#снега_слишком_много', '#помощь_другу', '#ищу_компанию', '#дегустация', '#благотворительность', '#волонтер', '#общение',
        '#спорт', '#сноуборд', '#кино', '#бар', '#деньбезмяса', '#искусство'];
    let photoPosts = [
        post('1', 'Lords of the Sound', 'Музыка известных кинокомпозиторов: Эннио Морриконе, Джон Уильямс.',
            '2018-02-23T23:00:00', 'Петров Иван',  'assets/classicmusic.jpg', 'global', '2018-04-27T19:00:00', '6', ['#музыка', '#классика'], []),
        post('2', 'Дерись как девчонка', 'Семинар по женской самообороне от Krav Maga Belarus.',
            '2018-02-21T22:00:00', 'Иванов Василий', 'assets/fight.jpg', 'global', '2018-04-03T12:00:00', '16', ['#самооборона', '#женская_самооборона'], []),
        post('3', 'Девушки поют', 'Вспомните хоть один сольный проект молодого белорусского парня?',
            '2018-02-29T20:00:00', 'Иванов Георгий','assets/girlmusic.jpg', 'global', '2018-03-05T19:00:00', '12', ['#музыка','#открытый_микрофон'], []),
        post('4', 'Колер святла', 'Выстава сучаснага чэшскага шкла, прадставленая Пятром Стахам і яго вучнямi.',
            '2018-02-15T18:20:00', 'Петров Инокентий','assets/glass.jpg', 'global', '2018-02-28T19:00:00', '0', ['#стекло', '#выставка'], []),
        post('5', 'Love-квест', 'Вас увлекут и захватят в плен самые громкие легенды о любви в истории.',
            '2018-01-28T15:20:00', 'Иванов Влаислав','assets/love.jpg', 'global', '2018-02-14T19:00:00', '18', ['#любовь', '#квест'], []),
        post('6', 'Beissoul & Einius', 'Звезды летних фестивалей возвращается в Минск с сольным концертом!',
            '2018-01-25T15:20:00', 'Иванов Игорь','assets/musicband.jpg', 'global', '2018-03-02T20:00:00', '12', ['#музыка', '#фестиваль'], []),
        post('7', '1/2 Orchestra', 'Традиционное звучание духовых инструментов и экспериментов с электроникой.',
            '2018-03-01T15:20:00', 'Иванов Эдуард','assets/orcestra.png', 'global', '2018-03-10T20:00:00', '12', ['#музыка', '#электроника'], []),
        post('8', 'Пилатес', 'Проходит набор в группу по пилатесу для начинающих.',
            '2018-03-05T15:20:00', 'Иванов Илья','assets/pilates.jpg', 'global', '2018-03-01T10:00:00', '16', ['#пилатес', '#набор_в_группу'], []),
        post('9', 'Арт-тэрапія для пажылых людзей', 'Арт-тэрапія, якую вядзе архітэктарка і выкладчыца для дзяцей і дарослых.',
            '2018-03-15T15:20:00', 'Петров Ян','assets/pineapple.jpg', 'global', '2018-01-25T11:00:00', '18', ['#арт', '#для_пожилых'], []),
        post('10', 'Регби для подростков', 'Не важно, какого ты роста и веса, как быстро бегаешь кроссы и сколько можешь отжаться.',
            '2018-03-21T16:00:00', 'Иванов Евгений','assets/regbi.jpg', 'global', '2018-01-02T12:00:00', '6', [ '#набор_в_группу',  '#регби'], []),
        post('11', 'Расчистим двор вместе!', 'Вы можете взять лопату и помочь коммунальщикам справиться с весенним снегом у себя во дворе.',
            '2018-02-24T09:20:00', 'Иванов Егор','assets/snow.jpg', 'local', '2018-03-01T12:00:00', '12', ['#снега_слишком_много', '#помощь_другу', '#ищу_компанию'], []),
        post('12','Посещение дегустационного фестиваля пиццы',  'Ищу в компанию милую девушку',
            '2018-02-28T09:20:00', 'Петров Максим','assets/pizza.jpg', 'local', '2018-02-25T12:00:00', '18', [ '#фестиваль','#ищу_компанию', '#дегустация'], []),
        post('13','Помощь интернату', 'Для небольших строительных работ ищем двух волонтеров',
            '2018-03-06T11:20:00', 'Иванов Владимир','assets/volont.jpg', 'local', '2018-03-10T12:00:00', '18', [ '#благотворительность', '#волонтер'], []),
        post('14','Старики жаждят общения!', 'Библиотека Первомайского района №7 организует тренинг для пожилых людей с привлечением молодежи.',
            '2018-04-06T11:20:00', 'Иванов Роман','assets/oldman.jpg', 'local', '2018-04-10T12:00:00', '18', [ '#для_пожилых', '#ищу_компанию', '#волонтер'], []),
        post('15','Snowboarding', 'Ищу напарника для совместной поездки в Силичи на уик-энд и катания на сноуборде',
            '2018-01-12T11:20:00', 'Иванов Александр','assets/snowbord.jpg', 'local', '2018-01-T13:00:00', '18', ['#ищу_компанию', '#спорт', '#сноуборд'], []),
        post('16','Приглашаю в кино', 'Ищу компанию для похода в кино на "Три билборда на границе Миссури"',
            '2018-02-19T11:20:00', 'Петров Вениамин','assets/cinema.jpg', 'local', '2018-02-21T21:00:00', '18', ['#ищу_компанию','#кино'], []),
        post('17','Вместе попробуем обновленный бар Kew London','Ищу в компанию девушку с приятной внешностю',
            '2018-03-13T11:20:00', 'Иванов Евгений','assets/vine.jpg', 'local', '2018-03-21T22:00:00', '18', ['#ищу_компанию', '#бар'], []),
        post('18','#Деньбезмяса: станьте веганом хотя бы на день и ешьте в минских кафе со скидкой 50%','А еще сэкономьте 3000 литров воды и 300 деревьев.',
            '2018-03-12T11:20:00', 'Иванов Алексей','assets/food.jpg','global', '2018-03-20T13:00:00', '18', ['#фестиваль', '#деньбезмяса'], []),
        post('19','Здесь и сейчас','Выставка молодых художников.',
            '2018-03-12T18:20:00', 'Иванов Евгений','assets/vystavka.jpeg','global','2018-03-07T19:00:00', '16', ['#искусство', '#выставка'], []),
        post('20','Луна','Молодая представительница электронной музыки',
            '2018-02-10T19:00:00', 'Иванов Евгений','assets/moon.jpg','global','2018-03-10T20:00:00', '16', ['#музыка','#электроника'], [])
    ];
    const filters = {
        description: (postDescription, filterDescription) => {
            return postDescription.includes(filterDescription);
        },
        plannedFor: (postPlannedFor, filterPlannedFor) => {
            if (Array.isArray(filterPlannedFor)){
                return ( postPlannedFor.getTime() > filterPlannedFor[0].getTime())
                    &&(postPlannedFor.getTime() < filterPlannedFor[1].getTime());
            }
            else return  (postPlannedFor.getFullYear() === filterPlannedFor.getFullYear()) &&
                (postPlannedFor.getMonth() === filterPlannedFor.getMonth())
                && (postPlannedFor.getDay() === filterPlannedFor.getDay());
        },
        hashTags: (postHashTags, filterHashTags) => {
            return (filterHashTags.every(elem => postHashTags.indexOf(elem) > -1));
        },
        default: (postProperty, filterProperty) => {
            return postProperty === filterProperty;
        }
    };
    const validation = {
        id: (photoPostId) => {
        if (typeof photoPostId !== 'string'){
            return false;
        }
        for (let i = 0; i < photoPosts.length; i++) {
            if (photoPostId === photoPosts[i].id) {
                return false;
            }
        }
        return true;
        },
        description: (photoPostDescription) => {
            return (typeof photoPostDescription === 'string')
                &&(photoPostDescription.length !== 0)&&(photoPostDescription.length < 199);
        },
        createdAt: (photoPostCreatedAt) => {
            return (photoPostCreatedAt instanceof Date)&&(JSON.stringify(photoPostCreatedAt) !== "null");
        },
        plannedFor: (photoPostPlannedFor) => {
            return (photoPostPlannedFor instanceof Date)&&(JSON.stringify(photoPostPlannedFor) !== "null");
        },
        scale: (photoPostScale) => {
            return (typeof photoPostScale === 'string')
                &&((photoPostScale === 'local') || (photoPostScale === 'global'));
        },
        hashTags: (photoPostHashTags) => {
            return !(!photoPostHashTags);
        },
        likes: (photoPostLikes) => {
            return !(!photoPostLikes);
        },
        default: (photoPostProperty) => {
            return (typeof photoPostProperty === 'string')&&(photoPostProperty.length !== 0);
        }
    };
    let getPhotoPosts = function (skip, top, filterConfig) {
        let result = photoPosts.slice(0, photoPosts.length);
        if (!filterConfig) {
            result = result.sort((a, b) => b.createdAt - a.createdAt);
            result = result.slice(skip, skip + top);
            return result;
        }
        else {
            let property;
            for (property in filterConfig) {
                if (filters[property]) {
                    result = result.filter(post => filters[property](post[property], filterConfig[property]));
                } else {
                    result = result.filter(post => filters.default(post[property], filterConfig[property]));
                }
            }
        }
        result = result.slice(skip, skip + top);
        result.sort((a, b) => b.createdAt - a.createdAt);
        return result;
    };

    let getPhotoPost = function (id) {
        return photoPosts.filter(photopost => photopost.id === id)[0];
    };

    let validatePhotoPost = function (photoPost) {
        if (Object.keys(photoPost).length < 10){
            return false;
        }
        let property;
        for (property in photoPost){
            if (validation[property]) {
                if (!validation[property](photoPost[property]))
                    return false;
            }
            else {
                if (!validation.default(photoPost[property]))
                    return false;
            }
        }
        return true;
    };

    let addPhotoPost = function (object){
        if (validatePhotoPost(object)){
            photoPosts.push(object);
            return true;
        }
        else return false;
    };

    let cloneWithOutId = function (object){
        return {
            name: object.name,
            description: object.description,
            createdAt: object.createdAt,
            author: object.author,
            photoLink: object.photoLink,
            scale: object.scale,
            plannedFor: object.plannedFor,
            age: object.age,
            hashTags: object.hashTags,
            likes: object.likes
        }
    };

    let editPhotoPost = function (id, object){
        let temp = cloneWithOutId(getPhotoPost(id));
        temp.id = (photoPosts.length + 1).toString();
        if (object.name){
            temp.name = object.name;
        }
        if (object.description){
            temp.description = object.description;
        }
        if (object.photoLink){
            temp.photoLink = object.photoLink;
        }
        if (object.scale){
            temp.scale = object.scale;
        }
        if (object.plannedFor){
            temp.plannedFor = object.plannedFor;
        }
        if (object.age){
            temp.age = object.age;
        }
        if (object.hashTags){
            temp.hashTags = object.hashTags;
        }
        if (validatePhotoPost(temp)){
            temp.id = id;
            photoPosts[photoPosts.indexOf(getPhotoPost(id))] = temp;
            return true;
        }
        else return false;
    };

    let removePhotoPost = function (id){
        photoPosts.splice(photoPosts.indexOf(getPhotoPost(id)));
    };
    let size = function(){
        return photoPosts.length;
    };
    return {
        size,
        getPhotoPosts,
        getPhotoPost,
        validatePhotoPost,
        addPhotoPost,
        editPhotoPost,
        removePhotoPost,
        hashTags
    };
})();


console.log("Get post array (5 posts, 2 skipped) sorted by creating date(default): ");
console.log(postManager.getPhotoPosts(2, 5));


console.log("Get post array (3 posts, 1 skipped) sorted by author Иванов Евгений: ");
console.log(postManager.getPhotoPosts(1, 3, {author: 'Иванов Евгений'}));

console.log("Get post array (2 posts, 0 skipped) sorted by description 'электро': ");
console.log(postManager.getPhotoPosts(0, 2, {description: 'электро'}));

console.log("Get post array (5 posts, 0 skipped) sorted by local scale: ");
console.log(postManager.getPhotoPosts(0, 5, {scale: 'local'}));

console.log("Get post array (5 posts, 0 skipped) sorted by 2 dates: ");
console.log(postManager.getPhotoPosts(0, 5, {plannedFor: [new Date ('2018-01-05T10:00:00'), new Date ('2018-04-25T20:00:00')]}));


console.log("Get post array (all posts) sorted by global scale, hashTags #музыка and #электроника and planning date 2018-03-10: ");
console.log(postManager.getPhotoPosts(0, 20, {scale: 'global', hashTags: ['#музыка', '#электроника'], plannedFor: new Date('2018-03-10T20:00:00')}));

console.log("Check validity for valid object:");
let obj = {
    id: '21',
    name: 'TestPost',
    description: 'TestDescription',
    createdAt: new Date('2018-03-13T22:04:00'),
    author: 'Jana Javno',
    photoLink: 'TestPhoto.png',
    scale: 'local',
    plannedFor: new Date ('2018-03-13T22:04:00'),
    age: '12',
    hashTags: [],
    likes: []};
if (postManager.validatePhotoPost(obj))
    console.log("Object is valid");
else console.log("Object is not valid");

console.log("Check validity for non-valid object:");
let obj0 = {
    id: '22',
    name: 'TestPost',
    description: 'TestDescription',
    createdAt: new Date('2018-03-13T22:04:00'),
    author: 'Jana Javno',
    photoLink: 'TestPhoto.png',
    scale: 'local',
    plannedFor: new Date ('2018-03-13T22:04:00')};
if (postManager.validatePhotoPost(obj0))
    console.log("Object is valid");
else console.log("Object is not valid");
