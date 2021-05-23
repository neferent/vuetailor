<template>
    <div>
        <p>Hello Anfal</p>
        <p>This is cool {{ name }}</p>
        <button @click="updateName('George')">Click me</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters("TestModule", ["name"])
    },

    methods: {
        ...mapActions("TestModule", ["updateName"])
    }
};
</script>
