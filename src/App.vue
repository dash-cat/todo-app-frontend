<template>
  <div class="container">
    <PageHeader 
      @toggle-add-task="toggleAddTask"
      title="Task Tracker" :showAddTask = "showAddTask"
    />

    <div v-show="showAddTask">
      <InsertTask @insert-task="addTask"/>
    </div>

    <AddTasks
      @toggle-reminder="toggleReminder" 
      @delete-task="deleteTask" 
      :tasks="tasks"
    />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader'
import AddTasks from './components/AddTasks'
import InsertTask from './components/InsertTask'

export default {
  name: 'App',

  components: {
    PageHeader,
    AddTasks,
    InsertTask,
  },

  data() {
    return {
      tasks: [],
      showAddTask: false,
      newTaskDescription: '',
      newTaskCompleted: false,
    };
  },

  methods: {
    async fetchTasks() {
      try {
        const response = await this.$client.getTasks();
        this.$log('fetchTasks(): response.data =', response.data);
        this.tasks = response.data;
      } catch (error) {
        alert('Failed to fetch tasks');
        this.$spew("There was an error fetching the tasks:", error);
      }
    },

    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    
    async deleteTask(id) {
      if (confirm('Are you sure')) {
        try {
          await this.$client.deleteTaskWithId(id);
          this.tasks = this.tasks.filter((task) => task.id !== id);
        } catch (error) {
          const message = `Failed to delete a task`;

          alert(message);
          console.error(`${message}: ${error}`);
        }
      }
    },

    toggleReminder(id) {
      this.tasks = this.tasks.map(
        (task) => (
          task.id === id
          ? { ...task, reminder: !task.reminder }
          : task
        )
      );
    },
  },

  mounted() {
    const task = this.fetchTasks();
    this.$log('task', task)
  },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
