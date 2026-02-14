
import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Target, 
  ClipboardCheck, 
  Presentation, 
  MapPin, 
  Monitor, 
  FileText, 
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  School,
  TrendingUp,
  Award,
  Layers,
  Lightbulb,
  XCircle,
  BookOpen,
  ChevronLeft,
  Sparkles,
  Search,
  Layout
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
    phase: "التخطيط (Plan)",
    actions: ["تنفيذ استبانة قياس الاحتياج", "تحليل النتائج بأداة SWOT", "إعداد خطة تنفيذية مشتركة", "عقد لقاء تمهيدي لشرح الآلية"],
    responsibility: "منسقة التوأمة",
    output: "خطة تنفيذ معتمدة",
    color: "emerald"
  },
  {
    phase: "التنفيذ (Do)",
    actions: ["عقد ورش تبادلية نوعية", "تفعيل مجتمعات تعلم رقمية", "تنفيذ مبادرات مشتركة", "توثيق التجارب رقمياً"],
    responsibility: "المديرات / فرق العمل",
    output: "ورش مهنية مفعلة",
    color: "indigo"
  },
  {
    phase: "المتابعة (Check)",
    actions: ["زيارات إشرافية دورية", "جمع التغذية الراجعة", "تحليل استبانات الأثر", "تقييم مؤشرات الأداء"],
    responsibility: "منسقة التوأمة / المشرفات",
    output: "تقرير متابعة تفصيلي",
    color: "amber"
  },
  {
    phase: "التحسين (Act)",
    actions: ["مناقشة الدروس المستفادة", "تطوير الخطة المستقبلية", "عرض التجارب في اللقاء الختامي", "إعداد توصيات الاستدامة"],
    responsibility: "منسقة التوأمة",
    output: "خطة تحسين مستدامة",
    color: "rose"
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6 text-white'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-600 p-2.5 rounded-xl shadow-lg shadow-emerald-600/20">
            <Sparkles size={24} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-black leading-none ${isScrolled ? 'text-gray-900' : 'text-white'}`}>التوأمة المهنية</span>
            <span className={`text-[10px] font-bold opacity-70 ${isScrolled ? 'text-gray-500' : 'text-emerald-100'}`}>قطاعي أحد والعوالي</span>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-10">
          {['اللقاء التعريفي', 'خطة العمل', 'المدارس المشاركة', 'النماذج'].map((item, idx) => (
            <a 
              key={idx} 
              href={`#${['intro', 'action-plan', 'schools', 'forms'][idx]}`} 
              className={`text-sm font-bold tracking-wide hover:text-emerald-500 transition-all relative group ${isScrolled ? 'text-gray-600' : 'text-white'}`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <a href="#forms" className="bg-emerald-600 text-white px-7 py-2.5 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/30 text-sm flex items-center gap-2">
          الاستبانات المستخدمة <ChevronLeft size={16} />
        </a>
      </div>
    </nav>
  );
};

const Hero = () => (
  <header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-emerald-600/10 mix-blend-overlay"></div>
      <img 
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
        alt="Digital Education" 
        className="w-full h-full object-cover opacity-20 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
    </div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-emerald-400 px-5 py-2.5 rounded-2xl mb-10 backdrop-blur-xl animate-fade-in">
          <Target size={20} />
          <span className="text-xs font-black tracking-widest uppercase">رؤية تعليمية طموحة وفق منهجية PDCA</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.1] mb-10 drop-shadow-2xl">
          التوأمة المهنية <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">مدخل لتحسين الأداء</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-14 leading-relaxed max-w-2xl font-medium">
          بناء جسور المعرفة بين المدارس المتميزة والواعدة لتعزيز جودة نواتج التعلم وتطوير القيادة المدرسية في قطاعي أحد والعوالي.
        </p>
        <div className="flex flex-wrap gap-6">
          <a href="#intro" className="gradient-primary text-white px-10 py-5 rounded-2xl font-black flex items-center gap-3 transition-all shadow-2xl shadow-emerald-600/40 group scale-100 hover:scale-105">
            عرض اللقاء التعريفي <ArrowRight size={22} className="group-hover:-translate-x-1 transition-transform" />
          </a>
          <a href="#action-plan" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-md px-10 py-5 rounded-2xl font-black transition-all">
            استعراض خطة العمل
          </a>
        </div>
      </div>
    </div>
    
    {/* Decorative Elements */}
    <div className="absolute bottom-20 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse"></div>
    <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] animate-pulse"></div>
  </header>
);

