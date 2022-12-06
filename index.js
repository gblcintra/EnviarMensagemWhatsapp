
//quantidade de repetições
const qtdLoop = 50;

//Mensagem para o loop
const mensagen = 'Fraude detectada 🚨 !';

async function enviarScript(scriptText){
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    main = document.querySelector("#main"),
    textarea = main.querySelector(`div[contenteditable="true"]`);
    let i = 0;
    if(!textarea) throw new Error("Não há uma conversa aberta")
    for(const line of lines){
        if(i >= lines.length) return
        console.log(`%c${(i + 1)} de ${lines.length} mensagens enviadas`, "background: #fafa00; color: #000");
        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', {bubbles: true}));
        setTimeout(() => {
            (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
        }, 100);
        if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
        i++;
    }
    return lines.length;
}
let text = "",
i = 0;
while (i < qtdLoop) {
  text += `${mensagen}
  `;
  i++;
}
enviarScript(text).then(e => console.log(`%cCódigo finalizado, ${e} mensagens enviadas`, "background: #000; color: #00fa00")).catch(console.error)
