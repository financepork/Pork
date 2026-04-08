import { motion } from 'framer-motion'
import { Spinner, UserCircleIcon } from '@phosphor-icons/react'
import { stagger } from '@/lib/animations'
import { useGetUser } from '@/modules/profile/hooks/useGetUser'
import { useGoals } from '@/modules/goals/hooks/useGoals'
import ProfileHeader from '@/modules/profile/components/ProfileHeader'
import ProfileStats from '@/modules/profile/components/ProfileStats'
import ProfileActions from '@/modules/profile/components/ProfileActions'
import EditProfileSheet from '@/modules/profile/components/EditProfileSheet'
import PageHeader from '@/shared/components/PageHeader'
import { showToast } from '@/shared/components/Toast'

export default function ProfilePage() {
  const { user, loading, updateUser, isEditOpen, setIsEditOpen } = useGetUser()
  const { goals } = useGoals()

  const completedGoals = goals.filter(g => g.savedAmount >= g.targetAmount).length

  const handleLogout = () => {
    showToast.info('Até logo!', { description: 'Esperamos te ver em breve.' })
  }

  const handleDeleteAccount = () => {
    showToast.warning('Funcionalidade em breve', {
      description: 'A exclusão de conta ainda está em desenvolvimento.',
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-dvh">
        <Spinner size={24} className="text-neutral-600 animate-spin" />
      </div>
    )
  }

  if (!user) return null

  return (
    <>
      <div className="overflow-y-auto min-h-dvh pb-32">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">

          <PageHeader
            icon={UserCircleIcon}
            title={`Olá, ${user.name.split(' ')[0]}`}
            description="Gerencie suas informações pessoais, preferências e configurações da conta."
          />

          <div className="lg:grid lg:grid-cols-[340px_1fr] lg:gap-10 lg:items-start">

            {/* LEFT — identity + stats (sticky) */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="space-y-5 lg:sticky lg:top-8"
            >
              <ProfileHeader user={user} onEdit={() => setIsEditOpen(true)} />
              <ProfileStats
                user={user}
                totalGoals={goals.length}
                completedGoals={completedGoals}
              />
            </motion.div>

            {/* RIGHT — settings */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="mt-6 lg:mt-0"
            >
              <ProfileActions
                onLogout={handleLogout}
                onDeleteAccount={handleDeleteAccount}
              />
            </motion.div>

          </div>
        </div>
      </div>

      <EditProfileSheet
        isOpen={isEditOpen}
        user={user}
        onClose={() => setIsEditOpen(false)}
        onUpdate={updateUser}
      />
    </>
  )
}
