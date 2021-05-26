<template>
    <Layout class="h-screen">
        <top-navbar class="h-14" />

        <container class="h-container" />
    </Layout>
</template>

<script>
import TopNavbar from "~/components/system/TopNavbar";
import Container from "~/components/system/Container";

export default {
    metaInfo: {
        title: "Landing"
    },

    components: {
        TopNavbar,
        Container
    }
};
</script>
