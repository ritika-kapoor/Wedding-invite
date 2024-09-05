<script>
    import { date_venue } from '../../store';
    // import Time from 'svelte-time';

    export let font;
    export let color;


    let fontLink1 = '';
    let fontLink2 = '';
    let fontFamilyPrimary = '';
    let fontFamilySecondary = '';
    let textColor = '';
    let isNoto = false;
  
    // Set the fonts based on the API value
    switch (font) {
      case 'noto':
        fontLink1 = 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap';
        fontLink2 = 'https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap';
        fontFamilyPrimary = "'Kalam', cursive";
        fontFamilySecondary = "'Noto Sans', sans-serif";
        isNoto = true;
        break;
      case 'kaisei':
        fontLink1 = 'https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@400;500;700&display=swap';
        fontLink2 = 'https://fonts.cdnfonts.com/css/kapakana';
        fontFamilyPrimary = "'Kapakana', sans-serif";
        fontFamilySecondary = "'Kaisei Decol', serif";
        break;
    }
  
    // Set the text color based on the API value
    switch (color) {
      case 'purple':
        textColor = 'purple';
        break;
      case 'black':
        textColor = 'black';
        break;
      case 'gold':
        textColor = '#E3BE54'; // Gold color hex code
        break;
      default:
        textColor = 'black';
        break;
    }

     // Helper function to validate the map URL
    function isValidMapUrl(url) {
    try {
      const parsedUrl = new URL(url);
      // Check if the URL is from a valid map service (e.g., Google Maps)
      return parsedUrl.host.includes('google.com') && parsedUrl.pathname.includes('embed');
    } catch (error) {
      return false; // Invalid URL format
    }
  }

  </script>
  
  <svelte:head>
    <link rel="stylesheet" href={fontLink1}>
    <link rel="stylesheet" href={fontLink2}>
  </svelte:head>
  
  <div class="date-venue" style="color: {textColor};">
    {#if $date_venue.start_time}
      <div class="start" style="font-family: {fontFamilyPrimary}; font-size: {isNoto ? '20px' : '20px'}; font-weight: {isNoto ? '700' : '400'};">
          開始
      </div>
      <div class="start-time" style="font-family: {fontFamilyPrimary}; font-size: {isNoto ? '40px' : '50px'}; font-weight: {isNoto ? '700' : '400'};">
        <!-- <Time timestamp={$date_venue.start_time} format="HH:mm" /> -->
        {$date_venue.start_time}
      </div>
    {/if}

    <div class="reception-end">
      {#if $date_venue.reception_time}
        <span class="reception" style="font-family: {fontFamilyPrimary}; font-size: {isNoto ? '20px' : '20px'}; font-weight: {isNoto ? '700' : '400'};">
          受付
        </span>
        <span class="reception-time" style="font-family: {fontFamilySecondary}; font-size: {isNoto ? '20px' : '26px'}; font-weight: {isNoto ? '400' : '400'};">
          <!-- <Time timestamp={$date_venue.reception_time} format="HH:mm"/> -->
          {$date_venue.reception_time}
        </span>
      {/if}
      
      {#if $date_venue.end_time}
        <span class="separator">｜</span>
        <span class="end" style="font-family: {fontFamilyPrimary}; font-size: {isNoto ? '20px' : '20px'}; font-weight: {isNoto ? '700' : '400'};">
          終了
        </span>
        <span class="end-time" style="font-family: {fontFamilySecondary}; font-size: {isNoto ? '20px' : '26px'}; font-weight: {isNoto ? '400' : '400'};">
          <!-- <Time timestamp={$date_venue.end_time} format="HH:mm"/> -->
          {$date_venue.end_time}
        </span>
      {/if}
    </div>
  
    <div class="venue-heading" style="font-family: {fontFamilyPrimary}; font-size: {isNoto ? '40px' : '36px'}; font-weight: {isNoto ? '700' : '400'};">
      Venue
    </div>
    <div class="venue-name" style="font-family: {fontFamilySecondary}; font-size: {isNoto ? '17px' : '16px'}; font-weight: {isNoto ? '400' : '400'};">
      {$date_venue.venue}
    </div>
    {#if $date_venue.mapEmbedUrl && isValidMapUrl($date_venue.mapEmbedUrl)}
      <div class="venue-location">
          <iframe src={$date_venue.mapEmbedUrl}
          width="100%"
          height="300"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
      <!-- {:else} -->
      <!-- Fallback content if URL is invalid, confirm if required -->
        <!-- <div class="venue-location-error">
          <p>Map is currently unavailable. Please check back later or <a href="https://maps.google.com" target="_blank">view the location on Google Maps</a>.</p>
        </div> -->
    {/if}
    <div class="venue-loc" style="font-family: {fontFamilySecondary}; font-size: {isNoto ? '17px' : '16px'}; font-weight: {isNoto ? '400' : '400'};">
      {$date_venue.venue_address} <br>
      {$date_venue.venue_phone} <br>
      {$date_venue.venue_link}<br>
      </div>
  </div>
  
  <style>

    .date-venue {
      text-align: center;
      padding: 20px;
      background-color: white;
    }
  
    .reception-end {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }

    .start-time{
      margin-top: 10px;
    }
    
    .reception-time , .end-time{
      margin-left: 10px;
      margin-bottom: 4px;
    }
  
    .separator {
      margin: 0 10px 0px;
    }
  
    .venue-location {
      margin-top: 10px;
    }
  
    .venue-location {
      text-decoration: none;
    }
  </style>
  