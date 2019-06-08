import React, { useState, useEffect } from 'react'
import UniversalRouterSync from 'universal-router/sync'

import { routes } from '../routes'
import { Link } from './core'
import { WEB } from '../constants'

const router = new UniversalRouterSync(routes)

export function App({ pathname: providedPathname }) {
      const [ pathname, setPathname ] = useState(providedPathname || window.location.pathname)
      useEffect(() => {
            if(!WEB)
                return
            const listener = function() {
                  setPathname(window.location.pathname)
            }
            window.addEventListener('popstate', listener)
            return () => {
                  window.removeEventListener('popstate', listener)
            }
      }, [])

      const resolvedComponent = router.resolve({ pathname })

      return (
            <>
                <header>
                    <h2 className='title'>Hyperactiv hooks demo</h2>
                    <div className='subtitle'>
                        <Link href='/posts'>Posts</Link>
                    </div>
                </header>
                <main className='content'>
                   { resolvedComponent }
                </main>
            </>
      )
}
