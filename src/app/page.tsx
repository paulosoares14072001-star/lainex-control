import Link from "next/link";

const menu = [
  ["Dashboard", "/"],
  ["Alunos", "/alunos"],
  ["Planos", "/planos"],
  ["Financeiro", "/financeiro"],
  ["Treinos", "/treinos"],
  ["Nutrição", "/nutricao"],
  ["Atendimentos", "/atendimentos"],
  ["Equipe", "/equipe"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#031B20] text-white">
      <div className="fixed inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl gap-6 p-6">
        <aside className="hidden w-72 rounded-3xl border border-white/10 bg-white/5 p-6 lg:block">
          <div className="mb-10">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-xl font-black">
              LX
            </div>
            <h1 className="text-3xl font-black">LAINEX</h1>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">
              Control
            </p>
          </div>

          <nav className="space-y-2 text-sm">
            {menu.map(([item, href], index) => (
              <Link
                key={item}
                href={href}
                className={`block rounded-2xl px-4 py-3 ${
                  index === 0
                    ? "bg-gradient-to-r from-cyan-400/25 to-fuchsia-500/25 ring-1 ring-cyan-300/40"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </aside>

        <section className="flex-1">
          <header className="mb-6 rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
              Consultoria Online
            </p>
            <h2 className="mt-4 text-5xl font-black">Lainex Control</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              Painel central para controlar alunos, planos, financeiro, treinos,
              nutrição, atendimentos e equipe.
            </p>
          </header>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              ["Alunos ativos", "0"],
              ["Teste grátis", "0"],
              ["Receita prevista", "R$ 0,00"],
              ["Pagamentos pendentes", "R$ 0,00"],
              ["Treinos pendentes", "0"],
              ["Dietas pendentes", "0"],
            ].map(([titulo, valor]) => (
              <div
                key={titulo}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
                <p className="text-sm text-slate-300">{titulo}</p>
                <strong className="mt-2 block text-3xl font-black">
                  {valor}
                </strong>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-bold">Estrutura inicial do sistema</h3>
            <p className="mt-2 text-slate-300">
              Aqui vamos evoluir para cadastro de alunos, planos, pagamentos,
              treinos, dietas e relatórios.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
