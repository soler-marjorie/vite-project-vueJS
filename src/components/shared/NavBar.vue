<script lang="js">
    import { RouterLink } from 'vue-router'

    export default {
        name: "NavBar",
        data() {
            return {
                exercises: [
                    { name: "Exercice 1", path: "/exercices/exo1" },
                    { name: "Exercice 2", path: "/exercices/exo2" },
                ],

                lessons: [
                    { name: "Lesson 1", path: "/Lessons/lesson1" },
                    { name: "Lesson 2", path: "/Lessons/lesson2" },
                ],
            };
        },
    };
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
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


                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/TP">TP</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
