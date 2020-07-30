const express = require('express');
const port = 3000;
const app = express();
const path = require('path');

//setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render('index', {
        title: "My first Express server",
        version: "0.0.0"
    });
});

app.get('/resume', (req, res, next) => {
    res.render('resume',  {
        title: 'My resume',
        name: 'Viktor Nespolo Peixoto',
        profession: 'Software Developer',
        description: 'Repudiandae eaque voluptate enim corporis impedit. Dignissimos eum est dolor qui qui omnis et consequatur.',
        experience: [{
            company: 'Lorem Ipsum',
            office: 'Dolor Sit',
            description: 'Saepe a ducimus et omnis non. Officia tenetur deleniti voluptatem sint.'
        },
        {
            company: 'Amet',
            office: 'Id itaque',
            description: 'Saepe a ducimus et omnis non. Officia tenetur deleniti voluptatem sint.'
        }],
        education: [{
            institution: 'Vida',
            description: 'Sobrevivência nas ruas'
        }],
        skills: ['backend', 'frontend', 'infra', 'mobile']
    });
})

app.listen(port, err => {
    console.log(`Server is listening on port ${port}`);
})