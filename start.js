const { exec } = require('child_process');
const port = process.env.PORT || 8080;
const command = `npx serve public -l ${port}`;

console.log(`Starting server on port ${port}...`);
const child = exec(command, { stdio: 'inherit' });

child.on('exit', (code) => {
  process.exit(code);
});
