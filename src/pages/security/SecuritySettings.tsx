import { useState } from 'react';
import { Lock, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const SecuritySettings = () => {
  const [password, setPassword] = useState('');

  const getStrength = () => {
    if (password.length === 0) return { label: 'Empty', color: 'bg-gray-200', width: '0%' };
    if (password.length < 6) return { label: 'Weak', color: 'bg-red-500', width: '30%' };
    if (password.length < 10) return { label: 'Medium', color: 'bg-yellow-500', width: '60%' };
    return { label: 'Strong', color: 'bg-green-500', width: '100%' };
  };

  const strength = getStrength();

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 mt-10">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Lock className="text-blue-600" /> Security Settings
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
          <input 
            type="password" 
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter new password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Password Strength Meter */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>Password Strength: <span className="font-bold">{strength.label}</span></span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div className={`h-full transition-all duration-300 ${strength.color}`} style={{ width: strength.width }}></div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-xl flex gap-3">
          <ShieldAlert className="text-blue-600 shrink-0" />
          <p className="text-sm text-blue-800">Two-factor authentication (2FA) is recommended to keep your account safe from unauthorized access.</p>
        </div>

        <button className="w-full bg-blue-600 text-white p-3 rounded-xl font-bold hover:bg-blue-700 flex items-center justify-center gap-2">
          <CheckCircle2 size={20} /> Update Security Settings
        </button>
      </div>
    </div>
  );
};
