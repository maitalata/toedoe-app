<template>
    <main style="min-height: 50vh; margin-top: 2rem">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <!-- Add new Task -->
                     <NewTask @added="handleAddedTask" />
                   
                    <!-- List of uncompleted tasks -->
                    <!-- <div class="mt-2 card">
                        <ul class="list-group list-group-flush">
                            <Task v-for="task in tasks" :task="task" :key="task.id"  />
                        </ul>
                    </div> -->
                    <Tasks :tasks="uncompletedTasks" />

                    <!-- show toggle button -->
                    <div class="my-3 text-center" v-show="showToggleCompletedBtn">
                        <button class="btn btn-sm btn-secondary"
                            @click="$event => showCompletedTasks = !showCompletedTasks">
                            <span v-if="!showCompletedTasks">Show completed</span>
                            <span v-else>Hide completed</span>
                        </button>
                    </div>

                    <!-- list of completed tasks -->
                    <Tasks :tasks="completedTasks" :show="completedTasksIsVisible && showCompletedTasks"/>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

// import api from "../http/api"
import { allTasks, createTask } from "../http/task-api";
// import Task from "../components/tasks/Task.vue"
import Tasks from "../components/tasks/Tasks.vue";
import NewTask from "../components/tasks/NewTask.vue";

const tasks = ref([]);

onMounted(async () => {
    // const { data } = await api.get('/tasks')
    const { data } = await allTasks();
    // console.log(data)
    // tasks.value = data.data.filter(task => !task.is_completed)
    tasks.value = data.data;
});

const uncompletedTasks = computed(() =>
    tasks.value.filter((task) => !task.is_completed)
);
const completedTasks = computed(() =>
    tasks.value.filter((task) => task.is_completed)
);
const showToggleCompletedBtn = computed(
    () => completedTasks.value.length > 0 && uncompletedTasks.value.length > 0
);
const completedTasksIsVisible = computed(
    () => uncompletedTasks.value.length === 0 || completedTasks.value.length > 0
);

const showCompletedTasks = ref(false)

const handleAddedTask = async (newTask) => {
    const {data: createdTask} = await createTask(newTask);
    tasks.value.unshift(createdTask.data);
}

</script>
