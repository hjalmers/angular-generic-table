export let dashed: (s: string) => string;
dashed = (s: string) => s.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
