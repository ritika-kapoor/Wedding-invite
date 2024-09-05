<script>

import { main_image } from '../../store';
    export let main_type;
    let bgImageUrl = '';
    switch (main_type) {
        case 'main0':
            bgImageUrl = '';
            break;
        case 'main1':
            bgImageUrl = '/main1_bg1.png';
            break;
        case 'main2':  
            bgImageUrl = '/main1_bg2.png';  
            break;

    }
  </script>

  <div class="main-visual">
    <div class="visual-cta">
      {#if $main_image.image}
        <!-- Main image -->
        <img src={`https://www.wearelakers.net/${$main_image.image}?width=450`} alt="Bride and Groom" class="main-image" />
        
        <!-- Overlay image -->
        <img src={bgImageUrl} class="overlay-image" />
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
      height: 700px;
    }
  
    .main-image {
      width: 100%;
      max-width: 600px;
      height: 100%;
      object-fit: cover; /* Adjust how the image fits its container */
    }
  
    .overlay-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      max-width: 600px;
      height: 100%;
      object-fit: cover; /* Adjust how the overlay image fits */
      pointer-events: none; /* Optional: Allows clicks to pass through the overlay */
    }

  </style>
  