export function healthStatus (name, health = 100) {
  if (health < 50) {
    if (health < 15) return 'critical';
    return 'wounded';
  }
  return 'healthy';
}
