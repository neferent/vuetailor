<template>
    <Layout>
        <h1>About us</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            doloremque omnis animi, eligendi magni a voluptatum, vitae,
            consequuntur rerum illum odit fugit assumenda rem dolores inventore
            iste reprehenderit maxime! Iusto.
        </p>

        <p>Talk to {{ name }}</p>
    </Layout>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    metaInfo: {
        title: "About us"
    },

    computed: {
        ...mapGetters("TestModule", ["name"])
    }
};
</script>
