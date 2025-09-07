"use strict";
// server.ts - Everything in one file to keep it simple
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Step 2: Create our app
const app = (0, express_1.default)();
// Step 3: Tell the app to understand JSON
app.use(express_1.default.json());
// Step 4: Create a simple list to store tasks (this replaces your taskdata file)
let tasks = [];
let nextId = 1;
// Step 5: Homepage - just to test if server works
app.get('/', (req, res) => {
    res.send('Hello! My TypeScript task server is working!');
});
// Step 6: Get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});
// Step 7: Add a new task
app.post('/tasks', (req, res) => {
    const { title } = req.body;
    // Simple validation
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }
    // Create new task
    const newTask = {
        id: nextId++,
        title: title,
        completed: false
    };
    // Add to our list
    tasks.push(newTask);
    // Send it back
    res.json(newTask);
});
// Step 8: Start the server
app.listen(3000, () => {
    console.log('🎉 TypeScript server is running!');
    console.log('🌐 Go to: http://localhost:3000');
    console.log('📝 See tasks at: http://localhost:3000/tasks');
});
//# sourceMappingURL=server.js.map