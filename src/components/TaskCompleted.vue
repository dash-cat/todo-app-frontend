<template>
  <button @click="$emit('Completed')"></button>
</template>

<script>

import OnlyTask from './OnlyTask.vue';

export default {
  name : "TaskCompleted",
  props :{
    tasks: {
      type: Array,
      default: () => []
    }
  },
  components: {
    OnlyTask
  },
  emits: ['delete-task', 'toggle-reminder']
}
</script>