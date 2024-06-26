import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import CertificateBtn from '@/components/CertificateBtn'

export default async function Page() {
  const session = await getServerSession()

  if (session) {
    return redirect('/')
  }

  return (
    <>
      <div className="px-5 py-[15px] bg-[#f8f8f8]">
        <h3 className="text-sm">본인인증</h3>
      </div>
      <CertificateBtn />
    </>
  )
}
