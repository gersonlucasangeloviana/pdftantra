"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  {
    question: "Este livro é só para quem está em um relacionamento?",
    answer:
      "Não. Boa parte do conteúdo começa em você: consciência corporal, respiração, ansiedade, controle e a forma como você entende a própria sexualidade. Estar em um relacionamento não é requisito.",
  },
  {
    question: "Preciso já entender de tantra?",
    answer:
      "Não. O conteúdo começa do zero, separa tantra de misticismo e apresenta práticas simples antes de avançar para temas como respiração, energia e controle ejaculatório.",
  },
  {
    question: "É um material explícito ou vulgar?",
    answer:
      "Não. O livro fala de sexo de forma direta, adulta e sem vergonha, mas com linguagem educativa, respeito, consentimento e responsabilidade.",
  },
  {
    question: "O conteúdo substitui terapia ou orientação médica?",
    answer:
      "Não. O material é educativo. Dores, disfunções persistentes, sofrimento emocional ou histórico de trauma devem ser acompanhados por profissionais de saúde qualificados.",
  },
  {
    question: "Como recebo o ebook?",
    answer:
      "Após a confirmação do pagamento, você recebe acesso ao PDF para ler no celular, tablet ou computador, no seu ritmo e com privacidade.",
  },
  {
    question: "E se eu comprar e perceber que não é para mim?",
    answer:
      `Você conta com ${process.env.NEXT_PUBLIC_GUARANTEE_DAYS ?? "7"} dias de garantia. Dentro desse período, basta solicitar o reembolso pelos canais informados após a compra.`,
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div className={`faq-item ${expanded ? "is-open" : ""}`} key={item.question}>
            <button
              aria-expanded={expanded}
              className="faq-question"
              onClick={() => setOpen(expanded ? -1 : index)}
            >
              <span>{item.question}</span>
              <ChevronDown aria-hidden="true" size={20} />
            </button>
            <div className="faq-answer" aria-hidden={!expanded}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
