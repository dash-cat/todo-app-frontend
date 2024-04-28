<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Title</label>
      
      <input 
        type="text" 
        v-model="text" 
        name="text" 
        :placeholder="defaultTitle" 
      />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      
      <input
        type="text"
        v-model="day"
        name="day"
        placeholder="yyyy-mm-dd HH:MM"
      />
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      
      <input 
        type="checkbox" 
        v-model="reminder" 
        name="reminder" 
      />
    </div>
    
    <input 
      type="submit" 
      value="Add Task" 
      class="btn btn-block" 
    />
  </form>
</template>

<script>
export default{
  name: 'InsertTask',
  
  data() {
    return {
      text: '',
      day: '',
      defaultTitle: 'Untitled',
      reminder: false,
    };
  },

  methods: {
    onSubmit(e) {
      e.preventDefault()
      
      if (!this.text){
        alert('Please add a task');
        return
      }
      
      const newTask = {
        id: Math.floor(Math.random() * 100000),
        // XXX description? this.text?
        description: this.text || this.defaultTitle,
        day: this.day,
        // XXX ???
        // reminder: this.reminder,
      }
      
      console.log('UII', newTask);
      this.$client.createTask(newTask);
      this.$emit('insert-task', newTask);
      
      this.text = '';
      this.day = '';
      this.reminder = false;
    },
  },
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>