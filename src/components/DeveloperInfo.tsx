
import { Mail, Phone } from 'lucide-react';

export function DeveloperInfo() {
  const developers = [
    {
      name: 'K. SRIVATHSAAN',
      email: 'srivathsaank@gmail.com',
      phone: '8072640538'
    },
    {
      name: 'A. KRISHNARAJ',
      email: 'krishna00042004@gmail.com',
      phone: '9940058987'
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900/50 py-8 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-lg font-semibold mb-4 text-center">Developed By</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {developers.map((dev, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm flex flex-col">
              <span className="font-medium text-lg mb-2">{dev.name}</span>
              
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-green-600" />
                  <a href={`mailto:${dev.email}`} className="hover:text-green-600 transition-colors">
                    {dev.email}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-green-600" />
                  <a href={`tel:${dev.phone}`} className="hover:text-green-600 transition-colors">
                    {dev.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
