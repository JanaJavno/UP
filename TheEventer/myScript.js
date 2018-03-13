//не оценивайте пока что, пожалуйста
function Post(id0, name0, description0, createdAt0,
              author0, photoLink0, scale0, plannedFor0, age0, hashTags0, likes0) {
    return {
        id: id0,
        name: name0,
        description: description0,
        createdAt: new Date(createdAt0),
        author: author0,
        photoLink: photoLink0,
        scale: scale0,
        plannedFor: new Date (plannedFor0),
        age: age0,
        hashTags: hashTags0,
        likes: likes0
    }
}
var hashTags = ['#музыка', '#классика', '#самооборона', '#женская_самооборона', '#открытый_микрофон', '#стекло', '#выставка',
    '#любовь', '#квест', '#фестиваль', '#электроника', '#пилатес', '#набор_в_группу', '#арт', '#для_пожилых', '#регби',
    '#снега_слишком_много', '#помощь_другу', '#ищу_компанию', '#дегустация', '#благотворительность', '#волонтер', '#общение',
    '#спорт', '#сноуборд', '#кино', '#бар', '#деньбезмяса', '#искусство'];
var photoPosts = [
    Post('1', 'Lords of the Sound', 'Музыка известных кинокомпозиторов: Эннио Морриконе, Джон Уильямс.',
        '2018-02-23T23:00:00', 'Петров Иван',  'classicmusic.jpg', 'global', '2018-04-27T19:00:00', '6', ['0', '1'], []),
    Post('2', 'Дерись как девчонка', 'Семинар по женской самообороне от Krav Maga Belarus.',
        '2018-02-21T22:00:00', 'Иванов Василий', 'fight.jpg', 'global', '2018-04-03T12:00:00', '16', ['2', '3'], []),
    Post('3', 'Девушки поют', 'Вспомните хоть один сольный проект молодого белорусского парня?',
        '2018-02-29T20:00:00', 'Иванов Георгий','girlmusic.jpg', 'global', '2018-03-05T19:00:00', '12', ['0', '4'], []),
    Post('4', 'Колер святла', 'Выстава сучаснага чэшскага шкла, прадставленая Пятром Стахам і яго вучнямi.',
        '2018-02-15T18:20:00', 'Петров Инокентий','glass.jpg', 'global', '2018-02-28T19:00:00', '0', ['5', '6'], []),
    Post('5', 'Love-квест', 'Вас увлекут и захватят в плен самые громкие легенды о любви в истории.',
        '2018-01-28T15:20:00', 'Иванов Влаислав','love.jpg', 'global', '2018-02-14T19:00:00', '18', ['7', '8'], []),
    Post('6', 'Beissoul & Einius', 'Звезды летних фестивалей возвращается в Минск с сольным концертом!',
        '2018-01-25T15:20:00', 'Иванов Игорь','musicband.jpg', 'global', '2018-03-02T20:00:00', '12', ['0', '9'], []),
    Post('7', '1/2 Orchestra', 'Традиционное звучание духовых инструментов и экспериментов с электроникой.',
        '2018-03-01T15:20:00', 'Иванов Эдуард','orcestra.png', 'global', '2018-03-10T20:00:00', '12', ['0', '10'], []),
    Post('8', 'Пилатес', 'Проходит набор в группу по пилатесу для начинающих.',
        '2018-03-01T15:20:00', 'Иванов Илья','pilates.jpg', 'global', '2018-03-01T10:00:00', '16', ['11', '12'], []),
    Post('9', 'Арт-тэрапія для пажылых людзей', 'Арт-тэрапія, якую вядзе архітэктарка і выкладчыца для дзяцей і дарослых.',
        '2018-03-01T15:20:00', 'Петров Ян','pineapple.jpg', 'global', '2018-01-25T11:00:00', '18', ['13', '14'], []),
    Post('10', 'Регби для подростков', 'Не важно, какого ты роста и веса, как быстро бегаешь кроссы и сколько можешь отжаться.',
        '2018-03-01T15:20:00', 'Иванов Евгений','regbi.jpg', 'global', '2018-01-02T12:00:00', '6', ['12', '15'], []),
    Post('11', 'Расчистим двор вместе!', 'Вы можете взять лопату и помочь коммунальщикам справиться с весенним снегом у себя во дворе.',
        '2018-02-28T09:20:00', 'Иванов Егор','snow.jpg', 'local', '2018-03-01T12:00:00', '12', ['16', '17', '18'], []),
    Post('12','Посещение дегустационного фестиваля пиццы',  'Ищу в компанию милую девушку',
        '2018-02-28T09:20:00', 'Петров Максим','pizza.jpg', 'local', '2018-02-25T12:00:00', '18', [ '9','18','19'], []),
    Post('13','Помощь интернату', 'Для небольших строительных работ ищем двух волонтеров',
        '2018-03-06T11:20:00', 'Иванов Владимир','volont.jpg', 'local', '2018-03-10T12:00:00', '18', [ '21', '20'], []),
    Post('14','Старики жаждят общения!', 'Библиотека Первомайского района №7 организует тренинг для пожилых людей с привлечением молодежи.',
        '2018-04-06T11:20:00', 'Иванов Роман','oldman.jpg', 'local', '2018-04-10T12:00:00', '18', [ '14', '18', '22'], []),
    Post('15','Snowboarding', 'Ищу напарника для совместной поездки в Силичи на уик-энд и катания на сноуборде',
        '2018-01-12T11:20:00', 'Иванов Александр','snowbord.jpg', 'local', '2018-01-T13:00:00', '18', ['18','23', '24'], []),
    Post('16','Приглашаю в кино', 'Ищу компанию для похода в кино на "Три билборда на границе Миссури"',
        '2018-02-19T11:20:00', 'Петров Вениамин','cinema.jpg', 'local', '2018-02-21T21:00:00', '18', ['18','25'], []),
    Post('17','Вместе попробуем обновленный бар Kew London','Ищу в компанию девушку с приятной внешностю',
        '2018-03-13T11:20:00', 'Иванов Евгений','vine.jpg', 'local', '2018-03-21T22:00:00', '18', ['18','26'], []),
    Post('18','#Деньбезмяса: станьте веганом хотя бы на день и ешьте в минских кафе со скидкой 50%','А еще сэкономьте 3000 литров воды и 300 деревьев.',
        '2018-03-12T11:20:00', 'Иванов Алексей','food.jpg','global', '2018-03-20T13:00:00', '18', ['9', '27'], []),
    Post('19','Здесь и сейчас','Выставка молодых художников.',
        '2018-03-12T18:20:00', 'Иванов Евгений','vystavka.jpeg','global','2018-03-07T19:00:00', '16', ['28', '6'], []),
    Post('20','Луна','Молодая представительница электронной музыки',
        '2018-02-10T19:00:00', 'Иванов Евгений','moon.jpg','global','2018-03-10T20:00:00', '16', ['0','10'], [])
];

