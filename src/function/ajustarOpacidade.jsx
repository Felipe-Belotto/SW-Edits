export function ajustarOpacidade(corHex, fatorPreto, opacidade){
  const cleanedHex = corHex.replace('#', '');
  const [r, g, b] = cleanedHex.match(/.{1,2}/g).map((value) => parseInt(value, 16));

  const novoR = Math.round(r * (1 - fatorPreto));
  const novoG = Math.round(g * (1 - fatorPreto));
  const novoB = Math.round(b * (1 - fatorPreto));

  return `rgba(${novoR}, ${novoG}, ${novoB}, ${opacidade})`;
};