
import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Target, 
  ClipboardCheck, 
  Presentation, 
  MapPin, 
  Globe, 
  Monitor, 
  ChevronDown, 
  FileText, 
  BarChart3, 
  ArrowRight,
  Info,
  CheckCircle2,
  Calendar,
  ExternalLink,
  Search,
  School,
  TrendingUp,
  Award,
  Layers
} from 'lucide-react';

// --- Data Constants ---
const DISTINGUISHED_SCHOOLS = [
  { id: 1, name: "الابتدائية الثالثة والسبعون", level: "ابتدائي", sector: "أحد والعوالي" },
  { id: 2, name: "الابتدائية الثانية والثمانون", level: "ابتدائي", sector: "أحد والعوالي" },
  { id: 3, name: "الابتدائية التاسعة والسبعون", level: "ابتدائي", sector: "أحد والعوالي" },
  { id: 4, name: "الابتدائية الرابعة لتحفيظ القرآن", level: "ابتدائي", sector: "أحد والعوالي" },
  { id: 5, name: "الابتدائية الخامسة لتحفيظ القرآن", level: "ابتدائي", sector: "أحد والعوالي" },
  { id: 6, name: "الثانوية الحادية عشرة", level: "ثانوي", sector: "أحد والعوالي" },
  { id: 7, name: "الثانوية السابعة والأربعون", level: "ثانوي", sector: "أحد والعوالي" },
  { id: 8, name: "الثانوية الخامسة والأربعون", level: "ثانوي", sector: "أحد والعوالي" },
  { id: 9, name: "الثانوية الثامنة والعشرون", level: "ثانوي", sector: "أحد والعوالي" },
  { id: 16, name: "المتوسطة التاسعة عشر", level: "متوسط", sector: "أحد والعوالي" },
  { id: 17, name: "المتوسطة السبعون", level: "متوسط", sector: "أحد والعوالي" },
];

const PROMISING_SCHOOLS = [
  { name: "الابتدائية الخامسة", score: 89, results: 88, level: "ابتدائي" },
  { name: "الابتدائية الثانية والخمسون", score: 89, results: 81.25, level: "ابتدائي" },
  { name: "المتوسطة الأولى بالرذايا", score: 89, results: 78.75, level: "متوسط" },
  { name: "المتوسطة الثالثة عشرة", score: 89, results: 78.75, level: "متوسط" },
  { name: "الثانوية الرابعة عشرة", score: 89, results: 80.75, level: "ثانوي" },
  { name: "ثانوية طيبة", score: 87, results: 92.5, level: "ثانوي" },
  { name: "ابتدائية ابن حجر العسقلاني", score: 86, results: 70, level: "ابتدائي" },
];

