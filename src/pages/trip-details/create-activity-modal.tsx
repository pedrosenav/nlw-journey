import { X, Tag, Calendar } from 'lucide-react'
import { Button } from '../components/button'

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        {/* Modal Header */}
        <div className="space-y-2">
          {/* Modal Header Title */}
          <div className="flex items-center justify-between">
            <h2>Cadastrar atividade</h2>
            <button onClick={closeCreateActivityModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          {/* Modal Header Description */}
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form className="space-y-3">
          {/* Title Input */}
          <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5 py-2.5">
            <Tag className="size-5 text-zinc-400" />
            <input
              type="title"
              name="name"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
              placeholder="Qual a atividade?"
            />
          </div>

          {/* Date Input */}
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5 py-2.5">
            <Calendar className="size-5 text-zinc-400" />
            <input
              type="datetime-local"
              name="date"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
              placeholder="Data e horário da atividade"
            />
          </div>

          {/* Confirm Button */}
          <Button type="submit" variant="primary" size="full">
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  )
}
