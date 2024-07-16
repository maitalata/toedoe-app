<template>
    <li class="py-3 list-group-item" >
        <div class="d-flex justify-content-start align-items-center">
            <input class="mt-0 form-check-input completed" type="checkbox" />
            <div class="ms-2 flex-grow-1" title="Double click the text to edit or remove">
                <!-- <div class="relative">
                    <input class="editable-task" type="text" />
                </div> -->
                <span>{{ task.name }}</span>
            </div>
            <!-- <div class="task-date">24 Feb 12:00</div> -->
        </div>
        <div class="task-actions">
            <button class="btn btn-sm btn-circle btn-outline-secondary me-1">
                <IconPencil />
            </button>
            <button class="btn btn-sm btn-circle btn-outline-danger">
                <IconTrash />
            </button>
        </div>
    </li>
</template>

<script setup>
import IconPencil from "../icons/IconPencil.vue"
import IconTrash from "../icons/IconTrash.vue"

defineProps({
    task: Object
})
</script>