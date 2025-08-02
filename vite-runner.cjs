const { exec } = require('child_process');

// Get the original arguments passed by the IDE/environment
const args = process.argv.slice(2);

// Find and replace '--hostname' with the correct '--host' flag
const correctedArgs = args.map(arg => arg === '--hostname' ? '--host' : arg);

// Reconstruct the command to be executed
const command = 'npx vite ' + correctedArgs.join(' ');

console.log(`> Intercepted and corrected command. Running: ${command}`);

// Execute the corrected command and pipe its output to the current process
const viteProcess = exec(command);

viteProcess.stdout.pipe(process.stdout);
viteProcess.stderr.pipe(process.stderr);

viteProcess.on('exit', (code) => {
  process.exit(code);
});
