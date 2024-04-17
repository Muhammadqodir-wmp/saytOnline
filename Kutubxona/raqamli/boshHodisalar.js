function navigationClicked(pageName) {
    var content = document.getElementById("content");
    content.innerHTML = 
    "<h1>" +
    "<ul>" +
    "<li><h1>Kitob - 1</h1></li>" +
    "<li><h1>Kitob - 2</h1></li>" +
    "<li><h1>Kitob - 3</h1></li>" +
"</ul>" +
"</h1>";
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
function yordam(pageName){
    var aloqaY = document.getElementById('content');
    aloqaY.innerHTML = `
    <h1 style = 'text-align: center;'>
    Murojaatingizni yozib qoldiring...
    </h2>
    <input type="text" style = "
    display: block;
    margin-left: auto;
    margin-right: auto;
    widht: calc(100%/2);
    "> 
    `;
}