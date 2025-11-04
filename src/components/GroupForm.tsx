import { useState } from 'react';
import axios from 'axios';
import { User, Group } from '../types';

export default function GroupForm({
  students,
  onCreated
}: {
  students: User[];
  onCreated: (group: Group) => void;
}) {
  const [name, setName] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const toggleSelect = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || selectedIds.length === 0) return;

    setLoading(true);
    const res = await axios.post('/api/groups/', {
      name,
      member_ids: selectedIds
    });
    onCreated(res.data);
    setName('');
    setSelectedIds([]);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Group name"
        className="w-full px-4 py-2 border border-slate-300 rounded-lg"
      />
      <div className="max-h-48 overflow-y-auto border rounded p-2 space-y-1">
        {students.map(s => (
          <label key={s.id} className="flex items-center gap-2 text-slate-600">
            <input
              type="checkbox"
              checked={selectedIds.includes(s.id)}
              onChange={() => toggleSelect(s.id)}
            />
            {s.name} ({s.trNumber})
          </label>
        ))}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700"
      >
        {loading ? 'Creating...' : 'Create Group'}
      </button>
    </form>
  );
}
