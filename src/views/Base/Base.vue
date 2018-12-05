<template>
    <div class="main">
        <custom-header></custom-header>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import customHeader from '@/views/Header/Header'
export default {
    name: 'Base',
    components: {
        customHeader
    }
}
</script>
<style lang="sass" scoped>

</style>