const IntroductoryMeeting = () => (
  <section id="intro" className="py-32 bg-[#f8fafb] relative">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-24 items-center mb-32">
        <div className="lg:w-1/2">
          <div className="flex items-center gap-3 text-emerald-600 font-black text-sm uppercase tracking-widest mb-6">
            <Layout size={20} />
            <span>محتوى اللقاء التعريفي</span>
          </div>
          <h2 className="text-5xl font-black text-slate-900 mb-10 leading-tight">فلسفة التوأمة <br/><span className="text-emerald-600 italic">المهنية والتربوية</span></h2>
          <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
            شراكة استراتيجية تتجاوز مفهوم تبادل الأوراق إلى نقل <span className="text-emerald-600 font-bold">طريقة التفكير</span> ومنهجيات العمل المتميزة لرفع مستوى الأداء المؤسسي.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="group p-6 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-emerald-500 transition-all">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Target size={24} />
              </div>
              <h4 className="font-black text-slate-800 mb-2">تعزيز التكامل</h4>
              <p className="text-sm text-slate-400 leading-relaxed font-bold">تمكين المدارس الواعدة من تطبيق أساليب فاعلة ومبتكرة.</p>
            </div>
            <div className="group p-6 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-blue-500 transition-all">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Users size={24} />
              </div>
              <h4 className="font-black text-slate-800 mb-2">مجتمعات تعلم</h4>
              <p className="text-sm text-slate-400 leading-relaxed font-bold">بناء بيئة تعاونية مستدامة تخدم التحول الرقمي والمهني.</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="absolute -inset-4 bg-emerald-500/10 rounded-[4rem] blur-2xl"></div>
          <div className="relative bg-white p-12 rounded-[3.5rem] shadow-2xl border border-white/50 space-y-10">
             <div className="flex items-center gap-4 border-b border-slate-50 pb-6">
               <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center font-black text-2xl">1</div>
               <div>
                 <h4 className="font-black text-slate-900">دراسة الجميعي (2022)</h4>
                 <p className="text-xs text-slate-400 font-bold">مدخل فاعل لتطوير القيادة المدرسية.</p>
               </div>
             </div>
             <div className="flex items-center gap-4 border-b border-slate-50 pb-6">
               <div className="w-14 h-14 bg-indigo-100 text-indigo-700 rounded-2xl flex items-center justify-center font-black text-2xl">2</div>
               <div>
                 <h4 className="font-black text-slate-900">دراسة جاد الله (2021)</h4>
                 <p className="text-xs text-slate-400 font-bold">التوأمة الإلكترونية كمدخل للتنمية المهنية.</p>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center font-black text-2xl">3</div>
               <div>
                 <h4 className="font-black text-slate-900">دراسة Josh (2016)</h4>
                 <p className="text-xs text-slate-400 font-bold">تحسين جودة التدريس ورفع نواتج التعلم.</p>
               </div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-emerald-500/5 border border-emerald-100/50 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-emerald-100 text-emerald-600 rounded-2xl">
              <Lightbulb size={32} />
            </div>
            <h3 className="text-3xl font-black text-slate-900">التوأمة هي:</h3>
          </div>
          <div className="space-y-6">
            {[
              "نقل طريقة التفكير والمنهجية العمل.",
              "بناء ثقافة تعلم مهنية مستدامة.",
              "تعزيز التحسين القائم على البيانات.",
              "تمكين حقيقي للكوادر القيادية."
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-center group/item">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] group-hover/item:scale-125 transition-all"></div>
                <span className="font-bold text-slate-700 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-rose-500/5 border border-rose-100/50 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-rose-100 text-rose-600 rounded-2xl">
              <XCircle size={32} />
            </div>
            <h3 className="text-3xl font-black text-slate-900">التوأمة ليست:</h3>
          </div>
          <div className="space-y-6">
            {[
              "مجرد تبادل ملفات ونماذج ورقية.",
              "نسخ ممارسات دون تكييف واقعي.",
              "تنفيذ زيارات شكلية أو روتينية.",
              "عبء إضافي دون مخرجات ملموسة."
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-center group/item">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400 group-hover/item:scale-125 transition-all"></div>
                <span className="font-bold text-slate-700 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PlanVisualizer = () => (
  <section id="action-plan" className="py-32 bg-white overflow-hidden relative">
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-24">
        <span className="bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">خارطة الطريق</span>
        <h2 className="text-5xl font-black text-slate-900 mb-6">منهجية التنفيذ <span className="text-indigo-600">(PDCA)</span></h2>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">نظام متكامل لضمان الجودة يبدأ بالتخطيط الدقيق وينتهي بالتحسين المستدام.</p>
        <div className="w-24 h-2 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mt-10 rounded-full shadow-lg"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {ACTION_PLAN.map((phase, idx) => (
          <div key={idx} className="group relative bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-slate-200/50 border border-slate-50 flex flex-col h-full hover:translate-y-[-10px] transition-all duration-500 overflow-hidden">
            <div className={`absolute top-0 right-0 w-24 h-24 bg-${phase.color}-500/5 rounded-full -mr-12 -mt-12 group-hover:scale-[3] transition-transform duration-700`}></div>
            
            <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-10 bg-${phase.color}-500 text-white shadow-2xl shadow-${phase.color}-500/40 relative z-10`}>
              {idx === 0 && <Target size={32} />}
              {idx === 1 && <Presentation size={32} />}
              {idx === 2 && <ClipboardCheck size={32} />}
              {idx === 3 && <TrendingUp size={32} />}
            </div>
            
            <h3 className="text-2xl font-black text-slate-900 mb-8 relative z-10">{phase.phase}</h3>
            
            <div className="space-y-5 mb-12 flex-grow relative z-10">
              {phase.actions.map((action, i) => (
                <div key={i} className="flex gap-4 items-start text-slate-500 text-sm leading-relaxed font-bold">
                  <div className={`mt-1.5 w-2 h-2 rounded-full bg-${phase.color}-500 flex-shrink-0 shadow-[0_0_8px_rgba(var(--color-rgb),0.4)]`}></div>
                  {action}
                </div>
              ))}
            </div>
            
            <div className="pt-8 border-t border-slate-50 mt-auto relative z-10">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-3">المخرج المستهدف</span>
              <div className={`text-xs font-black text-${phase.color}-700 bg-${phase.color}-50 px-4 py-3 rounded-2xl`}>
                {phase.output}
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
    <section id="schools" className="py-32 bg-[#fdfefd]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-emerald-600 font-black text-xs uppercase tracking-[0.2em] mb-4 inline-block">الشركاء الاستراتيجيون</span>
            <h2 className="text-5xl font-black text-slate-900 mb-6 leading-tight">المدارس المشاركة <br/><span className="text-emerald-600 font-medium tracking-tighter">بالقطاع التعليمي</span></h2>
            <p className="text-slate-400 font-bold text-lg">توزيع المدارس في قطاعي أحد والعوالي بناءً على مؤشرات الأداء والتميز المؤسسي.</p>
          </div>
          <div className="flex bg-white shadow-2xl shadow-slate-200/50 p-2 rounded-[2rem] border border-slate-100">
            <button 
              onClick={() => setActiveTab('distinguished')}
              className={`px-10 py-4 rounded-[1.5rem] font-black text-sm transition-all duration-300 ${activeTab === 'distinguished' ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-600/30' : 'text-slate-400 hover:text-slate-600'}`}
            >
              مدارس التميز (القائدة)
            </button>
            <button 
              onClick={() => setActiveTab('promising')}
              className={`px-10 py-4 rounded-[1.5rem] font-black text-sm transition-all duration-300 ${activeTab === 'promising' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/30' : 'text-slate-400 hover:text-slate-600'}`}
            >
              الواعدة بالتميز (المستفيدة)
            </button>
          </div>
        </div>

        {activeTab === 'distinguished' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {DISTINGUISHED_SCHOOLS.map((school) => (
              <div key={school.id} className="group p-8 rounded-[2.5rem] border border-slate-100 bg-white hover:border-emerald-500 hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] transition-all duration-500">
                <div className="flex items-start justify-between mb-8">
                  <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                    <Award size={28} />
                  </div>
                  <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full uppercase tracking-widest border border-emerald-100">قائدة</span>
                </div>
                <h4 className="text-xl font-black text-slate-800 mb-3 leading-tight group-hover:text-emerald-700 transition-colors">{school.name}</h4>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-lg">
                    <Layers size={14} className="text-emerald-500" />
                    {school.level}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-lg">
                    <MapPin size={14} className="text-emerald-500" />
                    {school.sector}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
            <table className="w-full text-right border-collapse bg-white">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-10 py-8 font-black text-sm uppercase tracking-widest">اسم المدرسة</th>
                  <th className="px-10 py-8 font-black text-sm uppercase tracking-widest">المرحلة</th>
                  <th className="px-10 py-8 font-black text-sm uppercase tracking-widest">الأداء العام</th>
                  <th className="px-10 py-8 font-black text-sm uppercase tracking-widest">نواتج التعلم</th>
                  <th className="px-10 py-8 font-black text-sm uppercase tracking-widest">الحالة</th>
                </tr>
              </thead>
              <tbody>
                {PROMISING_SCHOOLS.map((school, idx) => (
                  <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50 transition-colors group">
                    <td className="px-10 py-8 font-black text-slate-800 group-hover:text-indigo-600 transition-colors">{school.name}</td>
                    <td className="px-10 py-8 text-slate-500 font-bold">{school.level}</td>
                    <td className="px-10 py-8">
                      <div className="flex items-center gap-3">
                        <div className="w-20 h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                          <div className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" style={{ width: `${school.score}%` }}></div>
                        </div>
                        <span className="text-xs font-black text-slate-700">{school.score}%</span>
                      </div>
                    </td>
                    <td className="px-10 py-8">
                      <div className="flex items-center gap-3">
                        <div className="w-20 h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                          <div className="h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" style={{ width: `${school.results}%` }}></div>
                        </div>
                        <span className="text-xs font-black text-slate-700">{school.results}%</span>
                      </div>
                    </td>
                    <td className="px-10 py-8">
                      <span className="inline-flex items-center gap-2 text-[10px] font-black text-indigo-700 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100">
                        <TrendingUp size={14} />
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

const TwinningMethodology = () => (
  <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#065f46_0%,transparent_50%)] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#1e3a8a_0%,transparent_50%)] opacity-20"></div>
    </div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-3xl mb-24">
        <h2 className="text-5xl md:text-6xl font-black mb-10 leading-tight text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 to-white">القيمة الجوهرية للتوأمة</h2>
        <p className="text-xl text-slate-400 leading-relaxed font-medium">
          نحن لا ننقل الأوراق والنماذج، بل نصنع تحولاً في العقلية التربوية لبناء <span className="text-white font-black">جيل متميز</span> وقيادة ملهمة.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          { title: "تحويل الخبرات", desc: "تمكين المدارس من تحويل المفاهيم النظرية إلى ممارسات واقعية وملموسة.", icon: <Presentation size={32} /> },
          { title: "الجاهزية المهنية", desc: "دعم المديرات والمعلمات لتبني التغيير التربوي بشغف واحترافية عالية.", icon: <Lightbulb size={32} /> },
          { title: "التحسين المتجذر", desc: "جعل التطوير عملية يومية مستمرة تنبع من ثقافة المدرسة وليس كحدث عابر.", icon: <CheckCircle2 size={32} /> },
          { title: "جودة المخرجات", desc: "التركيز المطلق على نواتج التعلم ورفع كفاءة التحصيل الدراسي للطلاب.", icon: <BookOpen size={32} /> },
          { title: "الريادة الرقمية", desc: "استغلال التقنية لبناء جسور تواصل مهني تتجاوز الحدود الجغرافية.", icon: <Monitor size={32} /> },
          { title: "التحول للتميز", desc: "دعم شامل للوصول لمعايير التميز المؤسسي وفق التقويم المدرسي المعتمد.", icon: <Award size={32} /> }
        ].map((item, i) => (
          <div key={i} className="group p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-xl shadow-emerald-500/10">
              {item.icon}
            </div>
            <h4 className="text-2xl font-black mb-5 text-white tracking-tight">{item.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed font-bold">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FormsSection = () => {
  const forms = [
    {
      title: "احتياجات المدارس الواعدة",
      url: "https://forms.gle/6aWjYQiuKwPd8ytXA",
      icon: <FileText className="text-indigo-500" />,
      type: "تشخيصي",
      desc: "استبانة شاملة لتحديد الفجوات المهنية ومناطق الدعم المطلوبة."
    },
    {
      title: "حصر مجالات التميز",
      url: "https://forms.gle/KNbcJk1QaFWv67QA8",
      icon: <Target className="text-emerald-500" />,
      type: "قدرات",
      desc: "تحديد نقاط القوة والممارسات الملهمة في مدارس التميز."
    },
    {
      title: "حضور لقاءات التوأمة",
      url: "https://forms.gle/v9jVDaBoE6S1B7ds7",
      icon: <Monitor className="text-amber-500" />,
      type: "تفعيل",
      desc: "قياس رغبة القيادات في التفاعل مع اللقاءات الإلكترونية."
    },
    {
      title: "تنفيذ لقاءات إلكترونية",
      url: "https://forms.gle/MJ2bHXJWTXVcjZK78",
      icon: <Users className="text-rose-500" />,
      type: "تنفيذ",
      desc: "نموذج المشاركة الفاعلة في نقل الخبرة وتقديم الورش."
    }
  ];

  return (
    <section id="forms" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-emerald-600 font-black text-xs uppercase tracking-[0.2em] mb-4 inline-block">الأدوات الرقمية</span>
          <h2 className="text-5xl font-black text-slate-900 mb-6">الاستبانات المستخدمة</h2>
          <p className="text-slate-500 font-bold text-lg max-w-2xl mx-auto">روابط تفاعلية لجمع البيانات، تحليل الاحتياج، وقياس أثر البرنامج المهني.</p>
          <div className="w-24 h-1.5 bg-slate-100 mx-auto mt-10 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {forms.map((form, idx) => (
            <a 
              key={idx} 
              href={form.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-[#fcfdfd] p-10 rounded-[3rem] border border-slate-100 hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="bg-white p-6 rounded-[2rem] mb-10 group-hover:scale-110 shadow-xl shadow-slate-200/50 transition-all border border-slate-50">
                {form.icon}
              </div>
              <span className={`text-[10px] font-black text-white px-5 py-1.5 rounded-full mb-6 uppercase tracking-widest shadow-sm ${idx % 4 === 0 ? 'bg-indigo-500' : idx % 4 === 1 ? 'bg-emerald-500' : idx % 4 === 2 ? 'bg-amber-500' : 'bg-rose-500'}`}>
                {form.type}
              </span>
              <h3 className="text-xl font-black text-slate-900 leading-tight mb-4 group-hover:text-emerald-700 transition-colors">{form.title}</h3>
              <p className="text-xs text-slate-400 font-bold leading-relaxed mb-10">{form.desc}</p>
              <div className="mt-auto flex items-center gap-2 text-slate-300 group-hover:text-emerald-500 transition-all font-black text-xs uppercase tracking-widest">
                <span>فتح الاستبانة</span>
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
  <footer className="bg-slate-950 text-white py-24 border-t border-white/5 relative overflow-hidden">
    <div className="container mx-auto px-6 text-center relative z-10">
      <div className="flex justify-center mb-12">
        <div className="bg-emerald-600/20 p-5 rounded-[2rem] border border-emerald-500/20">
          <School size={48} className="text-emerald-400" />
        </div>
      </div>
      <h4 className="text-3xl font-black mb-4 tracking-tight">التوأمة المهنية بين المدارس لقطاعي أحد والعوالي</h4>
      <p className="text-slate-500 text-lg font-bold mb-16">وزارة التعليم - المملكة العربية السعودية</p>
      
      <div className="flex flex-wrap justify-center gap-12 mb-20 font-black text-sm uppercase tracking-widest">
        <a href="#intro" className="text-slate-400 hover:text-emerald-400 transition-colors">عن اللقاء</a>
        <a href="#action-plan" className="text-slate-400 hover:text-emerald-400 transition-colors">خطة العمل</a>
        <a href="#schools" className="text-slate-400 hover:text-emerald-400 transition-colors">المدارس</a>
        <a href="#forms" className="text-slate-400 hover:text-emerald-400 transition-colors">الاستبانات</a>
      </div>
      
      <div className="text-slate-600 text-[10px] font-black tracking-[0.3em] uppercase">
        جميع الحقوق محفوظة &copy; {new Date().getFullYear()} <br />
        <span className="text-emerald-500 mt-2 block tracking-normal">الإشراف التربوي - قطاعي أحد والعوالي</span>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfdfd] selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <Hero />
      <IntroductoryMeeting />
      <PlanVisualizer />
      <TwinningMethodology />
      <SchoolsSection />
      <FormsSection />
      <Footer />
    </div>
  );
}
