<template>
    <div class="home">
        <UserList />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserList from "@/components/User/UserList.vue"; // @ is an alias to /src

@Component({
    components: {
        UserList
    }
})
export default class Home extends Vue {}
</script>
