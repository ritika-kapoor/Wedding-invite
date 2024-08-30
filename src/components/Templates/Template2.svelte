<script>
    export let date;
    export let venue;
    export let mapEmbedUrl;
</script>

<div class="date-venue-template2">
    <h2>Event Date: {date}</h2>
    <h3>Location: {venue}</h3>
    <iframe src={mapEmbedUrl} width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</div>

<style>
    .date-venue-template2 {
        text-align: left;
        margin: 20px;
    }

    iframe {
        border-radius: 10px;
    }
</style>
