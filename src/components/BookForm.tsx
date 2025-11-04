import { useState } from 'react';
import axios from 'axios';

export default function BookForm({ onAdd }: { onAdd: (name: string) => void }) {
  const [name, setName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const res = await axios.post('/api/books/', { name });
    onAdd(res.data.name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="New book name"
        className="w-full px-4 py-2 border border-slate-300 rounded-lg"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700"
      >
        Add Book
      </button>
    </form>
  );
}
