#!/usr/bin/env node

const { runCLI } = require('./utils/prompt');
const { logSuccess, logError } = require('./utils/logger');

async function main() {
    const args = process.argv.slice(2);

    // Check if the command is 'init'
    if (args[0] !== 'init') {
        console.log('');
        console.log('Usage: backly init [options]');
        console.log('');
        console.log('Options:');
        console.log('  --ts                Generate a TypeScript project');
        console.log('  --js                Generate a JavaScript project');
        console.log('  --template <name>   Specify a template (core, base, prime, commerce, content, social)');
        console.log('  --name <name>       Specify the project name');
        console.log('  --dry-run           Simulate the generation process');
        console.log('  --no-install        Skip dependency installation');
        console.log('');
        process.exit(0);
    }

    try {
        console.log(''); // Add spacing
        await runCLI();
    } catch (error) {
        logError('An unexpected error occurred:');
        console.error(error);
        process.exit(1);
    }
}

main();
