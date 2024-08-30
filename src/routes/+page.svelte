<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    // Import templates
    import Template1 from '../components/Templates/Template1.svelte';
    import Template2 from '../components/Templates/Template2.svelte';
    import Main1 from '../components/mainvisual/main1.svelte';
    import Main2 from '../components/mainvisual/main2.svelte';
    import HostInfo1 from '../components/hostinfo/HostInfo1.svelte';
    import HostInfo2 from '../components/hostinfo/HostInfo2.svelte';
    import OurStory1 from '../components/ourstory/OurStory1.svelte';
    import DateVenue1 from '../components/datevenue/DateVenue1.svelte';
    import Gallery1 from '../components/gallery/Gallery1.svelte';

    // Create a writable store for dateVenue with initial empty values
    const dateVenue = writable({
        date: '',
        selectedTemplate:'',
        mainImgBg:'',
        font: '', //take it from the api later set
        color: '', //take it from the api later set
        imageUrl: '',
        main_type:'', //the overlay image on the main visual picture
        bride: '', //hostinfo
        groom: '', //hostinfo
        place: '', //host info
        flower_bg: '', //flower background in host info page
        host_info_bg: '', //host info bg for dome or flower bg
        our_story_img1: '', //couple image
        our_story_groom:'', //groom image
        our_story_bride: '', //bride image
        story_desc:'', //short description under the couple image
        bride_dob:'', //in our story, bride date of birth
        groom_dob:'', //in our story, groom date of birth
        bride_hobbie:'', 
        groom_hobbie:'',
        bride_like:'', //what the bride likes about the groom
        groom_like:'', //what the groom likes about the bride
        start: '', //start time for the wedding function
        reception:'',  //reception time in date venue component
        end:'',  //end time for the function?
        venue: '',
        mapEmbedUrl: '',  //venue map url
        venue_desc:''  //venue description -> currenlty not utilized (empty)
    });

    // Template selection
    // let selectedTemplate = 'Template1';

    // Fetch the data on page load
    onMount(async () => {
        try {
            const response = await fetch('http://localhost:3000/template');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            // Update the store with fetched data
            dateVenue.set(data[0]);
            console.log(data[0]);
        } catch (error) {
            console.error('Error fetching date and venue:', error);
        }
    });
</script>

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kameron:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap" rel="stylesheet">
</head>

<div class="page-wrapper">
    <div class="main-content">
        {#if $dateVenue.date} <!-- Check if the date is set before rendering the template -->
        
        {#if $dateVenue.mainImgBg === 'Main1'}
                <Main1
                image={$dateVenue.imageUrl} main_type={$dateVenue.main_type}
                />
            {:else if $dateVenue.mainImgBg === 'Main2'}
                <Main2
                image={$dateVenue.imageUrl} main_type={$dateVenue.main_type}
                />
            {/if}
        <!-- <HostInfo1 bride={$dateVenue.bride} groom={$dateVenue.groom} date={$dateVenue.date} place={$dateVenue.place}></HostInfo1> -->
        <!-- <HostInfo2 bride={$dateVenue.bride} groom={$dateVenue.groom} date={$dateVenue.date} place={$dateVenue.place} flower_bg={$dateVenue.flower_bg} ></HostInfo2> -->
        <!-- host info template selection -->
        {#if $dateVenue.host_info_bg === 'host_info1'}
            <!-- for the dome flower background -->
            <HostInfo1
                bride={$dateVenue.bride} groom={$dateVenue.groom} date={$dateVenue.date} place={$dateVenue.place}/> 
            {:else if $dateVenue.host_info_bg === 'host_info2'}
            <!-- for flower background -->
            <HostInfo2 bride={$dateVenue.bride} groom={$dateVenue.groom} date={$dateVenue.date} place={$dateVenue.place} flower_bg={$dateVenue.flower_bg} />
            {/if}

            <!-- our story template slection -->
            <OurStory1 brideimg={$dateVenue.our_story_bride} groomimg={$dateVenue.our_story_groom} bride={$dateVenue.bride} groom={$dateVenue.groom} couple={$dateVenue.our_story_img1}
                font={$dateVenue.font} color={$dateVenue.color}
                story_description={$dateVenue.story_desc},
                bride_dob={$dateVenue.bride_dob},
                groom_dob={$dateVenue.groom_dob},
                bride_hobbie={$dateVenue.bride_hobbie},
                groom_hobbie={$dateVenue.groom_hobbie},
                bride_like={$dateVenue.bride_like},
                groom_like={$dateVenue.groom_like}>
            </OurStory1>

            <DateVenue1
                font={$dateVenue.font} color={$dateVenue.color}
                start_time={$dateVenue.start}
                reception_time={$dateVenue.reception}
                end_time={$dateVenue.end}
                venue={$dateVenue.venue}
                mapEmbedUrl={$dateVenue.mapEmbedUrl}
                >
            </DateVenue1>

            <!-- start with the gallery1 variable inputs from the api -->

            <Gallery1 font={dateVenue.font} color={$dateVenue.color} ></Gallery1> 

        

            {#if $dateVenue.selectedTemplate === 'Template1'}
                <Template1
                    date={$dateVenue.date}
                    venue={$dateVenue.venue}
                    mapEmbedUrl={$dateVenue.mapEmbedUrl}
                />
            {:else if $dateVenue.selectedTemplate === 'Template2'}
                <Template2
                    date={$dateVenue.date}
                    venue={$dateVenue.venue}
                    mapEmbedUrl={$dateVenue.mapEmbedUrl}
                />
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
