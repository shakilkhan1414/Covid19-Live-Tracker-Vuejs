<script setup>
    import DateTitle from '@/components/DateTitle.vue'
    import DataBoxes from '@/components/DataBoxes.vue'
    import CountrySelect from '@/components/CountrySelect.vue'
</script>

<template>

<div class="container text-light text-center">
    <button v-if="!stats.TotalConfirmed" @click="clearCountryData" class="btn btn-primary mt-3">Reload API</button>
    <main v-if='!loading'>
        <DateTitle :title="title" :date="dataDate" />
        <DataBoxes :stats="stats" />
        <CountrySelect :countries="countries" @getCountry="getCountryData" />
        <button v-if="stats.Country" @click="clearCountryData" class="btn btn-primary">Back to Global</button>
    </main>
    <main v-else class="d-flex justify-content-center align-items-center p-3">
        <img src="../assets/loading.gif">
    </main>
    
</div>

</template>

<script>
export default {
    data(){
        return{
            loading: true,
            title: 'Global',
            dataDate: '',
            stats:{},
            countries:[]
        }
    },
    methods:{
        async fetchCovidData(){
            const res= await fetch("https://api.covid19api.com/summary")
            const data= await res.json()
            return data
        },
        getCountryData(country){
            this.stats=country
            this.title=country.Country
        },
        async clearCountryData(){
            this.loading=true
            this.stats={}
            const data= await this.fetchCovidData()
            this.stats=data.Global
            this.title='Global'
            this.countries=data.Countries
            this.loading=false
        }
    },
    async created(){
        const covidData= await this.fetchCovidData()
        this.dataDate=covidData.Date
        this.stats=covidData.Global
        this.countries=covidData.Countries
        this.loading=false
    }
}

</script>

