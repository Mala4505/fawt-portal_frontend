import { Group } from '../types/index';

export default function GroupCard({ group }: { group: Group }) {
  return (
    <div className="border rounded-lg p-4 space-y-2">
      {/* <h3 className="font-semibold text-slate-700">{group.name}</h3> */}
      <h3 className="font-semibold text-slate-700">{group.bookName}</h3>
      <ul className="list-disc list-inside text-slate-600">
        {group.members.map(m => (
          <li key={group.id}>
            {m.name} ({m.trNumber})
          </li>
        ))}
      </ul>
    </div>
  );
}
