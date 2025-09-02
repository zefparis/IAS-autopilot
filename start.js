const { exec } = require('child_process');
const port = process.env.PORT || 8080;
const command = `npx serve public -l 0.0.0.0:${port}`;

console.log(`Starting server on port ${port}...`);
const child = exec(command, { stdio: 'inherit' });

child.on('error', (error) => {
  console.error(`Error: ${error.message}`);
});

child.on('exit', (code) => {
  if (code !== 0) {
    console.error(`Server exited with code ${code}`);
  }
  process.exit(code);
});
