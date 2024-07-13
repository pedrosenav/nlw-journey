import { X, User, Mail } from 'lucide-react'
import { FormEvent } from 'react'
import { Button } from '../components/button'

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void
  createTrip: (e: FormEvent<HTMLFormElement>) => void
  setOwnerName: (name: string) => void
  setOwnerEmail: (email: string) => void
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
  setOwnerName,
  setOwnerEmail,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        {/* Modal Header */}
        <div className="space-y-2">
          {/* Modal Header Title */}
          <div className="flex items-center justify-between">
            <h2>Confirmar criação de viagem</h2>
            <button onClick={closeConfirmTripModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          {/* Modal Header Description */}
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{' '}
            <span className="font-semibold text-zinc-100">
              Florianópolis, Brasil
            </span>{' '}
            nas datas de{' '}
            <span className="font-semibold text-zinc-100">
              16 a 27 de Agosto
            </span>{' '}
            de 2024 preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          {/* Name Input */}
          <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5 py-2.5">
            <User className="size-5 text-zinc-400" />
            <input
              type="text"
              name="name"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
              placeholder="Seu nome completo"
              onChange={(e) => setOwnerName(e.target.value)}
            />
          </div>

          {/* E-mail Input */}
          <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5 py-2.5">
            <Mail className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
              placeholder="Seu e-mail pessoal"
              onChange={(e) => setOwnerEmail(e.target.value)}
            />
          </div>

          {/* Confirm Button */}
          <Button type="submit" size="full">
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  )
}
