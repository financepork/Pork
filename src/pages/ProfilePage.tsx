import { useState } from 'react'
import { motion } from 'framer-motion'
import { UserCircleIcon } from '@phosphor-icons/react'
import { stagger, fadeUp } from '@/lib/animations'
import { useUser } from '@/shared/contexts/userContext'
import { useLogout } from '@/modules/auth/hooks/useLogout'
import ProfileStats from '@/modules/profile/components/ProfileStats'
import ProfileActions from '@/modules/profile/components/ProfileActions'
import EditFinancialsSheet from '@/modules/profile/components/EditFinancialsSheet'
import PageHeader from '@/shared/components/PageHeader'
import ProfileSkeleton from '@/modules/profile/skeletons/ProfileSkeleton'

export default function ProfilePage() {

  const { user, loading } = useUser()
  const logout = useLogout()

  const [isEditOpen, setIsEditOpen] = useState(false)

  if (loading) return <ProfileSkeleton />
  if (!user) return null

  return (
    <>
      <div className="overflow-y-auto min-h-dvh pb-32">
        <div className="max-w-xl mx-auto px-5 lg:px-10">

          <PageHeader
            icon={UserCircleIcon}
            title={`Olá, ${user.name.split(' ')[0]}`}
            description="Gerencie suas informações e acompanhe seu progresso financeiro."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="space-y-5"
          >
            {/* Identity */}
            <motion.div variants={fadeUp} className="px-1">
              <p className="text-lg font-semibold text-neutral-100">{user.name}</p>
              <p className="text-sm text-neutral-500 mt-0.5">{user.email}</p>
            </motion.div>

            <ProfileStats user={user} onEdit={() => setIsEditOpen(true)} />
            <ProfileActions onLogout={() => logout.mutate()} />
          </motion.div>

        </div>
      </div>

      <EditFinancialsSheet
        isOpen={isEditOpen}
        user={user}
        onClose={() => setIsEditOpen(false)}
      />
    </>
  )
}
