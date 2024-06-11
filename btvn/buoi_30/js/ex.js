var e = document.querySelector(".progress-bar"),
  t = e.querySelector(".progress"),
  n = t.querySelector("span"),
  i = e.clientWidth,
  r = e.querySelector(".timer"),
  o = !1,
  s = 0,
  a = 0,
  d = 0;
e.addEventListener("mousedown", function (e) {
  if (1 === e.which) {
    //   console.log(e.offsetX, progressBarWidth);
    //Tính tỷ lệ phần trăm giữa vị trí click với chiều rộng
    (d = (100 * e.offsetX) / i),
      //Update CSS vào progress
      (t.style.width = `${d}%`),
      (a = d),
      (o = !0),
      (s = e.clientX);
    var n = (u.duration * d) / 100;
    (c.innerText = v(n)), (u.currentTime = n);
  }
}),
  n.addEventListener("mousedown", function (e) {
    e.stopPropagation(), 1 === e.which && ((o = !0), (s = e.clientX));
  }),
  document.addEventListener("mousemove", function (e) {
    if (o) {
      // console.log(space);
      (d = (100 * (e.clientX - s)) / i + a) < 0 && (d = 0),
        d > 100 && (d = 100),
        (t.style.width = `${d}%`);
      var n = (u.duration * d) / 100;
      c.innerText = v(n);
    }
  }),
  document.addEventListener("mouseup", function () {
    (o = !1), (a = d);
    var e = (u.duration * d) / 100;
    (c.innerText = v(e)), (u.currentTime = e);
  });
/*
Khi bấm chuột xuống vào chấm màu tím
- Lấy được clientX tại ví trí bấm chuột

Khi kéo chuột
- Lấy được clientX ở vị trí gần nhất (kéo đến đâu lấy vị trí ở đó)
- Tính khoảng cách kéo: clientX mới nhất - clientX ban đầu khi click
*/
var u = document.querySelector(".audio"),
  c = e.previousElementSibling,
  l = e.nextElementSibling,
  f = document.querySelector(".play-btn"),
  m = '<i class="fa-solid fa-play"></i>',
  v = function (e) {
    var t = Math.floor(e / 60);
    return (
      (e = Math.floor(e - 60 * t)),
      `${t < 10 ? "0" + t : t}:${e < 10 ? "0" + e : e}`
    );
  };
u.addEventListener("loadeddata", function () {
  //   console.log(audio.duration);
  l.innerText = v(u.duration);
}),
  f.addEventListener("click", function (e) {
    e.stopPropagation(),
      u.paused
        ? (u.play(), (this.innerHTML = '<i class="fa-solid fa-pause"></i>'))
        : (u.pause(), (this.innerHTML = m));
  }),
  u.addEventListener("timeupdate", function () {
    o || //   console.log("đang chạy: ", this.currentTime);
      ((c.innerText = v(this.currentTime)),
      //Tính tỷ lệ phần trăm
      (d = (this.currentTime / this.duration) * 100),
      //Update vào timer
      (t.style.width = `${d}%`));
  }),
  u.addEventListener("ended", function () {
    (d = 0), (u.currentTime = 0), (t.style.width = 0), (f.innerHTML = m);
  }),
  n.addEventListener("mousemove", function (e) {
    e.stopPropagation();
  }),
  e.addEventListener("mousemove", function (e) {
    (r.style.display = "block"), (r.style.left = `${e.offsetX}px`);
    var t = (100 * e.offsetX) / this.clientWidth,
      n = (u.duration * t) / 100;
    r.innerText = v(n);
  }),
  e.addEventListener("mouseout", function () {
    r.style.display = "none";
  });
//# sourceMappingURL=index.572545a4.js.map

//# sourceMappingURL=index.572545a4.js.map
