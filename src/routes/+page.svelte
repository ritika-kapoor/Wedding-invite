<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    // Correct imports for the templates
    import Template1 from '../templates/Template1.svelte';
    import Template2 from '../templates/Template2.svelte';
    import Template3 from '../templates/Template3.svelte';

    const dateVenue = writable({});

    onMount(async () => {
        try {
            const response = await fetch('http://localhost:3000/template');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            dateVenue.set(data[0]);
        } catch (error) {
            console.error('Error fetching date and venue:', error);
        }
    });
</script>

<div class="page-wrapper">
    <div class="main-content">
        {#if $dateVenue.date}
            {#if $dateVenue.selectedTemplate === 'Template1'}
                <Template1 {dateVenue} />
            {:else if $dateVenue.selectedTemplate === 'Template2'}
                <Template2 {dateVenue} />
            {:else if $dateVenue.selectedTemplate === 'Template3'}
                <Template3 {dateVenue} />
            {/if}
        {/if}
    </div>
</div>

<style>
    .page-wrapper{
        display: flex;
        justify-content: center;
    }

    .main-content {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin: 0 15px;
        border-radius: 10px;
        width: 450px;
    }
</style>
