import { useState } from 'react';
import { Wallet, ArrowUpRight, ArrowDownLeft, History } from 'lucide-react';

export const PaymentSection = () => {
  const [balance] = useState(25000); // Sample Balance
  
  const transactions = [
    { id: 1, type: 'Deposit', amount: 5000, date: '2026-04-09', status: 'Completed' },
    { id: 2, type: 'Investment', amount: 12000, date: '2026-04-10', status: 'Pending' },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 font-sans">Financial Wallet</h2>
      
      {/* Wallet Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-2xl text-white shadow-lg">
          <div className="flex items-center gap-2 mb-4 opacity-80">
            <Wallet size={20} />
            <span>Total Balance</span>
          </div>
          <h3 className="text-3xl font-bold">${balance.toLocaleString()}</h3>
        </div>
        
        <button onClick={() => alert('Deposit Mockup')} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
          <div className="bg-green-100 p-3 rounded-full text-green-600"><ArrowDownLeft size={24} /></div>
          <span className="font-semibold text-gray-700">Deposit Money</span>
        </button>

        <button onClick={() => alert('Withdraw Mockup')} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
          <div className="bg-red-100 p-3 rounded-full text-red-600"><ArrowUpRight size={24} /></div>
          <span className="font-semibold text-gray-700">Withdraw Funds</span>
        </button>
      </div>

      {/* Transaction History Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center gap-2 font-bold text-gray-800">
          <History size={20} /> Transaction History
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Type</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Amount</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {transactions.map((t) => (
              <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium">{t.type}</td>
                <td className="px-6 py-4 text-blue-600 font-bold">${t.amount}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${t.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {t.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-500 text-sm">{t.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
