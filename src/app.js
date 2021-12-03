export function healthStatus (name, health) {
  if (health < 50) {
    if (health < 15) return 'critical';
    return 'wounded';
  }
  return 'healthy';
}

export function sortHeroes (objArray) {
  return objArray.sort((a,b) => (a.health > b.health) ? -1 : ((b.health > a.health) ? 1 : 0));
}
