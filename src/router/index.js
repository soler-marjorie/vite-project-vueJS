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
            name: "Lesson1",
            component: () => import("../views/lessons/LessonTextInterpolation.vue")
        },
        {
            path: "/lessons/lesson2",
            name: "Lesson2",
            component: () => import("../views/lessons/LessonInlineTemplating.vue")
        },
        {
            path: "/lessons/lesson3",
            name: "Lesson3",
            component: () => import("../views/lessons/AttributBinding.vue")
        },
        {
            path: "/lessons/lesson4",
            name: "Lesson4",
            component: () => import("../views/lessons/VModel.vue")
        },
        {
            path: "/lessons/lesson5",
            name: "Lesson5",
            component: () => import("../views/lessons/Watcher.vue")
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
            name: "exo3",
            component: () => import("../views/exo/ExoEventBinding.vue")
        },
        {
            path: "/exercices/exo4",
            name: "exo4",
            component: () => import("../views/exo/ExoBugFonctionEvent.vue")
        },
        {
            path: "/exercices/exo5",
            name: "exo5",
            component: () => import("../views/exo/ExoSolutionBug.vue")
        },


        {
            path: "/",
            alias: "/TP",
            name: "TP",
            component: () => import("../views/TP/MainHomeTp.vue"),
        },
        {
            path: "/TP/TP1",
            name: "TP1",
            component: () => import("../views/TP/DataBinding.vue")
        },
        {
            path: "/TP/TP2",
            name: "TP2",
            component: () => import("../views/TP/EventBinding.vue")
        },



        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        },
    ]
});

export default router;