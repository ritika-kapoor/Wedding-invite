<script>
  import { date, sendInvitationId } from '../../store';
  import Time from 'svelte-time';
  
  export let font;
  export let color;

  let selectedOption = '';

  //function for guest entry form
  let result = null
  let isWeddingParticipating = false;
  let isReceptionParticipating = false;

  async function doPost () {

    let formData = new FormData();
    formData.append('invitation_id', $sendInvitationId,); 
    formData.append('is_wedding_participating', isWeddingParticipating); 
    formData.append('is_reception_participating', isReceptionParticipating);
      const res = await fetch('https://api.wearelakers.net/invitation/participating/update', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      // body: formData
      body: JSON.stringify({
        invitation_id: $sendInvitationId,
        is_wedding_participating: isWeddingParticipating,
        is_reception_participating: isReceptionParticipating,
      })
    })

    const json = await res.json()
    result = JSON.stringify(json)
  }

  let fontLink1 = '';
  let fontLink2 = '';
  let fontFamilyPrimary = '';
  let fontFamilySecondary = '';
  let textColor = '';
  let isNoto = false;

  // Set the fonts and styles based on the API value
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
      textColor = 'red';
      break;
  }
</script>

<svelte:head>
  <link rel="stylesheet" href={fontLink1}>
  <link rel="stylesheet" href={fontLink2}>
</svelte:head>

<div class="rsvp" style="font-family: {fontFamilySecondary}; color: {textColor};">
  <h1 class="heading" style="font-family: {fontFamilyPrimary}; font-size: {isNoto ? '40px' : '65px'}; font-weight: {isNoto ? '700' : '400'}; color: {textColor};">
    RSVP
  </h1>
  <p style="font-size: {isNoto ? '17px' : '16px'}; font-weight: 400;">
    お手数ですが　下記お日にち迄に <br> 出欠情報のご連絡をお願い申し上げます
  </p>
  <p style="font-size: {isNoto ? '20px' : '20px'}; font-weight: {isNoto ? '700' : '400'}">
    <Time timestamp={$date.date} format="YYYY年MM月DD日" />
  </p>
  <p style="font-size: {isNoto ? '17px' : '16px'}; font-weight: 400;">
    期⽇までのご連絡が難しい場合には <br> ご一報いただけますと幸いです
  </p>
  <p style="font-size: {isNoto ? '20px' : '20px'}; font-weight: 700;">
    ゲスト様入力項目<br>Guest Entry Form
  </p>

  <div class="checkboxes">
    <label style="font-size: {isNoto ? '17px' : '16px'}; font-weight: 400;">
      <input 
        type="checkbox" 
        name="wedding" 
        value="結婚式" 
        style="accent-color: {textColor};"
        bind:checked={isWeddingParticipating}
      />
      結婚式
    </label>
    <label style="font-size: {isNoto ? '17px' : '16px'}; font-weight: 400;">
      <input 
        type="checkbox" 
        name="kōen" 
        value="広縁" 
        style="accent-color: {textColor};"
        bind:checked={isReceptionParticipating}
      />
      広縁
    </label>
  </div>

  <div class="button-group">
    <button 
      class:selected={selectedOption === 'attend'}
      on:click={() => selectedOption = 'attend'}
      style="border: 1px solid {textColor}; color: {selectedOption === 'attend' ? 'white' : textColor}; background-color: {selectedOption === 'attend' ? textColor : 'white'}; font-family: {fontFamilySecondary}; font-size: {isNoto ? '12px' : '12px'}; font-weight: 700;"
    >
      ご出席<br>Attend
    </button>
    <button 
      class:selected={selectedOption === 'hold'}
      on:click={() => selectedOption = 'hold'}
      style="border: 1px solid {textColor}; color: {selectedOption === 'hold' ? 'white' : textColor}; background-color: {selectedOption === 'hold' ? textColor : 'white'}; font-family: {fontFamilySecondary}; font-size: {isNoto ? '12px' : '12px'}; font-weight: 700;"
    >
      保留<br>Hold
    </button>
    <button 
      class:selected={selectedOption === 'decline'}
      on:click={() => selectedOption = 'decline'}
      style="border: 1px solid {textColor}; color: {selectedOption === 'decline' ? 'white' : textColor}; background-color: {selectedOption === 'decline' ? textColor : 'white'}; font-family: {fontFamilySecondary}; font-size: {isNoto ? '12px' : '12px'}; font-weight: 700;"
    >
      ご欠席<br>Decline
    </button>
  </div>

  <button type="submit" on:click|preventDefault={doPost} style="background-color: {textColor}; color: white;">Submit</button>
</div>

<style>
  .rsvp {
    text-align: center;
    padding: 5px;
    background-color: white;
  }

  .checkboxes {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
  }

  .checkboxes label {
    display: flex;
    align-items: center;
  }

  .button-group {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }

  .button-group button {
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
  }

  /* .button-group button:hover {
    background-color: #c9a34a;
  } */

  button {
    padding: 10px 20px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    margin: 10px;
  }

  /* button:hover {
    background-color: #c9a34a;
  } */
</style>
