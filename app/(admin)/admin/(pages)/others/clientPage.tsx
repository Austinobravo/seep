
import PrivacyComponent from './_components/PrivacyComponent'
import TermsComponent from './_components/TermsComponent'

interface Props{
    privacyData: PrivacyType
    termsData: PrivacyType

}

const PrivacyClientPage = ({privacyData, termsData}: Props) => {
      
    
  return (
    <section >
        <div className='grid gap-10 md:grid-cols-2 grid-cols-1'>
            <PrivacyComponent privacyData={privacyData}/> 
            <TermsComponent termsData={termsData}/>

        </div>
        
      
    </section>
  )
}

export default PrivacyClientPage
