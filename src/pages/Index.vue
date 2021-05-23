<template>
    <Layout>
        <!-- Learn how to use images here: https://gridsome.org/docs/images -->
        <g-image alt="Example image" src="~/favicon.png" width="135" />

        <welcome></welcome>

        <a
            class="mt-auto bg-green-500 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex"
        >
            Hello World
        </a>
    </Layout>
</template>

<script>
import Welcome from "~/components/welcome.vue";

export default {
    metaInfo: {
        title: "Hello, world!"
    },

    components: {
        Welcome
    }
};
</script>