const ACTION_PLAN = [
  {
    phase: "مرحلة التخطيط",
    actions: ["تنفيذ استبانة قياس الاحتياج", "تحليل النتائج بأداة SWOT", "إعداد خطة تنفيذية مشتركة", "عقد لقاء تمهيدي"],
    responsibility: "منسقة التوأمة",
    output: "خطة تنفيذ معتمدة",
    color: "emerald"
  },
  {
    phase: "مرحلة التنفيذ",
    actions: ["عقد ورش تبادلية", "تفعيل مجتمعات تعلم مهنية", "تنفيذ مشروعات تطويرية", "توثيق التجارب إلكترونياً"],
    responsibility: "منسقة التوأمة / المديرات",
    output: "ورش مهنية مفعلة وملفات إنجاز",
    color: "blue"
  },
  {
    phase: "مرحلة المتابعة",
    actions: ["زيارات إشرافية دورية", "جمع التغذية الراجعة", "تحليل نتائج الأنشطة", "تقييم مستوى تحقق الأهداف"],
    responsibility: "منسقة التوأمة / فرق العمل",
    output: "تقرير متابعة ونسب إنجاز",
    color: "orange"
  },
  {
    phase: "مرحلة التحسين",
    actions: ["مناقشة نتائج المتابعة", "تطوير الخطة المستقبلية", "عرض التجارب في لقاء ختامي", "إعداد توصيات الاستدامة"],
    responsibility: "منسقة التوأمة",
    output: "خطة تحسين للعام التالي",
    color: "purple"
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4 text-white'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-moe-green p-2 rounded-lg">
            <Users size={24} className="text-white" />
          </div>
          <span className={`text-lg font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>التوأمة المهنية - أحد والعوالي</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className={`font-medium hover:text-emerald-500 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}>عن البرنامج</a>
          <a href="#action-plan" className={`font-medium hover:text-emerald-500 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}>خطة العمل</a>
          <a href="#schools" className={`font-medium hover:text-emerald-500 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}>المدارس</a>
          <a href="#forms" className={`font-medium hover:text-emerald-500 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}>النماذج</a>
        </div>
        <button className="bg-moe-green text-white px-6 py-2 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-lg text-sm">
          تواصل معنا
        </button>
      </div>
    </nav>
  );
};

const Hero = () => (
  <header className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1523050853063-bd8012fec046?q=80&w=2070&auto=format&fit=crop" 
        alt="School environment" 
        className="w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
    </div>
    
    <div className="container mx-auto px-6 relative z-10 text-right">
      <div className="max-w-4xl mr-0">
        <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full mb-8 border border-emerald-500/30 backdrop-blur-sm">
          <Target size={18} />
          <span className="text-sm font-bold tracking-wide uppercase">تحقيق التميز المؤسسي وفق منهجية PDCA</span>
        </div>
        <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-8">
          التوأمة المهنية بين المدارس <br />
          <span className="text-emerald-400 text-3xl md:text-5xl">لقطاعي أحد والعوالي</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl">
          شراكة تربوية استراتيجية لتبادل الخبرات بين مدارس التميز والمدارس الواعدة، 
          تهدف لرفع كفاءة الأداء المدرسي وتحسين نواتج التعلم وتعميق ثقافة الابتكار.
        </p>
        <div className="flex flex-wrap gap-6">
          <a href="#action-plan" className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 transition-all shadow-xl shadow-emerald-500/20 group">
            استعراض خطة العمل <ArrowRight size={22} className="group-hover:-translate-x-1 transition-transform" />
          </a>
          <a href="#schools" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-10 py-5 rounded-2xl font-bold transition-all">
            قوائم المدارس المشاركة
          </a>
        </div>
      </div>
    </div>
  </header>
);

const PlanVisualizer = () => (
  <section id="action-plan" className="py-24 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-black text-gray-900 mb-4">خطة العمل التنفيذية</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">خارطة طريق واضحة المعالم تتبع دورة PDCA لضمان التحسين المستمر والجودة في الأداء.</p>
        <div className="w-24 h-1.5 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {ACTION_PLAN.map((phase, idx) => (
          <div key={idx} className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col h-full hover:-translate-y-2 transition-transform">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-${phase.color}-500 text-white shadow-lg shadow-${phase.color}-500/30`}>
              {idx === 0 && <Target size={28} />}
              {idx === 1 && <Presentation size={28} />}
              {idx === 2 && <ClipboardCheck size={28} />}
              {idx === 3 && <TrendingUp size={28} />}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{phase.phase}</h3>
            <ul className="space-y-4 mb-10 flex-grow">
              {phase.actions.map((action, i) => (
                <li key={i} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                  <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-${phase.color}-500 flex-shrink-0`}></div>
                  {action}
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-gray-50 mt-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">المسؤول</span>
                <span className="text-sm font-bold text-gray-800">{phase.responsibility}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">المخرج</span>
                <span className={`text-xs font-bold text-${phase.color}-600 bg-${phase.color}-50 px-2 py-1 rounded`}>{phase.output}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SchoolsSection = () => {
  const [activeTab, setActiveTab] = useState<'distinguished' | 'promising'>('distinguished');

  return (
    <section id="schools" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">بيان المدارس المشاركة</h2>
            <p className="text-gray-600">حصر شامل لمدارس التميز (القائدة) والمدارس الواعدة (المستفيدة) في القطاع.</p>
          </div>
          <div className="flex bg-gray-100 p-1.5 rounded-2xl">
            <button 
              onClick={() => setActiveTab('distinguished')}
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'distinguished' ? 'bg-white text-emerald-600 shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
            >
              مدارس التميز (القائدة)
            </button>
            <button 
              onClick={() => setActiveTab('promising')}
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'promising' ? 'bg-white text-emerald-600 shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
            >
              الواعدة بالتميز (المستفيدة)
            </button>
          </div>
        </div>

        {activeTab === 'distinguished' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DISTINGUISHED_SCHOOLS.map((school) => (
              <div key={school.id} className="group p-6 rounded-3xl border border-gray-100 bg-white hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-50 transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Award size={24} />
                  </div>
                  <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest">متميزة</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{school.name}</h4>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Layers size={14} />
                    <span>{school.level}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{school.sector}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-xl shadow-gray-100">
            <table className="w-full text-right border-collapse bg-white">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-8 py-6 font-bold text-sm">اسم المدرسة</th>
                  <th className="px-8 py-6 font-bold text-sm">المرحلة</th>
                  <th className="px-8 py-6 font-bold text-sm">الأداء العام</th>
                  <th className="px-8 py-6 font-bold text-sm">نواتج التعلم</th>
                  <th className="px-8 py-6 font-bold text-sm">الحالة</th>
                </tr>
              </thead>
              <tbody>
                {PROMISING_SCHOOLS.map((school, idx) => (
                  <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 font-bold text-gray-800">{school.name}</td>
                    <td className="px-8 py-6 text-gray-500">{school.level}</td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500" style={{ width: `${school.score}%` }}></div>
                        </div>
                        <span className="text-sm font-black text-gray-700">{school.score}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500" style={{ width: `${school.results}%` }}></div>
                        </div>
                        <span className="text-sm font-black text-gray-700">{school.results}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1.5 rounded-full">
                        <TrendingUp size={12} />
                        مستهدفة للتطوير
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

const TwinningLogic = () => (
  <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
    </div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
            منهجية التوأمة <br />
            <span className="text-emerald-400">الإلكترونية والذكية</span>
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center flex-shrink-0">
                <Monitor size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">منصة Zoom للتعاون</h4>
                <p className="text-gray-400 text-sm leading-relaxed">عقد لقاءات دورية كل أسبوعين لتقديم جرعات مهنية مكثفة ومركزة تسهم في بناء القدرات القيادية والتعليمية.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center flex-shrink-0">
                <Layers size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">تراكمية الخبرات</h4>
                <p className="text-gray-400 text-sm leading-relaxed">نهدف لنقل الممارسات المتميزة بصورة تراكمية ومنهجية تضمن استدامة الأثر التعليمي الملموس.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
            <h3 className="text-xl font-bold">مؤشرات النجاح المستهدفة</h3>
          </div>
          <div className="space-y-6">
            {[
              { label: "تبادل الممارسات القيادية", val: 95 },
              { label: "تحسن نواتج التعلم", val: 88 },
              { label: "رضا المستفيدين عن البرنامج", val: 92 },
              { label: "توثيق الممارسات النوعية", val: 100 }
            ].map((stat, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span>{stat.label}</span>
                  <span className="text-emerald-400">{stat.val}%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500" style={{ width: `${stat.val}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-sm text-emerald-100 leading-relaxed italic">
            "نؤمن بأن التكامل بين المدارس هو الطريق الأسرع لتحقيق التميز الوطني الشامل."
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FormsSection = () => {
  const forms = [
    {
      title: "استبانة تحديد احتياجات المدارس الواعدة",
      url: "https://forms.gle/6aWjYQiuKwPd8ytXA",
      icon: <FileText className="text-blue-500" />,
      type: "تشخيصي"
    },
    {
      title: "حصر مجالات التميز في مدارس التميز",
      url: "https://forms.gle/KNbcJk1QaFWv67QA8",
      icon: <Target className="text-emerald-500" />,
      type: "قدرات"
    },
    {
      title: "الرغبة في حضور لقاءات التوأمة الإلكترونية",
      url: "https://forms.gle/v9jVDaBoE6S1B7ds7",
      icon: <Monitor className="text-purple-500" />,
      type: "تفعيل"
    },
    {
      title: "الراغبات في تنفيذ لقاءات إلكترونية",
      url: "https://forms.gle/MJ2bHXJWTXVcjZK78",
      icon: <Users className="text-orange-500" />,
      type: "تنفيذ"
    }
  ];

  return (
    <section id="forms" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">النماذج والروابط</h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {forms.map((form, idx) => (
            <a 
              key={idx} 
              href={form.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-100/50 transition-all flex flex-col items-center text-center group"
            >
              <div className="bg-gray-50 p-5 rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-emerald-50 transition-all">
                {form.icon}
              </div>
              <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-3 uppercase">{form.type}</span>
              <h3 className="text-lg font-bold text-gray-800 leading-snug group-hover:text-emerald-600 transition-colors">{form.title}</h3>
              <div className="mt-8 flex items-center gap-2 text-gray-300 group-hover:text-emerald-500 transition-colors text-xs font-bold">
                <span>فتح الرابط</span>
                <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-white py-16 border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-6">
          <div className="bg-emerald-600 p-4 rounded-2xl shadow-lg shadow-emerald-500/20">
            <School size={32} />
          </div>
          <div className="text-right">
            <h4 className="text-xl font-black">التوأمة المهنية بين المدارس لقطاعي أحد والعوالي</h4>
            <p className="text-gray-400 text-sm mt-1">وزارة التعليم - المملكة العربية السعودية</p>
          </div>
        </div>
        
        <div className="flex gap-10 font-bold text-sm">
          <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">عن البرنامج</a>
          <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">دليل الاستخدام</a>
          <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">اتصل بنا</a>
        </div>
        
        <div className="text-gray-500 text-xs text-center md:text-left leading-relaxed">
          جميع الحقوق محفوظة &copy; {new Date().getFullYear()} <br />
          نظام التوأمة المهنية لمدارس التميز
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PlanVisualizer />
      <SchoolsSection />
      <TwinningLogic />
      <FormsSection />
      <Footer />
    </div>
  );
}
