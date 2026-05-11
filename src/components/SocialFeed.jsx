import React from 'react';
import '../styles/SocialFeed.css';

const SocialFeed = () => {
  const feedItems = [
    { id: 1, img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop', url: 'https://www.americanapparel.com/us/en/?pixlee_album_photo_id=956681951' },
    // Updated image for Item 2
    { id: 2, img: 'https://images.ctfassets.net/gj7buis53jf6/1c6rQAzbo204SKpuZlED2u/ef03a0abedd1f4071f178917c44e20c4/aa_2026-fit-banner_5_crop-boxy.jpg', url: 'https://images.ctfassets.net/gj7buis53jf6/1c6rQAzbo204SKpuZlED2u/ef03a0abedd1f4071f178917c44e20c4/aa_2026-fit-banner_5_crop-boxy.jpg' },
    { id: 3, img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop', url: 'https://www.americanapparel.com/us/en/?pixlee_album_photo_id=953589875' },
    { id: 4, img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop', url: 'https://www.americanapparel.com/us/en/?pixlee_album_photo_id=952681270' },
    { id: 5, img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop', url: 'https://www.americanapparel.com/us/en/?pixlee_album_photo_id=951155893' },
    { id: 6, img: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1000&auto=format&fit=crop', url: 'https://www.americanapparel.com/us/en/?pixlee_album_photo_id=943832984' },
  ];

  return (
    <section className="social-feed-section">
      <h2 className="social-title">Inspiration from the Community</h2>
      
      <div className="social-grid">
        {feedItems.map((item) => (
          <a 
            key={item.id} 
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-tile"
          >
            <img src={item.img} alt={`Community Inspiration ${item.id}`} />
            
            {/* Instagram Icon Overlay */}
            <div className="insta-overlay-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>

            {/* Centered Play Button Overlay */}
            <div className="video-play-btn">
              <div className="triangle"></div>
            </div>
          </a>
        ))}
      </div>

      <div className="powered-tag">
        <span>POWERED BY EMPLIFI</span>
      </div>
    </section>
  );
};

export default SocialFeed;