import { useState } from 'react'
import { CreateActivityModal } from './create-activity-modal'
import { ImportantLinks } from './important-links'
import { Guests } from './guests'
import Activities from './activities'
import DestinationAndDateHeader from './destination-and-date-header'

export function TripDetailsPage() {
  const [isCreateAcitivityModalOpen, setIsCreateAcitivityModalOpen] =
    useState(false)

  function openCreateActivityModal() {
    setIsCreateAcitivityModalOpen(true)
  }

  function closeCreateActivityModal() {
    setIsCreateAcitivityModalOpen(false)
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
      {/* Header */}
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-4">
        {/* Activities */}
        <Activities openCreateActivityModal={openCreateActivityModal} />

        {/* Sidebar */}
        <div className="w-80 space-y-6">
          {/* Links Block */}
          <ImportantLinks />

          {/* Separator */}
          <div className="h-px w-full bg-zinc-800" />

          {/* Guests */}
          <Guests />
        </div>
      </main>

      {/* Activity Modal */}
      {isCreateAcitivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  )
}
