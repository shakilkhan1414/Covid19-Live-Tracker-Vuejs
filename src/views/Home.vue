<script setup>
    import DateTitle from '@/components/DateTitle.vue'
    import DataBoxes from '@/components/DataBoxes.vue'
    import CountrySelect from '@/components/CountrySelect.vue'
</script>

<template>

<div class="container text-light text-center">
    <main v-if='!loading'>
        <DateTitle :title="title" :date="dataDate" />
        <DataBoxes :stats="stats" />
        <CountrySelect :countries="countries" @getCountry="getCountryData" />
        <button v-if="stats.country" @click="clearCountryData" class="btn btn-primary">Back to Global</button>
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
            const res= await axios.get('https://api.collectapi.com/corona/totalData',{
                headers:{
                    authorization: "apikey 6940yHXrgCRlrI1ijLjpBV:16gOVh4EjkpbOkeoAmyzOy"
                }
            });
            const data= await res.data.result
            return data
            
        },
        async fetchCovidDataByCountry(){
            const res= await axios.get('https://api.collectapi.com/corona/countriesData',{
                headers:{
                    authorization: "apikey 6940yHXrgCRlrI1ijLjpBV:16gOVh4EjkpbOkeoAmyzOy"
                }
            })
            const data= await res.data.result
            return data
        },
        getCountryData(country){
            this.stats=country
            this.title=country.country
        },
        getDate(){
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            const todayDate = `${day}-${month}-${year}`;
            return todayDate;
        },
        async clearCountryData(){
            this.loading=true
            this.stats={}
            const data= await this.fetchCovidData()
            this.stats=data
            this.title='Global'
            this.loading=false
            const countryData= await this.fetchCovidDataByCountry()
            this.countries=countryData
        }
    },
    async created(){
        const covidData= await this.fetchCovidData()
        this.dataDate=this.getDate()
        this.stats=covidData
        this.loading=false
        const covidDataCountry= await this.fetchCovidDataByCountry()
        this.countries=covidDataCountry
        
    }
}

</script>

