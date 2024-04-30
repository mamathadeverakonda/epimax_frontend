import React from 'react';
import TaskListInterface from './TaskListInterface';
import TaskAssignment from './TaskAssignment';
import TaskStatusUpdates from './TaskStatusUpdates';
import TaskSummaryPage from './TaskSummaryPage';

const App = () => {
  return (
    <div>
      <header>
        <h1>Task Management Application</h1>
      </header>
      <TaskListInterface />
      <TaskAssignment />
      <TaskStatusUpdates />
      <TaskSummaryPage />
      <footer>
        <p> 2024 Task Management App</p>
      </footer>
    </div>
  );
};

export default App;