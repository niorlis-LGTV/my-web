        function openArt(imgUrl) {
        document.getElementById("fullImg").src = imgUrl;
        document.getElementById("artModal").style.display = "block";
}
        function closeArt() {   
        document.getElementById("artModal").style.display = "none";
}



const items = {

    rare: [

        'https://raw.githubusercontent.com/pacharavashin/cool-web/main/gacha%20pic/66a73478-a0bc-4a32-9ec5-0d16d6d23c92.jpg',

        'https://raw.githubusercontent.com/pacharavashin/cool-web/main/gacha%20pic/8ab7d65e-62a4-4895-a798-03d0a35fad59.jpg'

    ],

    epic: [

        'https://raw.githubusercontent.com/pacharavashin/cool-web/main/gacha%20pic/4fc7f9fe-4e1f-4fd4-ab0e-8c134dc476ab.jpg',

        'https://raw.githubusercontent.com/pacharavashin/cool-web/main/gacha%20pic/2f566314-3779-46d3-9777-3632aa1abe0a.jpg'

    ],

    legendary: [

        'https://raw.githubusercontent.com/pacharavashin/cool-web/main/gacha%20pic/c598429a-cb7d-4794-bd36-ba24937b2974.jpg',

        'https://raw.githubusercontent.com/pacharavashin/cool-web/main/gacha%20pic/0e6291fe-404d-4dbe-9518-8fd9ea267ea1.jpg'

    ],

    god: [

        'https://raw.githubusercontent.com/pacharavashin/cool-web/main/gacha%20pic/41533ce9-8847-4e19-a8ed-ed9679cbcb29.jpg'

    ]

};



function rollGacha() {

    const video = document.getElementById('gachaVideo');

    const box = document.getElementById('gachaBox');

    

    // 1. เล่นวิดีโออนิเมชั่น

    video.style.display = 'block';

    video.play();



    // 2. เมื่อวิดีโอจบ ให้สุ่มรูป

    video.onended = function() {

        const rand = Math.random() * 100; // สุ่ม 0-100

        let rarity = '';

        let colorClass = '';



        if (rand < 2) { rarity = 'god'; colorClass = 'god'; }        // 1%

        else if (rand < 10) { rarity = 'legendary'; colorClass = 'legendary'; } // 9%

        else if (rand < 40) { rarity = 'epic'; colorClass = 'epic'; } // 30%

        else { rarity = 'rare'; colorClass = 'rare'; }               // 60%



        const pool = items[rarity];

        const finalImg = pool[Math.floor(Math.random() * pool.length)];



        // แสดงผลใน Modal

        document.getElementById('resultImg').src = finalImg;

        document.getElementById('rarityText').innerText = rarity.toUpperCase();

        document.getElementById('rarityText').className = 'rarity-tag ' + colorClass;

        document.getElementById('resultModal').style.display = 'flex';

        

        // Reset วิดีโอ

        video.style.display = 'none';

        video.currentTime = 0;

    };

}



function closeResult() {

    document.getElementById('resultModal').style.display = 'none';

}