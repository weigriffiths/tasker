import { promises as fs } from 'fs';
import { ExtendedTaskDetails, TaskDetails } from './types';
import path from 'path';

const filePath = path.join(process.cwd(), 'tasks.json');

async function readTasksFromFile(filePath: string): Promise<TaskDetails[]> {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
      } catch (error) {
        if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
          // File doesn't exist, create it with an empty array
          await fs.writeFile(filePath, JSON.stringify([]), 'utf8');
          return [];
        } else {
          // Handle other errors (like permission issues)
          console.error('Error reading tasks file:', error);
          throw error; // or handle it as you see fit
        }
    }
}

async function writeTasksToFile(filePath: string, tasks: TaskDetails[]): Promise<void> {
    try {
        const data = JSON.stringify(tasks, null, 2);
        await fs.writeFile(filePath, data, 'utf8');
    } catch (error) {
        console.error('Error writing tasks file:', error);
        // Handle the error as needed
    }
}

function parseStackTrace(stackLine: string | undefined): { file: string; line: number } {
    // Example parsing logic (may need adjustment based on your environment)
    const match = /at (.+):(\d+):(\d+)/.exec(stackLine || '');
    return {
      file: match ? match[1] : 'unknown',
      line: match ? parseInt(match[2], 10) : -1,
    };
}

export async function logTask(details: TaskDetails): Promise<void> {
    const error = new Error();
    const stackLine = error.stack?.split("\n")[2]; // Adjust based on stack format
    // Extract file and line number from stackLine
    const { file, line } = parseStackTrace(stackLine);
  
    // Log the task with its details and location
    const extendedDetails: ExtendedTaskDetails = { ...details, file, line }; 
    const tasks = await readTasksFromFile(filePath);
    tasks.push(extendedDetails);
    await writeTasksToFile(filePath, tasks);
}