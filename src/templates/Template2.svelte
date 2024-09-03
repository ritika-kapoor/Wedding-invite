<script>
    // Import components
    import Main1 from '../components/mainvisual/main1.svelte';
    // import Main2 from '../components/mainvisual/main2.svelte';
    // import HostInfo1 from '../components/hostinfo/HostInfo1.svelte';
    import HostInfo2 from '../components/hostinfo/HostInfo2.svelte';
    // import HostInfo3 from '../components/hostinfo/HostInfo2.svelte';
    import OurStory1 from '../components/ourstory/OurStory1.svelte';
    import DateVenue1 from '../components/datevenue/DateVenue1.svelte';
    import Gallery1 from '../components/gallery/Gallery1.svelte';
    import Rsvp1 from '../components/rsvp/RSVP1.svelte';
    import Thankyou1 from '../components/thankyou/ThankYou1.svelte';
    

</script>


    <Main1 main_type=main1 />
        <div class="template2">

            <HostInfo2/>

            <OurStory1 font="kaisei" color="purple"/>
            
            <DateVenue1 font="kaisei" color="purple" />
            
            <Gallery1 font="kaisei" color="purple"/>
            
            <Rsvp1 font="kaisei" color="purple" />
            
            <Thankyou1 font="kaisei" color="purple"/>
            
        </div>

<style>
    .template2 {
        padding: 20px;
        padding-top: 0px;
        background-color: #E1CAEB;
    }
</style>