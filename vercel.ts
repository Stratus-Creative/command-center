// Vercel project configuration
// See: https://vercel.com/docs/project-configuration/vercel-ts
const config = {
  buildCommand: 'npm run build',
  framework: 'nextjs',
  crons: [
    { path: '/api/cron/daily-brief', schedule: '0 8 * * *' },
  ],
} as const

export default config
