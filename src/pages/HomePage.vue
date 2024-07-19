<template>
    <main class="px-4 py-5 my-5 text-center" style="min-height: 50vh;">
        <h1 class="mt-4 display-5 fw-bold">Stay Organized, be productive</h1>
        <div class="mx-auto col-lg-6">
            <p class="mb-4 lead">Organize your ideas, and be productive everyday.</p>
            <div class="gap-2 d-grid d-sm-flex justify-content-sm-center">
                <router-link :to="{ name: 'register' }" class="gap-3 px-4 btn btn-primary btn-lg">Sign up</router-link>
                <router-link :to="{ name: 'login' }" class="px-4 btn btn-outline-secondary btn-lg">Sign in</router-link>
            </div>
        </div>
    </main>
</template>