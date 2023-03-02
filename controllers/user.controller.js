export const procurarMusica = (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.status(200).send({ id });
};
