'use client';

import { useEffect, useRef, useState } from 'react';
import css from './Filters.module.css';

const options = [
  { value: 'a-z', label: 'A to Z' },
  { value: 'z-a', label: 'Z to A' },
  { value: 'less', label: 'Less than 10$' },
  { value: 'greater', label: 'Greater than 10$' },
  { value: 'popular', label: 'Popular' },
  { value: 'not-popular', label: 'Not popular' },
  { value: 'all', label: 'Show all' },
] as const;

export default function Filters() {
  const [selected, setSelected] = useState('a-z');
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const selectedOption = options.find(option => option.value === selected);
  return (
    <div className={css.filters}>
      <p className={css.title}>Filters</p>

      <div className={css.selectWrapper} ref={selectRef}>
        <button
          type="button"
          className={css.select}
          onClick={() => setIsOpen(prev => !prev)}
          aria-expanded={isOpen}
        >
          {selectedOption?.label}

          <svg
            className={`${css.chevronIcon} ${isOpen ? css.rotated : ''}`}
            width="20"
            height="20"
          >
            <use href="/icons.svg#icon-chevron-down" />
          </svg>
        </button>

        <ul className={`${css.options} ${isOpen ? css.open : ''}`}>
          {options.map(option => (
            <li key={option.value}>
              <button
                type="button"
                className={`${css.option} ${
                  selected === option.value ? css.active : ''
                }`}
                onClick={() => {
                  setSelected(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// 'use client';

// import { useEffect, useState } from 'react';
// import { getPsychologists, Psychologist } from '@/src/lib/firebase/db';

// export default function PsychologistsPage() {
//   const [psychologists, setPsychologists] = useState<Psychologist[]>([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>('');

//   // Fetch from Realtime Database on load
//   useEffect(() => {
//     getPsychologists()
//       .then(setPsychologists)
//       .catch(err => console.error('Error fetching data:', err));
//   }, []);

//   // 1. Filter psychologists by name
//   const filteredPsychologists = psychologists.filter(psych =>
//     psych.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // 2. Sort the filtered psychologists list by price
//   const finalPsychologists = [...filteredPsychologists].sort((a, b) => {
//     if (sortOrder === 'asc') return a.price - b.price;
//     if (sortOrder === 'desc') return b.price - a.price;
//     return 0; // Maintain original database order
//   });

//   return (
//     <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
//       <h1>Psychologists Directory</h1>

//       {/* Filter and Sort UI Controls */}
//       <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
//         <input
//           type="text"
//           placeholder="Search by name..."
//           value={searchQuery}
//           onChange={e => setSearchQuery(e.target.value)}
//           style={{
//             padding: '10px',
//             flex: 1,
//             borderRadius: '5px',
//             border: '1px solid #ccc',
//           }}
//         />

//         <select
//           value={sortOrder}
//           onChange={e => setSortOrder(e.target.value as 'asc' | 'desc' | '')}
//           style={{
//             padding: '10px',
//             borderRadius: '5px',
//             border: '1px solid #ccc',
//           }}
//         >
//           <option value="">Default Order</option>
//           <option value="asc">Price: Low to High</option>
//           <option value="desc">Price: High to Low</option>
//         </select>
//       </div>

//       {/* Card Grid */}
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
//           gap: '20px',
//         }}
//       >
//         {finalPsychologists.map(psych => (
//           <div
//             key={psych.id}
//             style={{
//               border: '1px solid #eaeaea',
//               padding: '20px',
//               borderRadius: '8px',
//               boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
//             }}
//           >
//             <h3>{psych.name}</h3>
//             <p>
//               <strong>Specialization:</strong> {psych.specialization}
//             </p>
//             <p>
//               <strong>Price:</strong> {psych.price} €/hr
//             </p>
//           </div>
//         ))}
//         {finalPsychologists.length === 0 && (
//           <p>No psychologists found matching your criteria.</p>
//         )}
//       </div>
//     </div>
//   );
// }
