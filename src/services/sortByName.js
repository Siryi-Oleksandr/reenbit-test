export function sortByName(items) {
  const result = [...items].sort((a, b) => a.name.localeCompare(b.name));
  return result;
}
