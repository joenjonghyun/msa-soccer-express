const { signup, userlist ,login } = require('../controllers/user.controller');
const { verifyToken } = require('../routes/middlewares');
module.exports = x => {
    x.app.post(`${x.url}/signup`, signup)
    x.app.post(`${x.url}/login`, verifyToken ,login)
    x.app.get(`${x.url}/list`, userlist)
}