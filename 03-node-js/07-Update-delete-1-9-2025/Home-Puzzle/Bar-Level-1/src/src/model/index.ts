import express from 'express';

interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
}

const app = express();
app.use(express.json());

let tasks: Task[] = [];

app.get('/', (req, res) => {
  res.send('Hello from Level 1 homework!');
});

// Your implementation here

app.listen(3000, () => {
  console.log("Server running on port 3000");
});