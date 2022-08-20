import shuffle from "just-shuffle";

export function realizarSorteio(participantes: string[]) {
  const embaralhado = shuffle(participantes);
  const resultado = new Map<string, string>();
  for (let index = 0; index < participantes.length; index++) {
    const indiceNext = index === participantes.length - 1 ? 0 : index + 1;
    resultado.set(embaralhado[index], embaralhado[indiceNext]);
  }
  return resultado;
}
