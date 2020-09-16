<template>
    <div class="home">
        <UserList/>
    </div>
</template>

<script>
// @ is an alias to /src
import UserList from "@/components/UserList.vue";

export default {
    name: "Home",
    components: {
        UserList
    }
};
</script>
