function navigationClicked(pageName) {
    var content = document.getElementById("content");
    content.innerHTML = 
   
    ` 
        <style>     
               
            .book-row {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                margin-bottom: 20px;
            }
            .rasm{
                height: 120px;
                width: 100px;
            }
            .book {
                background-color: #f0f0f0;
                border: 1px solid #ddd;
                border-radius: 8px;
                padding: 10px;
                text-align: center;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s;
                width: calc(20% - 20px); /* Adjust width as necessary */
                margin-bottom: 20px;
            }
        
            .book:hover {
                transform: translateY(-5px);
            }
        
            .book .color-box {
                width: 100%;
                height: 50px; /* Adjust height as desired */
                background-color: #4682b4; /* Steel Blue */
                border-radius: 8px;
                margin-bottom: 10px;
                color: #fff;
                padding: 5px;
                font-size: 15px;
            }
        
            .book button {
                padding: 5px 10px;
                background-color: #007BFF;
                color: #fff;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                transition: background-color 0.3s;
            }
        
            .book button:hover {
                background-color: #0056b3;
            }
        
            @media (max-width: 768px) {
                .book {
                    width: calc(33.33% - 20px);
                }
            }
        
            @media (max-width: 480px) {
                .book {
                    width: 100%;
                }
            }
            p{
                font-size: 8px;
            }
        </style>
   
            <div class="book-row">
                <div class="book">
                    <div> <img  src="./rasmlar/2.png" , class= "rasm" /> </div>
                    <div class="color-box">Python
                    <p>Muallif:Sh.A.Mengliyev, O.A.Abdug'aniev, S.Q.Shonazarov, D. Sh.To'rayev  </p>
                    </div>
                    <button onclick="location.href='./kitoblar/Python.pdf'">Kirmoq</button>
                </div>
                <div class="book">
                <div> <img  src="./rasmlar/fizik.png" , class= "rasm" /> </div>
                    <div class="color-box">Fizika 6-sinf
                    <p>Boshlang'ich ma'lumotlar</p>
                    </div>
                    <button onclick="location.href='./kitoblar/Fizika.pdf'">Kirmoq</button>
                </div>
                <div class="book">
                <div> <img  src="./rasmlar/xamsa.png" , class= "rasm" /> </div>
                    <div class="color-box">Xamsa
                    <p>Muallif: Alisher Navoiy </p>
                    </div>
                    <button onclick="location.href='./kitoblar/Xamsa.pdf'">Kirmoq</button>
                </div>
            </div>
           
            <div class="book-row">
                <div class="book">
                <div> <img  src="./rasmlar/ichin.png" , class= "rasm" /> </div>
                    <div class="color-box">Ichindagi ichindadur
                    <p>Muallif:Jaloliddin Rumiy</p>
                    </div>
                    <button onclick="location.href='./kitoblar/Ichindagi.pdf'">Kirmoq</button>
                </div>
                <div class="book">
                <div> <img  src="./rasmlar/algo.png" , class= "rasm" /> </div>
                    <div class="color-box">Algoritm
                    <p>Muallif: B.Tojiboyev</p></div>
                    <button onclick="location.href='./kitoblar/Algoritm_tushuncha.pdf'">Kirmoq</button>
                </div>
                <div class="book">
                <div> <img  src="./rasmlar/algok.png" , class= "rasm" /> </div>
                    <div class="color-box">Algoritmlar
                    <p>Ashurov M</p></div>
                    <button onclick="location.href='kitoblar/Algoritmlar.pdf'">Kirmoq</button>
                </div>
            </div>
            <!-- Book row 3 -->
            <div class="book-row">
                <div class="book">
                    <div> <img  src="./rasmlar/ekinson.png" , class= "rasm" /> </div>
                    <div class="color-box">Eng komil inson<p>Muallif: Ibrohim</p>    
                    </div>
                   
                    <button onclick="location.href='kitoblar/ekinson.pdf'">Kirmoq</button>
                </div>
                <div class="book">
                    <div> <img  src="./rasmlar/aqcha.png" , class= "rasm" /> </div>
                    <div class="color-box">Aqchagul<p>Muallif:Murod Niyazov</p></div>
                    <button onclick="location.href='./kitoblar/aqcha.pdf'">Kirmoq</button>
                </div>
                <div class="book">
                <div> <img  src="./rasmlar/azam.png" , class= "rasm" /> </div>
                    <div class="color-box">Imom A'zam - buyuk imomiz<p>Muallif: Alouddin Mansur</p></div>
                    <button onclick="location.href='./kitoblar/azam.pdf'">Kirmoq</button>
                </div>
            </div>
            <!-- Book row 4 -->
            <div class="book-row">
                <div class="book">
                <div> <img  src="./rasmlar/ozod.png" , class= "rasm" /> </div>
                    <div class="color-box">Ozod</div>
                    <button onclick="location.href='./kitoblar/ozod.pdf'">Kirmoq</button>
                </div>
                <div class="book">
                <div> <img  src="./rasmlar/bolinish.png" , class= "rasm" /> </div>
                    <div class="color-box">Bo'linish nimadan boshlagan? <p>Pirmat Shermuhammad</p></div>
                    <button onclick="location.href='./kitoblar/bolinish.pdf'">Kirmoq</button>
                </div>
                <div class="book">
                    <img  src="./rasmlar/goyalar.png" , class= "rasm" />
                    <div class="color-box">G'oyalar bozori</div>
                    <button onclick="location.href='./kitoblar/goyalar.pdf'">Kirmoq</button>
                </div>
            </div>
            <!-- Book row 5 -->
            <div class="book-row">
                <div class="book">
                    <img  src="./rasmlar/eski.png" , class= "rasm" />
                    <div class="color-box">Eski Maktab</div>
                    <button onclick="location.href='./kitoblar/eski.pdf'">Kirmoq</button>
                </div>
                <div class="book">
                    <img  src="./rasmlar/muzqaymoq.png" , class= "rasm" />
                    <div class="color-box">Muzqaymoq</div>
                    <button onclick="location.href='./kitoblar/Muzqaymoq.pdf'">Kirmoq</button>
                </div>
                <div class="book">
                    <img  src="./rasmlar/mutolaa.png" , class= "rasm" />
                    <div class="color-box">Mutolaa</div>
                    <button onclick="location.href='./kitoblar/Mutolaa.pdf'">Kirmoq</button>
                </div>
            </div>
        </div>
    
    
    
    
    `;
    document.getElementById('openPdfButton').addEventListener('click', function() {
        window.open('./kitoblar/Python.pdf', '_blank');
    });
}
function asosiy(pageName){
    var asos = document.getElementById('content');
    asos.innerHTML = `
    <style>
    .dizayn{
        
    }
    </style>
    <h1 style ='text-align: center;'>Assalomu alaykum, sahifamizga xush kelibsiz!</h1>
    <h1 style ='text-align: center;'>Hikmatli so'zlar:</h1>
    <div class="dizayn" >
        <h2 style ='text-align: center;'>
            Jahonda neki qilmish odamzod,<br>
            Tafakkur birla bilmish odamzod.<br><br>
            Birovkim, jahonda so‘zi rostdir,<br>
            Erur dog' anga kim o‘zi rostdir.<br><br>
            Ki har kim ayon etsa yaxshi qilig‘,<br>
            Yetar yaxshilikdan anga yaxshilig‘.
        </h2>
    </div>
    `;
}

