<script>
    export let font;
    export let color;
    export let backgroundColor;
  
    let fontLink1 = '';
    let fontFamilyPrimary = '';
    let fontSize = '';
    let textColor = '';
    let backColor = '';
  
    // Set the fonts and styles based on the API value
    switch (font) {
      case 'noto':
        fontLink1 = 'https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap';
        fontFamilyPrimary = "'Kalam', cursive";
        fontSize = '40px';
        break;
      case 'kaisei':
        fontLink1 = 'https://fonts.cdnfonts.com/css/kapakana';
        fontFamilyPrimary = "'Kapakana', sans-serif";
        fontSize = '80px';
        break;
    }

      // Set the color based on the API value
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
  
  switch (backgroundColor) {
    case 'transparent':
      backColor = 'transparent';
      break;
      case 'yellow':
      backColor = '#FDF0C6';
      break;
      case 'pink':
      backColor = '#FFBABA';
      break;
    default:
      backColor = 'white';
      break;
  }
  </script>
  
  <svelte:head>
    <link rel="stylesheet" href={fontLink1}>
  </svelte:head>
  
  <div class="thank-you" style="font-family: {fontFamilyPrimary}; font-size: {fontSize}; color: {textColor}; background-color: {backColor};">
    Thank <br> You
  </div>
  
  <style>
    .thank-you {
      text-align: center;
      padding: 60px;
      color: #000; 
      /* background-color: white; */
      padding-bottom: 20px;
    }
  </style>
  