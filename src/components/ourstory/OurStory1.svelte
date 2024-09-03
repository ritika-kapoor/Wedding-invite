<script>
  
  import { our_story } from '../../store';

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
      textColor = 'red';
      break;
  }
</script>

    
<svelte:head>
  <link rel="stylesheet" href={fontLink1}>
  <link rel="stylesheet" href={fontLink2}>
</svelte:head>

<div class="our-story">
  <h1 class="heading" style="color: {textColor}; font-family: {fontFamilyPrimary}; font-size: {isNoto ? '40px' : '50px'}; font-weight: {isNoto ? '700' : '400'};">
    Our Story
  </h1>
  <img src={$our_story.couple} alt="Couple" class="couple-image">
  <p class="description" style="color: {textColor}; font-family: {fontFamilySecondary}; font-size: {isNoto ? '17px' : '16px'}; font-weight: {isNoto ? '400' : '400'};">
    {$our_story.story_description}
  </p>

  <h2 class="subheading" style="color: {textColor}; font-family: {fontFamilyPrimary}; font-size: {isNoto ? '20px' : '36px'}; font-weight: {isNoto ? '700' : '400'};">
    Groom <br> {$our_story.groom}
  </h2>
  <img src={$our_story.groomimg} alt="Groom" class="groom-image">
  <p class="description groom-bride" style="color: {textColor}; font-family: {fontFamilySecondary}; font-size: {isNoto ? '17px' : '16px'}; font-weight: {isNoto ? '400' : '400'};">
    {$our_story.groom_dob} &emsp; {$our_story.groom_birth} <br>
    趣味: {$our_story.groom_hobby} <br>
    <!-- {$our_story.bride}さんの好きなところ:<br> {$our_story.groom_like} -->
  </p>

  <h2 class="subheading" style="color: {textColor}; font-family: {fontFamilyPrimary}; font-size: {isNoto ? '20px' : '36px'}; font-weight: {isNoto ? '700' : '400'};">
    Bride <br> {$our_story.bride} 
  </h2>
  <img src={$our_story.brideimg} alt="Bride" class="bride-image">
  <p class="description groom-bride" style="color: {textColor}; font-family: {fontFamilySecondary}; font-size: {isNoto ? '17px' : '16px'}; font-weight: {isNoto ? '400' : '400'};">
    {$our_story.bride_dob} &emsp; {$our_story.bride_birth} <br>
    趣味: {$our_story.bride_hobby} <br>
    <!-- {$our_story.groom}さんの好きなところ:<br> {$our_story.bride_like} -->
  </p>
</div>

<style>
  .our-story {
    text-align: center;
    padding: 15px;
    background-color: white;
  }

  .couple-image {
    width: 80%;
    height: auto;
    /* margin-bottom: 20px; */
  }

  .groom-image, .bride-image {
    width: 80%;
    height: auto;
    /* margin-bottom: 10px; */
  }
</style>
