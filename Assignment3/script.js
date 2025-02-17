document.addEventListener("DOMContentLoaded", async () => {
    const breedInput = document.getElementById("breed");
    const breedList = document.getElementById("breeds");
    const showImagesBtn = document.getElementById("show-images-btn");
    const message = document.getElementById("message");
    const dogImage = document.getElementById("dog-image");
  

    async function populateBreeds() {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
          const option = document.createElement("option");
          option.value = breed;
          breedList.appendChild(option);
        });
      } catch (error) {
        message.textContent = "Failed to load breeds. Try it AGain Later.";
      }
    }
  
    populateBreeds();
  
    let intervalId = null;
  
    showImagesBtn.addEventListener("click", async () => {
      const breed = breedInput.value.trim().toLowerCase();
  
    
      message.textContent = "";
      dogImage.style.display = "none";
  
      if (!breed) {
        message.textContent = "Please select a breed.";
        return;
      }
  
      
      if (intervalId) clearInterval(intervalId);
  
      try {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        const data = await response.json();
  
        if (data.status === "error") {
          message.textContent = "No such breed.";
          return;
        }
  
        dogImage.style.display = "block";
        dogImage.src = data.message;
  
        
        intervalId = setInterval(async () => {
          const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
          const imgData = await res.json();
          dogImage.src = imgData.message;
        }, 5000);
      } catch (error) {
        message.textContent = "Error fetching images.";
      }
    });
  });
  