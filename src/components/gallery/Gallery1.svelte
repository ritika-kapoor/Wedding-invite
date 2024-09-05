<script>
    import { gallery } from '../../store';


    export let font;
    export let color;
  
    let fontLink1 = '';
    let fontFamilyPrimary = '';
    let textColor = '';
    let isNoto = false;
  
    // Set the fonts and colors based on the API value
    switch (font) {
      case 'noto':
        fontLink1 = 'https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap';
        fontFamilyPrimary = "'Kalam', cursive";
        isNoto = true;
        break;
      case 'kaisei':
        fontLink1 = 'https://fonts.cdnfonts.com/css/kapakana';
        fontFamilyPrimary = "'Kapakana', sans-serif";
        break;
    }
  
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
  </svelte:head>
  
  <div class="gallery" style="color: {textColor};">
    <h1 class="heading" style="font-family: {fontFamilyPrimary}; font-size: {isNoto ? '40px' : '65px'}; font-weight: {isNoto ? '700' : '400'};">Gallery</h1>
    <div class="image-grid">
      
      <img src={`https://www.wearelakers.net/${$gallery.image1}?width=450`} alt="Image 1" class="grid-image">
      <img src={`https://www.wearelakers.net/${$gallery.image2}?width=450`} alt="Image 2" class="grid-image">
      <img src={`https://www.wearelakers.net/${$gallery.image3}?width=450`} alt="Image 3" class="grid-image">
      <img src={`https://www.wearelakers.net/${$gallery.image4}?width=450`} alt="Image 4" class="grid-image">
    </div>
  </div>
  
  <style>
    .gallery {
      text-align: center;
      padding: 60px;
      background-color: white;
    }
  
    .image-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
  
    .grid-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  </style>
  