import React from 'react';
import { Users, AlertCircle } from 'lucide-react';
import { Group } from '../types';
interface GroupViewProps {
  group?: Group;
  currentUserTr?: string;
}
export default function GroupView({
  group,
  currentUserTr
}: GroupViewProps) {
  if (!group) {
    return <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Users className="w-5 h-5 text-slate-600" />
          <h2 className="text-lg font-semibold text-slate-800">My Group</h2>
        </div>
        <p className="text-slate-500 text-sm">No group assigned yet.</p>
      </div>;
  }
  return <>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Users className="w-5 h-5 text-slate-600" />
          <h2 className="text-lg font-semibold text-slate-800">My Group</h2>
        </div>
        <div className="mb-4">
          <p className="text-xs text-slate-500 mb-2">Book</p>
          <p className="font-medium text-slate-800">{group.bookName}</p>
        </div>
        <div className="mb-4">
          <p className="text-xs text-slate-500 mb-2">Shared Pages</p>
          <div className="flex flex-wrap gap-2">
            {group.sharedPages.map((range, idx) => <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-md">
                {range.from}-{range.to}
              </span>)}
          </div>
        </div>
        <div>
          <p className="text-xs text-slate-500 mb-2">Group Members</p>
          <div className="space-y-2">
            {group.members.map(member => <div key={member.trNumber} className={`p-3 rounded-lg ${member.trNumber === currentUserTr ? 'bg-slate-100 border border-slate-300' : 'bg-slate-50'}`}>
                <p className="font-medium text-slate-800 text-sm">
                  {member.name}
                </p>
                <p className="text-xs text-slate-500">{member.trNumber}</p>
              </div>)}
          </div>
        </div>
      </div>
      <div className="bg-amber-50 rounded-xl shadow-sm border border-amber-200 p-6">
        <div className="flex items-center space-x-2 mb-3">
          <AlertCircle className="w-5 h-5 text-amber-600" />
          <h3 className="text-sm font-semibold text-amber-800">
            Pending Pages
          </h3>
        </div>
        <p className="text-sm text-amber-700">
          Pages not covered by your group will appear here once calculated.
        </p>
      </div>
    </>;
}