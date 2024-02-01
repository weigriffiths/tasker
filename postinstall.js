const fs = require('fs');
const path = require('path');

const tasksFilePath = join(process.cwd(), 'tasks.json');

if (!fs.existsSync(tasksFilePath)) {
  fs.writeFileSync(tasksFilePath, JSON.stringify([]));
}
