import { Trash2 } from 'lucide-react';
import { Entry } from '../types';

interface EntryListProps {
  entries: Entry[];
  onDelete: (id: string | number) => void;
}

export default function EntryList({ entries, onDelete }: EntryListProps) {
  const handleDelete = async (id: string | number) => {
    try {
      await onDelete(id);
      console.log('Deleted entry:', id);
    } catch (err: any) {
      const message = err.response?.data?.detail || err.message;
      console.error('Failed to delete entry:', message);
      alert(`Failed to delete entry: ${message}`);
    }
  };

  if (entries.length === 0) {
    return (
      <p className="text-slate-500 text-center py-8">
        No entries yet. Add your first page range above.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {entries.map((entry, index) => (
        <div
          key={entry.id ?? `entry-${index}`}
          className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200"
        >
          <div>
            <p className="font-medium text-slate-800">
              Pages {entry.fromPage} – {entry.toPage}
            </p>
            <p className="text-sm text-slate-500">{entry.bookName}</p>
          </div>
          <button
            onClick={() => handleDelete(entry.id)}
            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}


// import React from 'react';
// import { Trash2 } from 'lucide-react';
// import axios from 'axios';
// import { Entry } from '../types';

// interface EntryListProps {
//   entries: Entry[];
//   onDelete: (id: string) => void;
// }

// export default function EntryList({ entries, onDelete }: EntryListProps) {
//   const handleDelete = async (id: string) => {
//     try {
//       await axios.delete(`/api/entries/${id}/`);
//       onDelete(id);
//       console.log("Delete:", id);
      
//     } catch (err) {
//       console.error('Failed to delete entry:', err);
//     }
//   };

//   if (entries.length === 0) {
//     return (
//       <p className="text-slate-500 text-center py-8">
//         No entries yet. Add your first page range above.
//       </p>
//     );
//   }

//   return (
//     <div className="space-y-3">
//       {entries.map(entry => (
//         <div key={entry.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
//           <div>
//             <p className="font-medium text-slate-800">
//               Pages {entry.fromPage} - {entry.toPage}
//             </p>
//             <p className="text-sm text-slate-500">{entry.bookName}</p>
//           </div>
//           <button
//             onClick={() => handleDelete(entry.id)}
//             className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
//           >
//             <Trash2 className="w-4 h-4" />
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }
