import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Play,
  BarChart3,
  LineChart,
  Users,
  DollarSign,
  Settings,
  Sparkles,
  Bot,
  Link2,
  Smartphone,
  ShieldCheck,
  Check,
  Menu,
  X,
  Mail,
  MessageCircle,
  Star,
  Activity,
} from "lucide-react";

const whatsappNumber = "5511999999999";
const email = "contato@vision.com.br";
const sections = ["features", "pricing", "sobre"];

const features = [
  {
    title: "Dashboards em Tempo Real",
    description: "Visualize métricas atualizadas ao vivo com gráficos interativos e personalizáveis.",
    Icon: BarChart3,
  },
  {
    title: "Insights com IA",
    description: "Nossa IA identifica padrões e tendências automaticamente, alertando sobre oportunidades.",
    Icon: Bot,
  },
  {
    title: "Integrações Nativas",
    description: "Conecte com mais de 150 ferramentas: CRM, e-commerce, marketing e muito mais.",
    Icon: Link2,
  },
  {
    title: "Colaboração em Equipe",
    description: "Compartilhe dashboards, adicione comentários e tome decisões em conjunto.",
    Icon: Users,
  },
  {
    title: "App Mobile",
    description: "Acesse seus dados de qualquer lugar com nosso aplicativo iOS e Android.",
    Icon: Smartphone,
  },
  {
    title: "Segurança Enterprise",
    description: "Criptografia de ponta a ponta, SSO, 2FA e conformidade com LGPD.",
    Icon: ShieldCheck,
  },
];

