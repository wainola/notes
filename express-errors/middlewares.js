const validateSomething = (request, response, next) => {
    const error = 'New Error'
    next(error);
}

const validateSomething2 = (request, response, next) => {
    console.log('Something2')
    next();
}

module.exports = {
    validateSomething,
    validateSomething2
}