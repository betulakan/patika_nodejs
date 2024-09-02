// koa example without router

const Koa = require("koa");
const app = new Koa();
const port = 3000;

app.use(async (ctx) => {
  if (ctx.request.path === "/") {
    ctx.body = "<h1>Welcome to Index page</h1>";
  } else if (ctx.request.path === "/about") {
    ctx.body = "<h1>Welcome to About page</h1>";
  } else if (ctx.request.path === "/contact") {
    ctx.body = "<h1>Welcome to Contact page</h1>";
  } else {
    ctx.body = "<h1>Page not found :(</h1>";
  }
});

app.listen(port, () => {
  `listening on port: ${port}`;
});
