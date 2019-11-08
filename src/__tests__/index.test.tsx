test("renders without crashing", (): void => {
  const root = document.createElement("div");
  root.setAttribute("id", "root");
  document.body.appendChild(root);
  // eslint-disable-next-line global-require
  require("../index");
});
