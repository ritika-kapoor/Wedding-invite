<script>
    export let bestManName;
    export let bestManAge;
    export let bestManImage;
    export let bridesmaidName;
    export let bridesmaidAge;
    export let bridesmaidImage;
    export let font;
    export let color;
  
    let fontLink1 = '';
    let fontLink2 = '';
    let fontFamilyPrimary = '';
    let fontFamilySecondary = '';
    let textColor = '';
  
    // Set the fonts based on the API value
    switch (font) {
      case 'noto':
        fontLink1 = 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap';
        fontLink2 = 'https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap';
        fontFamilyPrimary = "'Kalam', cursive";
        fontFamilySecondary = "'Noto Sans', sans-serif";
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
  
  <div class="our-helpers">
    <h1 class="heading" style="color: {textColor}; font-family: {fontFamilyPrimary};">
      Our Helpers
    </h1>
  
    <div class="helper-section">
      <div class="helper best-man">
        <h2 class="subheading" style="color: {textColor}; font-family: {fontFamilyPrimary};">
          Best Man
        </h2>
        <p class="helper-info" style="color: {textColor}; font-family: {fontFamilySecondary};">
          {bestManName}, {bestManAge}
        </p>
        <img src={bestManImage} alt="Best Man" class="helper-image">
      </div>
  
      <div class="helper bridesmaid">
        <img src={bridesmaidImage} alt="Bridesmaid" class="helper-image">
        <div class="helper-details">
          <h2 class="subheading" style="color: {textColor}; font-family: {fontFamilyPrimary};">
            Bridesmaid
          </h2>
          <p class="helper-info" style="color: {textColor}; font-family: {fontFamilySecondary};">
            {bridesmaidName}, {bridesmaidAge}
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <style>
    .our-helpers {
      text-align: center;
      padding: 20px;
    }
  
    .helper-section {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
    }
  
    .helper {
      margin: 20px;
      text-align: center;
    }
  
    .helper-image {
      width: 200px;
      height: auto;
      margin-top: 10px;
    }
  
    .helper-details {
      text-align: left;
    }
  
    .bridesmaid {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-around;
      align-items: center;
    }
  </style>
  