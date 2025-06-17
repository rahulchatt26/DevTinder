const adminAuth = (req, res, next) => {
    const token = 'valid-admin-token'; 
    const isAuthorized = token === 'valid-admin-token';
    if(!isAuthorized){
        console.log('Unauthorized request');
        res.status(401).send('Unauthorized request');
    }
    else{
        next();
    }
}

const userAuth = (req, res, next) => {
    const token = 'valid-user-token'; 
    const isAuthorized = token === 'valid-user-token';
    if(!isAuthorized){
        console.log('Unauthorized request');
        res.status(401).send('Unauthorized request');
    }
    else{
        next();
    }
}

module.exports = {
    adminAuth,
    userAuth
}