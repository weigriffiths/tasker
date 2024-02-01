import { existsSync, writeFileSync } from 'fs';
import { join } from 'path';

const tasksFilePath = join(process.cwd(), 'tasks.json');

if (!existsSync(tasksFilePath)) {
  writeFileSync(tasksFilePath, JSON.stringify([]));
}
