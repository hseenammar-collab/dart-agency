'use client';

import { useState } from 'react';
import { Users, Plus, Edit, Trash2, Save, X, Copy, Check } from 'lucide-react';

interface Client {
  id: string;
  name: string;
  code: string;
  spend: number;
  results: number;
  roas: number;
  campaigns: number;
  status: 'active' | 'paused';
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [copiedCode, setCopiedCode] = useState('');

  const [clients, setClients] = useState<Client[]>([
    { id: '1', name: 'زيتونة', code: 'ZAITONA2024', spend: 5200, results: 1450, roas: 6.2, campaigns: 4, status: 'active' },
    { id: '2', name: 'أبراج مدريد', code: 'MADRID2024', spend: 3800, results: 890, roas: 4.5, campaigns: 2, status: 'active' },
    { id: '3', name: 'صالون الجمال', code: 'BEAUTY2024', spend: 1200, results: 340, roas: 5.1, campaigns: 1, status: 'paused' },
  ]);

  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newClient, setNewClient] = useState<Partial<Client>>({
    name: '',
    spend: 0,
    results: 0,
    roas: 0,
    campaigns: 0,
    status: 'active'
  });

  const ADMIN_PASSWORD = 'dart2024admin';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('كلمة المرور غير صحيحة');
    }
  };

  const generateCode = (name: string) => {
    const cleanName = name.toUpperCase().replace(/\s/g, '').slice(0, 6);
    return `${cleanName}2024`;
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const addClient = () => {
    if (!newClient.name) return;

    const client: Client = {
      id: Date.now().toString(),
      name: newClient.name || '',
      code: generateCode(newClient.name || ''),
      spend: newClient.spend || 0,
      results: newClient.results || 0,
      roas: newClient.roas || 0,
      campaigns: newClient.campaigns || 0,
      status: newClient.status as 'active' | 'paused' || 'active'
    };

    setClients([...clients, client]);
    setNewClient({ name: '', spend: 0, results: 0, roas: 0, campaigns: 0, status: 'active' });
    setShowAddForm(false);
  };

  const updateClient = () => {
    if (!editingClient) return;
    setClients(clients.map(c => c.id === editingClient.id ? editingClient : c));
    setEditingClient(null);
  };

  const deleteClient = (id: string) => {
    if (confirm('هل أنت متأكد من حذف هذا العميل؟')) {
      setClients(clients.filter(c => c.id !== id));
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8">
          <h1 className="text-2xl font-bold text-center text-amber-400 mb-6">🔐 Admin Panel</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="كلمة المرور"
            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white mb-4 focus:border-amber-500 focus:outline-none"
          />
          <button className="w-full bg-amber-500 text-black font-bold py-4 rounded-xl">
            دخول
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-amber-400">🔐 Admin Panel</h1>
            <p className="text-gray-400">إدارة العملاء والبيانات</p>
          </div>
          <div className="flex gap-4">
            <a href="/dashboard" className="text-gray-400 hover:text-white">Dashboard</a>
            <a href="/" className="text-gray-400 hover:text-white">الموقع</a>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-amber-500/20 border border-amber-500/30 rounded-2xl p-6 text-center">
            <p className="text-4xl font-bold text-amber-400">{clients.length}</p>
            <p className="text-gray-400">إجمالي العملاء</p>
          </div>
          <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-6 text-center">
            <p className="text-4xl font-bold text-green-400">{clients.filter(c => c.status === 'active').length}</p>
            <p className="text-gray-400">عملاء نشطين</p>
          </div>
          <div className="bg-blue-500/20 border border-blue-500/30 rounded-2xl p-6 text-center">
            <p className="text-4xl font-bold text-blue-400">${clients.reduce((sum, c) => sum + c.spend, 0).toLocaleString()}</p>
            <p className="text-gray-400">إجمالي الإنفاق</p>
          </div>
        </div>

        {/* Add Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Users className="w-5 h-5 text-amber-400" />
            العملاء
          </h2>
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center gap-2 bg-amber-500 text-black font-bold px-4 py-2 rounded-xl"
          >
            <Plus className="w-5 h-5" />
            إضافة عميل
          </button>
        </div>

        {/* Add Form */}
        {showAddForm && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
            <h3 className="text-lg font-bold mb-4">إضافة عميل جديد</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="اسم العميل"
                value={newClient.name}
                onChange={(e) => setNewClient({...newClient, name: e.target.value})}
                className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:border-amber-500 focus:outline-none"
              />
              <input
                type="number"
                placeholder="الإنفاق"
                value={newClient.spend || ''}
                onChange={(e) => setNewClient({...newClient, spend: Number(e.target.value)})}
                className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:border-amber-500 focus:outline-none"
              />
              <input
                type="number"
                placeholder="النتائج"
                value={newClient.results || ''}
                onChange={(e) => setNewClient({...newClient, results: Number(e.target.value)})}
                className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:border-amber-500 focus:outline-none"
              />
            </div>
            <div className="flex gap-4">
              <button onClick={addClient} className="flex items-center gap-2 bg-green-500 text-black font-bold px-4 py-2 rounded-xl">
                <Save className="w-5 h-5" /> حفظ
              </button>
              <button onClick={() => setShowAddForm(false)} className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-xl">
                <X className="w-5 h-5" /> إلغاء
              </button>
            </div>
          </div>
        )}

        {/* Clients Table */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="text-right py-4 px-4 text-gray-400">العميل</th>
                <th className="text-right py-4 px-4 text-gray-400">الكود</th>
                <th className="text-right py-4 px-4 text-gray-400">الإنفاق</th>
                <th className="text-right py-4 px-4 text-gray-400">النتائج</th>
                <th className="text-right py-4 px-4 text-gray-400">ROAS</th>
                <th className="text-right py-4 px-4 text-gray-400">الحالة</th>
                <th className="text-right py-4 px-4 text-gray-400">إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="border-t border-white/5 hover:bg-white/5">
                  <td className="py-4 px-4 font-bold">{client.name}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <code className="bg-black/50 px-2 py-1 rounded text-amber-400">{client.code}</code>
                      <button onClick={() => copyCode(client.code)} className="text-gray-400 hover:text-white">
                        {copiedCode === client.code ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-4">${client.spend.toLocaleString()}</td>
                  <td className="py-4 px-4">{client.results.toLocaleString()}</td>
                  <td className="py-4 px-4 text-green-400">{client.roas}x</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      client.status === 'active'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-amber-500/20 text-amber-400'
                    }`}>
                      {client.status === 'active' ? 'نشط' : 'متوقف'}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <button onClick={() => setEditingClient(client)} className="text-blue-400 hover:text-blue-300">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button onClick={() => deleteClient(client.id)} className="text-red-400 hover:text-red-300">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
