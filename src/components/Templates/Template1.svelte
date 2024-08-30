<script>
    export let date;
    export let venue;
    export let mapEmbedUrl;
</script>

<div class="date-venue-template1">
    <h2>{date}</h2>
    <h3>{venue}</h3>
    <iframe src={mapEmbedUrl} width="200" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</div>

<style>
    .date-venue-template1 {
        text-align: center;
        margin: 20px;
    }

    iframe {
        border-radius: 10px;
    }
</style>
