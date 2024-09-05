<script>
    import { host_info } from '../../store';
    let bgImageUrl = '/host_info1.png';

  </script>

<div class="main-visual">
    <!-- Background Image -->
    <div class="visual-cta">
    <img src={bgImageUrl} alt="Background Image" class="background-image" />
      {#if $host_info.bride}
        <div class="host-container-cta">
          <div class="host-container">
            You are invited to <br> the wedding of <br> 
            <span class="bride">{$host_info.bride} <br> & <br> {$host_info.groom}</span><br>
            <span class="date">{$host_info.date} <br> {$host_info.place} </span>
          </div>
        </div>
      {/if}
    </div>
  </div>
  
  <style>
    .main-visual {
      text-align: center;
      /* display: flex;
      justify-content: center;
      align-items: center;
      height: 600px;  */
      margin-top: -80px;
    }
  
    .visual-cta {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 2;
    }

    .background-image{
        width: 100%;
    }
  
    .host-container-cta{
     background-color: #FDF0C6;
      text-align: center;
      z-index:1;
    }
    .host-container {
      background-color: rgb(255, 255, 255); /* Semi-transparent brown background */
      border-radius: 50% 50% 4px 4px;
      /* margin: 0px 15px; */
      height: 400px;
      max-width: 600px;
      /* text-align: center; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* align-items: center; */
      color: #E3BE54;
      font-family: "Kameron", serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 23px;
      position: relative;
      z-index: 3;
      margin-top: -40%;
      padding-top: 40px;
    }

    .bride{
        font-family: "Kalam", cursive;
        font-weight: 700;
        line-height: 51px;
        font-size: 32px;
        margin-top: 12px;
    }

  </style>
  