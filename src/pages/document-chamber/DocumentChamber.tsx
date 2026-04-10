import { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { ShieldCheck, FileText, PenTool } from 'lucide-react';

export const DocumentChamber = () => {
  const [showSignPad, setShowSignPad] = useState(false);
  const sigCanvas = useRef<any>({});

  const clear = () => sigCanvas.current.clear();
  const save = () => {
    alert('Document Signed Successfully!');
    setShowSignPad(false);
  };

  const documents = [
    { id: 1, name: 'Startup_Equity_Agreement.pdf', status: 'Pending' },
    { id: 2, name: 'Investment_Term_Sheet.pdf', status: 'Pending' },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <ShieldCheck className="text-blue-600" /> Document Chamber
        </h2>
        <button onClick={() => setShowSignPad(true)} className="bg-blue-600 text-white px-5 py-2.5 rounded-lg flex items-center gap-2">
          <PenTool size={20} /> Sign New Document
        </button>
      </div>

      {showSignPad && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">E-Signature Pad</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
              <SignatureCanvas 
                ref={sigCanvas}
                penColor='black'
                canvasProps={{width: 400, height: 200, className: 'sigCanvas'}} 
              />
            </div>
            <div className="flex justify-between mt-6">
              <button onClick={() => setShowSignPad(false)} className="text-gray-500 font-medium">Cancel</button>
              <div className="flex gap-3">
                <button onClick={clear} className="px-4 py-2 border border-gray-300 rounded-lg text-sm">Clear</button>
                <button onClick={save} className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm">Save Signature</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {documents.map((doc) => (
          <div key={doc.id} className="flex justify-between items-center p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <FileText className="text-blue-500" size={20} />
              <span className="font-medium text-gray-800">{doc.name}</span>
            </div>
            <button onClick={() => setShowSignPad(true)} className="text-blue-600 font-semibold hover:underline">Sign Document</button>
          </div>
        ))}
      </div>
    </div>
  );
};
