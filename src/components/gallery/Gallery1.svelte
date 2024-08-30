<script>
    export let image1;
    export let image2;
    export let image3;
    export let image4;
  
    // You can customize the number of images and their arrangement as needed.
  </script>
  
  <div class="gallery">
    <div class="image-container">
      <img src={image1} alt="Image 1">
      <img src={image2} alt="Image 2">
      <img src={image3} alt="Image 3">
      <img src={image4} alt="Image 4">
    </div>
  </div>
  
  <style>
    .gallery {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }
  
    .image-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      width: 80%;
    }
  
    .image-container img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  </style>
  