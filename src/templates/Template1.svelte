<script>
    // Import components
    import Main1 from '../components/mainvisual/main1.svelte';
    // import Main2 from '../components/mainvisual/main2.svelte';
    import HostInfo1 from '../components/hostinfo/HostInfo1.svelte';
    // import HostInfo2 from '../components/hostinfo/HostInfo2.svelte';
    import OurStory1 from '../components/ourstory/OurStory1.svelte';
    import DateVenue1 from '../components/datevenue/DateVenue1.svelte';
    import Gallery1 from '../components/gallery/Gallery1.svelte';
    import Rsvp1 from '../components/rsvp/RSVP1.svelte';
    import Thankyou1 from '../components/thankyou/ThankYou1.svelte';
    

</script>


    <Main1 main_type=main0 />
        <div class="template1">
            
            <HostInfo1/>

            <OurStory1 font="noto" color="gold" backgroundColor="yellow"/>
            
            <DateVenue1 font="noto" color="gold" />
            
            <Gallery1 font="noto" color="gold"  backgroundColor="yellow"/>
            
            <Rsvp1 font="noto" color="gold" />
            
            <Thankyou1 font="noto" color="gold" backgroundColor="yellow"/>
            
        </div>

<style>
    .template1 {
        padding: 20px;
        background-color: #FDF0C6;
    }
</style>