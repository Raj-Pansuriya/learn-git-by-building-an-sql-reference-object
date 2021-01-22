const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should check the log of your repository', async () => {
    assert(lastCommand[0] === 'git' && lastCommand[1] === 'log' && lastCommand[2] === '--oneline' && cwd === '/home/strove/project/sql_reference');
  });
});