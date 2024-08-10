<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { startOfWeek, endOfWeek, subWeeks, format } from "date-fns";
import Dropdwon from "../../dropdown/Dropdown.vue";
import DropdownItem from "../../dropdown/DropdownItem.vue";
import DropdownTrigger from "../../dropdown/DropdownTrigger.vue";
import FilterItem from "./FilterItem.vue";


const filterItems = computed(() => {
    const thisWeekStart = format(startOfWeek(new Date()), 'd MMM');
    const thisWeekEnd = format(endOfWeek(new Date()), 'd MMM');

    const lastWeekStart = format(startOfWeek(subWeeks(new Date(), 1)), 'd MMM');
    const lastWeekEnd = format(endOfWeek(subWeeks(new Date(), 1)), 'd MMM');


    return {
        'today': 'Today',
        'yesterday': 'Yesterday',
        'thisweek': `This Week (${thisWeekStart} - ${thisWeekEnd})`,
        'lastweek': `Last Week (${lastWeekStart} - ${lastWeekEnd})`,
        'thismonth': 'This Month',
        'lastmonth': 'Last Month',
    }
})

const emit = defineEmits(['update']);

const router = useRouter()

const filter = (period) => {
    activeFilterKey.value = period;
    router.push({name: 'summary', query: { period }})
    emit("update", {
        text: activeFilter.value,
        period: activeFilterKey.value
    });
};
onMounted(() => emit("update", activeFilter.value));

const activeFilterKey = ref('thisweek');
const activeFilter = computed(
    () =>
        filterItems.value[activeFilterKey.value] || filterItems.value.thisweek,
);
</script>
<template>
    <Dropdwon>
        <template v-slot:trigger="{ toggleClass, toggle }" >
            <DropdownTrigger class="btn btn-outline-secondary" :class="toggleClass" type="button" @click="toggle"  >{{ activeFilter }}</DropdownTrigger>
        </template>
        <template v-slot:menu="{ toggle }" >
            <DropdownItem v-for="(value, key) in filterItems" :key="key"  href="#" @click.prevent="toggle(), filter(key)" >
                <FilterItem :text="value" :selected="key === activeFilterKey" />
            </DropdownItem>
        </template>value
    </Dropdwon>
</template>