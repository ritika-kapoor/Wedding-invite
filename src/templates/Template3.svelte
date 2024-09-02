<script>
    export let dateVenue;
</script>

<Main2 image={dateVenue.imageUrl} main_type={dateVenue.main_type} />

<HostInfo2 bride={dateVenue.bride_first_name} groom={dateVenue.groom_first_name} date={dateVenue.date} place={dateVenue.place} flower_bg={dateVenue.flower_bg} />

<OurStory1
    brideimg={dateVenue.our_story_bride} groomimg={dateVenue.our_story_groom} couple={dateVenue.our_story_img1}
    bride={dateVenue.bride_first_name} groom={dateVenue.groom_first_name}
    font="kaisei" color="black"
    story_description={dateVenue.story_desc} bride_dob={dateVenue.bride_dob}
    groom_dob={dateVenue.groom_dob} bride_hobbie={dateVenue.bride_hobbie}
    groom_hobbie={dateVenue.groom_hobbie} bride_like={dateVenue.bride_like}
    groom_like={dateVenue.groom_like} />

<DateVenue1
    start_time={dateVenue.start} reception_time={dateVenue.reception}
    end_time={dateVenue.end} venue={dateVenue.venue} mapEmbedUrl={dateVenue.mapEmbedUrl}
    font="kaisei" color="black" />

<Gallery1
    font="kaisei" color="black"
    image1={dateVenue.image1} image2={dateVenue.image2}
    image3={dateVenue.image3} image4={dateVenue.image4} />

<Rsvp1 font="kaisei" color="black" date={dateVenue.date} />

<Thankyou1 font="kaisei" color="black" />
