export default (req, res) => {
  const { email } = req.query;
  console.log(email);

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  //   res.statusCode = 200;
  //   res.json({ name: "John Doe" });
};
