interface CountPdfPagesArguments {
  pdf: Uint8Array
}

export function countPdfPages({ pdf }: CountPdfPagesArguments): number {
  return new TextDecoder('latin1').decode(pdf).match(/\/Type\s*\/Page(?!s)/g)?.length ?? 0
}
