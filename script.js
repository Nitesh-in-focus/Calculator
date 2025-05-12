const display = document.getElementById("display");
      let isDark = true;

      function appendValue(val) {
        display.value += val;
      }

      function calculate() {
        try {
          display.value = eval(display.value);
        } catch (e) {
          display.value = "Error";
        }
      }

      function clearDisplay() {
        display.value = "";
      }

      function toggleMode(mode) {
        document.getElementById("fin").classList.add("active");
      }

      function financialFV() {
        let p = parseFloat(prompt("Principal amount:"));
        let r = parseFloat(prompt("Annual interest rate (%):")) / 100;
        let t = parseFloat(prompt("Time in years:"));
        display.value = (p * Math.pow(1 + r, t)).toFixed(2);
      }

      function financialPV() {
        let f = parseFloat(prompt("Future value:"));
        let r = parseFloat(prompt("Annual interest rate (%):")) / 100;
        let t = parseFloat(prompt("Time in years:"));
        display.value = (f / Math.pow(1 + r, t)).toFixed(2);
      }

      function financialEMI() {
        let p = parseFloat(prompt("Loan amount:"));
        let r = parseFloat(prompt("Annual interest rate (%):")) / 12 / 100;
        let n = parseFloat(prompt("Number of months:"));
        let emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        display.value = emi.toFixed(2);
      }

      display.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          calculate();
          e.preventDefault();
        }
      });

      function toggleTheme() {
        if (isDark) {
          document.body.style.backgroundColor = "var(--bg-light)";
          document.body.style.color = "var(--text-dark)";
          document.querySelectorAll("button").forEach((btn) => {
            btn.style.backgroundColor = "var(--button-light)";
            btn.style.color = "var(--text-dark)";
          });
          display.style.background = "#fff";
          display.style.color = "var(--text-dark)";
        } else {
          document.body.style.backgroundColor = "var(--bg-dark)";
          document.body.style.color = "var(--text-light)";
          document.querySelectorAll("button").forEach((btn) => {
            btn.style.backgroundColor = "var(--button-dark)";
            btn.style.color = "var(--text-light)";
          });
          display.style.background = "#121c30";
          display.style.color = "var(--text-light)";
        }
        isDark = !isDark;
      }