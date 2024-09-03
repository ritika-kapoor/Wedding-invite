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



<!-- <Main1 image={$dateVenue.imageUrl} main_type={$dateVenue.main_type} />

<HostInfo1 bride={$dateVenue.bride_first_name} groom={$dateVenue.groom_first_name} date={$dateVenue.date} place={$dateVenue.place} />

<OurStory1
    brideimg={$dateVenue.our_story_bride} groomimg={$dateVenue.our_story_groom} couple={$dateVenue.our_story_img1}
    bride={$dateVenue.bride_first_name} groom={$dateVenue.groom_first_name}
    font="noto" color="gold"
    story_description={$dateVenue.story_desc} bride_dob={$dateVenue.bride_dob}
    groom_dob={$dateVenue.groom_dob} bride_hobbie={$dateVenue.bride_hobbie}
    groom_hobbie={$dateVenue.groom_hobbie} bride_like={$dateVenue.bride_like}
    groom_like={$dateVenue.groom_like} />

<DateVenue1
    start_time={$dateVenue.start} reception_time={$dateVenue.reception}
    end_time={$dateVenue.end} venue={$dateVenue.venue} mapEmbedUrl={$dateVenue.mapEmbedUrl}
    font="noto" color="gold" />
-->

<Gallery1
    font="noto" color="gold"/>

<!-- <Rsvp1 font="noto" color="gold" date={dateVenue} /> -->

<Thankyou1 font="noto" color="gold"/>
