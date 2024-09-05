<script>
    import Main1 from '../components/mainvisual/main1.svelte';
    // import Main2 from '../components/mainvisual/main2.svelte';
    import HostInfo3 from '../components/hostinfo/HostInfo3.svelte';
    import OurStory1 from '../components/ourstory/OurStory1.svelte';
    import DateVenue1 from '../components/datevenue/DateVenue1.svelte';
    import Gallery1 from '../components/gallery/Gallery1.svelte';
    import Rsvp1 from '../components/rsvp/RSVP1.svelte';
    import Thankyou1 from '../components/thankyou/ThankYou1.svelte';
    

</script>


    <Main1 main_type=main2 />
        <div class="template3">

            <HostInfo3 flower_bg="flower_bg2"/>

            <OurStory1 font="kaisei" color="black"/>
            
            <DateVenue1 font="kaisei" color="black" backgroundColor="pink" />
            
            <Gallery1 font="kaisei" color="black"/>
            
            <Rsvp1 font="kaisei" color="black" backgroundColor="pink" />
            
            <Thankyou1 font="kaisei" color="black"/>
            
        </div>

<style>
    .template3 {
        padding: 20px;
        padding-top: 0px;
    }
</style>