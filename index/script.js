 
    // Greeting functionality
    const greetBtn = document.getElementById("greetBtn");
    const greeting = document.getElementById("greeting");
    const usernameInput = document.getElementById("username");

    greetBtn.addEventListener("click", () => {
      const name = usernameInput.value.trim();
      if (name) {
        greeting.textContent = `Hello, ${name}`;
      } else {
        greeting.textContent = "Hello";
      }
    });

    // Box color functionality
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
      box.addEventListener("click", () => {
        const color = box.textContent.toLowerCase();
        box.style.backgroundColor = color;
        box.style.color = "white";
      });
    });
  