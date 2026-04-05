export async function delay() {
  const ms = Math.floor(Math.random() * 600) + 200;
  return new Promise((res) => setTimeout(res, ms));
}

export function debounce(fn: Function, delay: number) {
  let timer: NodeJS.Timeout;

  return function (...args: unknown[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}