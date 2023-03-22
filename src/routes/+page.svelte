<script lang="ts">
    import { languages } from "../languages";


    const korean =  languages['ko'];
    const koreanStopwords = korean.stopWords.slice(0,20);

    const italian =  languages['it'];
    const italianStopwords = italian.stopWords.slice(0,20);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h2>Korean Stopwords</h2>
{#each koreanStopwords as word}
    <p>{word}</p>
{/each}

<h2>Italian Stopwords</h2>
{#each italianStopwords as word}
    <p>{word}</p>
{/each}