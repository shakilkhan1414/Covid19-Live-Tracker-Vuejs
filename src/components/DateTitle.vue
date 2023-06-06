<template>
    <div class="text-center p-3">
        <h3>{{title}}</h3>
        <p>{{date}}</p>
    </div>
</template>

<script>
export default {
    props: ['title','date']
}
</script>