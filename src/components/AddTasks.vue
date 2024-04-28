<template>
     <div :key = "task.id" v-for = "task in tasks" >
    <OnlyTask @toggle-reminder="$emit('toggle-reminder',task.id)"
    @delete-task="$emit('delete-task', task.id)" 
    :task="task" />

    </div>
    <TaskCompleted></TaskCompleted>
</template>

<script>
import TaskCompleted from "./TaskCompleted.vue"

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
        // OnlyTask
    },
    emits: ['delete-task', 'toggle-reminder']
}
</script>