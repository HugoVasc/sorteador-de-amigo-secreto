import { realizarSorteio } from "./realizarSorteio";

describe("Sorteio", () => {
  test("should not cobine a participant to it`s self", () => {
    const participantes = ["Carol", "Mya", "Malu", "Giulia", "Majuh"];
    const sorteio = realizarSorteio(participantes);
    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});

export {};
