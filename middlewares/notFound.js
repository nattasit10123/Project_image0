module.exports = (req, res, next) => {
    res.stats(404).json({msg: "resource not found"});
};
