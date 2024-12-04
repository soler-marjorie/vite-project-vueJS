import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            alias: "/home",
            name: "Home",
            component: () => import("../views/HomeView.vue")
        },



        {
            path: "/",
            alias: "/lessons",
            name: "Lessons",
            component: () => import("../views/lessons/MainHomeLessons.vue")
        },
        {
            path: "/lessons/lesson1",
            name: "Lessons",
            component: () => import("../views/lessons/LessonTextInterpolation.vue")
        },
        {
            path: "/lessons/lesson2",
            name: "Lessons",
            component: () => import("../views/lessons/LessonInlineTemplating.vue")
        },






        {
            path: "/",
            alias: "/exercices",
            name: "Exercices",
            component: () => import("../views/exo/MainHomeExercices.vue"),
        },
        {
            path: "/exercices/exo1",
            name: "exo1",
            component: () => import("../views/exo/ExoTextInterpolation.vue")
        },
        {
            path: "/exercices/exo2",
            name: "exo2",
            component: () => import("../views/exo/MethodExecutionComp.vue")
        },
        {
            path: "/exercices/exo3",
            name: "exo2",
            component: () => import("../views/exo/MethodExecutionComp.vue")
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        },
    ]
});

export default router;