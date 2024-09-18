const notFound = (req, res) => {
  res.status(404).render('../views/errors/404');
};

module.exports = {notFound};
