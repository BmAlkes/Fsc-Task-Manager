const notFoundError = (res, msg) => {
    return res.status(404).send(msg);
};

module.exports = {
    notFoundError,
};
