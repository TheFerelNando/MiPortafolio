export function lazyLoadImages() {
    document.addEventListener("DOMContentLoaded", function() { //Lazy-loading images
      let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  
      if ("IntersectionObserver" in window) { //Checking if the browser supports IntersectionObserver
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              let lazyImage = entry.target; //If the image is in the viewport, the src attribute is set to the value of the data-src attribute
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove("lazy");
              lazyImageObserver.unobserve(lazyImage); //The image is removed from the observer
            }
          });
        });
  
        lazyImages.forEach(function(lazyImage) { //Each image is added to the observer
          lazyImageObserver.observe(lazyImage);
        });
      }
    });
  }