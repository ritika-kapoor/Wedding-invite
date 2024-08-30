<script>
    export let image;
    export let main_type;
    let bgImageUrl = '';
    // Optional: Log only if needed
    switch (main_type) {
        case 'main3':
            bgImageUrl = '/main1_bg3.png';
            break;
        case 'main4':  
            bgImageUrl = '/main1_bg4.png';  
            break;

    }
  </script>

<div class="main-visual">
    <div class="visual-cta" style="background-image: url({bgImageUrl});">
      {#if image}
        <!-- Main image -->
        <img src={image} alt="Bride and Groom" class="main-image" />
      {:else}
        <p>Image not available</p>
      {/if}
    </div>
  </div>
  
  <style>
    .main-visual {
      text-align: center;
    }
  
    .visual-cta {
      position: relative;
      width: 100%;
      height: 600px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  
    .main-image {
      width: 80%;
      max-width: 600px;
      height: 400px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      object-fit: cover;
    }
  </style>
  
  