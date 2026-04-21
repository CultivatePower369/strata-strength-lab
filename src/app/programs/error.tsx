'use client'

export default function ProgramsError({ error }: { error: Error }) {
  return (
    <div style={{ padding: '40px', fontFamily: 'monospace', background: '#fff', minHeight: '100vh' }}>
      <h1 style={{ color: 'red', fontSize: '24px' }}>Programs Page Error</h1>
      <p style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '16px' }}>{error.message}</p>
      <pre style={{ marginTop: '16px', background: '#f0f0f0', padding: '16px', overflow: 'auto', fontSize: '12px' }}>
        {error.stack}
      </pre>
    </div>
  )
}
