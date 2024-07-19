import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes"

const router = createRouter({
    routes,
    history: createWebHistory(),
    // linkActiveClass: "active",
})

router.beforeEach((to, from) => {
    // console.log('Global beforeEach', to, from);
    // // return false;
    // if (to.path === '/tasks') {
    //     return { name: 'login' };
    // }

    if (to.meta.auth) {
        return {
            name: 'login',
            query: {
                redirect: to.fullPath
            }
        };
    };
});

export default router;