// Resolves a path inside /public against the deployment base URL, so the same
// build works from a domain root, a sub-path, or the local filesystem.
export function asset(path) {
  if (!path) return ''
  if (/^(https?:|data:|blob:)/.test(path)) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
