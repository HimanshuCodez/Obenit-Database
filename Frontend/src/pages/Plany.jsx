import React from 'react';
import useAuthStore from '../store/authStore';

const Plany = () => {
  const user = useAuthStore((state) => state.user);

  const purchasedEmails = ['febeulfashion@gmail.com', 'himanshugaur055@gmail.com'];

  const plan = {
    name: 'KVM Stater',
    discount: '30% OFF',
    price: '₹1,850',
    renew: 'Renews at ₹739.00/mo for 2 years. Cancel anytime.',
    features: ['1 vCPU core', '1 GB RAM', '10 GB NVMe disk', '2 TB bandwidth'],
  };

  if (user && purchasedEmails.includes(user.email)) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#f0fff4', border: '2px solid #4caf50', borderRadius: '10px', margin: '2rem' }}>
        <h1 style={{ color: '#4caf50', marginBottom: '1rem' }}>Plan Purchased Successfully!</h1>
        <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #ddd' }}>
          <h2>{plan.name}</h2>
          <p style={{ color: 'green', fontWeight: 'bold' }}>{plan.discount}</p>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{plan.price}</p>
          <p style={{ color: '#555' }}>{plan.renew}</p>
          <ul style={{ listStyleType: 'none', padding: 0, margin: '1rem 0' }}>
            {plan.features.map((feature, index) => (
              <li key={index} style={{ margin: '0.5rem 0' }}>{feature}</li>
            ))}
          </ul>
        </div>
        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#e8f5e9', borderRadius: '8px' }}>
          <p>Your hosting URL is: <a href="https://obenit@hosting42ihrkejfkejfe" target="_blank" rel="noopener noreferrer">https://obenit@hosting42ihrkejfkejfe</a></p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Choose Your Plan</h1>
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1.5rem', maxWidth: '400px', margin: '0 auto' }}>
        <h2>{plan.name}</h2>
        <p style={{ color: 'green', fontWeight: 'bold' }}>{plan.discount}</p>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{plan.price}</p>
        <p style={{ color: '#555' }}>{plan.renew}</p>
        <ul style={{ listStyleType: 'none', padding: 0, margin: '1rem 0' }}>
          {plan.features.map((feature, index) => (
            <li key={index} style={{ margin: '0.5rem 0' }}>{feature}</li>
          ))}
        </ul>
        <button style={{ backgroundColor: '#4caf50', color: 'white', padding: '0.75rem 1.5rem', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Plany;
