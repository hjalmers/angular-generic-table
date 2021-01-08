export let dashed: (s: string) => string;
dashed = (s: string) => s.replace(/[A-Z]/g, m => '-' + m.toLowerCase());

export let chunk: (array: Array<any>, chunkSize: number) => Array<Array<any>>;
chunk = (array, chunkSize) => {
  if (chunkSize < 0) {
    throw new Error('Invalid chunk size');
  }
  if (chunkSize === 0 && !chunkSize) {
    return [array];
  }
  const CHUNK = [];
  for (let i = 0, len = array.length; i < len; i += chunkSize) {
    CHUNK.push(array.slice(i, i + chunkSize));
  }
  return CHUNK;
};