(function () {
    function compareByCreating(a, b) {
        return (b.createdAt - a.createdAt);
    }

    function getPhotoPosts(skip, top, filterConfig) {
        var result;
        if (skip === 0) {
            result = photoPosts.slice(0, top + 1);
        }
        else result = photoPosts.slice(skip + 1, skip + top + 1);
        if (!filterConfig) {
            result.sort(compareByCreating);
        }
        else {
            if (filterConfig.name) {
                for (var i = 0; i < result.length; i++) {
                    if (!result[i].name.includes(filterConfig.name)) {
                        result.splice(i, 1);
                        i--;
                    }
                }
            }
            if (filterConfig.description) {
                for (i = 0; i < result.length; i++) {
                    if (!result[i].description.includes(filterConfig.description)) {
                        result.splice(i, 1);
                        i--;
                    }
                }
            }
            if (filterConfig.author) {
                for (i = 0; i < result.length; i++) {
                    if (result[i].author !== filterConfig.author) {
                        result.splice(i, 1);
                        i--;
                    }
                }
            }
            if (filterConfig.scale) {
                for (i = 0; i < result.length; i++) {
                    if (result[i].scale !== filterConfig.scale) {
                        result.splice(i, 1);
                        i--;
                    }
                }
            }
            if (filterConfig.plannedFor) {//Display till day
                for (i = 0; i < result.length; i++) {
                    var FY = result[i].plannedFor.getFullYear();
                    var FM = result[i].plannedFor.getMonth();
                    var FD = result[i].plannedFor.getDay();
                    if ((FY !== filterConfig.plannedFor.getFullYear()) ||
                        (FM !== filterConfig.plannedFor.getMonth()) ||
                        (FD !== filterConfig.plannedFor.getDay())) {
                        result.splice(i, 1);
                        i--;
                    }
                }
            }
            if (filterConfig.age) {
                for (i = 0; i < result.length; i++) {
                    if (result[i].age !== filterConfig.age) {
                        result.splice(i, 1);
                        i--;
                    }
                }
            }
            if (filterConfig.hashTags) {//by all hashtags
                filterConfig.hashTags.sort();
                for (i = 0; i < result.length; i++) {
                    if (!JSON.stringify(result[i].hashTags).includes(JSON.stringify(filterConfig.hashTags).substring(1, JSON.stringify(filterConfig.hashTags) - 2))) {//both of arrays are sorted
                        result.splice(i, 1);
                        i--;
                    }
                }
            }
        }
        return result;
    };

    function getPhotoPost(id) {
        for (var i = 0; i < photoPosts.length; i++) {
            if (parseInt(photoPosts[i].id) === id)
                return photoPosts[i];
        }
    };

    function validatePhotoPost(photoPost) {
        if ((typeof photoPost.id === 'string') && (typeof photoPost.name === 'string') && (typeof photoPost.description === 'string') &&
            (photoPost.createdAt instanceof Date) && (typeof photoPost.author === 'string') && (typeof photoPost.photoLink === 'string')
            && (typeof photoPost.scale === 'string') && (photoPost.plannedFor instanceof Date)) {
            for (var i = 0; i < photoPosts.length; i++) {
                if (photoPost.id === photoPosts[i].id)
                    return false;
            }
            if (photoPost.name.length === 0)
                return false;
            if ((photoPost.description.length === 0) || (photoPost.description.length > 199))
                return false;
            if (JSON.stringify(photoPost.createdAt) === "null")
                return false;
            if (photoPost.author.length === 0)
                return false;
            if (photoPost.photoLink.length === 0)
                return false;
            if (!((photoPost.scale === 'local') || (photoPost.scale === 'global')))
                return false;
            if (JSON.stringify(photoPost.plannedFor) === "null")
                return false;
            else return true;
        }
        else return false;
    }

    function addPhotoPost(object){
        if (validatePhotoPost(object)){
            photoPosts.push(object);
            return true;
        }
        else return false;
    }

    function cloneWithOutId(object){
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
    }

    function editPhotoPost(id, object){
        var temp = cloneWithOutId(photoPosts[id - 1]);
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
            photoPosts[id - 1] = temp;
            return true;
        }
        else return false;
    }

    function removePhotoPost(id){
        photoPosts.splice(id - 1, 1);
    }

    //Test
    console.log("Get post by id: " + "\n" + "with valid parameters:")
    console.log(getPhotoPost(3));
    console.log("and non-valid: ")
    console.log(getPhotoPost(100));
    console.log("Get post array (5 posts, 2 skipped) sorted by creating date(default): ")
    var temp = getPhotoPosts(2, 5);
    for (i = 0; i < temp.length; i++) {
        console.log(temp[i]);
    }
    console.log("Get post array (5 posts, 15 skipped) sorted by author Иванов Евгений: ")
    temp = getPhotoPosts(15, 5, {author: 'Иванов Евгений'});
    for (i = 0; i < temp.length; i++) {
        console.log(temp[i]);
    }
    console.log("Get post array (15 posts, 5 skipped) sorted by description 'электро': ")
    temp = getPhotoPosts(5, 15, {description: 'электро'});
    for (i = 0; i < temp.length; i++) {
        console.log(temp[i]);
    }
    console.log("Get post array (5 posts, 8 skipped) sorted by local scale: ")
    temp = getPhotoPosts(8, 5, {scale: 'local'});
    for (i = 0; i < temp.length; i++) {
        console.log(temp[i]);
    }
    console.log("Get post array (all posts) sorted by global scale, hashTags 0 and 10 and planning date 2018-03-10: ")
    temp = getPhotoPosts(0, 20, {scale: 'global', hashTags: ['0', '10'], plannedFor: new Date('2018-03-10T20:00:00')});
    for (i = 0; i < temp.length; i++) {
        console.log(temp[i]);
    }

    console.log("Check validity for valid object:");
    var obj = {
        id: '21',
        name: 'TestPost',
        description: 'TestDescription',
        createdAt: new Date('2018-03-13T22:04:00'),
        author: 'Jana Javno',
        photoLink: 'TestPhoto.png',
        scale: 'local',
        plannedFor: new Date ('2018-03-13T22:04:00')};
    if (validatePhotoPost(obj))
        console.log("Object is valid");
    else console.log("Object is not valid");

    console.log("Check validity for non-valid object:");
     var obj0 = {
        id: '21',
        name: 'TestPost',
        description: 'TestDescription',
        createdAt: new Date(''),
        author: 'Jana Javno',
        photoLink: 'TestPhoto.png',
        scale: 'local',
        plannedFor: new Date ('2018-03-13T22:04:00')};
    if (validatePhotoPost(obj0))
        console.log("Object is valid");
    else console.log("Object is not valid");

    console.log("Check editting post with id 1 by changing planning date for 2018-04-28T19:00:00: ")
    if (editPhotoPost(1, {plannedFor: new Date ('2018-04-28T19:00:00')})) {
        console.log("successfully editted");
        console.log(photoPosts[0]);
    }

    console.log("Add new photoPost:");
    if (addPhotoPost(obj)){
        console.log("The post was successfully added");
        console.log(photoPosts[photoPosts.length - 1]);
    }

    console.log("Remove test photoPost:");
    removePhotoPost(photoPosts.length);
    console.log("The post was successfully removed, the last array element: ");
    console.log(photoPosts[photoPosts.length - 1]);
})();
