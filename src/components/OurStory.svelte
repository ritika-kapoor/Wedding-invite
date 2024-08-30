<script>
    export let story = "私たちの恋愛物語は、偶然の出会いから始まりました。 そして美しい友情に育ち、さらに素晴らしいロマンスへと花開きました。 笑顔と涙、試練と栄光を経て、私たちの絆はますます強くなりました";
    export let coupleImage = '/couple.jpg'; 
    export let groomName = "バンズ";
    export let groomImage = '/groom.jpg'; 
    export let groomInfo = "1999年12月7日　大阪出身 趣味：旅行 〈ステファンさんの好きなところ〉 素直、優しい";
    export let brideName = "新婦";
    export let brideImage = '/bride.jpg';
    export let brideInfo = "1990年5月1日　東京出身 趣味：料理 〈新婦さんの好きなところ〉 明るい、思いやりがある";
</script>

<div class="our-story">
    <h2>Our Story</h2>
    <img src={coupleImage} alt="Couple" class="couple-image">
    <p>{story}</p>

    <div class="person-info">
        <h3>Groom</h3>
        <p>{groomName}</p>
        <img src={groomImage} alt="Groom" class="person-image">
        <p>{groomInfo}</p>
    </div>

    <div class="person-info">
        <h3>Bride</h3>
        <p>{brideName}</p>
        <img src={brideImage} alt="Bride" class="person-image">
        <p>{brideInfo}</p>
    </div>
</div>

<style>
    .our-story {
        text-align: center;
        margin-bottom: 20px;
    }

    .couple-image {
        width: 100%;
        max-width: 600px;
        height: auto;
        border-radius: 10px;
        margin-bottom: 20px;
    }

    .person-info {
        margin: 20px 0;
        text-align: center;
    }

    .person-info h3 {
        margin: 10px 0;
        font-family: 'Kapakana', sans-serif;
    }

    .person-info p {
        margin: 5px 0;
        font-family: 'Kaisei Decol', sans-serif;
    }

    .person-image {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 50%;
        margin: 10px 0;
    }
</style>
