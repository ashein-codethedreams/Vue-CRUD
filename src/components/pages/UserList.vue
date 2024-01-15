<template>
    <layout-div>
        <div class="container">
            <h2 class="text-center mt-5 mb-3">Country List</h2>
        <ul>
            <li v-for="user in users" :key="user.id">{{ user.name.common }}</li>
        </ul>
        </div>
    </layout-div>
</template>
 
<script>
import axios from 'axios';
import LayoutDiv from '../LayoutDiv.vue';


export default {
    name: 'UserList',
    components: {
        LayoutDiv,
    },
    data() {
        return {
            users: []
        };
    },
    created() {
        this.fetchUserList();
    },
    methods: {
        fetchUserList() {
            axios.get('https://restcountries.com/v3.1/all?fields=name')
                .then(response => {
                    this.users = response.data;
                    return response
                })
                .catch(error => {
                    return error
                });
        },

    },
};
</script>