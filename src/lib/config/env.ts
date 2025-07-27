function getEnvVar(key: string): string {
  const value = process.env[key]

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`)
  }
  return value
}

export function getLocalApiUrl() {
  return `http://${getEnvVar('LOCAL_HOST')}:${getEnvVar('LOCAL_PORT')}`
}

export const env = {
  LOCAL_API_URL: getLocalApiUrl()
}
