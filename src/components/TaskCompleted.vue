<template>
   <button @click="$emit('Completed')"></button>
</template>

<script>

export default {
   name : "AddTasks",
   props :{
       tasks: {
           type: Array,
           default: () =>[]
       }
   },
   components: {
    // XXX
    //    OnlyTask
   },
   emits: ['delete-task', 'toggle-reminder']
}
</script>