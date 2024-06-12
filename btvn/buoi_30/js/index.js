var btn = document.querySelector(".btn");
var notification = document.querySelector(".notification");
var result = document.querySelector(".result");

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent =
  SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var recognition = new SpeechRecognition();

recognition.lang = "vi-VN";
recognition.continuous = false;
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var links = {
  youtube: "https://youtube.com",
  facebook: "https://facebook.com",
  google: "https://google.com",
  video: "https://www.youtube.com/results?search_query=",
  "mở video": "https://www.youtube.com/results?search_query=",
  "xem video": "https://www.youtube.com/results?search_query=",
  "bài hát": "https://zingmp3.vn/tim-kiem/tat-ca?q=",
  "mở bài hát": "https://zingmp3.vn/tim-kiem/tat-ca?q=",
  "nghe bài hát": "https://zingmp3.vn/tim-kiem/tat-ca?q=",
  "đường đi": "https://www.google.com/maps/search/",
  "chỉ đường": "https://www.google.com/maps/search/",
  "chỉ đường tới": "https://www.google.com/maps/search/",
  tới: "https://www.google.com/maps/search/",
};

btn.addEventListener("click", function () {
  recognition.start();
  notification.classList.remove("success");
  notification.innerHTML = "Hãy nói nội dung bạn muốn";
});

recognition.onresult = (event) => {
  var text = event.results[0][0].transcript;
  result.style.border = "1px solid green";

  var keys = Object.keys(links);
  keys.forEach(function (key) {
    if (text.toLowerCase().indexOf(key) !== -1) {
      var ulr = links[key];
      var searchText = text
        .slice(text.toLowerCase().indexOf(key) + key.length)
        .trim();
      searchText = searchText.split(" ").join("+");
      window.open(ulr + searchText, "_blank");
      result.innerHTML = `${text}`;
    }
  });
};

recognition.onspeechend = () => {
  recognition.stop();
  notification.classList.add("success");
  notification.innerHTML = "Đã nói xong. Hy vọng kết quả như ý bạn";
};
