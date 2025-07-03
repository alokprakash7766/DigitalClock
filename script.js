const hrs = document.getElementById("hrs");
    const mint = document.getElementById("mint");
    const sec = document.getElementById("sec");
    const dateDisplay = document.getElementById("dateDisplay");

    function updateClock() {
      const now = new Date();
      let h = now.getHours();
      let m = now.getMinutes();
      let s = now.getSeconds();

      hrs.textContent = h < 10 ? "0" + h : h;
      mint.textContent = m < 10 ? "0" + m : m;
      sec.textContent = s < 10 ? "0" + s : s;

      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      const day = days[now.getDay()];
      const date = now.getDate();
      const month = months[now.getMonth()];
      const year = now.getFullYear();

      dateDisplay.textContent = `${day}, ${date} ${month} ${year}`;
    }

    setInterval(updateClock, 1000);
    updateClock();