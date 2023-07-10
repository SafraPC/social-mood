export interface GPTResponseText {
   title: string;
   description: string;
}

const extractResponseText = (text: string): GPTResponseText => {
   try {
      const data = JSON.parse(text) as GPTResponseText;
      return data;
   } catch (err) {
      console.log(err.message);
      console.error(err.message);
      return {
         title: `Erro: ${new Date().getTime()}`,
         description: 'Houve um erro ao gerar sua resposta.. tente novamente.',
      };
   }
};

export { extractResponseText };
