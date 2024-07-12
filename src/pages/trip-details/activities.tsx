import { Plus, CircleCheck } from 'lucide-react'
import { Button } from '../components/button'

interface ActivitiesProps {
  openCreateActivityModal: () => void
}

export default function Activities({
  openCreateActivityModal,
}: ActivitiesProps) {
  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Atividades</h2>

        <Button onClick={openCreateActivityModal}>
          <Plus className="size-5" />
          Cadastrar atividade
        </Button>
      </div>

      {/* Activity */}
      <div className="space-y-8">
        <div className="space-y-2.5">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-semibold text-zinc-300">Dia 17</span>
            <span className="text-xs text-zinc-500">Sábado</span>
          </div>

          <p className="text-sm text-zinc-500">Nenhuma ativdade cadastrada</p>
        </div>
      </div>

      {/* Activity */}
      <div className="space-y-8">
        <div className="space-y-2.5">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-semibold text-zinc-300">Dia 18</span>
            <span className="text-xs text-zinc-500">Domingo</span>
          </div>

          {/* Activity Tasks */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
              <CircleCheck className="size-5 text-lime-300" />
              <span className="text-zinc-100">Academia em grupo</span>
              <span className="ml-auto text-sm text-zinc-400">08:00h</span>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
              <CircleCheck className="size-5 text-lime-300" />
              <span className="text-zinc-100">Academia em grupo</span>
              <span className="ml-auto text-sm text-zinc-400">08:00h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
