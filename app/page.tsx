import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Check,
  CircleCheck,
  Download,
  Flame,
  HeartHandshake,
  LockKeyhole,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
  Target,
  Wind,
  X,
} from "lucide-react";
import { FAQ } from "@/components/faq";

const checkoutUrl =
  process.env.NEXT_PUBLIC_CHECKOUT_URL || "https://pay.kiwify.com.br/BMrcbIe";
const offerPrice = process.env.NEXT_PUBLIC_OFFER_PRICE || "47,90";
const originalPrice = process.env.NEXT_PUBLIC_ORIGINAL_PRICE || "97,00";
const guaranteeDays = process.env.NEXT_PUBLIC_GUARANTEE_DAYS || "7";

const benefits = [
  {
    icon: Brain,
    title: "Troque ansiedade por presença",
    text: "Entenda por que a cobrança por desempenho te desconecta — e aprenda a voltar ao corpo, ao momento e à pessoa à sua frente.",
  },
  {
    icon: Wind,
    title: "Aprenda a desacelerar",
    text: "Use respiração, consciência corporal e práticas tântricas para reconhecer a excitação e ganhar mais escolha sobre o seu ritmo.",
  },
  {
    icon: HeartHandshake,
    title: "Dê prazer com conhecimento",
    text: "Saia dos mitos e compreenda anatomia, estímulos e técnicas que colocam o prazer compartilhado no centro da experiência.",
  },
  {
    icon: MessageCircleHeart,
    title: "Crie conexão de verdade",
    text: "Transforme comunicação e consentimento em intimidade — sem roteiros engessados, ego ou adivinhação.",
  },
];

const parts = [
  ["01", "Desconstrução", "Os mitos, a pornografia e o amante que ninguém ensinou você a ser."],
  ["02", "Anatomia & ciência", "O prazer feminino, seu próprio corpo e o que os dados realmente mostram."],
  ["03", "Tantra & presença", "Respiração, energia, controle ejaculatório e massagem consciente."],
  ["04", "Prazer compartilhado", "Práticas, ritmo, toque, oral, vibradores e penetração com inteligência."],
  ["05", "Conexão & relação", "Comunicação, consentimento e uma vida sexual saudável e duradoura."],
  ["06", "Referência prática", "FAQ sem vergonha, mitos e verdades, glossário e roteiro de 4 semanas."],
];

const fit = [
  "Você percebeu que saber de sexo não é o mesmo que ser um bom amante.",
  "Você cresceu aprendendo mais com pornografia do que com educação sexual real.",
  "Você quer compreender o prazer da sua parceira sem depender de achismos.",
  "Você deseja mais controle, presença e confiança — sem transformar sexo em prova.",
];

