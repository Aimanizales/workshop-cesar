const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

const PORT = process.env.PORT || 3000;

app.prepare()
  .then(() => {
    server.get('/test', (req, res) => res.send('test')); // el orden es muy importante.
    server.get('*', (req, res) => handle(req, res));
    server.listen(PORT, () => {
      console.log(`> Mono's App listening in ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
