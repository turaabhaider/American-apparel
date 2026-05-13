import React from 'react';
import { useNavigate } from 'react-router-dom';

const FavouritesPage = ({ favourites = [] }) => {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <button style={styles.backBtn} onClick={() => navigate(-1)}>← Back</button>
        <h1 style={styles.title}>MY FAVOURITES</h1>
        <span style={styles.count}>{favourites.length} item{favourites.length !== 1 ? 's' : ''}</span>
      </div>

      <hr style={styles.divider} />

      {favourites.length === 0 ? (
        <div style={styles.empty}>
          <div style={styles.emptyIcon}>♡</div>
          <p style={styles.emptyText}>You haven't saved any favourites yet.</p>
          <button style={styles.shopBtn} onClick={() => navigate('/')}>
            SHOP NOW
          </button>
        </div>
      ) : (
        <div style={styles.grid}>
          {favourites.map((item, i) => (
            <div key={i} style={styles.card}>
              <div style={styles.cardImg}>
                {item.image
                  ? <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  : <div style={styles.cardPlaceholder}>No Image</div>
                }
              </div>
              <div style={styles.cardBody}>
                <p style={styles.cardName}>{item.name}</p>
                <p style={styles.cardPrice}>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    background: '#fff',
    color: '#000',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    paddingTop: '80px',
    paddingBottom: '60px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '30px 40px 20px',
  },
  backBtn: {
    background: 'transparent',
    border: '1.5px solid #000',
    padding: '7px 16px',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '1px',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  title: {
    fontSize: '22px',
    fontWeight: '900',
    letterSpacing: '-0.5px',
    margin: 0,
  },
  count: {
    fontSize: '13px',
    color: '#888',
    minWidth: '60px',
    textAlign: 'right',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #e5e5e5',
    margin: '0 40px',
  },
  empty: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    padding: '100px 20px',
  },
  emptyIcon: {
    fontSize: '60px',
    color: '#ccc',
    lineHeight: 1,
  },
  emptyText: {
    fontSize: '15px',
    color: '#888',
    margin: 0,
  },
  shopBtn: {
    background: '#000',
    color: '#fff',
    border: 'none',
    padding: '12px 36px',
    fontSize: '12px',
    fontWeight: '800',
    letterSpacing: '2px',
    cursor: 'pointer',
    marginTop: '8px',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '24px',
    padding: '30px 40px',
  },
  card: {
    border: '1px solid #e5e5e5',
    cursor: 'pointer',
  },
  cardImg: {
    height: '260px',
    background: '#f5f5f5',
    overflow: 'hidden',
  },
  cardPlaceholder: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#aaa',
    fontSize: '13px',
  },
  cardBody: { padding: '12px' },
  cardName: {
    fontSize: '13px',
    fontWeight: '700',
    margin: '0 0 4px',
    textTransform: 'uppercase',
    letterSpacing: '0.3px',
  },
  cardPrice: {
    fontSize: '13px',
    color: '#555',
    margin: 0,
  },
};

export default FavouritesPage;