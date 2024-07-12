import { MapPin, Calendar, Settings2, ArrowRight } from 'lucide-react'
import { Button } from '../../components/button'

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  closeGuestsInputs: () => void
  openGuestsInputs: () => void
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  closeGuestsInputs,
  openGuestsInputs,
}: DestinationAndDateStepProps) {
  return (
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
        <Button variant="secondary" onClick={closeGuestsInputs}>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInputs}>
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  )
}
