console.log(`Current directory: ${__dirname}`);
try {
  const servePath = require.resolve('serve');
  console.log(`Resolved serve path: ${servePath}`);
} catch (e) {
  console.error(`Error resolving serve: ${e.message}`);
}

const serve = require('serve');
const port = process.env.PORT || 8080;

const server = serve('public', {
  port: port,
  host: '0.0.0.0',
});

console.log(`Server running on http://0.0.0.0:${port}`);
