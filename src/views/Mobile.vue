<template>
	<div>
        <b-container>
            <b-row>
                <b-col cols="12">
                    <b-button @click="getFacilites(building.id)"><b-icon-house class="text-black"/> {{building.name}}</b-button>
               
                </b-col>
                 <b-col v-if="facilities" cols="12">
                     <b-row>
                        <b-col cols="6" v-for="(facility, fkey) in facilities" :key="fkey">
                            {{facility.name}}
                        </b-col>    
                    </b-row>
                </b-col>
                <b-col>
                </b-col>
                 <b-col>
                </b-col>
                </b-row>
        </b-container>
	</div>
</template>

<script>


export default {
    data() {
        return {
        //    facilities: []
        };
    },

    computed: {
        building() {
            return this.$store.getters.building;
        },
        facilities() {
            return this.$store.getters.facilities;
        }
    },
    methods: {
        // getFacilites(id) {
        //     this.$store.dispatch("getFacilities", id)
        //      .then((response) => {
        //         this.facilities = response
        //         console.log('dddd', response);
        //     })
        // }
    },
    mounted() {
           this.$store.dispatch("getBuildings")

            this.$store.dispatch("getFacilities")
            // .then((response) => {
            //     this.facilities = response
            //     console.log('dddd', response);
            // })
    }
};
</script>