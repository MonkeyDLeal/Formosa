<script lang='ts'>
    const { error } = $props();
</script>

<h1>{error.status}</h1>
<p>{error.message}</p>