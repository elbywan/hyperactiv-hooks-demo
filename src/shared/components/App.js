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
            <main>
                <h2 className='title'>Hyperactiv hooks demo</h2>
                <div className='menu'>
                    <ul>
                        <li>
                            <Link href='/posts'>Posts</Link>
                        </li>
                    </ul>
                </div>
                <div className='content'>
                   { resolvedComponent }
                </div>
            </main>
      )
}
