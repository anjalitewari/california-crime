
        
// function readTextFile(file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }

// //usage:
// readTextFile("incidentsData.json", function(text){
//     var data = JSON.parse(text);
//     processData(data);
// });

var fs = require('fs');

fs.readFile("incidentsData.json", function(err, text) {
  var data = JSON.parse(text);
     processData(data);
});

var mtot=0,tutot=0,wtot=0,thtot=0,ftot=0,satot=0,sutot=0;
var mzero=0,mone=0,mtwo=0,mthree=0,mfour=0,mfive=0,msix=0,mseven=0,meight=0,mnine=0,mten=0,meleven=0,mtwelve=0,mthirteen=0,mfourteen=0,
mfifteen=0,msixteen=0,mseventeen=0,meighteen=0,mnineteen=0,mtwenty=0,mtwentyone=0,mtwentytwo=0,mtwentythree=0;
var tuzero=0,tuone=0,tutwo=0,tuthree=0,tufour=0,tufive=0,tusix=0,tuseven=0,tueight=0,tunine=0,tuten=0,tueleven=0,tutwelve=0,tuthirteen=0,tufourteen=0,
tufifteen=0,tusixteen=0,tuseventeen=0,tueighteen=0,tunineteen=0,tutwenty=0,tutwentyone=0,tutwentytwo=0,tutwentythree=0;
var wzero=0,wone=0,wtwo=0,wthree=0,wfour=0,wfive=0,wsix=0,wseven=0,weight=0,wnine=0,wten=0,weleven=0,wtwelve=0,wthirteen=0,wfourteen=0,
wfifteen=0,wsixteen=0,wseventeen=0,weighteen=0,wnineteen=0,wtwenty=0,wtwentyone=0,wtwentytwo=0,wtwentythree=0;
var thzero=0, thone=0,thtwo=0,ththree=0,thfour=0,thfive=0,thsix=0,thseven=0,theight=0,thnine=0,thten=0,theleven=0,thtwelve=0,ththirteen=0,thfourteen=0,
thfifteen=0,thsixteen=0,thseventeen=0,theighteen=0,thnineteen=0,thtwenty=0,thtwentyone=0,thtwentytwo=0,thtwentythree=0;
var fzero=0,fone=0,ftwo=0,fthree=0,ffour=0,ffive=0,fsix=0,fseven=0,feight=0,fnine=0,ften=0,feleven=0,ftwelve=0,fthirteen=0,ffourteen=0,
ffifteen=0,fsixteen=0,fseventeen=0,feighteen=0,fnineteen=0,ftwenty=0,ftwentyone=0,ftwentytwo=0,ftwentythree=0;
var sazero=0,saone=0,satwo=0,sathree=0,safour=0,safive=0,sasix=0,saseven=0,saeight=0,sanine=0,saten=0,saeleven=0,satwelve=0,sathirteen=0,safourteen=0,
safifteen=0,sasixteen=0,saseventeen=0,saeighteen=0,sanineteen=0,satwenty=0,satwentyone=0,satwentytwo=0,satwentythree=0;
var suzero=0,suone=0,sutwo=0,suthree=0,sufour=0,sufive=0,susix=0,suseven=0,sueight=0,sunine=0,suten=0,sueleven=0,sutwelve=0,suthirteen=0,sufourteen=0,
sufifteen=0,susixteen=0,suseventeen=0,sueighteen=0,sunineteen=0,sutwenty=0,sutwentyone=0,sutwentytwo=0,sutwentythree=0;
function processData(data) {
    for (var i = 0; i < data["data"].length; i++)  {
        //get crimes per weekday
        if(data["data"][i][11] == "Monday") {
            mtot+=1;

            //get crimes per hour
            if(data["data"][i][13].includes("00:")) {
                mzero+=1;
            }
            if(data["data"][i][13].includes("01:")) {
                mone+=1;
            }
            if(data["data"][i][13].includes("02:")) {
                mtwo+=1;
            }
            if(data["data"][i][13].includes("03:")) {
                mthree+=1;
            }
            if(data["data"][i][13].includes("04:")) {
                mfour+=1;
            }
            if(data["data"][i][13].includes("05:")) {
                mfive+=1;
            }
            if(data["data"][i][13].includes("06:")) {
                msix+=1;
            }
            if(data["data"][i][13].includes("07:")) {
                mseven+=1;
            }
            if(data["data"][i][13].includes("08:")) {
                meight+=1;
            }
            if(data["data"][i][13].includes("09:")) {
                mnine+=1;
            }
            if(data["data"][i][13].includes("10:")) {
                mten+=1;
            }
            if(data["data"][i][13].includes("11:")) {
                meleven+=1;
            }
            if(data["data"][i][13].includes("12:")) {
                mtwelve+=1;
            }
            if(data["data"][i][13].includes("13:")) {
                mthirteen+=1;
            }
            if(data["data"][i][13].includes("14:")) {
                mfourteen+=1;
            }
            if(data["data"][i][13].includes("15:")) {
                mfifteen+=1;
            }
            if(data["data"][i][13].includes("16:")) {
                msixteen+=1;
            }
            if(data["data"][i][13].includes("17:")) {
                mseventeen+=1;
            }
            if(data["data"][i][13].includes("18:")) {
                meighteen+=1;
            }
            if(data["data"][i][13].includes("19:")) {
                mnineteen+=1;
            }
            if(data["data"][i][13].includes("20:")) {
                mtwenty+=1;
            }
            if(data["data"][i][13].includes("21:")) {
                mtwentyone+=1;
            }
            if(data["data"][i][13].includes("22:")) {
                mtwentytwo+=1;
            }
            if(data["data"][i][13].includes("23:")) {
                mtwentythree+=1;
            }
        }
        if(data["data"][i][11] == "Tuesday") {
            tutot+=1;
            //get crimes per hour
            if(data["data"][i][13].includes("00:")){
                tuzero+=1;
            }
            if(data["data"][i][13].includes("01:")){
                tuone+=1;
            }
            if(data["data"][i][13].includes("02:")){
                tutwo+=1;
            }
            if(data["data"][i][13].includes("03:")){
                tuthree+=1;
            }
            if(data["data"][i][13].includes("04:")){
                tufour+=1;
            }
            if(data["data"][i][13].includes("05:")){
                tufive+=1;
            }
            if(data["data"][i][13].includes("06:")){
                tusix+=1;
            }
            if(data["data"][i][13].includes("07:")){
                tuseven+=1;
            }
            if(data["data"][i][13].includes("08:")){
                tueight+=1;
            }
            if(data["data"][i][13].includes("09:")){
                tunine+=1;
            }
            if(data["data"][i][13].includes("10:")){
                tuten+=1;
            }
            if(data["data"][i][13].includes("11:")){
                tueleven+=1;
            }
            if(data["data"][i][13].includes("12:")){
                tutwelve+=1;
            }
            if(data["data"][i][13].includes("13:")){
                tuthirteen+=1;
            }
            if(data["data"][i][13].includes("14:")){
                tufourteen+=1;
            }
            if(data["data"][i][13].includes("15:")){
                tufifteen+=1;
            }
            if(data["data"][i][13].includes("16:")){
                tusixteen+=1;
            }
            if(data["data"][i][13].includes("17:")){
                tuseventeen+=1;
            }
            if(data["data"][i][13].includes("18:")){
                tueighteen+=1;
            }
            if(data["data"][i][13].includes("19:")){
                tunineteen+=1;
            }
            if(data["data"][i][13].includes("20:")){
                tutwenty+=1;
            }
            if(data["data"][i][13].includes("21:")){
                tutwentyone+=1;
            }
            if(data["data"][i][13].includes("22:")){
                tutwentytwo+=1;
            }
            if(data["data"][i][13].includes("23:")){
                tutwentythree+=1;
            }

        }
        if(data["data"][i][11] == "Wednesday"){
            wtot+=1;
             if(data["data"][i][13].includes("00:")){
                wzero+=1;
            }
            if(data["data"][i][13].includes("01:")){
                wone+=1;
            }
            if(data["data"][i][13].includes("02:")){
                wtwo+=1;
            }
            if(data["data"][i][13].includes("03:")){
                wthree+=1;
            }
            if(data["data"][i][13].includes("04:")){
                wfour+=1;
            }
            if(data["data"][i][13].includes("05:")){
                wfive+=1;
            }
            if(data["data"][i][13].includes("06:")){
                wsix+=1;
            }
            if(data["data"][i][13].includes("07:")){
                wseven+=1;
            }
            if(data["data"][i][13].includes("08:")){
                weight+=1;
            }
            if(data["data"][i][13].includes("09:")){
                wnine+=1;
            }
            if(data["data"][i][13].includes("10:")){
                wten+=1;
            }
            if(data["data"][i][13].includes("11:")){
                weleven+=1;
            }
            if(data["data"][i][13].includes("12:")){
                wtwelve+=1;
            }
            if(data["data"][i][13].includes("13:")){
                wthirteen+=1;
            }
            if(data["data"][i][13].includes("14:")){
                wfourteen+=1;
            }
            if(data["data"][i][13].includes("15:")){
                wfifteen+=1;
            }
            if(data["data"][i][13].includes("16:")){
                wsixteen+=1;
            }
            if(data["data"][i][13].includes("17:")){
                wseventeen+=1;
            }
            if(data["data"][i][13].includes("18:")){
                weighteen+=1;
            }
            if(data["data"][i][13].includes("19:")){
                wnineteen+=1;
            }
            if(data["data"][i][13].includes("20:")){
                wtwenty+=1;
            }
            if(data["data"][i][13].includes("21:")){
                wtwentyone+=1;
            }
            if(data["data"][i][13].includes("22:")){
                wtwentytwo+=1;
            }
            if(data["data"][i][13].includes("23:")){
                wtwentythree+=1;
            }
        }
        if(data["data"][i][11] == "Thursday") {
            thtot+=1;
             if(data["data"][i][13].includes("00:")){
                thzero+=1;
            }
            if(data["data"][i][13].includes("01:")){
                thone+=1;
            }
            if(data["data"][i][13].includes("02:")){
                thtwo+=1;
            }
            if(data["data"][i][13].includes("03:")){
                ththree+=1;
            }
            if(data["data"][i][13].includes("04:")){
                thfour+=1;
            }
            if(data["data"][i][13].includes("05:")){
                thfive+=1;
            }
            if(data["data"][i][13].includes("06:")){
                thsix+=1;
            }
            if(data["data"][i][13].includes("07:")){
                thseven+=1;
            }
            if(data["data"][i][13].includes("08:")){
                theight+=1;
            }
            if(data["data"][i][13].includes("09:")){
                thnine+=1;
            }
            if(data["data"][i][13].includes("10:")){
                thten+=1;
            }
            if(data["data"][i][13].includes("11:")){
                theleven+=1;
            }
            if(data["data"][i][13].includes("12:")){
                thtwelve+=1;
            }
            if(data["data"][i][13].includes("13:")){
                ththirteen+=1;
            }
            if(data["data"][i][13].includes("14:")){
                thfourteen+=1;
            }
            if(data["data"][i][13].includes("15:")){
                thfifteen+=1;
            }
            if(data["data"][i][13].includes("16:")){
                thsixteen+=1;
            }
            if(data["data"][i][13].includes("17:")){
                thseventeen+=1;
            }
            if(data["data"][i][13].includes("18:")){
                theighteen+=1;
            }
            if(data["data"][i][13].includes("19:")){
                thnineteen+=1;
            }
            if(data["data"][i][13].includes("20:")){
                thtwenty+=1;
            }
            if(data["data"][i][13].includes("21:")){
                thtwentyone+=1;
            }
            if(data["data"][i][13].includes("22:")){
                thtwentytwo+=1;
            }
            if(data["data"][i][13].includes("23:")){
                thtwentythree+=1;
            }
        }
        if(data["data"][i][11] == "Friday") {
            ftot+=1;
             if(data["data"][i][13].includes("00:")){
                fzero+=1;
            }
            if(data["data"][i][13].includes("01:")){
                fone+=1;
            }
            if(data["data"][i][13].includes("02:")){
                ftwo+=1;
            }
            if(data["data"][i][13].includes("03:")){
                fthree+=1;
            }
            if(data["data"][i][13].includes("04:")){
                ffour+=1;
            }
            if(data["data"][i][13].includes("05:")){
                ffive+=1;
            }
            if(data["data"][i][13].includes("06:")){
                fsix+=1;
            }
            if(data["data"][i][13].includes("07:")){
                fseven+=1;
            }
            if(data["data"][i][13].includes("08:")){
                feight+=1;
            }
            if(data["data"][i][13].includes("09:")){
                fnine+=1;
            }
            if(data["data"][i][13].includes("10:")){
                ften+=1;
            }
            if(data["data"][i][13].includes("11:")){
                feleven+=1;
            }
            if(data["data"][i][13].includes("12:")){
                ftwelve+=1;
            }
            if(data["data"][i][13].includes("13:")){
                fthirteen+=1;
            }
            if(data["data"][i][13].includes("14:")){
                ffourteen+=1;
            }
            if(data["data"][i][13].includes("15:")){
                ffifteen+=1;
            }
            if(data["data"][i][13].includes("16:")){
                fsixteen+=1;
            }
            if(data["data"][i][13].includes("17:")){
                fseventeen+=1;
            }
            if(data["data"][i][13].includes("18:")){
                feighteen+=1;
            }
            if(data["data"][i][13].includes("19:")){
                fnineteen+=1;
            }
            if(data["data"][i][13].includes("20:")){
                ftwenty+=1;
            }
            if(data["data"][i][13].includes("21:")){
                ftwentyone+=1;
            }
            if(data["data"][i][13].includes("22:")){
                ftwentytwo+=1;
            }
            if(data["data"][i][13].includes("23:")){
                ftwentythree+=1;
            }
        }
        if(data["data"][i][11] == "Saturday") {
            satot+=1;
             if(data["data"][i][13].includes("00:")){
                sazero+=1;
            }
            if(data["data"][i][13].includes("01:")){
                saone+=1;
            }
            if(data["data"][i][13].includes("02:")){
                satwo+=1;
            }
            if(data["data"][i][13].includes("03:")){
                sathree+=1;
            }
            if(data["data"][i][13].includes("04:")){
                safour+=1;
            }
            if(data["data"][i][13].includes("05:")){
                safive+=1;
            }
            if(data["data"][i][13].includes("06:")){
                sasix+=1;
            }
            if(data["data"][i][13].includes("07:")){
                saseven+=1;
            }
            if(data["data"][i][13].includes("08:")){
                saeight+=1;
            }
            if(data["data"][i][13].includes("09:")){
                sanine+=1;
            }
            if(data["data"][i][13].includes("10:")){
                saten+=1;
            }
            if(data["data"][i][13].includes("11:")){
                saeleven+=1;
            }
            if(data["data"][i][13].includes("12:")){
                satwelve+=1;
            }
            if(data["data"][i][13].includes("13:")){
                sathirteen+=1;
            }
            if(data["data"][i][13].includes("14:")){
                safourteen+=1;
            }
            if(data["data"][i][13].includes("15:")){
                safifteen+=1;
            }
            if(data["data"][i][13].includes("16:")){
                sasixteen+=1;
            }
            if(data["data"][i][13].includes("17:")){
                saseventeen+=1;
            }
            if(data["data"][i][13].includes("18:")){
                saeighteen+=1;
            }
            if(data["data"][i][13].includes("19:")){
                sanineteen+=1;
            }
            if(data["data"][i][13].includes("20:")){
                satwenty+=1;
            }
            if(data["data"][i][13].includes("21:")){
                satwentyone+=1;
            }
            if(data["data"][i][13].includes("22:")){
                satwentytwo+=1;
            }
            if(data["data"][i][13].includes("23:")){
                satwentythree+=1;
            }
        }
        if(data["data"][i][11] == "Sunday") {
            sutot+=1;
             if(data["data"][i][13].includes("00:")){
                suzero+=1;
            }
            if(data["data"][i][13].includes("01:")){
                suone+=1;
            }
            if(data["data"][i][13].includes("02:")){
                sutwo+=1;
            }
            if(data["data"][i][13].includes("03:")){
                suthree+=1;
            }
            if(data["data"][i][13].includes("04:")){
                sufour+=1;
            }
            if(data["data"][i][13].includes("05:")){
                sufive+=1;
            }
            if(data["data"][i][13].includes("06:")){
                susix+=1;
            }
            if(data["data"][i][13].includes("07:")){
                suseven+=1;
            }
            if(data["data"][i][13].includes("08:")){
                sueight+=1;
            }
            if(data["data"][i][13].includes("09:")){
                sunine+=1;
            }
            if(data["data"][i][13].includes("10:")){
                suten+=1;
            }
            if(data["data"][i][13].includes("11:")){
                sueleven+=1;
            }
            if(data["data"][i][13].includes("12:")){
                sutwelve+=1;
            }
            if(data["data"][i][13].includes("13:")){
                suthirteen+=1;
            }
            if(data["data"][i][13].includes("14:")){
                sufourteen+=1;
            }
            if(data["data"][i][13].includes("15:")){
                sufifteen+=1;
            }
            if(data["data"][i][13].includes("16:")){
                susixteen+=1;
            }
            if(data["data"][i][13].includes("17:")){
                suseventeen+=1;
            }
            if(data["data"][i][13].includes("18:")){
                sueighteen+=1;
            }
            if(data["data"][i][13].includes("19:")){
                sunineteen+=1;
            }
            if(data["data"][i][13].includes("20:")){
                sutwenty+=1;
            }
            if(data["data"][i][13].includes("21:")){
                sutwentyone+=1;
            }
            if(data["data"][i][13].includes("22:")){
                sutwentytwo+=1;
            }
            if(data["data"][i][13].includes("23:")){
                sutwentythree+=1;
            }
        }
        
    }
    var obj = {
       table: []
    };

    var fs = require('fs');
    //write crimesperday
    obj.table.push({day:'MONDAY', y:mtot});
    obj.table.push({day:'TUESDAY', y:tutot});
    obj.table.push({day:'WEDNESDAY', y:wtot});
    obj.table.push({day:'THURSDAY', y:thtot});
    obj.table.push({day:'FRIDAY', y:ftot});
    obj.table.push({day:'SATURDAY', y:satot});
    obj.table.push({day:'SUNDAY', y:sutot});
    var json = JSON.stringify(obj);
    fs.writeFile('crimesperday.json', json);

    obj = {
       table: []
    };
    //write days
    obj.table.push({time:'0', y:mzero});
    obj.table.push({time:'1', y:mone});
    obj.table.push({time:'2', y:mtwo});
    obj.table.push({time:'3', y:mthree});
    obj.table.push({time:'4', y:mfour});
    obj.table.push({time:'5', y:mfive});
    obj.table.push({time:'6', y:msix});
    obj.table.push({time:'7', y:mseven});
    obj.table.push({time:'8', y:meight});
    obj.table.push({time:'9', y:mnine});
    obj.table.push({time:'10', y:mten});
    obj.table.push({time:'11', y:meleven});
    obj.table.push({time:'12', y:mtwelve});
    obj.table.push({time:'13', y:mthirteen});
    obj.table.push({time:'14', y:mfourteen});
    obj.table.push({time:'15', y:mfifteen});
    obj.table.push({time:'16', y:msixteen});
    obj.table.push({time:'17', y:mseventeen});
    obj.table.push({time:'18', y:meighteen});
    obj.table.push({time:'19', y:mnineteen});
    obj.table.push({time:'20', y:mtwenty});
    obj.table.push({time:'21', y:mtwentyone});
    obj.table.push({time:'22', y:mtwentytwo});
    obj.table.push({time:'23', y:mtwentythree});

    var json = JSON.stringify(obj);
    fs.writeFile('monday.json', json);


    obj = {
       table: []
    };
    //write days
    obj.table.push({time:'0', y:tuzero});
    obj.table.push({time:'1', y:tuone});
    obj.table.push({time:'2', y:tutwo});
    obj.table.push({time:'3', y:tuthree});
    obj.table.push({time:'4', y:tufour});
    obj.table.push({time:'5', y:tufive});
    obj.table.push({time:'6', y:tusix});
    obj.table.push({time:'7', y:tuseven});
    obj.table.push({time:'8', y:tueight});
    obj.table.push({time:'9', y:tunine});
    obj.table.push({time:'10', y:tuten});
    obj.table.push({time:'11', y:tueleven});
    obj.table.push({time:'12', y:tutwelve});
    obj.table.push({time:'13', y:tuthirteen});
    obj.table.push({time:'14', y:tufourteen});
    obj.table.push({time:'15', y:tufifteen});
    obj.table.push({time:'16', y:tusixteen});
    obj.table.push({time:'17', y:tuseventeen});
    obj.table.push({time:'18', y:tueighteen});
    obj.table.push({time:'19', y:tunineteen});
    obj.table.push({time:'20', y:tutwenty});
    obj.table.push({time:'21', y:tutwentyone});
    obj.table.push({time:'22', y:tutwentytwo});
    obj.table.push({time:'23', y:tutwentythree});
    var json = JSON.stringify(obj);
    fs.writeFile('tuesday.json', json);

    obj = {
       table: []
    };
    //write days
    obj.table.push({time:'0', y:wzero});
    obj.table.push({time:'1', y:wone});
    obj.table.push({time:'2', y:wtwo});
    obj.table.push({time:'3', y:wthree});
    obj.table.push({time:'4', y:wfour});
    obj.table.push({time:'5', y:wfive});
    obj.table.push({time:'6', y:wsix});
    obj.table.push({time:'7', y:wseven});
    obj.table.push({time:'8', y:weight});
    obj.table.push({time:'9', y:wnine});
    obj.table.push({time:'10', y:wten});
    obj.table.push({time:'11', y:weleven});
    obj.table.push({time:'12', y:wtwelve});
    obj.table.push({time:'13', y:wthirteen});
    obj.table.push({time:'14', y:wfourteen});
    obj.table.push({time:'15', y:wfifteen});
    obj.table.push({time:'16', y:wsixteen});
    obj.table.push({time:'17', y:wseventeen});
    obj.table.push({time:'18', y:weighteen});
    obj.table.push({time:'19', y:wnineteen});
    obj.table.push({time:'20', y:wtwenty});
    obj.table.push({time:'21', y:wtwentyone});
    obj.table.push({time:'22', y:wtwentytwo});
    obj.table.push({time:'23', y:wtwentythree});
    var json = JSON.stringify(obj);
    fs.writeFile('wednesday.json', json);

    obj = {
       table: []
    };
    //write days
    obj.table.push({time:'0', y:thzero});
    obj.table.push({time:'1', y:thone});
    obj.table.push({time:'2', y:thtwo});
    obj.table.push({time:'3', y:ththree});
    obj.table.push({time:'4', y:thfour});
    obj.table.push({time:'5', y:thfive});
    obj.table.push({time:'6', y:thsix});
    obj.table.push({time:'7', y:thseven});
    obj.table.push({time:'8', y:theight});
    obj.table.push({time:'9', y:thnine});
    obj.table.push({time:'10', y:thten});
    obj.table.push({time:'11', y:theleven});
    obj.table.push({time:'12', y:thtwelve});
    obj.table.push({time:'13', y:ththirteen});
    obj.table.push({time:'14', y:thfourteen});
    obj.table.push({time:'15', y:thfifteen});
    obj.table.push({time:'16', y:thsixteen});
    obj.table.push({time:'17', y:thseventeen});
    obj.table.push({time:'18', y:theighteen});
    obj.table.push({time:'19', y:thnineteen});
    obj.table.push({time:'20', y:thtwenty});
    obj.table.push({time:'21', y:thtwentyone});
    obj.table.push({time:'22', y:thtwentytwo});
    obj.table.push({time:'23', y:thtwentythree});
    var json = JSON.stringify(obj);
    fs.writeFile('thursday.json', json);

    obj = {
       table: []
    };
    //write days
    obj.table.push({time:'0', y:fzero});
    obj.table.push({time:'1', y:fone});
    obj.table.push({time:'2', y:ftwo});
    obj.table.push({time:'3', y:fthree});
    obj.table.push({time:'4', y:ffour});
    obj.table.push({time:'5', y:ffive});
    obj.table.push({time:'6', y:fsix});
    obj.table.push({time:'7', y:fseven});
    obj.table.push({time:'8', y:feight});
    obj.table.push({time:'9', y:fnine});
    obj.table.push({time:'10', y:ften});
    obj.table.push({time:'11', y:feleven});
    obj.table.push({time:'12', y:ftwelve});
    obj.table.push({time:'13', y:fthirteen});
    obj.table.push({time:'14', y:ffourteen});
    obj.table.push({time:'15', y:ffifteen});
    obj.table.push({time:'16', y:fsixteen});
    obj.table.push({time:'17', y:fseventeen});
    obj.table.push({time:'18', y:feighteen});
    obj.table.push({time:'19', y:fnineteen});
    obj.table.push({time:'20', y:ftwenty});
    obj.table.push({time:'21', y:ftwentyone});
    obj.table.push({time:'22', y:ftwentytwo});
    obj.table.push({time:'23', y:ftwentythree});
    var json = JSON.stringify(obj);
    fs.writeFile('friday.json', json);

    obj = {
       table: []
    };
    //write days
    obj.table.push({time:'0', y:sazero});
    obj.table.push({time:'1', y:saone});
    obj.table.push({time:'2', y:satwo});
    obj.table.push({time:'3', y:sathree});
    obj.table.push({time:'4', y:safour});
    obj.table.push({time:'5', y:safive});
    obj.table.push({time:'6', y:sasix});
    obj.table.push({time:'7', y:saseven});
    obj.table.push({time:'8', y:saeight});
    obj.table.push({time:'9', y:sanine});
    obj.table.push({time:'10', y:saten});
    obj.table.push({time:'11', y:saeleven});
    obj.table.push({time:'12', y:satwelve});
    obj.table.push({time:'13', y:sathirteen});
    obj.table.push({time:'14', y:safourteen});
    obj.table.push({time:'15', y:safifteen});
    obj.table.push({time:'16', y:sasixteen});
    obj.table.push({time:'17', y:saseventeen});
    obj.table.push({time:'18', y:saeighteen});
    obj.table.push({time:'19', y:sanineteen});
    obj.table.push({time:'20', y:satwenty});
    obj.table.push({time:'21', y:satwentyone});
    obj.table.push({time:'22', y:satwentytwo});
    obj.table.push({time:'23', y:satwentythree});
    var json = JSON.stringify(obj);
    fs.writeFile('saturday.json', json);

    obj = {
       table: []
    };
    //write days
    obj.table.push({time:'0', y:suzero});
    obj.table.push({time:'1', y:suone});
    obj.table.push({time:'2', y:sutwo});
    obj.table.push({time:'3', y:suthree});
    obj.table.push({time:'4', y:sufour});
    obj.table.push({time:'5', y:sufive});
    obj.table.push({time:'6', y:susix});
    obj.table.push({time:'7', y:suseven});
    obj.table.push({time:'8', y:sueight});
    obj.table.push({time:'9', y:sunine});
    obj.table.push({time:'10', y:suten});
    obj.table.push({time:'11', y:sueleven});
    obj.table.push({time:'12', y:sutwelve});
    obj.table.push({time:'13', y:suthirteen});
    obj.table.push({time:'14', y:sufourteen});
    obj.table.push({time:'15', y:sufifteen});
    obj.table.push({time:'16', y:susixteen});
    obj.table.push({time:'17', y:suseventeen});
    obj.table.push({time:'18', y:sueighteen});
    obj.table.push({time:'19', y:sunineteen});
    obj.table.push({time:'20', y:sutwenty});
    obj.table.push({time:'21', y:sutwentyone});
    obj.table.push({time:'22', y:sutwentytwo});
    obj.table.push({time:'23', y:sutwentythree});
    var json = JSON.stringify(obj);
    fs.writeFile('sunday.json', json);
}