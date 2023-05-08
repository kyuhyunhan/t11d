<script lang="ts">
  export let data: {
    slug: string;
    post: string;
  };
</script>

<div>{@html data.post}</div>