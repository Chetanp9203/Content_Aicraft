import { ImageResponse } from 'next/og';

export default async function handler(request) {
  return new ImageResponse(
    <div style={{
        fontSize : 20,
        fontWeight: 'bolder',
        fontStyle:'italic',
         backgroundColor: 'darkcyan', width: '100%', height:'100%',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         color: 'white',
         borderRadius: '50%',
         }}>
      Ac
    </div>,
    { width: 28, height: 28 }
  );
}