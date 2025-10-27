const core = require('@actions/core');

async function run() {
  try {
    const name = core.getInput('name') || 'World';
    core.info(`👋 Hello, ${name}!`);
    core.setOutput('greeting', `Hello, ${name}!`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
