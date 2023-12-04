function status(request, response) {
  response.status(200).json({ key: "works!" });
}

export default status;