function audioK(pageName){
    var audio = document.getElementById('content');
    audio.innerHTML = `
    <style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f9;
        margin: 0;
        padding: 20px;
    }
    
    .container {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
    }
    
    h1 {
        color: #333;
        margin-bottom: 40px;
    }
    
    .audiobook-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
    }
    
    .audiobook-card {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    
    
    .audiobook-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
    
    .audiobook-card img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        display: block;
        margin: 15px 0;
    }
    
    .audiobook-info {
        padding: 15px;
        text-align: center;
        width: 100%;
    }
    
    .audiobook-card h2 {
        margin: 10px 0;
        font-size: 1.25rem;
        color: #333;
    }
    
    .audiobook-card p {
        margin: 0 0 10px;
        color: #777;
    }
    
    audio {
        width: 100%;
        outline: none;
        margin-top: 10px;
    }
</style>

<div class="container">
    <h1>Hikoyalar</h1>
    <div class="audiobook-grid">
        <div class="audiobook-card">
        <img src="rasmlar/audio2.jpg" alt="Audiokitob 3 muqovasi">
           <div class="audiobook-info">
                <h2>Karavot</h2>
                <p>Muallif: Abdulla Qahhor</p>
                <audio controls>
                    <source src="audioKitoblar/Karavot.mp3" type="audio/mpeg">
                    Sizning brauzeringiz audiokitobni o'qiy olmaydi.
                </audio>
            </div>
        </div>
        <div class="audiobook-card">
        <img src="rasmlar/audio2.jpg" alt="Audiokitob 3 muqovasi">
            <div class="audiobook-info">
                <h2>Sinchalak</h2>
                <p>Muallif: Abdulla Qahhor</p>
                <audio controls>
                    <source src="audioKitoblar/Sinchalak.mp3" type="audio/mpeg">
                    Sizning brauzeringiz audiokitobni o'qiy olmaydi.
                </audio>
            </div>
        </div>
        <div class="audiobook-card">
            <img src="rasmlar/audio2.jpg" alt="Audiokitob 3 muqovasi">
            <div class="audiobook-info">
                <h2>Obid Ketmon</h2>
                <p>Muallif: Abdulla Qodiriy</p>
                <audio controls>
                    <source src="audioKitoblar/ketmon.mp3" type="audio/mpeg">
                    Sizning brauzeringiz audiokitobni o'qiy olmaydi.
                </audio>
            </div>
        </div>
        <!-- Yana boshqa audiokitob kartalarini shu yerda qo'shishingiz mumkin -->
    </div>
</div>

<div class="container">
    <h1>Rivoyat - Qissa</h1>
    <div class="audiobook-grid">
        <div class="audiobook-card">
        <img src="rasmlar/audio2.jpg" alt="Audiokitob 3 muqovasi">
           <div class="audiobook-info">
                <h2> "Oqchorloq Jonatan Livingston(1)"</h2>
                <p>Muallif: Richard Bax</p>
                <audio controls>
                    <source src="audioKitoblar/chorloq.mp3" type="audio/mpeg">
                    Sizning brauzeringiz audiokitobni o'qiy olmaydi.
                </audio>
            </div>
        </div>
        <div class="audiobook-card">
        <img src="rasmlar/audio2.jpg" alt="Audiokitob 3 muqovasi">
            <div class="audiobook-info">
                <h2> "Oqchorloq Jonatan Livingston(2)"</h2>
                <p>Muallif: Richard Bax</p>
                <audio controls>
                    <source src="audioKitoblar/chorloq2.mp3" type="audio/mpeg">
                    Sizning brauzeringiz audiokitobni o'qiy olmaydi.
                </audio>
            </div>
        </div>
        <div class="audiobook-card">
            <img src="rasmlar/audio2.jpg" alt="Audiokitob 3 muqovasi">
            <div class="audiobook-info">
                <h2> "Oqchorloq Jonatan Livingston(3)"</h2>
                <p>Muallif: Richard Bax</p>
                <audio controls>
                    <source src="audioKitoblar/chorloq3.mp3" type="audio/mpeg">
                    Sizning brauzeringiz audiokitobni o'qiy olmaydi.
                </audio>
            </div>
        </div>
        <!-- Yana boshqa audiokitob kartalarini shu yerda qo'shishingiz mumkin -->
    </div>
</div>



    `;
}

