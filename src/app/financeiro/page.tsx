 const resumo = [
  ["Receita prevista", "R$ 399,80"],
  ["Recebido", "R$ 149,90"],
  ["Pendente", "R$ 249,90"],
  ["Atrasado", "R$ 0,00"],
];

const pagamentos = [
  {
    aluno: "Exemplo Aluno",
    plano: "Treino + Dieta",
    valor: "R$ 249,90",
    vencimento: "30/06/2026",
    status: "PENDENTE",
    metodo: "Pix",
  },
  {
    aluno: "Aluno Teste",
    plano: "Treino Online",
    valor: "R$ 149,90",
    vencimento: "20/06/2026",
    status: "PAGO",
    metodo: "Cartão",
  },
];

export default function FinanceiroPage() {
  return (
    <div className="space-y-6">
      <header className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
              Controle financeiro
            </p>
            <h1 className="mt-4 text-4xl font-black">Financeiro</h1>
            <p className="mt-3 text-slate-300">
              Controle de pagamentos, vencimentos, receita e inadimplência.
            </p>
          </div>

          <button className="rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-4 font-bold">
            Novo pagamento
          </button>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {resumo.map(([titulo, valor]) => (
          <div
            key={titulo}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="mb-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
            <p className="text-sm text-slate-300">{titulo}</p>
            <strong className="mt-2 block text-3xl font-black">{valor}</strong>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Cobranças</h2>
          <p className="mt-1 text-sm text-slate-400">
            Aqui ficarão todos os pagamentos dos alunos da Lainex.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/10 text-slate-300">
              <tr>
                <th className="px-4 py-4">Aluno</th>
                <th className="px-4 py-4">Plano</th>
                <th className="px-4 py-4">Valor</th>
                <th className="px-4 py-4">Vencimento</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-4 py-4">Método</th>
              </tr>
            </thead>

            <tbody>
              {pagamentos.map((pagamento) => (
                <tr key={pagamento.aluno} className="border-t border-white/10">
                  <td className="px-4 py-4 font-semibold">{pagamento.aluno}</td>
                  <td className="px-4 py-4 text-slate-300">{pagamento.plano}</td>
                  <td className="px-4 py-4 font-semibold">{pagamento.valor}</td>
                  <td className="px-4 py-4 text-slate-300">
                    {pagamento.vencimento}
                  </td>
                  <td className="px-4 py-4">
                    <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs text-cyan-100">
                      {pagamento.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-slate-300">{pagamento.metodo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}