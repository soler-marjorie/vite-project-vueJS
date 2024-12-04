<script lang="js">
    import { RouterLink } from 'vue-router'
</script>

<template>
    <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/home">Home</router-link>
            </li>
        </ul>
        <p class="text-center text-body-secondary">© 2024 Company, Inc</p>
    </footer>
</template>
