<template>
    <div class="flex">
        <left-navbar class="w-1/6" />
        <div class="bg-red-400 w-4/6">1</div>
        <div class="bg-yellow-400 w-1/6">2</div>
    </div>
</template>

<script>
import LeftNavbar from "./LeftNavbar";

export default {
    components: {
        LeftNavbar
    }
};
</script>
