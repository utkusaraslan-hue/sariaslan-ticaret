export const formatTL = (value: number) =>
  new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 }).format(value);

// "YYYY-MM-DD" değerlerini yerel gün olarak ayrıştırır; new Date(string) ile
// ayrıştırmak UTC gece yarısı varsayar ve UTC'nin gerisindeki saat
// dilimlerinde bir gün geriye kayabilir.
export const formatTarih = (isoDate: string) => {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("tr-TR");
};

export type FiyatYonu = "yukselis" | "dusus" | "sabit";

export const fiyatYonu = (degisimYuzde: number): FiyatYonu => {
  if (degisimYuzde > 0) return "yukselis";
  if (degisimYuzde < 0) return "dusus";
  return "sabit";
};
