// controller
module.exports.home_get = (req, res) => {
    res.render('index', { title: 'Hjem'});
};

module.exports.blogger_get = (req, res) => {
    res.render('blogger', { title: 'Blogger' });
};

module.exports.login_get = (req, res) => {
    res.render('logg-inn', { title: 'Logg inn' });
};

module.exports.create_get = (req, res) => {
    res.render('lag-bruker', { title: 'Opprett bruker' });
};