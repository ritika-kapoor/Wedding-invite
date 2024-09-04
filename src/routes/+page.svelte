<script>
    import { page } from '$app/stores'
    const invitation_id = $page.url.searchParams.get('invitation_id')
    console.log(invitation_id)
    const invitation_content_id = $page.url.searchParams.get('invitation_content_id')
    import { onMount } from 'svelte';
    
    import { apiData, template, invitationId } from '../store.js';


    // Correct imports for the templates
    import Template1 from '../templates/Template1.svelte';
    import Template2 from '../templates/Template2.svelte';
    import Template3 from '../templates/Template3.svelte';
    import Template4 from '../templates/Template4.svelte';


    onMount(async () => {
        fetch(`https://api.wearelakers.net/invitation/content?invitation_id=${invitation_id}&invitation_content_id=${invitation_content_id}`)
        .then(response => response.json())
        .then(data => {
                console.log(data);
            apiData.set(data);
            invitationId.set(invitation_id);
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
            {:else if $template.number === 4}
                <Template4 />
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
