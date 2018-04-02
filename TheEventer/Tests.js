postRenderer.renderMore();
showUser();
postRenderer.displayNewPost({
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
    likes: []});
postRenderer.erasePost('21');
postRenderer.editPost('10', {plannedFor: new Date ('2018-04-28T19:00:00'), hashTags: ["#спорт"]});
