<template>
	<div>
		<b-button @click="getFacilites(building.id)"><b-icon-house class="text-black"/> {{building.name}}</b-button>
	</div>
</template>

<script>


export default {
    data() {
        return {
           
        };
    },

    computed: {
    building() {
            return this.$store.getters.building;
        }
    },
    methods: {
        getFacilites(id) {
            this.$store.dispatch("getFacilities", id)
        }
    },
    mounted() {
           this.$store.dispatch("getBuildings")
  
    }
};
</script>