export default (req, res) => {
  res.statusCode = 200;
  res.json({ id: req.query.id });
};
