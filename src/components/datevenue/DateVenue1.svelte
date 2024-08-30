<script>
    export let start_time;
    export let reception_time;
    export let end_time;
    export let venue;
    export let mapEmbedUrl;
    export let color;
    export let font;
  
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
        textColor = 'red';
        break;
    }
  </script>
  
  <svelte:head>
    <link rel="stylesheet" href={fontLink1}>
    <link rel="stylesheet" href={fontLink2}>
  </svelte:head>
  
  <div class="date-venue" style="color: {textColor};">
    <div class="start" style="font-family: {fontFamilyPrimary}; font-size: {isNoto ? '20px' : '20px'}; font-weight: {isNoto ? '700' : '400'};">
        開始
    </div>
    <div class="start-time" style="font-family: {fontFamilyPrimary}; font-size: {isNoto ? '40px' : '50px'}; font-weight: {isNoto ? '700' : '400'};">
      {start_time}
    </div>
  
    <div class="reception-end">
      <span class="reception" style="font-family: {fontFamilyPrimary}; font-size: {isNoto ? '20px' : '20px'}; font-weight: {isNoto ? '700' : '400'};">
        受付
      </span>
      <span class="reception-time" style="font-family: {fontFamilySecondary}; font-size: {isNoto ? '20px' : '26px'}; font-weight: {isNoto ? '400' : '400'};">
        {reception_time}
      </span>
      <span class="separator">｜</span>
      <span class="end" style="font-family: {fontFamilyPrimary}; font-size: {isNoto ? '20px' : '20px'}; font-weight: {isNoto ? '700' : '400'};">
        終了
      </span>
      <span class="end-time" style="font-family: {fontFamilySecondary}; font-size: {isNoto ? '20px' : '26px'}; font-weight: {isNoto ? '400' : '400'};">
        {end_time}
      </span>
    </div>
  
    <div class="venue-heading" style="font-family: {fontFamilyPrimary}; font-size: {isNoto ? '40px' : '36px'}; font-weight: {isNoto ? '700' : '400'};">
      Venue
    </div>
    <div class="venue-name" style="font-family: {fontFamilySecondary}; font-size: {isNoto ? '17px' : '16px'}; font-weight: {isNoto ? '400' : '400'};">
      {venue}
    </div>
    <div class="venue-location">
          <iframe src={mapEmbedUrl}
      width="100%"
      height="300"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    </div>
    <div class="venue-loc" style="font-family: {fontFamilySecondary}; font-size: {isNoto ? '17px' : '16px'}; font-weight: {isNoto ? '400' : '400'};">
        Venue loc?
      </div>
  </div>
  
  <style>

    .date-venue {
      text-align: center;
      padding: 20px;
    }
  
    .reception-end {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }
  
    .separator {
      margin: 0 10px 5px;
    }
  
    .venue-location {
      margin-top: 10px;
    }
  
    .venue-location {
      text-decoration: none;
    }
  </style>
  