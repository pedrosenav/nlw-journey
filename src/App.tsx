import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
  X,
  AtSign,
  Plus,
} from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function App() {
  // State and Variables
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState([
    'vizeufernando@gmail.com',
    'fernandovizeu@gmail.com',
  ])

  // Helper Functions
  function openGuestsInputs() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInputs() {
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false)
  }

  function addNewEmailToInvite(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) return
    if (emailsToInvite.includes(email)) return

    setEmailsToInvite([...emailsToInvite, email])

    e.currentTarget.reset()
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const filteredEmails = emailsToInvite.filter(
      (email) => email !== emailToRemove,
    )

    setEmailsToInvite(filteredEmails)
  }

  // JSX Return
  return (
    <div className="flex min-h-screen items-center justify-center bg-pattern bg-center bg-no-repeat">
      <div className="w-full max-w-3xl space-y-10 px-6 text-center">
        <div className="flex flex-col items-center gap-3">
          {/* Logo */}
          <img src="/logo.svg" alt="plann.er" />

          {/* Title */}
          <p className="text-lg text-zinc-300">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <div className="flex h-16 items-center gap-5 rounded-xl bg-zinc-900 px-4 shadow-shape">
            <div className="flex flex-1 items-center gap-2">
              <MapPin className="size-5 text-zinc-400" />
              <input
                className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
                type="text"
                disabled={isGuestsInputOpen}
                placeholder="Para onde você vai?"
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                className="w-40 bg-transparent text-lg outline-none placeholder:text-zinc-400"
                type="text"
                disabled={isGuestsInputOpen}
                placeholder="Quando?"
              />
            </div>

            <div className="h-6 w-px bg-zinc-800" />

            {isGuestsInputOpen ? (
              <button
                className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 hover:bg-zinc-700"
                onClick={closeGuestsInputs}
              >
                Alterar local/data
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
                onClick={openGuestsInputs}
              >
                Continuar
                <ArrowRight className="size-5" />
              </button>
            )}
          </div>

          {isGuestsInputOpen && (
            <div className="flex h-16 items-center gap-5 rounded-xl bg-zinc-900 px-4 shadow-shape">
              <button
                type="button"
                className="flex flex-1 items-center gap-2"
                onClick={openGuestsModal}
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                <span className="flex-1 text-left text-lg text-zinc-400 outline-none">
                  Quem estará na viagem?
                </span>
              </button>

              {/* Separator */}
              <div className="h-6 w-px bg-zinc-800" />

              <button className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400">
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        {/* Terms of Use */}
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{' '}
          <br /> com nossos{' '}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{' '}
          e{' '}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen && (
        /* Modal */
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
            {/* Modal Header */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2>Selecionar convidados</h2>
                <button onClick={closeGuestsModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
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
              <div className="flex flex-1 items-center gap-2 px-2">
                <AtSign className="size-5 text-zinc-400" />
                <input
                  type="email"
                  name="email"
                  className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
                  placeholder="Digite o e-mail do convidado"
                />
              </div>

              <button className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400">
                Convidar
                <Plus className="size-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
