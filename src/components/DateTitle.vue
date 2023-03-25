<template>
    <div class="text-center p-3">
        <h3>{{title}}</h3>
        <p>{{dateTime}}</p>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: ['title','date'],
    computed: {
        dateTime: function(){
            return moment(this.date).format('MMMM Do YYYY, h:mm:ss a')
        }
    }
}
</script>