// 'use client';
// import { useRouter } from 'next/navigation';

// export default function LogoutButton() {
//   const router = useRouter();

//   const handleLogout = () => {
//     localStorage.removeItem('isAdmin');
//     router.push('/login');
//   };

//   return (
//     <button
//       onClick={handleLogout}
//       className="fixed top-4 right-4 z-50 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded shadow transition-all duration-300"
//     >
//       Logout
//     </button>
//   );
// }

'use client';
import { useRouter } from 'next/navigation';
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    router.push('/login');
  };

  return (
    <div className="fixed top-4 right-4 z-50 group">
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        aria-label="Logout"
      >
        <ArrowRightEndOnRectangleIcon className="h-6 w-6" />
      </button>
      <div className="absolute top-full mt-2 right-0 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Logout
      </div>
    </div>
  );
}

