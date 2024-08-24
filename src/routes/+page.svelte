<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<script>
    import Background from '../components/Background.svelte';
    import MainVisual from '../components/MainVisual.svelte';
    import HostInfo from '../components/HostInfo.svelte';
    import OurStory from '../components/OurStory.svelte';
    import DateVenue from '../components/DateVenue.svelte';
    import Gallery from '../components/Gallery.svelte';
    import Helpers from '../components/Helpers.svelte';
    import Accommodation from '../components/Accommodation.svelte';
    import Itinerary from '../components/Itinerary.svelte';
    import RSVP from '../components/RSVP.svelte';
    import ThankYou from '../components/ThankYou.svelte';
    import { writable } from 'svelte/store';

    const background = writable('/background1.jpg');
    const mainImage = writable('/bride_groom.jpg');
    const hostInfo = writable({ bride: 'Jane Doe', groom: 'John Smith' });
    const ourStory = writable('Our love story started...');
    const dateVenue = writable({
        date: '10th October 2024',
        venue: 'Sunset Beach',
        mapLink: 'https://maps.google.com/?q=Sunset+Beach',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.8792721191364!2d-122.4040714846896!3d37.78583437975778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818c7e3a1237%3A0x92d7162f1d879b34!2sSunset%20Beach!5e0!3m2!1sen!2sus!4v1614384240923!5m2!1sen!2sus'
    });
    const galleryImages = writable(['/image1.jpg', '/image2.jpg', '/image3.jpg', '/image4.jpg']);
    const helpers = writable({
        bestMan: 'Mike',
        bestManImage: '/bestman.jpg',
        bridesmaid: 'Anna',
        bridesmaidImage: '/bridesmaid.jpg'
    });
    const accommodation = writable('Hotel Sunrise, Room 101');
    const itinerary = writable('3:00 PM - Ceremony, 5:00 PM - Reception');
    const rsvp = writable([]);
    const thankYou = writable('We look forward to having you with us!');

    function submitRSVP(newRSVP) {
        rsvp.update(current => [...current, newRSVP]);
    }
</script>

<div class="app">
    <!-- Left Background -->
    <Background image={$background} />

    <!-- Main Invitation Content -->
    <div class="main-content">
        <h1>Wedding Invitation</h1>

        <MainVisual image={$mainImage} />
        <HostInfo bride={$hostInfo.bride} groom={$hostInfo.groom} />
        <OurStory story={$ourStory} />
        <DateVenue 
            date={$dateVenue.date} 
            venue={$dateVenue.venue} 
            mapLink={$dateVenue.mapLink}
            mapEmbedUrl={$dateVenue.mapEmbedUrl}
        />
        <Gallery images={$galleryImages} />
        <Helpers 
            bestMan={$helpers.bestMan} 
            bridesmaid={$helpers.bridesmaid} 
            bestManImage={$helpers.bestManImage} 
            bridesmaidImage={$helpers.bridesmaidImage} 
        />
        <Accommodation accommodation={$accommodation} />
        <Itinerary itinerary={$itinerary} />
        <RSVP onSubmit={submitRSVP} />
        <ThankYou message={$thankYou} />
    </div>

    <!-- Right Background -->
    <Background image={$background} />
</div>

<style>
    .app, .app * {
        text-align: center;
    }

    .main-content h1, .main-content h2, .main-content h3, .main-content p {
        text-align: center;
    }

    .app {
        display: flex;
        min-height: 100vh;
        font-family: 'Karla', sans-serif;
        background-color: #F6E8C3;
    }

    .main-content {
        flex: 1;
        padding: 20px;
        background-color: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin: 0 15px;
        animation: fadeIn 1.5s ease-in-out;
        border-radius: 10px;
    }

    .main-content h1 {
        font-family: 'Kapakana', sans-serif;
        color: #333;
    }

    h1, h2, h3 {
        color: #333;
        margin-bottom: 10px;
    }

    p {
        color: #555;
        line-height: 1.6;
        font-family: 'Kaisei Decol', sans-serif;
    }

    body {
        font-family: 'Karla', sans-serif;
    }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
</style>

