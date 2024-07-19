<template>
    <div class="container py-5" >
        <h1>404</h1>
        <p>Sorry, the page <code>{{ $route.params.notFound }}</code> you are looking for is not found</p>
        <router-link :to="{ name: 'tasks' }" class="btn btn-primary">Back to your tasks</router-link>
    </div>
</template>