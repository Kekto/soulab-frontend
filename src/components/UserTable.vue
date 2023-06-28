<template>
    <el-table :data="users" stripe style="width: 100%">
        <el-table-column prop="firstName" label="Date" />
        <el-table-column prop="lastName" label="Name" />
        <el-table-column prop="email" label="Address"/>
    </el-table>
</template>

<script>
export default {
    name: 'user-table',
    components: {},
    data() {
        return {
        }
    },
    props:{
        users:Object,
    }
}
</script>

<style scoped lang="scss">

</style>