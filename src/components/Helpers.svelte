<script>
    export let bestMan;
    export let bridesmaid;
    export let bestManImage;
    export let bridesmaidImage;
</script>

<div class="helpers">
    <h2>Our Helpers</h2>
    <div class="helper reverse-layout">
        <p>{bestMan}</p>
        <img src={bestManImage} alt="Best Man" class="helper-image">
    </div>
    <div class="helper">
        <img src={bridesmaidImage} alt="Bridesmaid" class="helper-image">
        <p>{bridesmaid}</p>
    </div>
</div>

<style>
    .helpers .helper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
        text-align: center;
    }

    .helpers .helper-image {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 50%;
        margin: 0 10px;
    }

    .reverse-layout {
        flex-direction: row-reverse;
    }
</style>
