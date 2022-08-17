exports.get404 = (req, res, next) => {
    res.status(404).render('pnf', 
    { 
        pageTitle: 'Page Not Found', 
        path: '/404', 
        isAuthenticated: req.session.isLoggedIn 
    });
}

exports.get500 = (req, res, next) => {
    res.status(500).render('errCon', 
    { 
    pageTitle: 'Error', 
    path: '/500', 
    isAuthenticated: req.session.isLoggedIn
});
}
