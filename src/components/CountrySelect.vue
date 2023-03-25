<template>
    <div class="row text-dark d-flex justify-content-center text-center my-3">
        <div class="col-sm-6 mb-2">
            <select v-model="selectedCountry" @change="onChange" class="form-select form-select-lg">
                <option value="0" selected>Select Country</option>
                <option v-for="country in countries" :value="country.ID" :key="country.ID">
                    {{country.Country}} ({{country.CountryCode}})
                </option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            selectedCountry: 0
        }
    },
    props:['countries'],
    methods:{
        onChange(){
            const country= this.countries.find((item)=> item.ID === this.selectedCountry )
            this.$emit('getCountry',country)
        }
    }
}
</script>