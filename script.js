const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
const textElement = document.getElementById("typed-text");
const words = ["Developer", "Tech Enthusiast", "Problem Solver"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    textElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    textElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 150;

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    typeSpeed = 2000; // Pause at the end of word
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
}

// Initial Call
document.addEventListener("DOMContentLoaded", () => {
  if (textElement) type();
});
const backToTopBtn = document.getElementById("backToTop");

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// Data Object to store details for each competition
const eventData = {
    comp1: {
        title: "Innovation Challenge 2025",
        date: "March 15, 2025",
        location: "Algiers, Algeria",
        details: "Detailed explanation of the competition goes here. Talk about the problem you solved, the hardware used, and how your team worked together.",
        result: "1st Place Winner"
    }
    // Add comp2, comp3, etc. here
};

function openModal(id) {
    const data = eventData[id];
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <h2 style="color:#38bdf8">${data.title}</h2>
        <p style="color:#94a3b8; margin: 10px 0;"><strong>Date:</strong> ${data.date} | <strong>Location:</strong> ${data.location}</p>
        <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin:20px 0;">
        <p style="line-height:1.6">${data.details}</p>
        <div style="margin-top:20px; font-weight:bold; color:#38bdf8">Awarded: ${data.result}</div>
    `;
    document.getElementById('eventModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('eventModal').style.display = 'none';
}

function showImage(src) {
    const lightbox = document.getElementById('imageLightbox');
    const img = document.getElementById('lightboxImg');
    img.src = src;
    lightbox.style.display = 'flex';
}
function openModal(id) {
    const d = eventData[id];
    const modal = document.getElementById('eventModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h2 style="color:#38bdf8">${d.title}</h2>
        <p style="margin:10px 0; font-size: 14px;">${d.date} | ${d.loc}</p>
        <p style="color:#94a3b8; line-height:1.6">${d.desc}</p>
        <p style="margin-top:20px; font-weight:bold; color:#38bdf8">Award: ${d.res}</p>
    `;
    modal.style.display = 'block';
}

function closeModal() { 
    document.getElementById('eventModal').style.display = 'none'; 
}

// THIS IS THE CRITICAL FUNCTION
function showImage(src) {
    console.log("Opening image: " + src); // Check your browser console (F12)
    const lb = document.getElementById('imageLightbox');
    const lbImg = document.getElementById('lightboxImg');
    
    lbImg.src = src;
    lb.style.display = 'flex'; // Use flex to center the image
}
function openModal(id) {
    const d = eventData[id];
    const modal = document.getElementById('eventModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h2 style="color:#38bdf8; margin-bottom: 10px;">${d.title}</h2>
        <p style="color:#94a3b8; font-size: 14px; margin-bottom: 20px;">
            <i class="fa-solid fa-calendar"></i> ${d.date} | <i class="fa-solid fa-location-dot"></i> ${d.loc}
        </p>
        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; line-height: 1.6;">
            ${d.desc}
        </div>
        <p style="margin-top:20px; font-weight:bold; color:#38bdf8">
            <i class="fa-solid fa-trophy"></i> Result: ${d.res}
        </p>
    `;
    modal.style.display = 'block';
}

function showImage(src) {
    const lb = document.getElementById('imageLightbox');
    const lbImg = document.getElementById('lightboxImg');
    lbImg.src = src;
    lb.style.display = 'flex';
}
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('analysisChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Performance Index',
                data: [65, 78, 72, 85, 82, 90],
                borderColor: '#0366d6',
                tension: 0.4,
                fill: true,
                backgroundColor: 'rgba(3, 102, 214, 0.1)'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' }
            }
        }
    });
});
function filterEvents(category, button) {
    // 1. Update button colors
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // 2. Filter the cards
    const cards = document.querySelectorAll('.event-card');
    
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = "block"; // Change to "flex" if your cards use flexbox
        } else {
            card.style.display = "none";
        }
    });
}
