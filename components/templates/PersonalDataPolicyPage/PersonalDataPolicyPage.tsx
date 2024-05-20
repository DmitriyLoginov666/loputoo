'use client'
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs'
import styles from '@/styles/policy/index.module.scss'

const PersonalDataPolicyPage = () => {
  const { getDefaultTextGenerator, getTextGenerator } = useBreadcrumbs(
    'personal_data_policy'
  )

  return (
    <main>
      <Breadcrumbs
        getDefaultTextGenerator={getDefaultTextGenerator}
        getTextGenerator={getTextGenerator}
      />
      <section className={styles.policy}>
        <div className='container'>
          <h1>Политика обработки персональных данных</h1>
          <p>
            <strong>1. ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ</strong>
          </p>
        </div>
      </section>
    </main>
  )
}

export default PersonalDataPolicyPage
