// controller
module.exports.home_get = (req, res) => {
    res.render('index', { title: 'Hjem'});
};

module.exports.blogger_get = (req, res) => {
    res.render('blogger', { title: 'Blogger' });
};