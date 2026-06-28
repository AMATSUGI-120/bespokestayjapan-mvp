import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#f7f5ef',
          color: '#202124',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          padding: '72px',
          width: '100%',
        }}
      >
        <div
          style={{
            borderTop: '1px solid #c9c2b5',
            display: 'flex',
            gap: '18px',
            paddingTop: '28px',
          }}
        >
          {['TAT', 'BAG', 'FOOD', 'LONG'].map((code) => (
            <div
              key={code}
              style={{
                border: '1px solid #c9c2b5',
                borderRadius: '999px',
                color: '#5f6368',
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: '0.08em',
                padding: '12px 20px',
              }}
            >
              {code}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              color: '#5f6368',
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            Bespoke Stay Japan
          </div>
          <div
            style={{
              fontSize: 82,
              fontWeight: 500,
              letterSpacing: '0',
              lineHeight: 1,
              marginTop: '24px',
              maxWidth: '920px',
            }}
          >
            Japan stays researched for real travel needs.
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid #c9c2b5',
            color: '#5f6368',
            fontSize: 26,
            lineHeight: 1.4,
            paddingTop: '28px',
          }}
        >
          Tattoo and bath notes / luggage support / self-catering / family and pet context
        </div>
      </div>
    ),
    size
  );
}
