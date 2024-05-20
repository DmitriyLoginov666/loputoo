'use client'
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs'
import styles from '@/styles/policy/index.module.scss'

const PrivacyPolicyPage = () => {
  const { getDefaultTextGenerator, getTextGenerator } =
    useBreadcrumbs('privacy_policy')

  return (
    <main>
      <Breadcrumbs
        getDefaultTextGenerator={getDefaultTextGenerator}
        getTextGenerator={getTextGenerator}
      />
      <section className={styles.policy}>
        <div className='container'>
          <div className='wpb_wrapper'>
            <h2>
              <strong>
                Политика в отношении обработки персональных данных
              </strong>
            </h2>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicyPage
