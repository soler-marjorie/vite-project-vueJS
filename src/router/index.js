import { createRouter, createWebHistory } from "vue-router";
import {auth} from '../firebase'

const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: "/register",
            name: "Register",
            component: () => import("../views/inscription/RegisterPageView.vue")
        },
        {
            path: "/login",
            name: "Login",
            component: () => import("../views/inscription/LoginPageView.vue")
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: () => import("../views/inscription/DashboardView.vue"),
            meta: { requiresAuth: true }, // Route protégée
        },



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
            component: () => import("../views/lessons/LessonInlineTemplatingView.vue")
        },
        {
            path: "/lessons/lesson3",
            name: "Lesson3",
            component: () => import("../views/lessons/LessonEventBindingView.vue")
        },
        {
            path: "/lessons/lesson4",
            name: "Lesson4",
            component: () => import("../views/lessons/LessonTwoWayBinding.vue")
        },
        {
            path: "/lessons/lesson5",
            name: "Lesson5",
            component: () => import("../views/lessons/LessonWatchers.vue")
        },
        {
            path: "/lessons/lesson6",
            name: "Lesson6",
            component: () => import("../views/lessons/LessonAttributeBindingView.vue")
        },
        {
            path: "/lessons/lesson7",
            name: "Lesson7",
            component: () => import("../views/lessons/LessonComputedProperties.vue")
        },
        {
            path: "/lessons/lesson8",
            name: "Lesson8",
            component: () => import("../views/lessons/LessonDynamicStyling.vue")
        },
        {
            path: "/lessons/lesson9",
            name: "Lesson9",
            component: () => import("../views/lessons/LessonMethods.vue")
        },
        {
            path: "/lessons/lesson10",
            name: "Lesson10",
            component: () => import("../views/lessons/LessonListRendering.vue")
        },
        {
            path: "/lessons/lesson11",
            name: "Lesson11",
            component: () => import("../views/lessons/LessonLibraryChartJsView.vue")
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
            path: "/exercices/exo6",
            name: "exo6",
            component: () => import("../views/exo/ExoDynamicStyling.vue")
        },
        {
            path: "/exercices/exo7",
            name: "exo7",
            component: () => import("../views/exo/ExoDynamicStyleClassCss.vue")
        },
        {
            path: "/exercices/exo8",
            name: "exo8",
            component: () => import("../views/exo/V&Vfor.vue")
        },
        {
            path: "/exercices/exo9",
            name: "exo9",
            component: () => import("../views/exo/ExoPropsView.vue")
        },
        {
            path: "/exercices/exo10",
            name: "exo10",
            component: () => import("../views/exo/ExoPropsParent.vue")
        },
        {
            path: "/exercices/exo11",
            name: "exo11",
            component: () => import("../views/exo/ExoPropsEnfant.vue")
        },
        {
            path: "/exercices/exo12",
            name: "exo12",
            component: () => import("../views/exo/ExoPropsBug.vue")
        },
        {
            path: "/exercices/exo13",
            name: "exo13",
            component: () => import("../views/exo/V-forV-bind.vue")
        },
        {
            path: "/exercices/exo14",
            name: "exo14",
            component: () => import("../views/exo/V-forV-bindEnfant.vue")
        },
        {
            path: "/exercices/exo15",
            name: "exo15",
            component: () => import("../views/exo/ExoFetchApi.vue")
        },



    
        {
            path: "/lesson-router",
            name: "lesson-router",
            component: () => import("../views/exo/routes/LessonRouterView.vue")
        },
        {
            path: "/details/:id",
            name: "details",
            component: () => import("../views/exo/routes/DetailsPage.vue"),
            props:true
        },

        {
            path: "/chartJS",
            name: "chartJs",
            component: () => import("../views/chartJs/ChartParent.vue")
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
            path: "/TP/TP3",
            name: "TP3",
            component: () => import("../views/TP/Reactivite.vue")
        },
        {
            path: "/TP/TP4",
            name: "TP4",
            component: () => import("../views/TP/TPDynamicStyleCss.vue")
        },

        {
            path: "/TP/TP5",
            name: "TP5",
            component: () => import("../views/TP/TPV-forV-if.vue")
        },



        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        },
    ]
});

// Vérification avant chaque navigation
router.beforeEach((to, from, next) => {
    const currentUser = auth.currentUser;

    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!currentUser) {
            next({ name: "Login" }); // Redirection vers la page de connexion si non authentifié
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;