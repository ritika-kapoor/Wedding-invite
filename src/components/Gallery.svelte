<script>
    export let images;
</script>

<div class="gallery">
    <h2>Gallery</h2>
    <div class="collage">
        {#each images as image}
            <img src={image} alt="Gallery image" class="collage-item">
        {/each}
    </div>
</div>

<style>
    .gallery .collage {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
    }

    .gallery .collage-item {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
</style>