const plans = [
  {
    name: "Starter",
    price: "R$0",
    period: "grátis para sempre",
    button: "Criar conta grátis",
    popular: false,
    features: ["Até 3 dashboards", "1 usuário", "30 dias de histórico", "5 integrações"],
  },
  {
    name: "Pro",
    price: "R$97",
    period: "por usuário / mês",
    button: "Começar grátis",
    popular: true,
    features: ["Dashboards ilimitados", "Até 10 usuários", "1 ano de histórico", "50 integrações", "Insights com IA"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "para grandes equipes",
    button: "Falar com vendas",
    popular: false,
    features: ["Tudo do Pro", "Usuários ilimitados", "SLA garantido", "Suporte dedicado"],
  },
];

const sidebarItems = [
  { name: "Dashboard", Icon: BarChart3, active: true },
  { name: "Analytics", Icon: LineChart },
  { name: "Usuários", Icon: Users },
  { name: "Receita", Icon: DollarSign },
  { name: "Config.", Icon: Settings },
];

function getWhatsappLink(plan = "Vision") {
  const message = `Olá, Vision! Tenho interesse no plano ${plan}. Pode me passar mais informações?`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function Logo() {
  return (
    <a href="#" className="font-display text-2xl font-extrabold tracking-[-.03em] text-ink">
      Vision<span className="text-accent">.</span>
    </a>
  );
}

function NavLink({ id, active, children, onClick }) {
  return (
    <a
      href={`#${id}`}
      onClick={onClick}
      className={`relative text-sm font-medium transition ${
        active === id ? "text-ink" : "text-grayx hover:text-ink"
      }`}
    >
      {children}
      <span className={`absolute -bottom-2 left-0 h-[2px] bg-accent transition-all ${active === id ? "w-full" : "w-0"}`} />
    </a>
  );
}

function DashboardMock() {
  const bars = [40, 55, 45, 70, 65, 80, 90, 85, 95, 100];

  return (
    <div className="mt-16 fade-in">
      <div className="rounded-xl border border-borderx bg-neutralx p-3 shadow-hero">
        <div className="mb-3 flex items-center gap-3 rounded-md border border-borderx bg-white px-4 py-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28CA42]" />
          </div>
          <div className="flex-1 rounded bg-neutralx px-3 py-1.5 text-center text-xs text-grayx">
            app.vision.com.br/dashboard
          </div>
        </div>

        <div className="grid overflow-hidden rounded-md border border-borderx bg-white md:grid-cols-[200px_1fr]">
          <aside className="bg-ink p-5">
            <div className="mb-5 font-display font-extrabold text-white">
              Vision<span className="text-accent">.</span>
            </div>
            <div className="grid gap-2">
              {sidebarItems.map(({ name, Icon, active }) => (
                <div
                  key={name}
                  className={`flex items-center gap-2 rounded px-3 py-2 text-xs ${
                    active ? "bg-white/10 text-white" : "text-white/50"
                  }`}
                >
                  <Icon size={15} />
                  {name}
                </div>
              ))}
            </div>
          </aside>

          <div className="p-6 text-left">
            <h3 className="font-display text-lg font-bold">Visão Geral / Julho 2024</h3>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {[
                ["R$48.2K", "Receita Mensal", "text-accent"],
                ["1.840", "Novos Usuários", "text-accent"],
                ["+24%", "Crescimento", "text-successx"],
              ].map(([value, label, color]) => (
                <div key={label} className="rounded-md border border-borderx bg-neutralx p-3">
                  <div className={`font-display text-xl font-bold ${color}`}>{value}</div>
                  <div className="mt-1 text-xs text-grayx">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 h-24 overflow-hidden rounded-md border border-borderx bg-neutralx p-3">
              <div className="flex h-full items-end gap-2">
                {bars.map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t bg-accent opacity-70"
                    style={{ height: `${height}%`, opacity: index === bars.length - 1 ? 1 : 0.7 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("features");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      let current = "features";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && window.scrollY + 170 >= section.offsetTop) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  function registerLead(plan, source) {
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan, source }),
    }).catch(() => {});
  }

  return (
    <main className="min-h-screen bg-white text-ink">
      <nav className="fixed top-0 z-50 h-16 w-full border-b border-borderx bg-white/90 px-6 backdrop-blur-2xl md:px-16 lg:px-[72px]">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
          <Logo />

          <div className="hidden items-center gap-10 lg:flex">
            <NavLink id="features" active={activeSection}>Recursos</NavLink>
            <NavLink id="pricing" active={activeSection}>Preços</NavLink>
            <NavLink id="sobre" active={activeSection}>Sobre</NavLink>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`mailto:${email}?subject=Acesso Vision`}
              className="rounded-md border border-borderx px-5 py-2 text-sm font-medium text-grayx2 transition hover:bg-neutralx"
            >
              Entrar
            </a>
            <a
              href={getWhatsappLink("Starter")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => registerLead("Starter", "navbar")}
              className="rounded-md bg-ink px-5 py-2 text-sm font-semibold text-white transition hover:bg-accent"
            >
              Começar grátis <ArrowRight className="ml-1 inline" size={15} />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-10 w-10 place-items-center rounded-md border border-borderx text-ink lg:hidden"
            aria-label="Abrir menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="grid gap-5 border-t border-borderx bg-white px-3 py-5 lg:hidden">
            <NavLink id="features" active={activeSection} onClick={closeMenu}>Recursos</NavLink>
            <NavLink id="pricing" active={activeSection} onClick={closeMenu}>Preços</NavLink>
            <NavLink id="sobre" active={activeSection} onClick={closeMenu}>Sobre</NavLink>
          </div>
        )}
      </nav>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-24 pt-32 text-center md:px-[72px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(0,102,255,.06),transparent_50%),radial-gradient(ellipse_at_70%_20%,rgba(13,148,136,.05),transparent_50%)]" />
        <div className="rotate-soft absolute right-[5%] top-[10%] h-[400px] w-[400px] rounded-full bg-[conic-gradient(from_0deg,rgba(0,102,255,.08),rgba(13,148,136,.06),transparent)] opacity-40 blur-[40px]" />
        <div className="rotate-soft-reverse absolute bottom-[10%] left-[5%] h-[300px] w-[300px] rounded-full bg-[conic-gradient(from_180deg,rgba(0,102,255,.06),rgba(13,148,136,.04),transparent)] opacity-40 blur-[30px]" />

        <div className="relative z-10 mx-auto max-w-[860px]">
          <div className="fade-in mb-7 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-5 py-2 text-sm font-medium text-accent">
            <Sparkles size={16} />
            Plataforma de analytics em tempo real
          </div>

          <h1 className="fade-in font-display text-5xl font-extrabold leading-none tracking-[-.05em] md:text-7xl lg:text-8xl">
            Tome decisões com <span className="text-accent">clareza</span> e{" "}
            <span className="text-tealx">precisão.</span>
          </h1>

          <p className="fade-in mx-auto mt-6 max-w-xl text-xl leading-8 text-grayx">
            Vision transforma dados complexos em insights visuais que sua equipe realmente entende e usa para crescer.
          </p>

          <div className="fade-in mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={getWhatsappLink("Starter")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => registerLead("Starter", "hero")}
              className="inline-flex items-center gap-2 rounded-lg bg-ink px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-accent hover:shadow-[0_8px_24px_rgba(0,102,255,.25)]"
            >
              Começar gratuitamente <ArrowRight size={18} />
            </a>

            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg border border-borderx px-8 py-4 font-medium text-grayx2 transition hover:border-ink hover:text-ink"
            >
              <Play size={18} />
              Ver demonstração
            </a>
          </div>

          <div className="fade-in mt-10 flex items-center justify-center gap-3">
            <div className="flex">
              {["JR", "MF", "CS", "AL", "PK"].map((name, index) => (
                <div
                  key={name}
                  className={`-ml-2 grid h-8 w-8 place-items-center rounded-full border-2 border-white text-xs font-bold text-white first:ml-0 ${
                    [
                      "bg-gradient-to-br from-indigo-400 to-purple-600",
                      "bg-gradient-to-br from-pink-300 to-rose-500",
                      "bg-gradient-to-br from-sky-400 to-cyan-400",
                      "bg-gradient-to-br from-emerald-400 to-teal-300",
                      "bg-gradient-to-br from-pink-400 to-yellow-300",
                    ][index]
                  }`}
                >
                  {name}
                </div>
              ))}
            </div>

            <div className="text-left">
              <div className="flex gap-0.5 text-amber-500">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star key={item} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-grayx">
                <strong className="text-ink">+2.400</strong> empresas já usam Vision
              </p>
            </div>
          </div>

          <DashboardMock />
        </div>
      </section>

      <section id="features" className="bg-off px-6 py-28 md:px-[72px]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
              Recursos
            </span>
            <h2 className="font-display text-4xl font-extrabold leading-tight tracking-[-.03em] md:text-6xl">
              Tudo que você precisa
              <br />
              para crescer com dados
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-grayx">
              Uma plataforma completa que elimina a necessidade de múltiplas ferramentas.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, description, Icon }) => (
              <article
                key={title}
                className="group rounded-xl border border-borderx bg-white p-8 transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-softBlue"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent transition group-hover:scale-110">
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-grayx">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-28 md:px-[72px]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
              Planos
            </span>
            <h2 className="font-display text-4xl font-extrabold leading-tight tracking-[-.03em] md:text-6xl">
              Preço simples e transparente
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-grayx">
              Comece grátis. Escale conforme crescer.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-4 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative rounded-xl border p-8 transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-softBlue ${
                  plan.popular
                    ? "border-accent shadow-[0_0_0_1px_#0066FF,0_16px_48px_rgba(0,102,255,.12)]"
                    : "border-borderx"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Mais popular
                  </span>
                )}

                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-grayx">{plan.name}</p>
                <div className="font-display text-5xl font-extrabold tracking-[-.06em]">{plan.price}</div>
                <p className="mt-1 text-sm text-grayx">{plan.period}</p>

                <ul className="my-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 border-b border-neutralx py-3 text-grayx2">
                      <Check size={18} className="text-successx" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={getWhatsappLink(plan.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => registerLead(plan.name, "pricing")}
                  className={`block w-full rounded-lg px-5 py-3 text-center font-semibold transition ${
                    plan.popular
                      ? "bg-ink text-white hover:bg-accent"
                      : "border border-borderx text-ink hover:border-ink"
                  }`}
                >
                  {plan.button} <ArrowRight className="ml-1 inline" size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-off px-6 py-24 md:px-[72px]">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-2xl border border-borderx bg-white p-10 shadow-softBlue lg:grid-cols-[1fr_.8fr] lg:p-14">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
              <Activity size={15} />
              Sobre a Vision
            </span>
            <h2 className="font-display text-4xl font-extrabold leading-tight tracking-[-.03em] md:text-5xl">
              Dados claros para decisões melhores.
            </h2>
            <p className="mt-5 text-lg leading-8 text-grayx">
              Criamos uma plataforma pensada para equipes que precisam enxergar performance, receita,
              comportamento de usuários e crescimento sem depender de planilhas infinitas.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["150+", "integrações"],
              ["24/7", "monitoramento"],
              ["LGPD", "segurança"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-borderx bg-neutralx p-6">
                <div className="font-display text-4xl font-extrabold text-accent">{value}</div>
                <p className="mt-1 text-grayx">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-borderx px-6 py-14 md:px-[72px]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
          <Logo />
          <p className="text-sm text-grayx">© 2024 Vision. Todos os direitos reservados.</p>

          <div className="flex flex-wrap gap-7">
            <a className="text-sm text-grayx transition hover:text-ink" href="#">Privacidade</a>
            <a className="text-sm text-grayx transition hover:text-ink" href="#">Termos</a>
            <a className="text-sm text-grayx transition hover:text-ink" href="#">Blog</a>
            <a className="text-sm text-grayx transition hover:text-ink" href={`mailto:${email}`}>
              <Mail className="mr-1 inline" size={15} /> Contato
            </a>
            <a className="text-sm text-grayx transition hover:text-ink" href={getWhatsappLink("Contato")} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1 inline" size={15} /> WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
