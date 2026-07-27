import React from 'react';

const Illustration = () => {
  return (
    <div className="illustration">
      <svg viewBox="0 0 1180 380" xmlns="http://www.w3.org/2000/svg">
        <rect width="1180" height="380" fill="#fbfbf8"/>
        <line x1="0" y1="300" x2="1180" y2="300" stroke="#d8ddd6" strokeWidth="1"/>
        
        {/* pole and wires */}
        <line x1="120" y1="60" x2="120" y2="300" stroke="#c9d3cb" strokeWidth="2"/>
        <path d="M20,90 C300,40 700,140 1120,70" stroke="#c9d3cb" strokeWidth="1.2" fill="none"/>
        <path d="M20,110 C300,60 700,160 1120,90" stroke="#c9d3cb" strokeWidth="1.2" fill="none"/>
        
        {/* palm tree */}
        <g stroke="#8fae99" strokeWidth="2" fill="none" strokeLinecap="round">
          <path d="M1080,300 C1080,220 1075,180 1070,150"/>
          <path d="M1070,150 C1040,130 1010,140 990,160"/>
          <path d="M1070,150 C1090,125 1120,120 1140,135"/>
          <path d="M1070,150 C1050,110 1055,90 1075,70"/>
          <path d="M1070,150 C1090,100 1110,90 1130,95"/>
        </g>
        
        {/* woman 1 with basket */}
        <g stroke="#2f6b45" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="140" cy="185" r="14"/>
          <path d="M140,199 L140,250"/>
          <path d="M118,300 L128,250 L152,250 L162,300"/>
          <path d="M140,215 C120,225 105,240 100,260"/>
          <path d="M140,215 C155,222 168,232 175,245"/>
        </g>
        <rect x="88" y="255" width="30" height="26" rx="3" fill="none" stroke="#2f6b45" strokeWidth="2"/>
        
        {/* woman 2 with basket on head */}
        <g stroke="#2f6b45" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="255" cy="175" r="14"/>
          <rect x="238" y="150" width="34" height="14" rx="4"/>
          <path d="M255,189 L255,250"/>
          <path d="M233,300 L243,250 L267,250 L277,300"/>
          <path d="M255,210 C238,220 225,235 218,255"/>
          <path d="M255,210 C270,218 280,228 285,240" />
        </g>
        
        {/* man with phone */}
        <g stroke="#33795a" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="420" cy="180" r="14"/>
          <path d="M420,194 L420,250"/>
          <path d="M400,300 L410,250 L430,250 L440,300"/>
          <path d="M420,205 C405,212 398,222 396,235"/>
          <path d="M420,205 C432,212 438,218 440,228"/>
          <rect x="432" y="215" width="10" height="16" rx="2"/>
        </g>
        
        {/* garbage truck */}
        <g stroke="#38795a" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="520" y="205" width="150" height="70" rx="4"/>
          <rect x="670" y="180" width="70" height="95" rx="4"/>
          <rect x="686" y="195" width="34" height="24" rx="2"/>
          <circle cx="565" cy="285" r="16"/>
          <circle cx="700" cy="285" r="16"/>
          <path d="M620,205 L620,180 L650,180 L650,205" />
        </g>
        <circle cx="565" cy="285" r="6" fill="#38795a"/>
        <circle cx="700" cy="285" r="6" fill="#38795a"/>
        
        {/* recycle bin */}
        <g stroke="#2f6b45" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M760,235 L775,300 L825,300 L840,235 Z"/>
          <path d="M755,235 L845,235"/>
          <path d="M793,255 l6,10 l-12,0 z" fill="#2f6b45" stroke="none"/>
        </g>
        
        {/* child */}
        <g stroke="#33795a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="880" cy="245" r="10"/>
          <path d="M880,255 L880,285"/>
          <path d="M868,300 L875,285 L885,285 L892,300"/>
        </g>
        
        {/* man waving */}
        <g stroke="#2f6b8f" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="990" cy="175" r="15"/>
          <path d="M990,190 L990,250"/>
          <path d="M968,300 L978,250 L1002,250 L1012,300"/>
          <path d="M990,200 C1005,195 1015,180 1015,165"/>
          <path d="M990,205 C978,215 970,228 968,240"/>
        </g>
      </svg>
    </div>
  );
};

export default Illustration;