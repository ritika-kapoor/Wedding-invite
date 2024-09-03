import { writable, derived } from 'svelte/store';

/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/
export const apiData = writable([]);

/** Data transformation.
For our use case, we only care about the drink names, not the other information.
Here, we'll create a derived store to hold the drink names.
**/
// export const drinkNames = derived(apiData, ($apiData) => {
//   if ($apiData.drinks){
//     return $apiData.drinks.map(drink => drink.strDrink);
//   }
//   return [];
// });

export const template = derived(apiData, ($apiData) => {
  return {
    number: $apiData.template_no
  }
});

export const gallery = derived(apiData, ($apiData) => {
  return {
    image1: $apiData.gallery_image1_url,
    image2: $apiData.gallery_image2_url,
    image3: $apiData.gallery_image3_url,
    image4: $apiData.gallery_image4_url
  }
});

