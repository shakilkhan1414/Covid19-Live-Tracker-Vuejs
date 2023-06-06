<template>
    <div class="row text-dark d-flex justify-content-center text-center">
        <div class="col-sm-3 mb-2">
            <div class="card p-2">
                <div class="card-body">
                    <h4 class="card-title mb-2 text-primary">Cases</h4>
                    <p class="card-text"><b>New: </b>0</p>
                    <p class="card-text"><b>Total: </b>{{numberWithCommas(stats.totalCases)}}</p>
                </div>
            </div>
        </div>
        <div class="col-sm-3 mb-2">
            <div class="card p-2">
                <div class="card-body">
                    <h4 class="card-title mb-2 text-primary">Recovered</h4>
                    <p class="card-text"><b>New: </b>0</p>
                    <p class="card-text"><b>Total: </b>{{numberWithCommas(stats.totalRecovered)}}</p>
                </div>
            </div>
        </div>
        <div class="col-sm-3 mb-2">
            <div class="card p-2">
                <div class="card-body">
                    <h4 class="card-title mb-2 text-primary">Deaths</h4>
                    <p class="card-text"><b>New: </b>0</p>
                    <p class="card-text"><b>Total: </b>{{numberWithCommas(stats.totalDeaths)}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['stats'],
    methods:{
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
}
</script>
