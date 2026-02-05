/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

import { getUserRole, isTokenExpired } from '@/utils/auth'

router.beforeEach((to, from, next) => {

  // ตรวจสอบว่าหน้านี้ต้องการ authentication หรือไม่
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token')

    if (!token) {
      // ถ้าไม่มี token ให้ redirect ไป login
      next({ name: 'login' })
    } else if (isTokenExpired(token)) {
      // ถ้า token หมดอายุ ให้ redirect ไป login
      localStorage.removeItem('token')
      next({ name: 'login' })
    } else {
      // ตรวจสอบ role ถ้าหน้านี้กำหนด requiresRole ไว้
      if (to.meta.requiresRole) {
        const userRole = getUserRole(token)
        console.log(userRole)
        if (userRole !== to.meta.requiresRole) {
          // ถ้า role ไม่ตรง ให้ redirect ไปหน้า dashboard ของ role ตัวเอง
          const dashboardMap = {
            'admin': 'admin-dashboard',
            'staff': 'staff-dashboard',
            'user': 'user-dashboard'
          }

          const targetDashboard = dashboardMap[userRole]
          if (targetDashboard && to.name !== targetDashboard) {
            next({ name: targetDashboard })
          } else {
            next()
          }
        } else {
          // role ตรงกัน ให้ผ่านไปได้
          next()
        }
      } else {
        // ไม่มีการกำหนด requiresRole ให้ผ่านไปได้
        next()
      }
    }
  } else {
    next()
  }
})

export default router
