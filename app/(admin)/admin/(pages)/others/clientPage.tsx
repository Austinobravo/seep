
import PrivacyComponent from './_components/PrivacyComponent'
import TermsComponent from './_components/TermsComponent'

interface Props{
    privacyData: PrivacyType
    termsData: PrivacyType

}

const PrivacyClientPage = ({privacyData, termsData}: Props) => {
      
    
  return (
    <section >
        <div className='flex gap-10 md:flex-nowrap flex-wrap'>
            <PrivacyComponent privacyData={privacyData}/>
            <TermsComponent termsData={termsData}/>

        </div>
        
      
    </section>
  )
}

export default PrivacyClientPage
