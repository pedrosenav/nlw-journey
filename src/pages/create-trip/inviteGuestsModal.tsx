import { X, AtSign, Plus } from 'lucide-react'
import { FormEvent } from 'react'
import { Button } from '../components/button'

interface InviteGuestsModalProps {
  closeGuestsModal: () => void
  emailsToInvite: string[]
  removeEmailFromInvites: (email: string) => void
  addNewEmailToInvite: (e: FormEvent<HTMLFormElement>) => void
}

export function InviteGuestsModal({
  closeGuestsModal,
  emailsToInvite,
  removeEmailFromInvites,
  addNewEmailToInvite,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        {/* Modal Header */}
        <div className="space-y-2">
          {/* Modal Header Title */}
          <div className="flex items-center justify-between">
            <h2>Selecionar convidados</h2>
            <button onClick={closeGuestsModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          {/* Modal Header Description */}
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        {/* E-mails */}
        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => {
            return (
              <div
                key={email}
                className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5"
              >
                <span className="text-zinc-300">{email}</span>
                <button onClick={() => removeEmailFromInvites(email)}>
                  <X className="size-4 text-zinc-400" />
                </button>
              </div>
            )
          })}
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-zinc-800" />

        <form
          onSubmit={addNewEmailToInvite}
          className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-2.5"
        >
          {/* E-mail Input */}
          <div className="flex flex-1 items-center gap-2 px-2">
            <AtSign className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
              placeholder="Digite o e-mail do convidado"
            />
          </div>

          {/* Invite Button */}
          <Button type="submit">
            Convidar
            <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  )
}
