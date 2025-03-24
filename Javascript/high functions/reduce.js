function sum(a, b)
{
    console.log(a, b)
    return (a + b);
}

const exampleArray = [1, 2, 3, 4, 5, 6, 7];
const summation = exampleArray.reduce(sum, 0);
console.log(summation);

function joinString(strA, strB) {
    const joinedStr = strA + strB;
    console.log(joinedStr)
    return joinedStr;
  }
  
  function concat(arr) {
    return arr.reduce(joinString, '');
  }
  
  const strArray = [
    "Caminhando sobre as brasas dos cadáveres no chão\n",
    "Sinta a mente esvaziada, toda dor é uma ilusão\n",
    "Levitando junto aos fluxos das ações em ascensão\n",
    "O desapego purifica a aura da especulação\n",
    "Meditando atrás de bem-estar, enquanto financia a dor\n",
    "Hoje eu canto pra acabar com toda paz interior\n",
    "(El Efecto)"
  ];
  
  const lyrics = concat(strArray);
  
  // Caminhando sobre as brasas dos cadáveres no chão
  
  // Caminhando sobre as brasas dos cadáveres no chão
  // Sinta a mente esvaziada, toda dor é uma ilusão
  
  // Caminhando sobre as brasas dos cadáveres no chão
  // Sinta a mente esvaziada, toda dor é uma ilusão
  // Levitando junto aos fluxos das ações em ascensão
  
  // Caminhando sobre as brasas dos cadáveres no chão
  // Sinta a mente esvaziada, toda dor é uma ilusão
  // Levitando junto aos fluxos das ações em ascensão
  // O desapego purifica a aura da especulação
  
  // Caminhando sobre as brasas dos cadáveres no chão
  // Sinta a mente esvaziada, toda dor é uma ilusão
  // Levitando junto aos fluxos das ações em ascensão
  // O desapego purifica a aura da especulação
  // Meditando atrás de bem-estar, enquanto financia a dor
  
  // Caminhando sobre as brasas dos cadáveres no chão
  // Sinta a mente esvaziada, toda dor é uma ilusão
  // Levitando junto aos fluxos das ações em ascensão
  // O desapego purifica a aura da especulação
  // Meditando atrás de bem-estar, enquanto financia a dor
  // Hoje eu canto pra acabar com toda paz interior
  
  // Caminhando sobre as brasas dos cadáveres no chão
  // Sinta a mente esvaziada, toda dor é uma ilusão
  // Levitando junto aos fluxos das ações em ascensão
  // O desapego purifica a aura da especulação
  // Meditando atrás de bem-estar, enquanto financia a dor
  // Hoje eu canto pra acabar com toda paz interior
  // (El Efecto)
  
  console.log(lyrics);
  // Caminhando sobre as brasas dos cadáveres no chão
  // Sinta a mente esvaziada, toda dor é uma ilusão
  // Levitando junto aos fluxos das ações em ascensão
  // O desapego purifica a aura da especulação
  // Meditando atrás de bem-estar, enquanto financia a dor
  // Hoje eu canto pra acabar com toda paz interior
  // (El Efecto)


  // Exemplo 3

const bands = [
    { name: 'Avenged Sevenfold', formed: 1999 },
    { name: 'Megadeth', formed: 1983 },
    { name: 'Static-X', formed: 1994 },
    { name: 'System of a Down', formed: 1994 },
    { name: 'Blind Guardian', formed: 1984 },
    { name: 'Iron Maiden', formed: 1975 },
    { name: 'Disturbed', formed: 1994 },
    { name: 'Slipknot', formed: 1995 },
    { name: 'Nirvana', formed: 1987 },
    { name: 'All That Remains', formed: 1998 },
  ];
  
  const nameCellSize = 20;
  const formedCellSize = 10;
  
  function generatePadding(length) {
    return new Array(length).fill(' ').join('');
  }
  
  const nameLabel = 'Nome';
  const formedLabel = 'Formada em';
  
  const nameLabelPadding = generatePadding(nameCellSize - nameLabel.length);
  const formedLabelPadding = generatePadding(formedCellSize - formedLabel.length);
  
  const nameLabelWithPadding = nameLabel.concat(nameLabelPadding);
  const formedLabelWithPadding = formedLabel.concat(formedLabelPadding);
  
  const tableHeader = `* ${nameLabelWithPadding} * ${formedLabelWithPadding} *`;
  
  const tableBorders = new Array(tableHeader.length).fill('*').join('');
  
  const initialTable = `${tableBorders}\n${tableHeader}\n`;
  
  function createCell({ name, formed }) {
    const nameWithPadding = name.concat(
      generatePadding(nameCellSize - name.length)
    );
    
    const formedString = formed.toString();
      
    const formedWithPadding = formedString.concat(
      generatePadding(formedCellSize - formedString.length)
    );
  
    return `* ${nameWithPadding} * ${formedWithPadding} *\n`;
  }
  
  function joinCells(a, b) {
    return a.concat(b);
  }
  
  const tableBandsFromThe90s = bands
    .filter(({ formed }) => formed >= 1990 && formed <= 1999)
    .map((band) => createCell(band))
    .reduce(joinCells, initialTable)
    .concat(tableBorders);
  
  console.log(tableBandsFromThe90s);
  
  // *************************************
  // * Nome                 * Formada em *
  // * Avenged Sevenfold    * 1999       *
  // * Static-X             * 1994       *
  // * System of a Down     * 1994       *
  // * Disturbed            * 1994       *
  // * Slipknot             * 1995       *
  // * All That Remains     * 1998       *
  // *************************************