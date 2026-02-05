<template>

</template>

<script setup>
definePage({
    name: 'admin-dashboard',
    meta: {
        requiresAuth: true,
        requiresRole: 'admin',
        layout: 'AllLayout'
    }
})
</script>