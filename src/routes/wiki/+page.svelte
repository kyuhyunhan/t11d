<script>
	import { wikis } from '../../stores/wikis.store';
</script>

{#each $wikis as wiki}
  <div>
    <a href="/{wiki.slug}" style="margin-top: 4px; font-size: 24px;">
      {wiki.title}
    </a>
    <p>{wiki.datePublished}</p>
  </div>
  <hr />
{/each}