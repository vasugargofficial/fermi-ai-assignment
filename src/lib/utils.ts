export async function delay() {
  const ms = Math.floor(Math.random() * 600) + 200;
  return new Promise((res) => setTimeout(res, ms));
}