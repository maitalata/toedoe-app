<template>
    <div class="mt-2 card" v-if="tasks.length && show " >
        <ul class="list-group list-group-flush">
            <Task v-for="task in tasks" 
            :task="task" 
            :key="task.id" 
            @updated="handleUpdatedTask"
            @completed="handleCompletedTask"
            @removed="handleRemovedTask"
            />

            <!-- <Task v-for="task in tasks" 
            :task="task" 
            :key="task.id" 
            @updated="$emit('updated', $event)"
            @completed="$emit('completed', $event)"
            @removed="$emit('removed', $event)"
            /> -->
        </ul>
    </div>
</template>
<script setup>
import Task from "./Task.vue"
import { useTaskStore } from "../../stores/task"

const store = useTaskStore()

const { handleUpdatedTask, handleCompletedTask, handleRemovedTask } = store

defineProps({
    tasks: Array,
    show: {
        type: Boolean,
        default: true
    }
})

</script>