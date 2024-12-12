<script lang="js">
    import { RouterLink } from 'vue-router'

    export default {
        name: "NavBar",
        data() {
            return {
                exercises: [
                    { name: "Exercice 1 : Text Interpolation Mode : Composition", path: "/exercices/exo1" },
                    { name: "Exercice 2 : Méthods : Mode Composition", path: "/exercices/exo2" },
                    { name: "Exercice 3 : Event Binding Mode : Composition", path: "/exercices/exo3" },
                    { name: "Exercice 4 : Computed Bug Mode : Composition", path: "/exercices/exo4" },
                    { name: "Exercice 5 : Computed Mode : Composition", path: "/exercices/exo5" },
                    { name: "Exercice 6 : Dynamic styling", path: "/exercices/exo6" },
                    { name: "Exercice 7 : Dynamic styling Class CSS", path: "/exercices/exo7" },
                    { name: "Exercice 8 : List rendering", path: "/exercices/exo8" },
                    { name: "Exercice 9 : Props", path: "/exercices/exo9" },
                    { name: "Exercice 10 : Props Parent", path: "/exercices/exo10" },
                    { name: "Exercice 11 : Props Enfant", path: "/exercices/exo11" },
                    { name: "Exercice 12 : Props Bug", path: "/exercices/exo12" },
                    { name: "Exercice 13 : V-for V-bind", path: "/exercices/exo13" },
                    { name: "Exercice 14 : V-for V-bind Enfant", path: "/exercices/exo14" },
                    { name: "Exercice 15 : Fetch API", path: "/exercices/exo15" },

                    { name: "Exercice 16 : s'inscrire'", path: "/exercices/exo16" },

                    { name: "Exercice Router: Routes détails", path: "/lesson-router" },
                    { name: "Exercice Router details : Routes détails id", path: "/details/:id" },


                    { name: "Exercice Chart: Chart.js", path: "/chartJS" },


                    
                ],

                lessons: [
                    { name: "Lesson 1 : L'interpolation de texte dans Vue.js", path: "/Lessons/lesson1" },
                    { name: "Lesson 2 : Inline Templating Mode : Composition", path: "/Lessons/lesson2" },
                    { name: "Lesson 3 : Event Binding Mode : Composition", path: "/Lessons/lesson3" },
                    { name: "Lesson 4 : Two Way Binding Event Binding Mode : Composition", path: "/Lessons/lesson4" },
                    { name: "Lesson 5 : Watcher", path: "/Lessons/lesson5" },
                    { name: "Lesson 6 : Attribute bending view", path: "/Lessons/lesson6" },
                    { name: "Lesson 7 : Computed propities", path: "/Lessons/lesson7" },
                    { name: "Lesson 8 : Dynamic style", path: "/Lessons/lesson8" },
                    { name: "Lesson 9 : Methods", path: "/Lessons/lesson9" },
                    { name: "Lesson 10 : List rendering", path: "/Lessons/lesson10" },
                    { name: "Lesson 11 : ChartJS", path: "/Lessons/lesson11" },
                ],

                TP: [
                    { name: "TP 1 : Tp-Databinding : Mode Composition", path: "/TP/TP1" },
                    { name: "TP 2 : Event Binding", path: "/TP/TP2" },
                    { name: "TP 3 : Reactivite", path: "/TP/TP3" },
                    { name: "TP 4 : Dynamic style", path: "/TP/TP4" },
                    { name: "TP 5 : List rendering V-for V-if", path: "/TP/TP5" },
                ],
            };
        },
    };
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/home">Home</router-link>
                    </li>

                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Exercices
                        </a>
                        
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li v-for="(exercise, index) in exercises" :key="index">
                                <router-link class="dropdown-item" :to="exercise.path">
                                    {{ exercise.name }}
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Lessons
                        </a>
                        
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li v-for="(lesson, index) in lessons" :key="index">
                                <router-link class="dropdown-item" :to="lesson.path">
                                    {{ lesson.name }}
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            TP
                        </a>
                        
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li v-for="(TP, index) in TP" :key="index">
                                <router-link class="dropdown-item" :to="TP.path">
                                    {{ TP.name }}
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <router-link class="nav-link active" aria-current="page" to="/register">register</router-link>
            <router-link class="nav-link active" aria-current="page" to="/login">login</router-link>
        </div>
    </nav>
</template>
