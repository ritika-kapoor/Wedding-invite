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

export const main_image = derived(apiData, ($apiData) => {
  return {
    image: $apiData.main_image
  }
});

export const date = derived(apiData, ($apiData) => {
  return {
    date: $apiData.event_date
  }
});

export const host_info = derived(apiData, ($apiData) => {
  return {
    date: $apiData.event_date,
    groom: $apiData.groom_first_name,
    bride: $apiData.bride_first_name,
    place: $apiData.venue_city
  }
});

export const date_venue = derived(apiData, ($apiData) => {
  return {
    start_time: $apiData.event_start_time,
    reception_time: $apiData.event_regitration_time,
    end_time: $apiData.event_end_time,
    venue: $apiData.event_venue_name,
    mapEmbedUrl: $apiData.event_venue_map_address ,
    venue_address: $apiData.event_venue_address,
    venue_phone: $apiData.event_venue_phone,
    venue_link: $apiData.event_venue_link
  }
});

export const our_story = derived(apiData, ($apiData) => {
  return {
    couple: $apiData.gallery_image1_url,
    groom: $apiData.groom_first_name,
    bride: $apiData.bride_first_name,
    groomimg: $apiData.gallery_image4_url,
    brideimg: $apiData.gallery_image1_url,
    story_description: $apiData.our_story,
    bride_dob: $apiData.bride_dob,
    groom_dob: $apiData.groom_dob,
    bride_birth: $apiData.bride_birthplace,
    groom_birth: $apiData.groom_birthplace,
    bride_hobby: $apiData.bride_hobby,
    groom_hobby: $apiData.groom_hobby,
    bride_like: $apiData.bride_fav_things,
    groom_like: $apiData.groom_fav_things,
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

