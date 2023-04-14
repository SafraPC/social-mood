export interface GPTResponseText {
   title: string;
   description: string;
}

const extractResponseText = (text: string): GPTResponseText => {
   try {
      const data = JSON.parse(text) as GPTResponseText;
      return data;
   } catch (err) {
      return {
         title: `Erro: ${new Date().getTime()}`,
         description: err.message,
      };
   }
};

export { extractResponseText };
