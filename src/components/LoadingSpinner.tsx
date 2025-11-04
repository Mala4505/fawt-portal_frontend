export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-slate-800"></div>
    </div>
  );
}
// export default function LoadingSpinner() {
//   return (
//     <div className="flex justify-center items-center py-12">
//       <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-slate-600"></div>
//     </div>
//   );
// }
