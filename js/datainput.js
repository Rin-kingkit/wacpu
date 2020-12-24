var order = [
    {},
    {},
    {school:'花蓮縣科技輔導團',content:'資訊科技教學輔導團教師研習<br>物聯網教學專題顧問'},
    {school:'國立台灣師範大學 工業教育系 進修推廣部',content:'碩士班協同教學<br>冬夏令營學生物聯網及3D列印營隊<br>WEBDUINO官方認證中心講師認證課程'},
    {school:'國立台大大學 嚴慶齡工業中心',content:'WEBDUINO官方認證中心講師認證課程<br>冬夏令營學生物聯網及3D列印營隊'},
    {school:'花蓮縣科技輔導團',content:'資訊科技教學輔導團教師研習<br>物聯網教學專題顧問'},
    {school:'新北市科技輔導團',content:'資訊科技教學輔導團教師研習<br>物聯網教學專題顧問'},
    {school:'台東科技輔導團',content:'資訊科技教學輔導團教師研習<br>物聯網教學專題顧問'},
    {school:'台東長濱國中',content:'自造者中心顧問/專題顧問'},
    {school:'台東新生國中',content:'教師研習'},
    {school:'社團法人中華民國工業安全衛生協會',content:'物聯網與工業安全課程設計/課程執行'},
    {school:'國立台灣科學教育館',content:'Webduino物聯網運算思維，兒少冬夏令營3D列印 設計式思考 課程規劃與執行'},
    {school:'資策會',content:'新南向國際線上教學平台物聯網運算思維研習課程<br>iOT線上教學推廣系統課程執行<br>corelab.iiiedu.org.tw'},
    {school:'台北市立龍山國中',content:'新冠肺炎，物聯網檢測系統發表研習<br>Webduino物聯網教師研習'},
    {school:'新竹縣立六家高中',content:'自造者中心，物聯網教學及專題顧問'},
    {school:'靜心高中小學',content:'物聯網實驗室長期(三年)課程顧問／執行<br>專題應用社團、3D列印實作社團'},
    {school:'AIC美國新創中心',content:'物聯網應用與實務相關課程執行'},
    {school:'鶯歌陶瓷博物館',content:'3D列印結合陶藝冬夏下令營隊'},
    {school:'台北市紀州庵文學森林',content:'3D列印結合古蹟建築、文學創意'},
    {school:'台北私立立人國中小',content:'3D列印課程規劃長期合作夥伴'},
    {school:'新北市立永和國中',content:'自造者中心開幕<br>Webduino結合物聯網教學/教師研習'},
    {school:'鶯歌陶瓷博物館',content:'3D列印結合陶藝冬夏下令營隊'},
    {school:'台北市紀州庵文學森林',content:'3D列印結合古蹟建築、文學創意'},
    {school:'台北私立立人國中小',content:'3D列印課程規劃長期合作夥伴'},
    {school:'新北市立永和國中',content:'自造者中心開幕<br>Webduino結合物聯網教學/教師研習'},
    {school:'新北市立欽賢國中',content:'Webduino結合物聯網學生專案教學'},
    {school:'台北市立仁愛國中',content:'自造者中心開幕<br>Webduino結合物聯網教學/教師研習'},
    {school:'彰化縣二林高中',content:'自造者中心教學夥伴<br>Webduino結合物聯網教學/教師研習'},
    {school:'台中市石岡國中',content:'3D列印應用課程，教師研習/學生課程'},
    {school:'新竹市立博愛國中',content:'數理資優班營隊/運算思維、物聯網設計、大數據收集'},
    {school:'新竹縣立東興國小',content:'物聯網專題顧問／教師研習'},
    {school:'台中教育大學/台中市資訊教育輔導團',content:'Webduino結合物聯網教學及凱比機器人<br>教師研習'},
    {school:'台北市立內湖高中',content:'資通大賽專題顧問'},
    {school:'哈瑪星科技公司',content:'物聯網講師培訓'},
    {school:'高雄科技大學',content:'Webduino物聯網課程公播系統開幕'},
    {school:'屏東大學教育學院<br>屏東資訊教育輔導團',content:'Webduino結合物聯網教學<br>教師研習'},
    {school:'台中機器人教育聯盟學校',content:'Webduino智慧物網初體驗及基本概念教學'},
    {school:'旗山國中、杉林國中、大同國小、潮寮國中、慈惠醫專、中正高中、台中女中、六和高中、啟英高中、中興大學、永慶高中、宸恩實驗學校、復興高中',content:'Webduino相關教育研習、社團、營隊'},
]

//複製格式
var origin = $('.list-box:first')
function clone(){
    $('.list-box:last').after(origin.clone())
}
//設定20個
for(j=2;j<=37;j++){
    clone()
}

//更改內容
function input(){
    for(i=1;i<=37;i++){
        $('.list-box:nth-of-type('+i+') h6').html(order[i].school)
        $('.list-box:nth-of-type('+i+') p').html(order[i].content)
    }
}


input()