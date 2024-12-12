import { createRouter, createWebHistory } from "vue-router";
import {auth} from '../firebase'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        },
        {
            path: "/",
            alias: "/home",
            name: "Home",
            component: () => import("../views/HomeView.vue")
        },
        {
            path: "/register",
            name: "Register",
            component: () => import("../views/RegisterPageView.vue")
        },
        {
            path: "/login",
            name: "Login",
            component: () => import("../views/LoginPageView.vue")
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: () => import("../views/DashboardView.vue"),
            meta: { requiresAuth: true }, // Route protégée
        },
        {
            path: "/add-article",
            name: "AddArticle",
            component: () => import("../components/AddArticle.vue"),
            meta: { requiresAuth: true }, // Route protégée
        },
        {
            path: "/articles-list",
            name: "ArticleList",
            component: () => import("../components/ArticlesList.vue"),
            meta: { requiresAuth: true }, // Route protégée
        },
        {
            path: "/details/:id/:itemName", //Exemple de route avec 2 paramètres  
            name: "Details",
            component: () => import("../views/../components/shared/DetailsPage.vue"),
            props:true
        },
        // {
        //     path: "/details/:id",
        //     name: "Details",
        //     component: () => import("../views/../components/shared/DetailsPage.vue"),
        //     props:true
        // },
        {
            path: "/list-lessons",
            name: "LessonsList",
            component: () => import("../components/shared/ListLessons.vue")
        },
        {
            path: "/list-exercices",
            alias: "/exos",
            name: "ExoList",
            component: () => import("../components/shared/ListExo.vue")
        },
        {
            path: "/list-tp",
            alias: "/tp",
            name: "TpList",
            component: () => import("../components/shared/ListTp.vue")
        },
        {
            path: "/test-comp",
            alias: "/test",
            name: "TestComponentStagiaire",
            component: () => import("../components/TestingComponentStagiaire.vue")
        },
        //! ----------------------------Lessons Views routes ----------------------------
        {
            path: '/lesson-presentation-vue',
            name: 'Lesson-IntroVue',
            component: () => import('../views/lessons/LessonPresentationVue.vue')
        },
        {
            path: '/lesson-intro-vue',
            name: 'Lesson-IntroVue',
            component: () => import('../views/lessons/LessonIntroductionVue.vue')
        },
        {
            path: '/lesson-setup-vue',
            name: 'Lesson-SetupVue',
            component: () => import('../views/lessons/LessonSetupVue.vue')
        },
        {
            path: '/lesson-install-use-dependencies',
            name: 'Lesson-DependencesAjoutUtilisation',
            component: () => import('../views/lessons/LessonDependencesAjoutUtilisation.vue')
        },
        {
            path: '/lesson-text-interpolation',
            name: 'Lesson-TextInterpolation',
            component: () => import('../views/lessons/LessonTextInterpolation.vue')
        },
        {
            path: '/lesson-methods',
            name: 'Lesson-Methods',
            component: () => import('../views/lessons/LessonMethods.vue')
        },
        {
            path: '/lesson-inline-templating',
            name: 'Lesson-Inline-Templating',
            component: () => import('../views/lessons/LessonInlineTemplatingView.vue')
        },
        {
            path: '/lesson-attribute-binding',
            name: 'Lesson-Attribute-Binding',
            component: () => import('../views/lessons/LessonAttributeBindingView.vue')
        },
        {
            path: '/lesson-event-binding',
            name: 'Lesson-Event-Binding',
            component: () => import('../views/lessons/LessonEventBindingView.vue')
        },
        {
            path: '/lesson-two-way-binding',
            name: 'Lesson-Two-Way-Binding',
            component: () => import('../views/lessons/LessonTwoWayBinding.vue')
        },
        {
            path: '/lesson-computed',
            name: 'Lesson-Computed-Properties',
            component: () => import('../views/lessons/LessonComputedProperties.vue')
        },
        {
            path: '/lesson-watchers',
            name: 'Lesson-Watchers',
            component: () => import('../views/lessons/LessonWatchers.vue')
        },
        {
            path: '/lesson-dynamic-styling',
            name: 'Lesson-Dynamic-Styling',
            component: () => import('../views/lessons/LessonDynamicStyling.vue')
        },
        {
            path: '/lesson-conditional-rendering',
            name: 'Lesson-Conditional-Rendering',
            component: () => import('../views/lessons/LessonConditionalRendering.vue')
        },
        {
            path: '/lesson-list-rendering',
            name: 'Lesson-List-Rendering',
            component: () => import('../views/lessons/LessonListRendering.vue')
        },
        {
            path: '/lesson-components-props',
            name: 'Lesson-Components-Props',
            component: () => import('../views/lessons/LessonComponentProps.vue')
        },
        {
            path: '/lesson-components-emits',
            name: 'Lesson-Components-emits',
            component: () => import('../views/lessons/LessonComponentEmits.vue')
        },
        {
            path: '/lesson-router',
            name: 'Lesson-Router',
            component: () => import('../views/lessons/LessonVueRouterView.vue')
        },
        {
            path: '/lesson-lib-pinia',
            name: 'Lesson-LibraryPinia',
            component: () => import('../views/lessons/LessonLibraryPinia.vue')
        },
        {
            path: '/lesson-lib-axios-pinia',
            name: 'Lesson-LibraryAxiosPinia',
            component: () => import('../views/lessons/LessonLibraryAxiosAndPinia.vue')
        },
        {
            path: '/lesson-lib-marked-pinia',
            name: 'Lesson-LibraryAxiosPinia',
            component: () => import('../views/lessons/LessonLibraryMarkdownAndPinia.vue')
        },
        {
            path: '/lesson-lib-chart-js',
            name: 'Lesson-LibraryChartJs',
            component: () => import('../views/lessons/LessonLibraryChartJsView.vue')
        },
        {
            path: '/lesson-lib-cypress',
            name: 'Lesson-LibraryCypress',
            component: () => import('../views/lessons/LessonLibraryCypress.vue')
        },
        //! ----------------------------Exo Views routes ----------------------------
        {
            path: '/exo-text-interpolation',
            name: 'Exo-TextInterpolation',
            component: () => import('../views/exo/ExoTextInterpolationView.vue')
        },
        {
            path: '/exo-methods',
            name: 'Exo-Methods',
            component: () => import('../views/exo/ExoMethodsView.vue')
        },
        {
            path: '/exo-inline-templating',
            name: 'Exo-InlineTemplating',
            component: () => import('../views/exo/ExoInlineTemplatingView.vue')
        },
        {
            path: '/exo-attribute-binding',
            name: 'Exo-AttributeBinding',
            component: () => import('../views/exo/ExoAttributeBindingView.vue')
        },
        {
            path: '/exo-event-binding',
            name: 'Exo-EventBinding',
            component: () => import('../views/exo/ExoEventBindingView.vue')
        },
        {
            path: '/exo-two-way-binding',
            name: 'Exo-TwoWayBinding',
            component: () => import('../views/exo/ExoTwoWayBindingView.vue')
        },
        {
            path: '/exo-computed-properties',
            name: 'Exo-ComputedProperties',
            component: () => import('../views/exo/ExoComputedPropertiesView.vue')
        },
        {
            path: '/exo-watchers',
            name: 'Exo-Watchers',
            component: () => import('../views/exo/ExoWatchersView.vue')
        },
        {
            path: '/exo-dynamic-styling',
            name: 'Exo-Dynamic Styling',
            component: () => import('../views/exo/ExoDynamicStylingView.vue')
        },
        {
            path: '/exo-conditional-rendering',
            name: 'Exo-ConditionalRendering',
            component: () => import('../views/exo/ExoConditionalRenderingView.vue')
        },
        {
            path: '/exo-list-rendering',
            name: 'Exo-ListRendering',
            component: () => import('../views/exo/ExoListRenderingView.vue')
        },
        {
            path: '/exo-props',
            name: 'Exo-Props',
            component: () => import('../views/exo/ExoPropsView.vue')
        },
        {
            path: '/exo-props-opti',
            name: 'Exo-Props-Opti',
            component: () => import('../views/exo/ExoPropsOptiOptView.vue')
        },
        {
            path: '/exo-api',
            name: 'Exo-Api',
            component: () => import('../views/exo/ExoApiView.vue')
        },
        //! ----------------------------TP routes ----------------------------
        {
            path: '/tp-data-binding',
            name: 'Tp-DataBinding',
            component: () => import('../views/tp/TpDatabindingView.vue')
        },
        {
            path: '/tp-event-binding',
            name: 'Tp-EventBinding',
            component: () => import('../views/tp/TpEventBindingView.vue')
        },
        {
            path: '/tp-reactivity',
            name: 'Tp-Reactivity',
            component: () => import('../views/tp/TpReactivityView.vue')
        },
        {
            path: '/tp-dynamic-styling',
            name: 'Tp-Dynamic-Styling',
            component: () => import('../views/tp/TpDynamicStylingView.vue')
        },
        {
            path: '/tp-conditional-list-rendering',
            name: 'Tp-Styling',
            component: () => import('../views/tp/TpConditionalListRenderingView.vue')
        },
        {
            path: '/tp-pokemon-game',
            name: 'Tp-PokemonGame',
            component: () => import('../views/tp/TpPokemonGameView.vue')
        },
        {
            path: '/tp-component-communication',
            name: 'Tp-ComponentCommunication',
            component: () => import('../views/tp/TpComponentCommunicationView.vue')
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