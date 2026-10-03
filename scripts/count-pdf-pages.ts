export function countPdfPages({ pdf }: { pdf: Uint8Array }): number {
  return new TextDecoder('latin1').decode(pdf).match(/\/Type\s*\/Page(?!s)/g)?.length ?? 0
}
