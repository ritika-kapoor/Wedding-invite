<script>
    export let bride;
    export let groom;
    export let date;
    export let place;
    export let flower_bg;
    let bgImageUrl = '';
    switch (flower_bg) {
        case 'flower_bg2':
            bgImageUrl = 'https://www.wearelakers.net/images/host_info2.png';
            break;
        case 'flower_bg3':  
            bgImageUrl = 'https://www.wearelakers.net/images/host_info3.png';  
            break;
        case 'flower_bg4':  
            bgImageUrl = 'https://www.wearelakers.net/images/host_info4.png';  
            break;


    }
</script>

<head>
    <link href="https://fonts.cdnfonts.com/css/kapakana" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@400;500;700&display=swap" rel="stylesheet">
</head>


<div class="main-visual">
    <div class="visual-cta" style="background-image: url('{bgImageUrl}');">
        <div class="host-container-cta">
            <div class="host-container">
                <p class="invitation-text">You are invited to <br> the wedding of</p>
                <div class="bride-groom-container">
                    <span class="bride">{bride}</span>
                    <span class="and">&</span>
                    <span class="groom">{groom}</span>
                </div>
                <br> 
                <span class="date">{date} <br></span> <span class="place">{place}</span>
            </div>
        </div>
    </div>
</div>

<style>
    .main-visual {
        text-align: center;
    }
  
    .visual-cta {
        position: relative;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .host-container-cta {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .host-container {
        background-color: rgba(255, 255, 255, 0); /* Transparent background */
        padding: 20px;
        border-radius: 10px;
        max-width: 600px;
        text-align: center;
        color: black;
        font-family: "Kapakana", sans-serif;
        font-weight: 400;
    }

    .invitation-text {
        margin-bottom: 20px; /* Adds space after "You are invited to the wedding of" */
        font-size: 36px;
    }

    .bride-groom-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px; /* Adds space after the bride and groom names */
        font-family: "Kaisei Decol", serif;
        font-weight: 700;
        font-size: 32px;
    }

    .bride {
        margin-right: 40px; /* Adds space between bride's name and the "and" */
    }

    .and {
        text-align: center;
        flex: 1;
    }

    .groom {
        margin-left: 30px; /* Adds space between groom's name and the "and" */
    }

    .date {
        font-size: 36px;
        font-family: "Kapakana", sans-serif;
        display: block; /* Ensures the date remains on a new line */
    }
    .place{
        font-size: 20px;
    }
</style>

