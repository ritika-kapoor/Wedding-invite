<script>
    export let date;
    export let venue;
    export let mapLink;
    export let mapEmbedUrl;
</script>

<div class="date-venue">
    <h2>Date & Venue</h2>
    <p>Date: {date}</p>
    <p>Venue: <a href={mapLink} target="_blank">{venue}</a></p>
    <iframe
        src={mapEmbedUrl}
        width="100%"
        height="300"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>
</div>

<style>
    .date-venue a {
        color: #007BFF;
        text-decoration: none;
    }

    .date-venue a:hover {
        text-decoration: underline;
    }

    iframe {
        margin-top: 10px;
        border-radius: 8px;
        border: 1px solid #ddd;
    }
</style>
