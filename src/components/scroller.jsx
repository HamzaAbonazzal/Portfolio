import React, { useEffect, useRef } from 'react';
import './../styles/components/scroller.scss'; // ملف CSS لتنسيق شريط التقدم

function Scroller() {
  // إنشاء مرجع (ref) لعنصر شريط التقدم
  const scrollerRef = useRef(null);

  useEffect(() => {
    // حساب الارتفاع القابل للتمرير
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // دالة معالجة التمرير
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollerRef.current) {
        scrollerRef.current.style.width = `${(scrollTop / height) * 100}%`;
      }
    };

    // إضافة مستمع حدث التمرير
    window.addEventListener('scroll', handleScroll);

    // تنظيف مستمع الحدث عند إلغاء تحميل المكون
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // المصفوفة الفارغة تعني أن useEffect يعمل مرة واحدة عند تحميل المكون

  return (
    <div className="progress-bar">
      <div ref={scrollerRef} className="scroller"></div>
    </div>
  );
}

export default Scroller;