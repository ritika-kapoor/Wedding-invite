<script>
    import { onMount } from 'svelte';
    
    import { apiData, template } from '../store.js';


    // Correct imports for the templates
    import Template1 from '../templates/Template1.svelte';
    import Template2 from '../templates/Template2.svelte';
    import Template3 from '../templates/Template3.svelte';

    onMount(async () => {
        fetch("https://mpc37d901f85b4f1ee16.free.beeceptor.com/")
        .then(response => response.json())
        .then(data => {
                console.log(data);
            apiData.set(data);
        }).catch(error => {
            console.log(error);
            return [];
        });
        });
</script>

<div class="page-wrapper">
    <div class="main-content">
        {#if $template.number}
            {#if $template.number === 1 }
                <Template1 />
            {:else if  $template.number === 2 }
                <Template2 />
            {:else if $template.number === 3}
                <Template3 />
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
