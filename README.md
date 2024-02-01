# Task Manager for Development Environments

This npm package provides a simple yet powerful task management system specifically designed for development environments. It allows developers to log tasks with detailed information and view them in a user-friendly interface within their development server.

## Features

- **Automated Task Logging**: Easily log tasks within your code with detailed information such as descriptions, priorities, due dates, and tags.
- **Development-Only UI**: A chat bubble and modal interface to view and manage tasks directly in the development environment.
- **Persistent Task Storage**: Tasks are saved in a `tasks.json` file in the project's root directory, ensuring persistence across development sessions.

## Installation

```bash
npm install [your-package-name]
```

Upon installation, a `tasks.json` file will be automatically created in the root directory of your project to store task data.

## Usage

### Logging Tasks

Import the `logTask` function from the package and use it to log tasks in your code:

```javascript
import { logTask } from '[your-package-name]';

logTask({
  description: "Fix bug in login flow",
  priority: 1,
  dueDate: new Date('2023-01-01'),
  tags: ['bugfix', 'login'],
});
```

### Viewing Tasks in Development

To view and manage tasks:

1. **Implement an API Route**: Set up an API route in your Next.js project to serve the tasks.

   ```javascript
   // pages/api/tasks.js
   import fs from 'fs';
   import path from 'path';

   export default function handler(req, res) {
     const filePath = path.join(process.cwd(), 'tasks.json');
     fs.readFile(filePath, 'utf8', (err, data) => {
       if (err) return res.status(500).end('Error reading tasks file');
       res.status(200).json(JSON.parse(data));
     });
   }
   ```

2. **Integrate the UI Components**: Use the provided `ChatBubble` and `TaskModal` components in your application to display the tasks.

   ```javascript
   import ChatBubble from '[your-package-name]/components/ChatBubble';

   // Use <ChatBubble /> in your component tree
   ```

## API

### `logTask(taskDetails: TaskDetails): Promise<void>`

Logs a task to the `tasks.json` file.

#### Parameters

- `taskDetails`: An object containing task information.
  - `description`: String. The description of the task.
  - `priority`: (Optional) Number. The priority of the task.
  - `dueDate`: (Optional) Date. The due date for the task.
  - `tags`: (Optional) String[]. Tags associated with the task.

## Contributing

Contributions are welcome! Please read our contributing guidelines and code of conduct.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Notes for the README:**

- Replace `[your-package-name]` with the actual name of your npm package.
- Make sure to include any additional setup instructions specific to your package.
- Consider adding a section for 'Common Issues & Solutions' if there are known quirks or common challenges users might face.
- Providing a link to a more detailed documentation or a GitHub repository (if public) can be helpful.

**Final Question**: Does this README template meet your expectations? If you need further customization or additional sections, feel free to ask!