export const getBaseUrl = () => {
  if (typeof window !== 'undefined') return window.location.origin
  if (process.env.NODE_ENV === 'production') return process.env.NEXT_PUBLIC_BASE_URL
  return `http://localhost:3000`
}