function malumot(pageName){
    var malumot = document.getElementById('content');
    malumot.innerHTML = `
    <h1 style ='text-align: center;'>Kitoblar soni:</h1>
    <h2 style ='text-align: center;'>
    Fayl kitoblar: 15 <br>
    Audio kitoblar: 1 <br>
    <h3 style ='text-align: center;'>Barcha kitoblar: 16</h3> 
    </h2>
    
    `;
}

function yordam(pageName) {
    var aloqaY = document.getElementById('content');
    aloqaY.innerHTML = `
    <style>
      #textInput {
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-right: 10px;
      }

      #saveButton {
        padding: 10px 20px;
        font-size: 16px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      #saveButton:hover {
        background-color: #0056b3;
      }
    </style>

    <input type="text" id="textInput" placeholder="Enter text...">
    <button id="saveButton">Save to File</button>
    `;

    // Add event listener to the button
    document.getElementById("saveButton").addEventListener("click", function() {
        // Get the text from the input field
        var text = document.getElementById("textInput").value;
        // const fs = require('fs');
        const yol = "./murojaat/matn.txt";
        var f = new File(yol);
        f.writeln(text + "\n");
        f.close();
    });
}


function kitoblar(pageName){
    var kitob = document.getElementById('')
    kitob.innnerHTML =`
    <button id="openPdfButton">Kitobni ochish</button    
    `
    
}
