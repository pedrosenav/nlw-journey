import { MapPin, Calendar, Settings2, ArrowRight, X } from 'lucide-react'
import { Button } from '../../components/button'
import { useState } from 'react'
import { DateRange, DayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import 'react-day-picker/dist/style.css'

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  closeGuestsInputs: () => void
  openGuestsInputs: () => void
  setDestination: (destination: string) => void
  setEventStartAndEndDates: (date: DateRange | undefined) => void
  eventStartAndEndDates: DateRange | undefined
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  closeGuestsInputs,
  openGuestsInputs,
  setDestination,
  setEventStartAndEndDates,
  eventStartAndEndDates,
}: DestinationAndDateStepProps) {
  // State and Variables
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  // Helper Functions
  function openDatePicker() {
    setIsDatePickerOpen(true)
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false)
  }

  const displayedDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d ' de 'LLL")
          .concat(' até ')
          .concat(format(eventStartAndEndDates.to, "d' de 'LLL"))
      : null

  // JSX Return
  return (
    <div className="flex h-16 items-center gap-5 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
          type="text"
          disabled={isGuestsInputOpen}
          placeholder="Para onde você vai?"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      <button
        className="flex items-center gap-2 text-left outline-none"
        disabled={isGuestsInputOpen}
        onClick={openDatePicker}
      >
        <Calendar className="size-5 text-zinc-400" />

        <span className="flex-1 bg-transparent text-lg text-zinc-400">
          {displayedDate || 'Quando?'}
        </span>
      </button>

      <div className="h-6 w-px bg-zinc-800" />

      {isDatePickerOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
            {/* Modal Header */}
            <div className="space-y-2">
              {/* Modal Header Title */}
              <div className="flex items-center justify-between">
                <h2>Seleciona a data</h2>
                <button onClick={closeDatePicker}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>

            <DayPicker
              mode="range"
              selected={eventStartAndEndDates}
              onSelect={setEventStartAndEndDates}
            />
          </div>
        </div>
      )}

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
