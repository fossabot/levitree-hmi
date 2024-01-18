import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { DriveMode, VFD } from '@/plugins/backend_types'
import backend from '@/plugins/backend'
import { useToast } from 'vue-toast-notification'

export const useVFDStore = defineStore('vfd', () => {
  const vfds = ref([] as VFD[])
  const toast = useToast()

  async function getVFDList() {
    try {
      const resp = await backend.get('/vfd')
      vfds.value = resp.data
    } catch (e) {
      console.error(e)
      toast.error(`Couldn't fetch VFD list!`)
    }
  }

  async function setDriveMode(vfd: VFD, newDriveMode: DriveMode) {
    try {
      await backend.post(`/vfd/${vfd.id}`, {
        drive_mode: newDriveMode
      })

      toast.success(`${vfd.display_name} drive mode changed`)
    } catch (e) {
      console.error(e)
      toast.error(`Error changing ${vfd.display_name} drive mode`)
    }
  }

  async function setFrequency(vfd: VFD, newFrequency: number) {
    try {
      await backend.post(`/vfd/${vfd.id}`, {
        frequency: newFrequency
      })

      toast.success(`${vfd.display_name} frequency changed`)
    } catch (e) {
      console.error(e)
      toast.error(`Error changing ${vfd.display_name} frequency`)
    }
  }

  if (vfds.value.length === 0) {
    getVFDList()
    setInterval(() => {
      getVFDList()
    }, 250)
  }

  return { vfds, getVFDList, setDriveMode, setFrequency }
})