function CTA({ label = "QUERO ME TORNAR UM HOMEM INTEIRO", light = false }: { label?: string; light?: boolean }) {
  return (
    <a className={`cta-button ${light ? "cta-light" : ""}`} href={checkoutUrl}>
      <span>{label}</span>
      <ArrowRight aria-hidden="true" size={20} strokeWidth={2.3} />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <div className="top-note">
        <span>Conteúdo educativo para adultos</span>
        <strong>18+</strong>
      </div>

      <header className="site-header container">
        <a className="brand" href="#inicio" aria-label="O Homem Inteiro - início">
          <span className="brand-mark"><Flame size={18} fill="currentColor" /></span>
          <span>O HOMEM <b>INTEIRO</b></span>
        </a>
        <a className="header-cta" href={checkoutUrl}>QUERO O EBOOK <ArrowRight size={16} /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15} /> 22 capítulos • edição 2026</div>
            <h1>Pare de tentar <em>parecer bom.</em><br />Aprenda a estar <span>inteiro.</span></h1>
            <p className="hero-lead">
              Um guia direto sobre sexualidade masculina, tantra e a arte do prazer compartilhado — para o homem que quer trocar a ansiedade de performance por presença, conhecimento e conexão real.
            </p>
            <CTA />
            <div className="microproof">
              <span><CircleCheck size={16} /> Acesso imediato</span>
              <span><LockKeyhole size={15} /> Leitura privada</span>
              <span><ShieldCheck size={16} /> {guaranteeDays} dias de garantia</span>
            </div>
          </div>

          <div className="product-stage" aria-label="Prévia do ebook O Homem Inteiro">
            <div className="ember ember-one" />
            <div className="ember ember-two" />
            <div className="reader">
              <div className="reader-top"><span /><span /><span /><small>EDIÇÃO DIGITAL</small></div>
              <Image
                src="/ebook-cover.jpg"
                alt="Capa do ebook O Homem Inteiro"
                width={1400}
                height={788}
                priority
              />
            </div>
            <div className="floating-badge badge-chapters"><b>22</b><span>capítulos<br />completos</span></div>
            <div className="floating-badge badge-format"><Download size={17} /><span>PDF<br /><b>acesso imediato</b></span></div>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-grid">
          <div><b>22</b><span>capítulos</span></div>
          <div><b>6</b><span>partes essenciais</span></div>
          <div><BookOpen size={24} /><span>leitura prática</span></div>
          <div><ShieldCheck size={24} /><span>educativo & responsável</span></div>
        </div>
      </section>

      <section className="section problem-section">
        <div className="container narrow centered">
          <span className="section-kicker">UMA CONVERSA QUE QUASE NINGUÉM TEVE COM VOCÊ</span>
          <h2>Você recebeu cobrança.<br />Mas nunca recebeu o <em>mapa.</em></h2>
          <p className="section-intro">
            A maioria dos homens aprendeu sexualidade por piadas, cenas de filme e pornografia. Aprendeu a encenar confiança — não a construir competência.
          </p>
        </div>
        <div className="container contrast-grid">
          <article className="contrast-card old-script">
            <span className="card-label"><X size={17} /> O ROTEIRO ANTIGO</span>
            <h3>Performance, pressa e silêncio.</h3>
            <ul>
              <li>Medir qualidade por duração</li>
              <li>Tratar penetração como o “sexo de verdade”</li>
              <li>Ficar preso na própria cabeça</li>
              <li>Tentar adivinhar em vez de conversar</li>
            </ul>
          </article>
          <article className="contrast-card new-script">
            <span className="card-label"><Check size={17} /> O HOMEM INTEIRO</span>
            <h3>Conhecimento, presença e comunicação.</h3>
            <ul>
              <li>Compreender o corpo real, sem fantasias</li>
              <li>Desacelerar e perceber cada resposta</li>
              <li>Transformar controle em liberdade</li>
              <li>Fazer do prazer uma experiência compartilhada</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section benefits-section" id="beneficios">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <span className="section-kicker">O QUE VOCÊ VAI DESENVOLVER</span>
              <h2>Não é sobre decorar truques.<br />É sobre mudar a <em>experiência.</em></h2>
            </div>
            <p>Quatro habilidades que atravessam todo o livro e continuam com você muito depois da última página.</p>
          </div>
          <div className="benefit-grid">
            {benefits.map(({ icon: Icon, title, text }, index) => (
              <article className="benefit-card" key={title}>
                <span className="benefit-number">0{index + 1}</span>
                <div className="benefit-icon"><Icon size={25} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="center-cta">
            <CTA label="QUERO COMEÇAR ESSA MUDANÇA" />
            <small>Um passo simples. Uma leitura que muda a forma de enxergar o encontro.</small>
          </div>
        </div>
      </section>

      <section className="section insight-section">
        <div className="container insight-grid">
          <div className="insight-copy">
            <span className="section-kicker">O DADO QUE MUDA A CONVERSA</span>
            <h2>Talvez o problema nunca tenha sido “falta de química”.</h2>
            <p>
              Dependendo do estudo, apenas <strong>15% a 30%</strong> das mulheres relatam chegar ao orgasmo só com penetração. A maioria precisa de estimulação clitoriana — sozinha ou combinada.
            </p>
            <p className="muted">Quando o sexo é conduzido pelo roteiro errado, esforço não compensa falta de mapa. O livro explica o corpo, os estímulos e a combinação que a educação sexual deixou de ensinar.</p>
            <CTA label="EU QUERO APRENDER O QUE FUNCIONA" />
          </div>
          <div className="stat-visual">
            <div className="stat-ring">
              <span>15–30<small>%</small></span>
              <p>relatam orgasmo<br />só com penetração</p>
            </div>
            <div className="stat-note"><Target size={18} /><span>Conhecimento muda<br /><b>a experiência inteira.</b></span></div>
          </div>
        </div>
      </section>

      <section className="section curriculum-section" id="conteudo">
        <div className="container">
          <div className="section-heading centered narrow">
            <span className="section-kicker">POR DENTRO DO EBOOK</span>
            <h2>Uma jornada completa.<br />Do mito à <em>presença.</em></h2>
            <p className="section-intro">São 22 capítulos organizados para você entender primeiro, praticar com responsabilidade e integrar sem pressa.</p>
          </div>
          <div className="curriculum-layout">
            <div className="curriculum-list">
              {parts.map(([number, title, text]) => (
                <article className="curriculum-item" key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                  <ArrowRight size={19} />
                </article>
              ))}
            </div>
            <div className="preview-wrap">
              <div className="preview-frame">
                <div className="preview-toolbar"><span>PRÉVIA REAL DO CONTEÚDO</span><small>7 / 36</small></div>
                <Image src="/ebook-preview.jpg" alt="Página interna do ebook" width={1400} height={788} />
              </div>
              <div className="preview-caption"><Flame size={16} /> Design confortável para ler em qualquer tela</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section fit-section">
        <div className="container fit-grid">
          <div>
            <span className="section-kicker">ESTE LIVRO É PARA VOCÊ SE...</span>
            <h2>Uma dessas perguntas já passou pela sua cabeça.</h2>
          </div>
          <div className="fit-list">
            {fit.map((item) => <div key={item}><CircleCheck size={21} /><span>{item}</span></div>)}
          </div>
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-noise" />
        <div className="container manifesto-content">
          <Flame className="manifesto-flame" size={34} fill="currentColor" />
          <p>“Ninguém nasce amante — <em>torna-se.</em>”</p>
          <span>Conhecimento. Presença. Comunicação.</span>
          <CTA label="QUERO DAR O PRIMEIRO PASSO" light />
        </div>
      </section>

      <section className="section offer-section" id="oferta">
        <div className="offer-glow" />
        <div className="container offer-grid">
          <div className="offer-copy">
            <span className="section-kicker">ACESSO IMEDIATO</span>
            <h2>A diferença entre dúvida e confiança pode começar com uma leitura.</h2>
            <p>Tenha o mapa que quase nenhum homem recebeu — direto, respeitoso e pensado para a vida real.</p>
            <ul className="offer-list">
              <li><Check size={18} /> Ebook completo com 22 capítulos</li>
              <li><Check size={18} /> Anatomia, ciência, tantra e prática</li>
              <li><Check size={18} /> Roteiro sugerido de 4 semanas</li>
              <li><Check size={18} /> Leitura no celular, tablet ou computador</li>
              <li><Check size={18} /> Acesso digital após a confirmação</li>
            </ul>
          </div>
          <div className="price-card">
            <span className="price-tag">OFERTA DE LANÇAMENTO</span>
            <p className="price-from">De <s>R$ {originalPrice}</s> por apenas</p>
            <div className="price"><small>R$</small><strong>{offerPrice}</strong></div>
            <p className="price-detail">pagamento único • sem assinatura</p>
            <CTA label="SIM, EU QUERO O EBOOK" light />
            <div className="secure-note"><LockKeyhole size={16} /> Ambiente de pagamento seguro</div>
            <div className="guarantee-box">
              <ShieldCheck size={30} />
              <div><b>Você tem {guaranteeDays} dias de garantia</b><span>Conheça o material com tranquilidade. Se não fizer sentido para você, solicite o reembolso dentro do prazo.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section responsibility-section">
        <div className="container responsibility-card">
          <ShieldCheck size={34} />
          <div>
            <span>EDUCAÇÃO SEXUAL COM RESPONSABILIDADE</span>
            <h3>Sem vergonha. Sem vulgaridade. Sem promessas mágicas.</h3>
            <p>Todo o conteúdo pressupõe adultos livremente envolvidos, consentimento claro, respeito e cuidado. O ebook não substitui acompanhamento médico, psicológico ou terapêutico.</p>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="duvidas">
        <div className="container faq-grid">
          <div className="faq-heading">
            <span className="section-kicker">DÚVIDAS FREQUENTES</span>
            <h2>O que você talvez queira saber antes de começar.</h2>
            <p>Falar de sexualidade com maturidade também é responder sem rodeios.</p>
          </div>
          <FAQ />
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-content">
          <span className="section-kicker">A JORNADA COMEÇA AGORA</span>
          <h2>Vá com presença.<br />Vá com cuidado. <em>Vá inteiro.</em></h2>
          <p>Você não precisa saber tudo hoje. Precisa apenas estar disposto a aprender.</p>
          <CTA label="QUERO RECEBER O HOMEM INTEIRO" light />
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div className="brand"><span className="brand-mark"><Flame size={18} fill="currentColor" /></span><span>O HOMEM <b>INTEIRO</b></span></div>
          <p>Material educativo destinado exclusivamente a maiores de 18 anos.</p>
          <span>© 2026 O Homem Inteiro</span>
        </div>
      </footer>

      <div className="mobile-sticky">
        <div><small>Acesso imediato</small><b>R$ {offerPrice}</b></div>
        <a href={checkoutUrl}>QUERO AGORA <ArrowRight size={17} /></a>
      </div>
    </main>
  );
}
