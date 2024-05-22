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
                    <div class="color-box">Python
                    <p>Muallif:Sh.A.Mengliyev, O.A.Abdug'aniev, S.Q.Shonazarov, D. Sh.To'rayev  </p>
                    </div>
                    <button onclick="location.href='./kitoblar/Python.pdf'">Kirmoq</button>
                </div>
                <div class="book">
                    <div class="color-box">Fizika 6-sinf
                    <p>Boshlang'ich ma'lumotlar</p>
                    </div>
                    <button onclick="location.href='./kitoblar/Fizika.pdf'">Kirmoq</button>
                </div>
                <div class="book">
                    <div class="color-box">Xamsa
                    <p>Muallif: Alisher Navoiy </p>
                    </div>
                    <button onclick="location.href='./kitoblar/Xamsa'">Kirmoq</button>
                </div>
            </div>
           
            <div class="book-row">
                <div class="book">
                    <div class="color-box">Ichindagi ichindadur
                    <p>Muallif:Jaloliddin Rumiy</p>
                    </div>
                    <button onclick="location.href='./kitoblar/Ichindagi.pdf'">Kirmoq</button>
                </div>
                <div class="book">
                    <div class="color-box">Algoritm
                    <p>Muallif: B.Tojiboyev</p></div>
                    <button onclick="location.href='./kitoblar/Algoritm_tushuncha.pdf'">Kirmoq</button>
                </div>
                <div class="book">
                    <div class="color-box">Algoritmlar
                    <p>Ashurov M</p></div>
                    <button onclick="location.href='kitoblar/Algoritmlar.pdf'">Kirmoq</button>
                </div>
            </div>
            <!-- Book row 3 -->
            <div class="book-row">
                <div class="book">
                    <div class="color-box">Book 7</div>
                    <button onclick="location.href='book7.html'">Kirmoq</button>
                </div>
                <div class="book">
                    <div class="color-box">Book 8</div>
                    <button onclick="location.href='book8.html'">Kirmoq</button>
                </div>
                <div class="book">
                    <div class="color-box">Book 9</div>
                    <button onclick="location.href='book9.html'">Kirmoq</button>
                </div>
            </div>
            <!-- Book row 4 -->
            <div class="book-row">
                <div class="book">
                    <div class="color-box">Book 10</div>
                    <button onclick="location.href='book10.html'">Kirmoq</button>
                </div>
                <div class="book">
                    <div class="color-box">Book 11</div>
                    <button onclick="location.href='book11.html'">Kirmoq</button>
                </div>
                <div class="book">
                    <div class="color-box">Book 12</div>
                    <button onclick="location.href='book12.html'">Kirmoq</button>
                </div>
            </div>
            <!-- Book row 5 -->
            <div class="book-row">
                <div class="book">
                    <div class="color-box">Book 13</div>
                    <button onclick="location.href='book13.html'">Kirmoq</button>
                </div>
                <div class="book">
                    <div class="color-box">Book 14</div>
                    <button onclick="location.href='book14.html'">Kirmoq</button>
                </div>
                <div class="book">
                    <div class="color-box">Book 15</div>
                    <button onclick="location.href='book15.html'">Kirmoq</button>
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
    <h1 style="text-align: center;">Assalomu alaykum, sahifamizga xush kelibsiz! </h1>
    <form><h1 style ='text-align: center;'>Hikmatli so'zlar:</h1>
    <h2 style ='text-align: center;' >
       ...Jahonda neki qilmish odamizod,<br>
        Tafakkur birla bilmish odamizod.<br>
        \n...Birovkim, jahonda so‘zi rostdir,<br>
        \nErur dol angakim o‘zi rostdur.<br>
        \n...Ki har kim ayonetsa yaxshi qilig‘,<br>
        \n  Yetar yaxshiliqdan anga yaxshilig‘</h2></form>    
    `;
}

function audioK(pageName){
    var audio = document.getElementById('content');
    audio.innerHTML = `
    <h1 style ='text-align: center;'>Abdulla Qahhor - "Karavot" hikoyasi <br>
    </h1>
    <h2 style ='text-align: center;'>Ijro etdi: Fathulloh Maxsudov</h2>
    <audio controls style="padding-left: calc(78%/2)">
    <source src="audioKitoblar/Karavot.mp3" type="audio/mpeg">   
    </audio> 
    `;
}

function malumot(pageName){
    var malumot = document.getElementById('content');
    malumot.innerHTML = `
    <h1 style ='text-align: center;'>Kitoblar soni:</h1>
    <h2 style ='text-align: center;'>
    Fayl kitoblar: 0 <br>
    Audio kitoblar: 1 <br> </h2>
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
        const fs = require('fs');
        const yol = "./murojaat/matn.txt";
        fs.writeFile(yol,text);
    });
}


function kitoblar(pageName){
    var kitob = document.getElementById('')
    kitob.innnerHTML =`
    <button id="openPdfButton">Kitobni ochish</button>
    
    `
    
}
